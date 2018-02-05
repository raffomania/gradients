(ns gradients.view
  (:require [reagent.core :as r]
            [gradients.params :refer [config]]))

(defn event-val [event]
  (.. event -target -value))

(defn set-param [state key]
  #(swap! state assoc-in [:params key] (event-val %)))

(defn param-input [state key]
  (let [val (get-in @state [:params key])]
    [:div
     [:span key]
     [:input {
              :type "range"
              :min (get-in config [key :min])
              :max (get-in config [key :max])
              :value val
              :step (get-in config [key :step])
              :on-change (set-param state key)}]
     [:span val]]))

(defn view [state]
  [:div
   [:div
    (map
     #(identity ^{:key %} [param-input state %])
     (keys (:params @state)))]
   [:button {:on-click #(js/alert "save")} "download"]])


(defn mount [state]
 (r/render [view state]
   (.querySelector js/document ".controls")))
