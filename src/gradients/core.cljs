(ns gradients.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [gradients.view :as view]
            [reagent.core]
            [gradients.params :as params]
            [gradients.draw :refer [draw]]
            [gradients.state :refer [state]]
            [gradients.util :as util]))

(defn setup []
  (q/frame-rate 10))

(defn ^:export run-sketch []
  (q/defsketch gradients
    :host "gradients"
    :setup setup
    :size (map #(/ % 2) (util/screen-res))
    :renderer :p2d
    :draw draw))

(run-sketch)
(view/mount state)
