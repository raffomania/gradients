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
     {:default 1 :max 5}
   :particle-count
     {:max 40 :default 20 :step 1}
   :start-color {:type :color}
   :end-color {:type :color}
   :background-color {:type :color :default 0x000000}
   :min-size {:max 5}
   :offset-x {:min -1.5 :max 1.5}
   :offset-y {:min -1.5 :max 1.5}
   :alpha-y {}
   :noise-size {:min -5 :max 5}
   :noise-rot {:max 10}
   :noise-alpha {}
   :noise-detail {:default 1 :min 1 :max 20}})


(defn config-entry [[key specs]]
  (let [type (get specs :type :float)]
    [key (merge (get defaults type) specs)]))

(def config
  (into {} (map config-entry specifics)))
