(ns gradients.draw
  (:require [quil.core :as q :include-macros true]
            [gradients.util :refer [w h]]))


(def colors [[150, 26, 100] [245, 54, 54]
             [45, 10, 100] [15, 70, 80]
             [184 46 100] [215 60 100]])
(def color-n 0)
(def start-color (nth colors (* 2 color-n)))
(def end-color (nth colors (inc (* 2 color-n))))
(declare state)

(defn p [key]
  (get-in @state [:params key]))

(defn center-scale [center pos scale]
  (+ (* scale (- pos center)) center))

(defn pos-factor [x y]
  (let [noise (q/noise
                  (* (p :noise-scale) x)
                  (* (p :noise-scale) y))
        ox (/ (p :origin-x-pct) 100)
        oy (/ (p :origin-y-pct) 100)
        distance (q/dist ox oy
                  (center-scale ox x (/ 1 (p :spread-x)))
                  (center-scale oy y (/ 1 (p :spread-y))))]
    (min 1 (max 0 distance))))

(defn color [x y]
  (let [qstart-color (apply q/color start-color)
        qend-color (apply q/color end-color)]
    (q/lerp-color qstart-color qend-color (pos-factor x y))))

(defn pos-rect [x y]
  (let [sx (/ (q/width) (p :particle-count))
        sy (/ (q/height) (p :particle-count))]
    (q/fill (color x y))
    (q/rect (w x) (h y) sx sy)))

(defn pos-tri [x y]
  (let [factor (pos-factor x y)
        scale (* (p :size) factor)
        sx (* scale (/ (q/width) (p :particle-count)))
        sy (* scale (/ (q/width) (p :particle-count)))
        wx (w x)
        hx (h y)
        sharpness (q/random 0.8)]
    (q/with-translation [wx hx]
      (q/with-rotation [(* 7 (q/noise (* (p :noise-scale) x) (* (p :noise-scale) y)))]
        (q/fill (color x y) (- 1 factor))
        (q/triangle
          0 0
          sx (* sharpness sy)
          (* sx sharpness) sy)))))

(defn draw []
  (q/no-stroke)
  (q/color-mode :hsb 360 100 100 1)
  (q/random-seed (p :random-seed))
  (q/noise-seed (p :noise-seed))
  (q/background (apply q/color end-color))
  ; (doseq [x (range (p :particle-count))
  ;         y (range (p :particle-count))])
    ; (pos-rect (/ x (p :particle-count)) (/ y (p :particle-count))))
  (doseq [x (range (p :particle-count))
          y (range (p :particle-count))]
    (pos-tri (/ x (p :particle-count)) (/ y (p :particle-count)))))

(defn set-state! [state]
  (def state state))
