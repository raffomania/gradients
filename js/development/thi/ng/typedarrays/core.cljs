(ns thi.ng.typedarrays.core)

(defn typed-arrays-supported?
  "Returns true if JS runtime supports typed arrays"
  [] (not (nil? (aget js/window "ArrayBuffer"))))

(def ^:private array-types
  {"Uint8Array"        :uint8
   "Uint8ClampedArray" :uint8-clamped
   "Uint16Array"       :uint16
   "Uint32Array"       :uint32
   "Int8Array"         :int8
   "Int16Array"        :int16
   "Int32Array"        :int32
   "Float32Array"      :float32
   "Float64Array"      :float64})

(defn typed-array?
  "Returns truthy value if the given arg is a typed array instance"
  [x]
  (if (= "object" (goog/typeOf x))
    (if (number? (.-BYTES_PER_ELEMENT x))
      (.-buffer x))))

(defn array-type
  [x]
  (if (array? x)
    :array
    (if (typed-array? x)
      (->> (.-constructor x)
           str
           (re-find #"((Uint|Int|Float)\d+(Clamped)?Array)")
           first
           (get array-types)))))

(defn int8
  "Creates a native Int8Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Int8Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Int8Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint8
  "Creates a native Uint8Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Uint8Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Uint8Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint8-clamped
  "Creates a native Uint8ClampedArray of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Uint8ClampedArray. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Uint8ClampedArray. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn int16
  "Creates a native Int16Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Int16Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Int16Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint16
  "Creates a native Uint16Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Uint16Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Uint16Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn int32
  "Creates a native Int32Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Int32Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Int32Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint32
  "Creates a native Uint32Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Uint32Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Uint32Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn float32
  "Creates a native Float32Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Float32Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Float32Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn float64
  "Creates a native Float64Array of the given size or from `coll`."
  [size-or-coll]
  (cond
    (number? size-or-coll)      (js/Float64Array. size-or-coll)
    (typed-array? size-or-coll) size-or-coll
    :else
    (let [len (count size-or-coll)
          buf (js/Float64Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))
