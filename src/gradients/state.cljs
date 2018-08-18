(ns gradients.state
  (:require [reagent.core]
            [gradients.params]
            [clojure.core.async :as async]
            [gradients.util :as util]))

(defn initial-params []
  (reduce
    (fn [map [key specs]]
      (assoc map key (:default specs)))
    {}
    gradients.params/config))

(defn round-to-step [val step]
  (* step (int (Math/floor (/ val step)))))

(defn random-param [key]
  (let [conf (key gradients.params/config)]
    [key (round-to-step
          (util/rescale (rand) 0 1 (:min conf) (:max conf))
          (:step conf))]))

(defn randomize [state]
  (update state :params
    (fn [params] (into {} (map random-param (keys params))))))

(defonce state (reagent.core/atom {:params (initial-params)}))

(defonce commands (async/chan))
