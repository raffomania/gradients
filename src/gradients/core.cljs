(ns gradients.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [gradients.view :as view]
            [reagent.core]
            [gradients.params :as params]))

(defn w
  ([] (w 1.0))
  ([p] (* (q/width) p)))

(defn h
  ([] (h 1.0))
  ([p] (* (q/height) p)))

(defn random-neg [max]
  (- (q/random max) (/ max 2)))

(defn rescale [value old-min old-max new-min new-max]
  "Rescales value from range [old-min, old-max] to [new-min, new-max]"
  (let [old-spread (- old-max old-min)
        new-spread (- new-max new-min)]
    (+ (* (- value old-min) (/ new-spread old-spread))
       new-min)))

(def colors [[150, 26, 100] [245, 54, 54]
             [45, 10, 100] [15, 70, 80]
             [184 46 100] [215 60 100]])
(def color-n 0)
(def start-color (nth colors (* 2 color-n)))
(def end-color (nth colors (inc (* 2 color-n))))
(def seeds [15000 0])

(defn initial-params []
  (reduce
    (fn [map [key specs]]
      (assoc map key (:default specs)))
    {}
    gradients.params/config))

(defonce state (reagent.core/atom {:params (initial-params)}))

(defn p [key]
  (get-in @state [:params key]))

(defn pos-factor [x y]
  (let [noise (* 1.2 (q/noise
                      (* (p :noise-scale) x)
                      (* (p :noise-scale) y)))
        gx (/ (p :origin-x-pct) 100)
        gy (/ (p :origin-y-pct) 100)
        distance (q/dist gx gy (* (/ 1 (p :spread-x)) x) (+ 0.5 (* (p :spread-y) (- y 0.5))))]
    (min 1 (max 0 (+ (- noise 0.5) distance)))))

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
  (q/no-loop)
  (q/color-mode :hsb 360 100 100 1)
  (q/random-seed (first seeds))
  ; (println (q/current-frame-rate))
  (q/frame-rate (p :frame-rate))
  (q/noise-seed (second seeds))
  (q/background (apply q/color end-color))
  ; (doseq [x (range (p :particle-count))
  ;         y (range (p :particle-count))])
    ; (pos-rect (/ x (p :particle-count)) (/ y (p :particle-count))))
  (doseq [x (range (p :particle-count))
          y (range (p :particle-count))]
    (pos-tri (/ x (p :particle-count)) (/ y (p :particle-count)))))

(defn setup []
  (q/frame-rate 10))

(defn screen-res []
  [(aget js/window "screen" "availWidth")
   (aget js/window "screen" "availHeight")])

(defn ^:export run-sketch []
  (q/defsketch gradients
    :host "gradients"
    :setup setup
    :size (map #(/ % 2) (screen-res))
    :renderer :p2d
    :draw draw))

(run-sketch)
(view/mount state)
