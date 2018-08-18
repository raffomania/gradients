(ns gradients.core
  (:require [gradients.view :as view]
            [reagent.core]
            [gradients.params :as params]
            [gradients.draw :refer [draw]]
            [gradients.state :refer [state]]
            [gradients.pixi :as pixi]
            [gradients.util :as util]))

(defonce app (pixi/init-app))

(defn add-triangle [app]
  (let [tri (-> (js/PIXI.Graphics.)
                (.beginFill 0xFFFFFF)
                (.drawPolygon #js [0 0 0 100 200 100])
                ;; (.drawRect 0 0 100 100)
                (.endFill))]
    (set! (.-x tri) 100)
    (set! (.-y tri) 100)
    (.addChild (.-stage app) tri)))

(add-triangle app)

(view/mount state)
