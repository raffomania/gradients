(ns gradients.draw
  (:require [gradients.util :as util]
            [gradients.state :refer [state commands]]
            [clojure.core.async :as async]))

(defn p [key]
  (get-in @state [:params key]))

(defn sin-y [tri]
  (let [new-val (fn [y]
                  (-> (:x tri)
                      (* 10)
                      (js/Math.sin)
                      (* (p :sin-y))
                      (+ y)))]
    (-> tri
        (update-in [:y] new-val)
        (update-in [:rotation] new-val))))

(defn offset [tri]
  (-> tri
      (update :x #(+ % (p :offset-x)))
      (update :y #(+ % (p :offset-y)))))

(defn alpha-y [tri]
  (let [closeness-to-center (* 2 (- 0.5 (js/Math.abs (- (:y tri) 0.5))))
        factor (* (p :alpha-y) closeness-to-center)]
    (update tri :alpha #(+ (* % (- 1 (p :alpha-y))) factor))))

(defn get-tris []
  (for [x (range -2 (+ 2 (p :particle-count)))
        y (range -2 (+ 2 (p :particle-count)))]
    (let [scale (max (p :min-size) (p :size))]
      {:x (/ x (p :particle-count))
       :y (/ y (p :particle-count))
       :color (p :start-color)
       :alpha 1
       :rotation 0
       :width (* scale (/ 1 (p :particle-count)))
       :height (* scale (/ 1 (p :particle-count)))})))

(defn draw []
  {:tris (->> (get-tris)
              (map offset)
              (map alpha-y)
              (map sin-y))
   :background-color (p :background-color)})

