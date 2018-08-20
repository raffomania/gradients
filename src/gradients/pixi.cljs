(ns gradients.pixi
  (:require [cljsjs.pixi]
            [gradients.util :as util]
            [oops.core :refer [oset! oget]]))

(defn init-app [update-fn]
  (let [[width height] (map #(/ % 2) (util/screen-res))
        app (js/PIXI.Application. #js {:width width :height height})
        container (.getElementById js/document "wp-preview")]
    (.appendChild container (.-view app))
    (.add (.-ticker app) (partial update-fn app))
    app))

(defn update-tri-count [stage wanted]
  (let [current (.-length (.-children stage))
        delta (- wanted current)]
    (cond
      (> delta 0) (doseq [_ (range delta)]
                    (.addChild stage (js/PIXI.Graphics.)))
      (< delta 0) (.removeChildren stage 0 (js/Math.abs delta)))))

(defn update-tris [app specs]
  (let [sw (oget app "renderer.width")
        sh (oget app "renderer.height")
        stage (oget app "stage")]
    (doseq [[i spec] (map-indexed vector specs)]
      (let [child (.getChildAt stage i)
            x (* sw (:x spec))
            y (* sh (:y spec))
            tw (* sw (/ (:width spec) 2))
            th (* sh (/ (:height spec) 2))]
        (-> child
          (.clear)
          (.beginFill 0xFFFFFF)
          (.drawPolygon #js [0 (- th)
                             (- tw) th
                             tw th])
          (.endFill)
          (oset! "x" x)
          (oset! "y" y))))))
