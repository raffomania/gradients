(ns gradients.view
  (:require [reagent.core :as r]
            [gradients.params :refer [config]]
            [clojure.core.async :as async]
            [gradients.state :as state]
            [clojure.string :as str]
            [thi.ng.color.core :as color]))

(defn event-val [event]
  (.. event -target -value))

(defn float-val [string]
  (js/parseFloat string))

; parse a hexagonal number to get a color value
(defn color-val [string]
  (color/css string))

(defn set-param [state key extraction-fn]
  #(swap! state assoc-in [:params key] (extraction-fn (event-val %))))


(defn input-float [state key]
  (let [val (get-in @state [:params key])]
    [:div
     [:span key]
     [:input {
              :type "range"
              :min (get-in config [key :min])
              :max (get-in config [key :max])
              :value val
              :step (get-in config [key :step])
              :on-change (set-param state key float-val)}]
     [:span (str/replace (str (.toFixed val 2)) #"\.0+$" "")]]))

(defn input-color [state key]
  (let [val (get-in @state [:params key])]
    [:div
     [:span key]
     [:input {
              :type "color"
              :value @(color/as-css val)
              :on-change (set-param state key color-val)}]]))

(defn unknown-input [state key]
  [:div "unknown parameter type"])

(def input-fns {
                :float input-float
                :color input-color})

(defn input [state key]
  (let [type (get-in config [key :type])]
    ((get input-fns type unknown-input) state key)))

(defn command [key]
  (async/put! state/commands key))

(defn view [state]
  [:div
   [:div
    (map
     #(identity ^{:key %} [input state %])
     (keys (:params @state)))]
   [:button {:on-click #(command :save)} "download"]
   [:button {:on-click #(swap! state state/randomize)} "randomize"]])

(defn mount [state]
 (r/render [view state]
   (.querySelector js/document ".controls")))
