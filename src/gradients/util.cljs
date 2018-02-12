(ns gradients.util
  (:require [quil.core :as q]))

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

(defn screen-res []
  [(aget js/window "screen" "availWidth")
   (aget js/window "screen" "availHeight")])
