(ns gradients.core
  (:require [gradients.view :as view]
            [reagent.core]
            [gradients.params :as params]
            [gradients.draw :as draw]
            [gradients.state :refer [state commands]]
            [gradients.pixi :as pixi]
            [gradients.util :as util]
            [clojure.core.async :as async]))

(defn update-pixi [app dt]
  (let [image (draw/draw)]
    (pixi/update-pixi app image)
    (case (async/poll! commands)
      :save (pixi/save-png app image)
      nil)))

(defonce app (pixi/init-app update-pixi))

(view/mount state)
