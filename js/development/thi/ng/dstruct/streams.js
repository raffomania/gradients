// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.dstruct.streams');
goog.require('cljs.core');
goog.require('thi.ng.xerror.core');


/**
 * @interface
 */
thi.ng.dstruct.streams.IInputStream = function(){};

var thi$ng$dstruct$streams$IInputStream$read_utf8_line$dyn_2763 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_utf8_line[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_utf8_line["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-utf8-line",_);
}
}
});
thi.ng.dstruct.streams.read_utf8_line = (function thi$ng$dstruct$streams$read_utf8_line(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_utf8_line$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_utf8_line$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_utf8_line$dyn_2763.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint8$dyn_2764 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint8[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint8["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint8",_);
}
}
});
thi.ng.dstruct.streams.read_uint8 = (function thi$ng$dstruct$streams$read_uint8(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint8$dyn_2764.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint16_le$dyn_2765 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint16_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint16_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint16-le",_);
}
}
});
thi.ng.dstruct.streams.read_uint16_le = (function thi$ng$dstruct$streams$read_uint16_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint16_le$dyn_2765.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint16_be$dyn_2766 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint16_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint16_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint16-be",_);
}
}
});
thi.ng.dstruct.streams.read_uint16_be = (function thi$ng$dstruct$streams$read_uint16_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint16_be$dyn_2766.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint32_le$dyn_2767 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint32_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint32_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint32-le",_);
}
}
});
thi.ng.dstruct.streams.read_uint32_le = (function thi$ng$dstruct$streams$read_uint32_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint32_le$dyn_2767.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint32_be$dyn_2768 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint32_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint32_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint32-be",_);
}
}
});
thi.ng.dstruct.streams.read_uint32_be = (function thi$ng$dstruct$streams$read_uint32_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint32_be$dyn_2768.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_float_le$dyn_2769 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_float_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_float_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-float-le",_);
}
}
});
thi.ng.dstruct.streams.read_float_le = (function thi$ng$dstruct$streams$read_float_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_float_le$dyn_2769.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_float_be$dyn_2770 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_float_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_float_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-float-be",_);
}
}
});
thi.ng.dstruct.streams.read_float_be = (function thi$ng$dstruct$streams$read_float_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_float_be$dyn_2770.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_double_le$dyn_2771 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_double_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_double_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-double-le",_);
}
}
});
thi.ng.dstruct.streams.read_double_le = (function thi$ng$dstruct$streams$read_double_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_double_le$dyn_2771.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_double_be$dyn_2772 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_double_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_double_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-double-be",_);
}
}
});
thi.ng.dstruct.streams.read_double_be = (function thi$ng$dstruct$streams$read_double_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_double_be$dyn_2772.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec2f_le$dyn_2773 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec2f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec2f_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec2f-le",_);
}
}
});
thi.ng.dstruct.streams.read_vec2f_le = (function thi$ng$dstruct$streams$read_vec2f_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec2f_le$dyn_2773.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec2f_be$dyn_2774 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec2f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec2f_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec2f-be",_);
}
}
});
thi.ng.dstruct.streams.read_vec2f_be = (function thi$ng$dstruct$streams$read_vec2f_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec2f_be$dyn_2774.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec3f_le$dyn_2775 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec3f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec3f_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec3f-le",_);
}
}
});
thi.ng.dstruct.streams.read_vec3f_le = (function thi$ng$dstruct$streams$read_vec3f_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec3f_le$dyn_2775.call(null,_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec3f_be$dyn_2776 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec3f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec3f_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec3f-be",_);
}
}
});
thi.ng.dstruct.streams.read_vec3f_be = (function thi$ng$dstruct$streams$read_vec3f_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec3f_be$dyn_2776.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IOutputStream = function(){};

var thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$dyn_2777 = (function (_,str){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_utf8_bytes[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,str);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_utf8_bytes["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,str);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-utf8-bytes",_);
}
}
});
thi.ng.dstruct.streams.write_utf8_bytes = (function thi$ng$dstruct$streams$write_utf8_bytes(_,str){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2(_,str);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$dyn_2777.call(null,_,str);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint8$dyn_2778 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint8[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint8["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint8",_);
}
}
});
thi.ng.dstruct.streams.write_uint8 = (function thi$ng$dstruct$streams$write_uint8(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint8$dyn_2778.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint16_le$dyn_2779 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint16_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint16_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint16-le",_);
}
}
});
thi.ng.dstruct.streams.write_uint16_le = (function thi$ng$dstruct$streams$write_uint16_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint16_le$dyn_2779.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint16_be$dyn_2780 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint16_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint16_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint16-be",_);
}
}
});
thi.ng.dstruct.streams.write_uint16_be = (function thi$ng$dstruct$streams$write_uint16_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint16_be$dyn_2780.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint32_le$dyn_2781 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint32_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint32_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint32-le",_);
}
}
});
thi.ng.dstruct.streams.write_uint32_le = (function thi$ng$dstruct$streams$write_uint32_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint32_le$dyn_2781.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint32_be$dyn_2782 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint32_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint32_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint32-be",_);
}
}
});
thi.ng.dstruct.streams.write_uint32_be = (function thi$ng$dstruct$streams$write_uint32_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint32_be$dyn_2782.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_float_le$dyn_2783 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_float_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_float_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-float-le",_);
}
}
});
thi.ng.dstruct.streams.write_float_le = (function thi$ng$dstruct$streams$write_float_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_float_le$dyn_2783.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_float_be$dyn_2784 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_float_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_float_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-float-be",_);
}
}
});
thi.ng.dstruct.streams.write_float_be = (function thi$ng$dstruct$streams$write_float_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_float_be$dyn_2784.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_double_le$dyn_2785 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_double_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_double_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-double-le",_);
}
}
});
thi.ng.dstruct.streams.write_double_le = (function thi$ng$dstruct$streams$write_double_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_double_le$dyn_2785.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_double_be$dyn_2786 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_double_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_double_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-double-be",_);
}
}
});
thi.ng.dstruct.streams.write_double_be = (function thi$ng$dstruct$streams$write_double_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_double_be$dyn_2786.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$dyn_2787 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec2f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,v);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec2f_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec2f-le",_);
}
}
});
thi.ng.dstruct.streams.write_vec2f_le = (function thi$ng$dstruct$streams$write_vec2f_le(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$dyn_2787.call(null,_,v);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$dyn_2788 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec2f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,v);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec2f_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec2f-be",_);
}
}
});
thi.ng.dstruct.streams.write_vec2f_be = (function thi$ng$dstruct$streams$write_vec2f_be(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$dyn_2788.call(null,_,v);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$dyn_2789 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec3f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,v);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec3f_le["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec3f-le",_);
}
}
});
thi.ng.dstruct.streams.write_vec3f_le = (function thi$ng$dstruct$streams$write_vec3f_le(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$dyn_2789.call(null,_,v);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$dyn_2790 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec3f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,v);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec3f_be["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec3f-be",_);
}
}
});
thi.ng.dstruct.streams.write_vec3f_be = (function thi$ng$dstruct$streams$write_vec3f_be(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$dyn_2790.call(null,_,v);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IStreamPosition = function(){};

var thi$ng$dstruct$streams$IStreamPosition$skip$dyn_2791 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.skip[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.skip["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IStreamPosition.skip",_);
}
}
});
thi.ng.dstruct.streams.skip = (function thi$ng$dstruct$streams$skip(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IStreamPosition$skip$dyn_2791.call(null,_,x);
}
});

