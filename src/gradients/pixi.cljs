(ns gradients.pixi
  (:require [cljsjs.pixi]
            [gradients.util :as util]
            [gradients.draw :refer [p]]
            [oops.core :refer [oset! oget]]
            [thi.ng.color.core :as color]))

(defn init-app [update-fn]
  (let [[width height] (map #(/ % 2) (util/screen-res))
        app (js/PIXI.Application. #js {:width width :height height})
        container (.getElementById js/document "wp-preview")]
    (.appendChild container (oget app "view"))
    (.add (oget app "ticker") (partial update-fn app))
    app))

(defn update-tri-count [stage wanted]
  (let [current (oget stage "children.length")
        delta (- wanted current)]
    (cond
      (> delta 0) (doseq [_ (range delta)]
                    (.addChild stage (js/PIXI.Graphics.)))
      (< delta 0) (.removeChildren stage 0 (js/Math.abs delta)))))

(defn update-pixi [app specs]
  (let [sw (oget app "renderer.width")
        sh (oget app "renderer.height")
        stage (oget app "stage")
        tris (:tris specs)]
    ; We are not using (count tris) because it is very slow
    ; instead we calculate the tri count again
    (update-tri-count stage (util/sqr (+ 4 (p :particle-count))))
    (oset! app "renderer.backgroundColor" (:background-color specs))
    (doseq [[i spec] (map-indexed vector tris)]
      (let [child (.getChildAt stage i)
            x (* sw (:x spec))
            y (* sh (:y spec))
            tw (* sw (/ (:width spec) 2))
            th (* sh (/ (:height spec) 2))]
        (-> child
          (.clear)
          (.beginFill @(color/as-int24 (:color spec)))
          (.drawPolygon #js [0 (- th)
                             (- tw) th
                             tw th])
          (.endFill)
          (oset! "alpha" (:alpha spec))
          (oset! "rotation" (:rotation spec))
          (oset! "x" x)
          (oset! "y" y))))))
