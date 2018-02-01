(ns gradients.params)

(def defs
  {:min 0
   :max 10
   :default 1
   :step 1})

(def specifics
  { :size
      {:max 15 :step 0.1}
    :particle-count
      {:max 50 :default 20}
    :noise-scale {:max 20 :step 0.1}
    :origin-x-pct {:min -50 :max 150 :default 0}
    :origin-y-pct {:min -50 :max 150 :default 50}
    :spread-x {:min 0.01 :step 0.05 :max 5}
    :spread-y {:min 0.01 :step 0.05 :max 5}
    :random-seed {:max 500}
    :noise-seed {:max 500}});


(defn config-entry [specs]
  (merge defs specs))

(def config
  (reduce
    (fn [map [key spec]]
      (assoc map key (config-entry spec)))
    {}
    specifics))
