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
var i_2824 = (0);
var coll_2825 = size_or_coll;
while(true){
if((i_2824 < len)){
(buf[i_2824] = cljs.core.first.call(null,coll_2825));

var G__2826 = (i_2824 + (1));
var G__2827 = cljs.core.next.call(null,coll_2825);
i_2824 = G__2826;
coll_2825 = G__2827;
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
var i_2828 = (0);
var coll_2829 = size_or_coll;
while(true){
if((i_2828 < len)){
(buf[i_2828] = cljs.core.first.call(null,coll_2829));

var G__2830 = (i_2828 + (1));
var G__2831 = cljs.core.next.call(null,coll_2829);
i_2828 = G__2830;
coll_2829 = G__2831;
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
var i_2832 = (0);
var coll_2833 = size_or_coll;
while(true){
if((i_2832 < len)){
(buf[i_2832] = cljs.core.first.call(null,coll_2833));

var G__2834 = (i_2832 + (1));
var G__2835 = cljs.core.next.call(null,coll_2833);
i_2832 = G__2834;
coll_2833 = G__2835;
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
var i_2836 = (0);
var coll_2837 = size_or_coll;
while(true){
if((i_2836 < len)){
(buf[i_2836] = cljs.core.first.call(null,coll_2837));

var G__2838 = (i_2836 + (1));
var G__2839 = cljs.core.next.call(null,coll_2837);
i_2836 = G__2838;
coll_2837 = G__2839;
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
var i_2840 = (0);
var coll_2841 = size_or_coll;
while(true){
if((i_2840 < len)){
(buf[i_2840] = cljs.core.first.call(null,coll_2841));

var G__2842 = (i_2840 + (1));
var G__2843 = cljs.core.next.call(null,coll_2841);
i_2840 = G__2842;
coll_2841 = G__2843;
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
var i_2844 = (0);
var coll_2845 = size_or_coll;
while(true){
if((i_2844 < len)){
(buf[i_2844] = cljs.core.first.call(null,coll_2845));

var G__2846 = (i_2844 + (1));
var G__2847 = cljs.core.next.call(null,coll_2845);
i_2844 = G__2846;
coll_2845 = G__2847;
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
var i_2848 = (0);
var coll_2849 = size_or_coll;
while(true){
if((i_2848 < len)){
(buf[i_2848] = cljs.core.first.call(null,coll_2849));

var G__2850 = (i_2848 + (1));
var G__2851 = cljs.core.next.call(null,coll_2849);
i_2848 = G__2850;
coll_2849 = G__2851;
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
var i_2852 = (0);
var coll_2853 = size_or_coll;
while(true){
if((i_2852 < len)){
(buf[i_2852] = cljs.core.first.call(null,coll_2853));

var G__2854 = (i_2852 + (1));
var G__2855 = cljs.core.next.call(null,coll_2853);
i_2852 = G__2854;
coll_2853 = G__2855;
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
var i_2856 = (0);
var coll_2857 = size_or_coll;
while(true){
if((i_2856 < len)){
(buf[i_2856] = cljs.core.first.call(null,coll_2857));

var G__2858 = (i_2856 + (1));
var G__2859 = cljs.core.next.call(null,coll_2857);
i_2856 = G__2858;
coll_2857 = G__2859;
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
