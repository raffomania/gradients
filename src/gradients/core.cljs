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
(def color-n 1)
(def start-color (nth colors (* 2 color-n)))
(def end-color (nth colors (inc (* 2 color-n))))
(def seeds [15000 0])
(def noise-detail 6)
(def y-spread 2)
(def x-spread 1)

(defn initial-params []
  (reduce
    (fn [map [key specs]]
      (assoc map key (:default specs)))
    {}
    gradients.params/config))

(defonce state (reagent.core/atom {:params (initial-params)}))

(defn get-param [key]
  (get-in @state [:params key]))

(defn pos-factor [x y]
  (let [noise (* 1.2 (q/noise
                      (* noise-detail x)
                      (* noise-detail y)))
        [gx gy] [0 0.5]
        distance (q/dist gx gy (* (/ 1 x-spread) x) (+ 0.5 (* y-spread (- y 0.5))))]
    (min 1 (max 0 (+ (- noise 0.5) distance)))))

(defn color [x y]
  (let [qstart-color (apply q/color start-color)
        qend-color (apply q/color end-color)]
    (q/lerp-color qstart-color qend-color (pos-factor x y))))

(defn pos-rect [x y]
  (let [sx (/ (q/width) (get-param :particle-count))
        sy (/ (q/height) (get-param :particle-count))]
    (q/fill (color x y))
    (q/rect (w x) (h y) sx sy)))

(defn pos-tri [x y]
  (let [factor (pos-factor x y)
        scale (* (get-param :size) factor)
        sx (* scale (/ (q/width) (get-param :particle-count)))
        sy (* scale (/ (q/width) (get-param :particle-count)))
        wx (w x)
        hx (h y)
        sharpness (q/random 0.8)]
    (q/with-translation [wx hx]
      (q/with-rotation [(* 7 (q/noise (* noise-detail x) (* noise-detail y)))]
        (q/fill (color x y) (- 1 factor))
        (q/triangle
          0 0
          sx (* sharpness sy)
          (* sx sharpness) sy)))))

(defn draw []
  (q/no-stroke)
  (q/color-mode :hsb 360 100 100 1)
  (q/random-seed (first seeds))
  (q/noise-seed (second seeds))
  (q/background (apply q/color end-color))
  (doseq [x (range (get-param :particle-count))
          y (range (get-param :particle-count))])
    ; (pos-rect (/ x (get-param :particle-count)) (/ y (get-param :particle-count))))
  (doseq [x (range (get-param :particle-count))
          y (range (get-param :particle-count))]
    (pos-tri (/ x (get-param :particle-count)) (/ y (get-param :particle-count)))))

(defn screen-res []
  [(aget js/window "screen" "availWidth")
   (aget js/window "screen" "availHeight")])

(defn ^:export run-sketch []
  (q/defsketch gradients
    :host "gradients"
    :size (map #(/ % 2) (screen-res))
    :renderer :p2d
    :draw draw))

(run-sketch)
(view/mount state)
