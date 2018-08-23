(ns gradients.core
  (:require [gradients.view :as view]
            [reagent.core]
            [gradients.params :as params]
            [gradients.draw :as draw]
            [gradients.state :refer [state]]
            [gradients.pixi :as pixi]
            [gradients.util :as util]))

(defn update-pixi [app dt]
  (let [image (draw/draw)]
    (pixi/update-pixi app image)))

(defonce app (pixi/init-app update-pixi))

(view/mount state)
