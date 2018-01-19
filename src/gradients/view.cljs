(ns gradients.view
  (:require [reagent.core :as r]))

(defn view []
  [:p "Hi cljs"])

(defn mount []
 (r/render [view]
   (.querySelector js/document ".controls")))
