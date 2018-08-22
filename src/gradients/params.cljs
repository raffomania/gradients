(ns gradients.params)

(def defaults
  {:float
   {:min 0
    :max 1
    :default 0
    :step 0.01
    :type :float}
   :color {:default 0xFFFFFF}})

(def specifics
  {:size
     {:default 1 :max 15 :step 0.1}
   :particle-count
     {:max 40 :default 20 :step 1}
   :start-color {:type :color}
   :end-color {:type :color}
   :background-color {:type :color :default 0x000000}
   :min-size {:step 0.1}
   :offset-x {:min -1.5 :max 1.5}
   :offset-y {:min -1.5 :max 1.5}
   :alpha-y {}
   :sin-y {:min -2 :max 2}})


(defn config-entry [[key specs]]
  (let [type (get specs :type :float)]
    [key (merge (get defaults type) specs)]))

(def config
  (into {} (map config-entry specifics)))
