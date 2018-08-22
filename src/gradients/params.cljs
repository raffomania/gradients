(ns gradients.params)

(def defaults
  {:int
   {:min 0
    :max 10
    :default 1
    :step 1
    :type :int}
   :color {}})

(def specifics
  { :size
      {:max 15 :step 0.1}
    :particle-count
      {:max 30 :default 10}
    :noisiness {:max 20 :step 0.1}
    :origin-x {:min -100 :max 200 :default 0}
    :origin-y {:min -100 :max 200 :default 50}
    :spread-x {:min 0.05 :step 0.05 :max 5}
    :spread-y {:min 0.05 :step 0.05 :max 5}
    :random-seed {:max 100}
    :start-color {:type :color}
    :noise-seed {:max 100};
    :min-size {:default 0 :step 0.1}})


(defn config-entry [[key specs]]
  (let [type (get specs :type :int)]
    [key (merge (get defaults type) specs)]))

(def config
  (into {} (map config-entry specifics)))
