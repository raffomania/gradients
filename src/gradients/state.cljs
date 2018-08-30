(ns gradients.state
  (:require [reagent.core]
            [gradients.params]
            [clojure.core.async :as async]
            [gradients.util :as util]
            [thi.ng.color.core :as color]))

(defn initial-params []
  (reduce
    (fn [map [key specs]]
      (assoc map key (:default specs)))
    (hash-map)
    gradients.params/config))

(defn round-to-step [val step]
  (* step (int (Math/floor (/ val step)))))

(defn random-param [key]
  (let [conf (key gradients.params/config)]
    (case (:type conf)
      :float [key (round-to-step
                    (util/rescale (rand) 0 1 (:min conf) (:max conf))
                    (:step conf))]
      :color [key (color/random-rgb)])))

(defn randomize [state]
  (update state :params
    (fn [params] (into (hash-map) (map random-param (keys params))))))

(defrecord State [params])

(defonce state (reagent.core/atom (State. (initial-params))))

(defonce commands (async/chan))
