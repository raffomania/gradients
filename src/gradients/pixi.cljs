(ns gradients.pixi
  (:require [cljsjs.pixi]
            [gradients.util :as util]
            [gradients.draw :refer [p]]
            [oops.core :refer [oset! oget]]
            [thi.ng.color.core :as color]))

(defonce tri-texture (atom nil))

(defn create-tri-texture [renderer]
  (let [sw (oget renderer "width")
        sh (oget renderer "height")
        size (/ (max sw sh) 10)
        graphics (js/PIXI.Graphics.)]
    (-> graphics
        (.beginFill 0xFFFFFF)
        (.drawPolygon #js [(/ size 2) 0
                           0 size
                           size size])
        (.endFill))
    (.generateTexture renderer graphics js/PIXI.SCALE_MODES.LINEAR 1)))


(defn init-app [update-fn]
  (let [[width height] (map #(/ % 2) (util/screen-res))
        app-opts {:width width
                  :height height
                  :antialias true
                  :transparent false
                  :backgroundColor 0xFFFFFF}
        app (js/PIXI.Application. (clj->js app-opts))
        stage (oget app "stage")
        container (.getElementById js/document "wp-preview")
        tris (-> (js/PIXI.Container.) (oset! "name" "tris"))
        bg (-> (js/PIXI.Graphics.) (oset! "name" "bg") (.beginFill 0xFFFFFF) (.drawRect 0 0 width height) (.endFill))]
    (.addChild stage bg)
    (.addChild stage tris)
    (.appendChild container (oget app "view"))
    (.add (oget app "ticker") (partial update-fn app))
    (reset! tri-texture (create-tri-texture (oget app "renderer")))
    app))

(defn update-tri-count [stage wanted]
  (let [current (oget stage "children.length")
        delta (- wanted current)]
    (cond
      (> delta 0) (doseq [_ (range delta)]
                    (.addChild stage (js/PIXI.Sprite. @tri-texture)))
      (< delta 0) (.removeChildren stage 0 (js/Math.abs delta)))))

(defn update-pixi [app specs]
  (let [sw (oget app "renderer.width")
        sh (oget app "renderer.height")
        stage (oget app "stage")
        tris-container (.getChildByName stage "tris")
        tris (:tris specs)]
    (-> (.getChildByName stage "bg")
        (oset! "tint" @(color/as-int24 (:background-color specs))))
    ; We are not using (count tris) because it is very slow
    ; instead we calculate the tri count again
    (update-tri-count tris-container (util/sqr (+ 4 (p :particle-count))))
    (doseq [[i spec] (map-indexed vector tris)]
      (let [child (.getChildAt tris-container i)
            x (* sw (:x spec))
            y (* sh (:y spec))
            tw (* sw (/ (:width spec) 2))
            th (* sh (/ (:height spec) 2))]
        (-> child
          ;; (.clear)
          ;; (.beginFill @(color/as-int24 (:color spec)))
          ;; (.drawPolygon #js [0 (- th)
          ;;                    (- tw) th
          ;;                    tw th])
          ;; (.endFill)
          (oset! "width" tw)
          (oset! "height" th)
          (oset! "alpha" (:alpha spec))
          (oset! "rotation" (:rotation spec))
          (oset! "x" x)
          (oset! "y" y))))))

(defn save-png [app specs]
  (let [renderer (oget app "renderer")
        original-width (oget renderer "width")
        original-height (oget renderer "height")
        [width height] (util/screen-res)
        extract-plugin (oget renderer "extract")
        link (.createElement js/document "a")
        stage (oget app "stage")
        texture (js/PIXI.RenderTexture.create width height)]
    (.resize renderer width height)
    (update-pixi app specs)
    (.render renderer stage texture)
    (.setAttribute link "href" (.base64 extract-plugin texture))
    (oset! link "innerHTML" "image link")
    (.setAttribute link "download" "gradients.png")
    (.click link)
    (.resize renderer original-width original-height)))
