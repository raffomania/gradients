(ns gradients.state
  (:require [reagent.core]
            [gradients.params]))

(defn initial-params []
  (reduce
    (fn [map [key specs]]
      (assoc map key (:default specs)))
    {}
    gradients.params/config))

(defonce state (reagent.core/atom {:params (initial-params)}))
