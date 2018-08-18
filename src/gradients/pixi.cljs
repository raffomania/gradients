(ns gradients.pixi
  (:require [cljsjs.pixi]
            [gradients.util :as util]))


(defn init-app []
  (let [[width height] (util/screen-res)
        app (js/PIXI.Application. #js {:width width :height height})
        container (.getElementById js/document "wp-preview")]
    (.appendChild container (.-view app))
    app))

