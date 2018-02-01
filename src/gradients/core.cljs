(ns gradients.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [gradients.view :as view]
            [reagent.core]
            [gradients.params :as params]
            [gradients.draw :refer [draw]]))

(defn initial-params []
  (reduce
    (fn [map [key specs]]
      (assoc map key (:default specs)))
    {}
    gradients.params/config))

(defonce state (reagent.core/atom {:params (initial-params)}))

(defn screen-res []
  [(aget js/window "screen" "availWidth")
   (aget js/window "screen" "availHeight")])

(defn setup []
  (q/frame-rate 10))

(defn ^:export run-sketch []
  (q/defsketch gradients
    :host "gradients"
    :setup setup
    :size (map #(/ % 2) (screen-res))
    :renderer :p2d
    :draw draw))

(gradients.draw/set-state! state)
(run-sketch)
(view/mount state)
