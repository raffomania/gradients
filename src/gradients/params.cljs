(ns gradients.params)

(def defs
  {:min 0
   :max 1
   :default 0.5
   :step 1})

(def specifics
  {:size {:max 20 :step 0.1}
   :particle-count {:max 25}})

(defn config-entry [specs]
  (merge defs specs))

(def config
  (reduce
    (fn [map [key spec]]
      (assoc map key (config-entry spec)))
    {}
    specifics))
