// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return (!(((window["ArrayBuffer"]) == null)));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.call(null,"object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))){
return cljs.core.get.call(null,thi.ng.typedarrays.core.array_types,cljs.core.first.call(null,cljs.core.re_find.call(null,/((Uint|Int|Float)\d+(Clamped)?Array)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.constructor))));
} else {
return null;
}
}
});
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_2682 = (0);
var coll_2683 = size_or_coll;
while(true){
if((i_2682 < len)){
(buf[i_2682] = cljs.core.first.call(null,coll_2683));

var G__2684 = (i_2682 + (1));
var G__2685 = cljs.core.next.call(null,coll_2683);
i_2682 = G__2684;
coll_2683 = G__2685;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_2686 = (0);
var coll_2687 = size_or_coll;
while(true){
if((i_2686 < len)){
(buf[i_2686] = cljs.core.first.call(null,coll_2687));

var G__2688 = (i_2686 + (1));
var G__2689 = cljs.core.next.call(null,coll_2687);
i_2686 = G__2688;
coll_2687 = G__2689;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_2690 = (0);
var coll_2691 = size_or_coll;
while(true){
if((i_2690 < len)){
(buf[i_2690] = cljs.core.first.call(null,coll_2691));

var G__2692 = (i_2690 + (1));
var G__2693 = cljs.core.next.call(null,coll_2691);
i_2690 = G__2692;
coll_2691 = G__2693;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_2694 = (0);
var coll_2695 = size_or_coll;
while(true){
if((i_2694 < len)){
(buf[i_2694] = cljs.core.first.call(null,coll_2695));

var G__2696 = (i_2694 + (1));
var G__2697 = cljs.core.next.call(null,coll_2695);
i_2694 = G__2696;
coll_2695 = G__2697;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_2698 = (0);
var coll_2699 = size_or_coll;
while(true){
if((i_2698 < len)){
(buf[i_2698] = cljs.core.first.call(null,coll_2699));

var G__2700 = (i_2698 + (1));
var G__2701 = cljs.core.next.call(null,coll_2699);
i_2698 = G__2700;
coll_2699 = G__2701;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_2702 = (0);
var coll_2703 = size_or_coll;
while(true){
if((i_2702 < len)){
(buf[i_2702] = cljs.core.first.call(null,coll_2703));

var G__2704 = (i_2702 + (1));
var G__2705 = cljs.core.next.call(null,coll_2703);
i_2702 = G__2704;
coll_2703 = G__2705;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_2706 = (0);
var coll_2707 = size_or_coll;
while(true){
if((i_2706 < len)){
(buf[i_2706] = cljs.core.first.call(null,coll_2707));

var G__2708 = (i_2706 + (1));
var G__2709 = cljs.core.next.call(null,coll_2707);
i_2706 = G__2708;
coll_2707 = G__2709;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_2710 = (0);
var coll_2711 = size_or_coll;
while(true){
if((i_2710 < len)){
(buf[i_2710] = cljs.core.first.call(null,coll_2711));

var G__2712 = (i_2710 + (1));
var G__2713 = cljs.core.next.call(null,coll_2711);
i_2710 = G__2712;
coll_2711 = G__2713;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_2714 = (0);
var coll_2715 = size_or_coll;
while(true){
if((i_2714 < len)){
(buf[i_2714] = cljs.core.first.call(null,coll_2715));

var G__2716 = (i_2714 + (1));
var G__2717 = cljs.core.next.call(null,coll_2715);
i_2714 = G__2716;
coll_2715 = G__2717;
continue;
} else {
}
break;
}

return buf;

}
}
});

//# sourceMappingURL=core.js.map