var thi$ng$dstruct$streams$IStreamPosition$get_position$dyn_2792 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_position[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_position["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IStreamPosition.get-position",_);
}
}
});
thi.ng.dstruct.streams.get_position = (function thi$ng$dstruct$streams$get_position(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1(_);
} else {
return thi$ng$dstruct$streams$IStreamPosition$get_position$dyn_2792.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IBuffer = function(){};

var thi$ng$dstruct$streams$IBuffer$get_byte_buffer$dyn_2793 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_byte_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_byte_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-byte-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_byte_buffer = (function thi$ng$dstruct$streams$get_byte_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_byte_buffer$dyn_2793.call(null,_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_float_buffer$dyn_2794 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_float_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_float_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-float-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_float_buffer = (function thi$ng$dstruct$streams$get_float_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_float_buffer$dyn_2794.call(null,_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_double_buffer$dyn_2795 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_double_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_double_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-double-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_double_buffer = (function thi$ng$dstruct$streams$get_double_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_double_buffer$dyn_2795.call(null,_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_short_buffer$dyn_2796 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_short_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_short_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-short-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_short_buffer = (function thi$ng$dstruct$streams$get_short_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_short_buffer$dyn_2796.call(null,_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_int_buffer$dyn_2797 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_int_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_int_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-int-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_int_buffer = (function thi$ng$dstruct$streams$get_int_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_int_buffer$dyn_2797.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IIntoBuffer = function(){};

var thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$dyn_2798 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_byte_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,dest,stride,idx);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_byte_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-byte-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_byte_buffer = (function thi$ng$dstruct$streams$into_byte_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$dyn_2798.call(null,_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$dyn_2799 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_float_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,dest,stride,idx);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_float_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-float-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_float_buffer = (function thi$ng$dstruct$streams$into_float_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$dyn_2799.call(null,_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$dyn_2800 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_double_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,dest,stride,idx);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_double_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-double-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_double_buffer = (function thi$ng$dstruct$streams$into_double_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$dyn_2800.call(null,_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$dyn_2801 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_short_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,dest,stride,idx);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_short_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-short-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_short_buffer = (function thi$ng$dstruct$streams$into_short_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$dyn_2801.call(null,_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$dyn_2802 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_int_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,dest,stride,idx);
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_int_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-int-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_int_buffer = (function thi$ng$dstruct$streams$into_int_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$dyn_2802.call(null,_,dest,stride,idx);
}
});

thi.ng.dstruct.streams.utf8_str = (function thi$ng$dstruct$streams$utf8_str(str){
return unescape(encodeURIComponent(str));
});

/**
* @constructor
 * @implements {thi.ng.dstruct.streams.IInputStream}
*/
thi.ng.dstruct.streams.InputStreamWrapper = (function (buf,dv,pos){
this.buf = buf;
this.dv = dv;
this.pos = pos;
});
(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(8));

var x = self__.dv.getFloat64(self__.pos);
(self__.pos = (self__.pos + (8)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_le.call(null,___$1),thi.ng.dstruct.streams.read_float_le.call(null,___$1),thi.ng.dstruct.streams.read_float_le.call(null,___$1)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getUint32(self__.pos);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(1));

var x = self__.dv.getUint8(self__.pos);
(self__.pos = (self__.pos + (1)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_be.call(null,___$1),thi.ng.dstruct.streams.read_float_be.call(null,___$1),thi.ng.dstruct.streams.read_float_be.call(null,___$1)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getUint32(self__.pos,true);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_le.call(null,___$1),thi.ng.dstruct.streams.read_float_le.call(null,___$1)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_be.call(null,___$1),thi.ng.dstruct.streams.read_float_be.call(null,___$1)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(8));

var x = self__.dv.getFloat64(self__.pos,true);
(self__.pos = (self__.pos + (8)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(2));

var x = self__.dv.getUint16(self__.pos);
(self__.pos = (self__.pos + (2)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(2));

var x = self__.dv.getUint16(self__.pos,true);
(self__.pos = (self__.pos + (2)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getFloat32(self__.pos,true);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getFloat32(self__.pos);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","ArrayBuffer","js/ArrayBuffer",1951874202,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dv","dv",-1873120611,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","DataView","js/DataView",-1837680350,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$type = true);

(thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$ctorStr = "thi.ng.dstruct.streams/InputStreamWrapper");

(thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"thi.ng.dstruct.streams/InputStreamWrapper");
}));

/**
 * Positional factory function for thi.ng.dstruct.streams/InputStreamWrapper.
 */
thi.ng.dstruct.streams.__GT_InputStreamWrapper = (function thi$ng$dstruct$streams$__GT_InputStreamWrapper(buf,dv,pos){
return (new thi.ng.dstruct.streams.InputStreamWrapper(buf,dv,pos));
});


/**
* @constructor
 * @implements {thi.ng.dstruct.streams.IStreamPosition}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.dstruct.streams.IOutputStream}
*/
thi.ng.dstruct.streams.OutputStreamWrapper = (function (buf,dv,pos){
this.buf = buf;
this.dv = dv;
this.pos = pos;
});
(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2 = (function (_,str){
var self__ = this;
var ___$1 = this;
var utf8_2803 = thi.ng.dstruct.streams.utf8_str.call(null,str);
var len_2804 = cljs.core.count.call(null,utf8_2803);
thi.ng.dstruct.streams.ensure_size.call(null,___$1,cljs.core.count.call(null,utf8_2803));

var i_2805 = (0);
var p_2806 = self__.pos;
while(true){
if((i_2805 < len_2804)){
self__.dv.setUint8(p_2806,utf8_2803.charCodeAt(i_2805));

var G__2807 = (i_2805 + (1));
var G__2808 = (p_2806 + (1));
i_2805 = G__2807;
p_2806 = G__2808;
continue;
} else {
(self__.pos = p_2806);
}
break;
}

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(2));

self__.dv.setUint16(self__.pos,x);

(self__.pos = (self__.pos + (2)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(2));

self__.dv.setUint16(self__.pos,x,true);

(self__.pos = (self__.pos + (2)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setUint32(self__.pos,x);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(12));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v),true);

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)),true);

self__.dv.setFloat32((self__.pos + (8)),cljs.core.nth.call(null,v,(2)),true);

(self__.pos = (self__.pos + (12)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(12));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v));

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)));

self__.dv.setFloat32((self__.pos + (8)),cljs.core.nth.call(null,v,(2)));

(self__.pos = (self__.pos + (12)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat64(self__.pos,x);

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(1));

self__.dv.setUint8(self__.pos,x);

(self__.pos = (self__.pos + (1)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setFloat32(self__.pos,x);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setFloat32(self__.pos,x,true);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setUint32(self__.pos,x,true);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v));

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)));

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat64(self__.pos,x,true);

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v),true);

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)),true);

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,x);

(self__.pos = (self__.pos + x));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint8Array(self__.buf,(0),self__.pos));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float32Array(self__.buf,(0),(self__.pos >>> (2))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float64Array(self__.buf,(0),(self__.pos >>> (3))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint16Array(self__.buf,(0),(self__.pos >>> (1))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint32Array(self__.buf,(0),(self__.pos >>> (2))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","ArrayBuffer","js/ArrayBuffer",1951874202,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dv","dv",-1873120611,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","DataView","js/DataView",-1837680350,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$type = true);

(thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$ctorStr = "thi.ng.dstruct.streams/OutputStreamWrapper");

(thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"thi.ng.dstruct.streams/OutputStreamWrapper");
}));

/**
 * Positional factory function for thi.ng.dstruct.streams/OutputStreamWrapper.
 */
thi.ng.dstruct.streams.__GT_OutputStreamWrapper = (function thi$ng$dstruct$streams$__GT_OutputStreamWrapper(buf,dv,pos){
return (new thi.ng.dstruct.streams.OutputStreamWrapper(buf,dv,pos));
});

thi.ng.dstruct.streams.ensure_readable = (function thi$ng$dstruct$streams$ensure_readable(in$,size){
if(((in$.pos + size) >= in$.buf.byteLength)){
throw (new Error(["EOF overrun, current pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$.pos),", requested read length: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),", but length: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$.buf.byteLength)].join('')));
} else {
return null;
}
});
thi.ng.dstruct.streams.ensure_size = (function thi$ng$dstruct$streams$ensure_size(out,size){
var len = out.buf.byteLength;
if(((out.pos + size) > len)){
var buf_SINGLEQUOTE_ = (new ArrayBuffer((len + (16384))));
(new Uint8Array(buf_SINGLEQUOTE_)).set((new Uint8Array(out.buf,(0),out.pos)));

(out.buf = buf_SINGLEQUOTE_);

return (out.dv = (new DataView(buf_SINGLEQUOTE_)));
} else {
return null;
}
});
/**
 * Takes an input or outputstream and optional mime type, returns
 *   contents as data url wrapped in a volatile. The volatile's value is
 *   initially nil and will only become realized after the function
 *   returned.
 */
thi.ng.dstruct.streams.as_data_url = (function thi$ng$dstruct$streams$as_data_url(var_args){
var G__2810 = arguments.length;
switch (G__2810) {
case 1:
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return thi.ng.dstruct.streams.as_data_url.call(null,stream,"application/octet-stream");
}));

(thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2 = (function (stream,mime){
var fr = (new FileReader());
var uri = cljs.core.volatile_BANG_.call(null,null);
(fr.onload = (function (e){
return cljs.core.vreset_BANG_.call(null,uri,e.target.result);
}));

fr.readAsDataURL((new Blob([thi.ng.dstruct.streams.get_byte_buffer.call(null,stream)],({"type": mime}))));

return uri;
}));

(thi.ng.dstruct.streams.as_data_url.cljs$lang$maxFixedArity = 2);

/**
 * Takes an input or outputstream, callback fn and optional mime
 *   type, calls fn with data url string, returns nil.
 */
thi.ng.dstruct.streams.as_data_url_async = (function thi$ng$dstruct$streams$as_data_url_async(var_args){
var G__2814 = arguments.length;
switch (G__2814) {
case 2:
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$2 = (function (stream,cb){
return thi.ng.dstruct.streams.as_data_url_async.call(null,stream,cb,"application/octet-stream");
}));

(thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3 = (function (stream,cb,mime){
var fr = (new FileReader());
(fr.onload = (function (p1__2812_SHARP_){
return cb.call(null,p1__2812_SHARP_.target.result);
}));

fr.readAsDataURL((new Blob([thi.ng.dstruct.streams.get_byte_buffer.call(null,stream)],({"type": mime}))));

return null;
}));

(thi.ng.dstruct.streams.as_data_url_async.cljs$lang$maxFixedArity = 3);

thi.ng.dstruct.streams.input_stream = (function thi$ng$dstruct$streams$input_stream(var_args){
var G__2817 = arguments.length;
switch (G__2817) {
case 1:
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return thi.ng.dstruct.streams.input_stream.call(null,buf,(0));
}));

(thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2 = (function (buf,pos){
return (new thi.ng.dstruct.streams.InputStreamWrapper(buf,(new DataView(buf)),pos));
}));

(thi.ng.dstruct.streams.input_stream.cljs$lang$maxFixedArity = 2);

thi.ng.dstruct.streams.output_stream = (function thi$ng$dstruct$streams$output_stream(var_args){
var G__2820 = arguments.length;
switch (G__2820) {
case 0:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.dstruct.streams.output_stream.call(null,(4096));
}));

(thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1 = (function (size){
return thi.ng.dstruct.streams.output_stream.call(null,(new ArrayBuffer(size)),(0));
}));

(thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2 = (function (buf,pos){
return (new thi.ng.dstruct.streams.OutputStreamWrapper(buf,(new DataView(buf)),pos));
}));

(thi.ng.dstruct.streams.output_stream.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=streams.js.map
