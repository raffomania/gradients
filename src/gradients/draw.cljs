(ns gradients.draw
  (:require [gradients.util :as util]
            [gradients.state :refer [state commands]]
            [clojure.core.async :as async]
            [thi.ng.math.noise :as noise]))

(defn p [key]
  (get-in @state [:params key]))

(defn noise [tri]
  (let [noise (noise/noise2
               (* (p :noise-detail) (:x tri))
               (* (p :noise-detail) (:y tri)))
        rot-factor (* noise (p :noise-rot))]
    (-> tri
        (update :width #(+ % (* (p :noise-size) noise)))
        (update :height #(+ % (* (p :noise-size) noise)))
        (update :rotation #(+ % rot-factor))
        (update :alpha #(util/mixmul % (p :noise-alpha) noise)))))

(defn min-size [tri]
  (-> tri
      (update :width #(js/Math.max % (p :min-size)))
      (update :height #(js/Math.max % (p :min-size)))))

(defn screen-relative-size [tri]
  (-> tri
      (update :width #(* % (/ 1 (p :particle-count))))
      (update :height #(* % (/ 1 (p :particle-count))))))

(defn size [tri]
  (-> tri
      (update :width #(* % (p :size)))
      (update :height #(* % (p :size)))))

(defn offset [tri]
  (-> tri
      (update :x #(+ % (p :offset-x)))
      (update :y #(+ % (p :offset-y)))))

(defn alpha-y [tri]
  (let [closeness-to-center (* 2 (- 0.5 (js/Math.abs (- (:y tri) 0.5))))
        factor (* (p :alpha-y) closeness-to-center)]
    (update tri :alpha #(+ (* % (- 1 (p :alpha-y))) factor))))

(defn get-tris []
  (for [x (range -2 (+ 2 (p :particle-count)))
        y (range -2 (+ 2 (p :particle-count)))]
    {:x (/ x (p :particle-count))
      :y (/ y (p :particle-count))
      :color (p :start-color)
      :alpha 1
      :rotation 0
      :width 1
      :height 1}))

(defn draw []
  {:tris (->> (get-tris)
              (map offset)
              (map alpha-y)
              (map noise)
              (map size)
              (map min-size)
              (map screen-relative-size))
   :background-color (p :background-color)})

