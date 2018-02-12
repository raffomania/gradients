(ns gradients.draw
  (:require [quil.core :as q :include-macros true]
            [gradients.util :refer [w h]]
            [gradients.state :refer [state commands]]
            [clojure.core.async :as async]))

(def colors [[150, 26, 100] [245, 54, 54]
             [45, 10, 100] [15, 70, 80]
             [184 46 100] [215 60 100]])
(def color-n 0)
(def start-color (nth colors (* 2 color-n)))
(def end-color (nth colors (inc (* 2 color-n))))

(defn p [key]
  (get-in @state [:params key]))

(defn center-scale [center pos scale]
  (+ (* scale (- pos center)) center))

(defn pos-factor [x y]
  (let [noise (q/noise
                  (* (p :noisiness) x)
                  (* (p :noisiness) y))
        ox (/ (p :origin-x) 100)
        oy (/ (p :origin-y) 100)
        distance (q/dist ox oy
                  (center-scale ox x (/ 1 (p :spread-x)))
                  (center-scale oy y (/ 1 (p :spread-y))))]
    (min 1 (max 0 (* noise distance)))))

(defn color [x y]
  (let [qstart-color (apply q/color start-color)
        qend-color (apply q/color end-color)]
    (q/lerp-color qstart-color qend-color (pos-factor x y))))

(defn pos-rect [x y]
  (let [sx (/ (q/width) (p :particle-count))
        sy (/ (q/height) (p :particle-count))]
    (q/fill (color x y))
    (q/rect (w x) (h y) sx sy)))

(defn centered-triangle [width height]
  (let [w2 (/ width 2)
        h2 (/ height 2)]
    (q/triangle
      (- w2) (- h2)
      (- w2) h2
      w2 (- h2))))

(defn pos-tri [x y]
  (let [factor (pos-factor x y)
        scale (* (p :size) factor)
        sx (* scale (/ (q/width) (p :particle-count)))
        sy (* scale (/ (q/width) (p :particle-count)))
        wx (w x)
        hx (h y)
        sharpness factor]
    (q/with-translation [wx hx]
      (q/with-rotation [(* 2 Math/PI factor)]
        (q/fill (color x y) (- 1 factor))
        (centered-triangle sx sy)))))

(defn save []
  (q/save-frame))

(defn draw []
  (q/no-stroke)
  (q/color-mode :hsb 360 100 100 1)
  (q/random-seed (p :random-seed))
  (q/noise-seed (p :noise-seed))
  (q/background (apply q/color end-color))
  ; (doseq [x (range (p :particle-count))
  ;         y (range (p :particle-count))]
  ;   (pos-rect (/ x (p :particle-count)) (/ y (p :particle-count))))
  ; draw some particles outside of canvas
  (doseq [x (range -2 (+ 2 (p :particle-count)))
          y (range -2 (+ 2 (p :particle-count)))]
    (pos-tri (/ x (p :particle-count)) (/ y (p :particle-count))))
  (case (async/poll! commands)
    :save (save)
    nil))
