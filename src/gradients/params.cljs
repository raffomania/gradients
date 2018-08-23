(ns gradients.params
  (:require [thi.ng.color.core :as color]))

(def defaults
  {:float
   {:min 0
    :max 1
    :default 0
    :step 0.01
    :type :float}
   :color {:default (color/css "#fff")}})

(def specifics
  {:size
     {:default 1 :max 5}
   :particle-count
     {:min 5 :max 40 :default 20 :step 1}
   :start-color {:type :color :default (color/css "#ff8b2c")}
   :end-color {:type :color}
   :background-color {:type :color :default (color/css "#ffd145")}
   :min-size {:max 5}
   :offset-x {:min -1.5 :max 1.5}
   :offset-y {:min -1.5 :max 1.5}
   :vignette {:max 5}
   :noise-size {:min -5 :max 5}
   :noise-rot {:max 10}
   :noise-alpha {}
   :noise-sharpness {:max 5}
   :noise-detail {:min 1 :default 1 :max 5 :step 1}
   :noise-zoom {:default 1 :min 1 :max 20}})


(defn config-entry [[key specs]]
  (let [type (get specs :type :float)]
    [key (merge (get defaults type) specs)]))

(def config
  (into {} (map config-entry specifics)))
