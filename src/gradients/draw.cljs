(ns gradients.draw
  (:require [gradients.util :as util]
            [gradients.state :refer [state commands]]
            [clojure.core.async :as async]
            [thi.ng.math.noise :as noise]
            [thi.ng.math.core :as math]
            [thi.ng.color.core :as color]))

(defn p [key]
  (get-in @state [:params key]))

(defn scale-noise-input [val factor]
  (* val factor (p :noise-zoom)))

(defn noise-octave [x y previous n]
  (let [ox (+ (scale-noise-input x n) (p :offset-x))
        oy (+ (scale-noise-input y n) (p :offset-y))]
    (+ previous
      (/ (noise/noise2 ox oy) n))))

(defn noise-factor [x y]
  (reduce
   (partial noise-octave x y)
   0
   (range 1 (inc (p :noise-detail)))))

(defn noise [tri]
  (let [noise (noise-factor (:x tri) (:y tri))
        rescaled-noise (util/rescale noise -1 1 0 1)
        rot-factor (* noise (p :noise-rot))]
    (-> tri
        (update :width #(+ % (* (p :noise-size) noise)))
        (update :height #(+ % (* (p :noise-size) noise)))
        (update :rotation #(+ % rot-factor))
        (update :alpha #(util/mixmul % (p :noise-alpha) rescaled-noise))
        (update :height #(+ % (* (p :noise-sharpness) noise))))))

(defn min-size [tri]
  (-> tri
      (update :width #(max % (p :min-size)))
      (update :height #(max % (p :min-size)))))

(defn screen-relative-size [tri]
  (-> tri
      (update :width #(* % (/ 1 (p :particle-count))))
      (update :height #(* % (/ 1 (p :particle-count))))))

(defn size [tri]
  (-> tri
      (update :width #(* % (p :size)))
      (update :height #(* % (p :size)))))

(defn color [tri]
  (let [start (p :start-color)
        end (p :end-color)
        noise (util/rescale (noise-factor (:x tri) (:y tri)) -1 1 0 1)
        mix (math/mix start end noise)]
    (assoc tri :color mix)))

; todo update this for x distance as well
(defn vignette [tri]
  (let [closeness-to-center (* 2 (- 0.5 (js/Math.abs (- (:y tri) 0.5))))
        noise (- 1 (noise-factor (:x tri) (:y tri)))]
    (update tri :alpha #(util/mixmul % (* noise (p :vignette)) closeness-to-center))))

(defn get-tris []
  (for [x (range -2 (+ 2 (p :particle-count)))
        y (range -2 (+ 2 (p :particle-count)))]
    {:x (/ x (p :particle-count))
      :y (/ y (p :particle-count))
      :alpha 1
      :rotation 0
      :width 1
      :height 1}))

(defn draw []
  {:tris (->> (get-tris)
              (map noise)
              (map size)
              (map min-size)
              (map screen-relative-size)
              (map color)
              (map vignette))
   :background-color (p :background-color)})

