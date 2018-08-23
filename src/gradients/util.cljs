(ns gradients.util)

(defn screen-res []
  [(aget js/window "screen" "availWidth")
   (aget js/window "screen" "availHeight")])

(defn random-neg [max]
  (- (rand max) (/ max 2)))

(defn lerp [val a b]
  (- (* val b) a))

(defn mixmul [orig param factor]
  (+
   (* orig (- 1 param))
   (* orig factor param)))

(defn rescale [value old-min old-max new-min new-max]
  "Rescales value from range [old-min, old-max] to [new-min, new-max]"
  (let [old-spread (- old-max old-min)
        new-spread (- new-max new-min)]
    (+ (* (- value old-min) (/ new-spread old-spread))
       new-min)))

