(ns thi.ng.math.noise
  #?(:cljs (:require-macros [thi.ng.math.macros :as mm]))
  (:require
   #?(:clj  [thi.ng.math.macros :as mm]
      :cljs [thi.ng.typedarrays.core :as ta])
   [thi.ng.math.core :as m]))

;; Permutation table

(def P
  (->> [151 160 137 91 90 15 131 13 201 95 96 53 194 233 7 225 140 36
        103 30 69 142 8 99 37 240 21 10 23 190 6 148 247 120 234 75 0
        26 197 62 94 252 219 203 117 35 11 32 57 177 33 88 237 149 56
        87 174 20 125 136 171 168 68 175 74 165 71 134 139 48 27 166
        77 146 158 231 83 111 229 122 60 211 133 230 220 105 92 41 55
        46 245 40 244 102 143 54 65 25 63 161 1 216 80 73 209 76 132
        187 208 89 18 169 200 196 135 130 116 188 159 86 164 100 109
        198 173 186 3 64 52 217 226 250 124 123 5 202 38 147 118 126
        255 82 85 212 207 206 59 227 47 16 58 17 182 189 28 42 223 183
        170 213 119 248 152 2 44 154 163 70 221 153 101 155 167 43 172
        9 129 22 39 253 19 98 108 110 79 113 224 232 178 185 112 104
        218 246 97 228 251 34 242 193 238 210 144 12 191 179 162 241
        81 51 145 235 249 14 239 107 49 192 214 31 181 199 106 157 184
        84 204 176 115 121 50 45 127 4 150 254 138 236 205 93 222 114
        67 29 24 72 243 141 128 195 78 66 215 61 156 180]
       (repeat 2)
       (apply concat)
       (#?(:clj int-array :cljs ta/uint8))))

(def G
  (#?(:clj double-array :cljs ta/float32)
   [1.0 1.0 0.0 0.0
    -1.0 1.0 0.0 0.0
    1.0 -1.0 0.0 0.0
    -1.0 -1.0 0.0 0.0
    1.0 0.0 1.0 0.0
    -1.0 0.0 1.0 0.0
    1.0 0.0 -1.0 0.0
    -1.0 0.0 -1.0 0.0
    0.0 1.0 1.0 0.0
    0.0 -1.0 1.0 0.0
    0.0 1.0 -1.0 0.0
    0.0 -1.0 -1.0 0.0
    1.0 1.0 0.0 0.0
    -1.0 1.0 0.0 0.0
    0.0 -1.0 1.0 0.0
    0.0 -1.0 -1.0 0.0]))

(defn smooth
  [^double t]
  (* t (* t (* t (+ (* t (- (* t 6.0) 15.0)) 10.0)))))

(defn gradient1
  [i ^double x]
  (* x (aget ^doubles G (bit-shift-left (bit-and (aget ^ints P i) 15) 2))))

(defn gradient2
  [i j ^double x ^double y]
  (let [idx (-> (aget ^ints P (unchecked-add-int i (aget ^ints P j)))
                (bit-and 15)
                (bit-shift-left 2))]
    (mm/madd
     x (aget ^doubles G idx)
     y (aget ^doubles G (unchecked-inc idx)))))

(defn gradient3
  [i j k x y z]
  (let [idx (-> (aget ^ints P (unchecked-add-int i (aget ^ints P (unchecked-add-int j (aget ^ints P k)))))
                (bit-and 15)
                (bit-shift-left 2))]
    (mm/madd
     x (aget ^doubles G idx)
     y (aget ^doubles G (unchecked-inc idx))
     z (aget ^doubles G (unchecked-add-int idx 2)))))

(defn noise1
  [x]
  (let [xf (m/floor x)
        f  (- x xf)
        ix (bit-and xf 255)]
    (* (mm/mix
        (gradient1 ix f)
        (gradient1 (inc ix) (dec f))
        (smooth f))
       2.0)))

(defn noise2
  [x y]
  (let [pfx  (m/floor x)       pfy  (m/floor y)
        fpx  (- x pfx)         fpy  (- y pfy)
        ipx  (bit-and pfx 255) ipy  (bit-and pfy 255)
        ipx' (inc ipx)         ipy' (inc ipy)
        fpx' (dec fpx)         fpy' (dec fpy)]
    (mm/mix
     (gradient2 ipx ipy fpx fpy)
     (gradient2 ipx' ipy  fpx' fpy)
     (gradient2 ipx  ipy' fpx  fpy')
     (gradient2 ipx' ipy' fpx' fpy')
     (smooth fpx) (smooth fpy))))

(defn noise3
  [x y z]
  (let [pfx  (m/floor x)       pfy  (m/floor y)       pfz  (m/floor z)
        fpx  (- x pfx)         fpy  (- y pfy)         fpz  (- z pfz)
        ipx  (bit-and pfx 255) ipy  (bit-and pfy 255) ipz  (bit-and pfz 255)
        ipx' (inc ipx)         ipy' (inc ipy)         ipz' (inc ipz)
        fpx' (dec fpx)         fpy' (dec fpy)         fpz' (dec fpz)
        t    (smooth fpx)      t2   (smooth fpy)]
    (mm/mix
     (gradient3 ipx  ipy  ipz  fpx  fpy  fpz)  ; 000
     (gradient3 ipx' ipy  ipz  fpx' fpy  fpz)  ; 100
     (gradient3 ipx  ipy' ipz  fpx  fpy' fpz)  ; 010
     (gradient3 ipx' ipy' ipz  fpx' fpy' fpz)  ; 110
     (gradient3 ipx  ipy  ipz' fpx  fpy  fpz') ; 001
     (gradient3 ipx' ipy  ipz' fpx' fpy  fpz') ; 101
     (gradient3 ipx  ipy' ipz' fpx  fpy' fpz') ; 011
     (gradient3 ipx' ipy' ipz' fpx' fpy' fpz') ; 111
     t t2 (smooth fpz))))
