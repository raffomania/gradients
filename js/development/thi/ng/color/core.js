// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.color.core');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.strf.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.typedarrays.core');







thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",thi.ng.strf.core.hex.call(null,(6))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

var thi$ng$color$core$IRGBConvert$as_rgba$dyn_2926 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_rgba["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IRGBConvert.as-rgba",_);
}
}
});
thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
return thi$ng$color$core$IRGBConvert$as_rgba$dyn_2926.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

var thi$ng$color$core$IHSVConvert$as_hsva$dyn_2927 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_hsva["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSVConvert.as-hsva",_);
}
}
});
thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
return thi$ng$color$core$IHSVConvert$as_hsva$dyn_2927.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

var thi$ng$color$core$IHSLConvert$as_hsla$dyn_2928 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_hsla["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSLConvert.as-hsla",_);
}
}
});
thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
return thi$ng$color$core$IHSLConvert$as_hsla$dyn_2928.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

var thi$ng$color$core$ICMYKConvert$as_cmyka$dyn_2929 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_cmyka["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICMYKConvert.as-cmyka",_);
}
}
});
thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
return thi$ng$color$core$ICMYKConvert$as_cmyka$dyn_2929.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

var thi$ng$color$core$ICSSConvert$as_css$dyn_2930 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_css["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICSSConvert.as-css",_);
}
}
});
thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
return thi$ng$color$core$ICSSConvert$as_css$dyn_2930.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

var thi$ng$color$core$IIntConvert$as_int24$dyn_2931 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_int24["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int24",_);
}
}
});
thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
return thi$ng$color$core$IIntConvert$as_int24$dyn_2931.call(null,_);
}
});

var thi$ng$color$core$IIntConvert$as_int32$dyn_2932 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.as_int32["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int32",_);
}
}
});
thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
return thi$ng$color$core$IIntConvert$as_int32$dyn_2932.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

var thi$ng$color$core$IColorComponents$red$dyn_2933 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.red[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.red["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.red",_);
}
}
});
thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$red$dyn_2933.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$green$dyn_2934 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.green[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.green["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.green",_);
}
}
});
thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$green$dyn_2934.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$blue$dyn_2935 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.blue["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.blue",_);
}
}
});
thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$blue$dyn_2935.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$alpha$dyn_2936 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.alpha["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.alpha",_);
}
}
});
thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$alpha$dyn_2936.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$hue$dyn_2937 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.hue["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.hue",_);
}
}
});
thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$hue$dyn_2937.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$saturation$dyn_2938 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.saturation["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.saturation",_);
}
}
});
thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$saturation$dyn_2938.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$brightness$dyn_2939 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.brightness["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.brightness",_);
}
}
});
thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$brightness$dyn_2939.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$luminance$dyn_2940 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.luminance["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.luminance",_);
}
}
});
thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$luminance$dyn_2940.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$cyan$dyn_2941 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.cyan["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.cyan",_);
}
}
});
thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$cyan$dyn_2941.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$magenta$dyn_2942 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.magenta["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.magenta",_);
}
}
});
thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$magenta$dyn_2942.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$yellow$dyn_2943 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.yellow["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.yellow",_);
}
}
});
thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$yellow$dyn_2943.call(null,_);
}
});

var thi$ng$color$core$IColorComponents$black$dyn_2944 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.black[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.color.core.black["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.black",_);
}
}
});
thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$black$dyn_2944.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

var thi$ng$color$core$IColorOps$rotate_hue$dyn_2945 = (function (_,theta){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,theta);
} else {
var m__4519__auto__ = (thi.ng.color.core.rotate_hue["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,theta);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.rotate-hue",_);
}
}
});
thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
return thi$ng$color$core$IColorOps$rotate_hue$dyn_2945.call(null,_,theta);
}
});

var thi$ng$color$core$IColorOps$adjust_saturation$dyn_2946 = (function (_,offset){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,offset);
} else {
var m__4519__auto__ = (thi.ng.color.core.adjust_saturation["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-saturation",_);
}
}
});
thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_saturation$dyn_2946.call(null,_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_brightness$dyn_2947 = (function (_,offset){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,offset);
} else {
var m__4519__auto__ = (thi.ng.color.core.adjust_brightness["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-brightness",_);
}
}
});
thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_brightness$dyn_2947.call(null,_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_alpha$dyn_2948 = (function (_,offset){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,offset);
} else {
var m__4519__auto__ = (thi.ng.color.core.adjust_alpha["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-alpha",_);
}
}
});
thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_alpha$dyn_2948.call(null,_,offset);
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a,__meta,__extmap,__hash){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k2950,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__2954 = k2950;
var G__2954__$1 = (((G__2954 instanceof cljs.core.Keyword))?G__2954.fqn:null);
switch (G__2954__$1) {
case "r":
return self__.r;

break;
case "g":
return self__.g;

break;
case "b":
return self__.b;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2950,else__4475__auto__);

}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__2955){
var vec__2956 = p__2955;
var k__4496__auto__ = cljs.core.nth.call(null,vec__2956,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__2956,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int24.call(null,((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))) | ((((self__.a * (255)) + 0.5) | (0)) << (24))));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.RGBA{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2949){
var self__ = this;
var G__2949__$1 = this;
return (new cljs.core.RecordIter((0),G__2949__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a,null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (171696367 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2951,other2952){
var self__ = this;
var this2951__$1 = this;
return (((!((other2952 == null)))) && ((((this2951__$1.constructor === other2952.constructor)) && (((cljs.core._EQ_.call(null,this2951__$1.r,other2952.r)) && (((cljs.core._EQ_.call(null,this2951__$1.g,other2952.g)) && (((cljs.core._EQ_.call(null,this2951__$1.b,other2952.b)) && (((cljs.core._EQ_.call(null,this2951__$1.a,other2952.a)) && (cljs.core._EQ_.call(null,this2951__$1.__extmap,other2952.__extmap)))))))))))));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.r);

(dest[(idx + (1))] = self__.g);

(dest[(idx + (2))] = self__.b);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp.call(null,(self__.a + offset),0.0,1.0),null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * self__.r);
var g__$1 = ((255) * self__.g);
var b__$1 = ((255) * self__.b);
return thi.ng.color.core.css.call(null,["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((r__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((g__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((b__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4306__auto__ = 0.0;
var y__4307__auto__ = self__.a;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})()),")"].join(''));
} else {
return thi.ng.color.core.as_css.call(null,___$1.thi$ng$color$core$IIntConvert$as_int24$arity$1(null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__4306__auto__ = (function (){var x__4306__auto__ = self__.r;
var y__4307__auto__ = self__.g;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var y__4307__auto__ = self__.b;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__4309__auto__ = (function (){var x__4309__auto__ = self__.r;
var y__4310__auto__ = self__.g;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var y__4310__auto__ = self__.b;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()) / v);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__4306__auto__ = (function (){var x__4306__auto__ = self__.r;
var y__4307__auto__ = self__.g;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var y__4307__auto__ = self__.b;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.RGBA((function (){var a__1417__auto__ = self__.r;
return (((dest__$1.r - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.g;
return (((dest__$1.g - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.b;
return (((dest__$1.b - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.a;
return (((dest__$1.a - a__1417__auto__) * t) + a__1417__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k2950){
var self__ = this;
var this__4479__auto____$1 = this;
var G__2959 = k2950;
var G__2959__$1 = (((G__2959 instanceof cljs.core.Keyword))?G__2959.fqn:null);
switch (G__2959__$1) {
case "r":
case "g":
case "b":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k2950);

}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__2949){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__2960 = cljs.core.keyword_identical_QMARK_;
var expr__2961 = k__4481__auto__;
if(cljs.core.truth_(pred__2960.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__2961))){
return (new thi.ng.color.core.RGBA(G__2949,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__2960.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__2961))){
return (new thi.ng.color.core.RGBA(self__.r,G__2949,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__2960.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__2961))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,G__2949,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__2960.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__2961))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,G__2949,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__2949),null));
}
}
}
}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"g","g",1738089905),self__.g,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"b","b",1482224470),self__.b,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__4306__auto__ = (function (){var x__4306__auto__ = self__.r;
var y__4307__auto__ = self__.g;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var y__4307__auto__ = self__.b;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var d = (v - (function (){var x__4309__auto__ = (function (){var x__4309__auto__ = self__.r;
var y__4310__auto__ = self__.g;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var y__4310__auto__ = self__.b;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,s))?0.0:(function (){var pred__2963 = cljs.core._EQ__EQ_;
var expr__2964 = v;
if(cljs.core.truth_(pred__2963.call(null,self__.r,expr__2964))){
return ((self__.g - self__.b) / d);
} else {
if(cljs.core.truth_(pred__2963.call(null,self__.g,expr__2964))){
return (2.0 + ((self__.b - self__.r) / d));
} else {
return (4.0 + ((self__.r - self__.g) / d));
}
}
})());
var h__$1 = (h / 6.0);
return thi.ng.color.core.hsva.call(null,(((h__$1 < (0)))?(h__$1 + (1)):h__$1),s,v,self__.a);
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__2949){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,G__2949,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - self__.r);
var m = (1.0 - self__.g);
var y = (1.0 - self__.b);
var k = (function (){var x__4309__auto__ = (function (){var x__4309__auto__ = c;
var y__4310__auto__ = m;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var y__4310__auto__ = y;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
return thi.ng.color.core.cmyka.call(null,(function (){var x__4306__auto__ = (c - k);
var y__4307__auto__ = 0.0;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),(function (){var x__4306__auto__ = (m - k);
var y__4307__auto__ = 0.0;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),(function (){var x__4306__auto__ = (y - k);
var y__4307__auto__ = 0.0;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),(function (){var x__4306__auto__ = k;
var y__4307__auto__ = 0.0;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),self__.a);
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var f1 = (function (){var x__4309__auto__ = (function (){var x__4309__auto__ = self__.r;
var y__4310__auto__ = self__.g;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var y__4310__auto__ = self__.b;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var f2 = (function (){var x__4306__auto__ = (function (){var x__4306__auto__ = self__.r;
var y__4307__auto__ = self__.g;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var y__4307__auto__ = self__.b;
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d))){
return thi.ng.color.core.hsla.call(null,0.0,0.0,l,self__.a);
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - self__.r) * thi.ng.math.core.SIXTH) + d2) / d);
var dg = ((((f2 - self__.g) * thi.ng.math.core.SIXTH) + d2) / d);
var db = ((((f2 - self__.b) * thi.ng.math.core.SIXTH) + d2) / d);
var h = (function (){var pred__2966 = cljs.core._EQ__EQ_;
var expr__2967 = f2;
if(cljs.core.truth_(pred__2966.call(null,self__.r,expr__2967))){
return (db - dg);
} else {
if(cljs.core.truth_(pred__2966.call(null,self__.g,expr__2967))){
return ((thi.ng.math.core.THIRD + dr) - db);
} else {
return ((thi.ng.math.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return thi.ng.color.core.hsla.call(null,h__$1,s,l,self__.a);
}
}));

(thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.RGBA.cljs$lang$type = true);

(thi.ng.color.core.RGBA.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/RGBA",null,(1),null));
}));

(thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/RGBA");
}));

/**
 * Positional factory function for thi.ng.color.core/RGBA.
 */
thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/RGBA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_RGBA = (function thi$ng$color$core$map__GT_RGBA(G__2953){
var extmap__4512__auto__ = (function (){var G__2969 = cljs.core.dissoc.call(null,G__2953,new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586));
if(cljs.core.record_QMARK_.call(null,G__2953)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__2969);
} else {
return G__2969;
}
})();
return (new thi.ng.color.core.RGBA(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__2953),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__2953),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__2953),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__2953),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int24 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k2973,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__2977 = k2973;
var G__2977__$1 = (((G__2977 instanceof cljs.core.Keyword))?G__2977.fqn:null);
switch (G__2977__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2973,else__4475__auto__);

}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__2978){
var vec__2979 = p__2978;
var k__4496__auto__ = cljs.core.nth.call(null,vec__2979,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__2979,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(self__.col | (4278190080)));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.Int24{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2972){
var self__ = this;
var G__2972__$1 = this;
return (new cljs.core.RecordIter((0),G__2972__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215)),null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-586101510 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2974,other2975){
var self__ = this;
var this2974__$1 = this;
return (((!((other2975 == null)))) && ((((this2974__$1.constructor === other2975.constructor)) && (((cljs.core._EQ_.call(null,this2974__$1.col,other2975.col)) && (cljs.core._EQ_.call(null,this2974__$1.__extmap,other2975.__extmap)))))));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.rotate_hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_saturation.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_brightness.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha.call(null,___$1.thi$ng$color$core$IIntConvert$as_int32$arity$1(null),offset);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),1.0,null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.Int24((((((0.5 + (function (){var a__1417__auto__ = r;
return ((((dest__$1.r * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__1417__auto__ = g;
return ((((dest__$1.g * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__1417__auto__ = b;
return ((((dest__$1.b * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0))),null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k2973){
var self__ = this;
var this__4479__auto____$1 = this;
var G__2982 = k2973;
var G__2982__$1 = (((G__2982 instanceof cljs.core.Keyword))?G__2982.fqn:null);
switch (G__2982__$1) {
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k2973);

}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__2972){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__2983 = cljs.core.keyword_identical_QMARK_;
var expr__2984 = k__4481__auto__;
if(cljs.core.truth_(pred__2983.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__2984))){
return (new thi.ng.color.core.Int24(G__2972,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__2972),null));
}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__2972){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,G__2972,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int24.cljs$lang$type = true);

(thi.ng.color.core.Int24.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/Int24",null,(1),null));
}));

(thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/Int24");
}));

/**
 * Positional factory function for thi.ng.color.core/Int24.
 */
thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/Int24, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_Int24 = (function thi$ng$color$core$map__GT_Int24(G__2976){
var extmap__4512__auto__ = (function (){var G__2986 = cljs.core.dissoc.call(null,G__2976,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_.call(null,G__2976)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__2986);
} else {
return G__2986;
}
})();
return (new thi.ng.color.core.Int24(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__2976),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int32 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k2990,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__2994 = k2990;
var G__2994__$1 = (((G__2994 instanceof cljs.core.Keyword))?G__2994.fqn:null);
switch (G__2994__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2990,else__4475__auto__);

}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__2995){
var vec__2996 = p__2995;
var k__4496__auto__ = cljs.core.nth.call(null,vec__2996,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__2996,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215)),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.Int32{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2989){
var self__ = this;
var G__2989__$1 = this;
return (new cljs.core.RecordIter((0),G__2989__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215)),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (958597195 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2991,other2992){
var self__ = this;
var this2991__$1 = this;
return (((!((other2992 == null)))) && ((((this2991__$1.constructor === other2992.constructor)) && (((cljs.core._EQ_.call(null,this2991__$1.col,other2992.col)) && (cljs.core._EQ_.call(null,this2991__$1.__extmap,other2992.__extmap)))))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.rotate_hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_saturation.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_brightness.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp.call(null,(a + offset),0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
} else {
return thi.ng.color.core.as_css.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.Int32(((((((0.5 + (function (){var a__1417__auto__ = r;
return ((((dest__$1.r * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__1417__auto__ = g;
return ((((dest__$1.g * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__1417__auto__ = b;
return ((((dest__$1.b * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0))) | (((0.5 + (function (){var a__1417__auto__ = a;
return ((((dest__$1.a * (255)) - a__1417__auto__) * t) + a__1417__auto__);
})()) | (0)) << (24))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k2990){
var self__ = this;
var this__4479__auto____$1 = this;
var G__2999 = k2990;
var G__2999__$1 = (((G__2999 instanceof cljs.core.Keyword))?G__2999.fqn:null);
switch (G__2999__$1) {
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k2990);

}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__2989){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3000 = cljs.core.keyword_identical_QMARK_;
var expr__3001 = k__4481__auto__;
if(cljs.core.truth_(pred__3000.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__3001))){
return (new thi.ng.color.core.Int32(G__2989,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__2989),null));
}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__2989){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,G__2989,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int32.cljs$lang$type = true);

(thi.ng.color.core.Int32.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/Int32",null,(1),null));
}));

(thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/Int32");
}));

/**
 * Positional factory function for thi.ng.color.core/Int32.
 */
thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/Int32, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_Int32 = (function thi$ng$color$core$map__GT_Int32(G__2993){
var extmap__4512__auto__ = (function (){var G__3003 = cljs.core.dissoc.call(null,G__2993,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_.call(null,G__2993)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3003);
} else {
return G__3003;
}
})();
return (new thi.ng.color.core.Int32(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__2993),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3007,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3011 = k3007;
var G__3011__$1 = (((G__3011 instanceof cljs.core.Keyword))?G__3011.fqn:null);
switch (G__3011__$1) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3007,else__4475__auto__);

}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__3012){
var vec__3013 = p__3012;
var k__4496__auto__ = cljs.core.nth.call(null,vec__3013,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__3013,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.HSVA{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3006){
var self__ = this;
var G__3006__$1 = this;
return (new cljs.core.RecordIter((0),G__3006__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1912636902 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3008,other3009){
var self__ = this;
var this3008__$1 = this;
return (((!((other3009 == null)))) && ((((this3008__$1.constructor === other3009.constructor)) && (((cljs.core._EQ_.call(null,this3008__$1.h,other3009.h)) && (((cljs.core._EQ_.call(null,this3008__$1.s,other3009.s)) && (((cljs.core._EQ_.call(null,this3008__$1.v,other3009.v)) && (((cljs.core._EQ_.call(null,this3008__$1.a,other3009.a)) && (cljs.core._EQ_.call(null,this3008__$1.__extmap,other3009.__extmap)))))))))))));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.v);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp.call(null,(offset + self__.v),0.0,1.0),self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_hsla.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a,null,null,null));
} else {
var h__$1 = cljs.core.rem.call(null,(self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__3016 = i;
switch (G__3016) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a,null,null,null));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a,null,null,null));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a,null,null,null));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a,null,null,null));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a,null,null,null));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a,null,null,null));

}
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsva.call(null,dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__1417__auto__ = (self__.h + (1));
return (((h2 - a__1417__auto__) * t) + a__1417__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__1417__auto__ = self__.h;
return ((((h2 + (1)) - a__1417__auto__) * t) + a__1417__auto__);
})(),1.0)):(function (){var a__1417__auto__ = self__.h;
return (((h2 - a__1417__auto__) * t) + a__1417__auto__);
})()),(function (){var a__1417__auto__ = self__.s;
return (((dest__$1.s - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.v;
return (((dest__$1.v - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.a;
return (((dest__$1.a - a__1417__auto__) * t) + a__1417__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3007){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3017 = k3007;
var G__3017__$1 = (((G__3017 instanceof cljs.core.Keyword))?G__3017.fqn:null);
switch (G__3017__$1) {
case "h":
case "s":
case "v":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3007);

}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3006){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3018 = cljs.core.keyword_identical_QMARK_;
var expr__3019 = k__4481__auto__;
if(cljs.core.truth_(pred__3018.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__3019))){
return (new thi.ng.color.core.HSVA(G__3006,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3018.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__3019))){
return (new thi.ng.color.core.HSVA(self__.h,G__3006,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3018.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__3019))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,G__3006,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3018.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__3019))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,G__3006,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__3006),null));
}
}
}
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3006){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,G__3006,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = ((self__.s * self__.v) / ((1) - thi.ng.math.core.abs_STAR_.call(null,(((2) * l) - (1)))));
return thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a);
}));

(thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSVA.cljs$lang$type = true);

(thi.ng.color.core.HSVA.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/HSVA",null,(1),null));
}));

(thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/HSVA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSVA.
 */
thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/HSVA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_HSVA = (function thi$ng$color$core$map__GT_HSVA(G__3010){
var extmap__4512__auto__ = (function (){var G__3021 = cljs.core.dissoc.call(null,G__3010,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586));
if(cljs.core.record_QMARK_.call(null,G__3010)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3021);
} else {
return G__3021;
}
})();
return (new thi.ng.color.core.HSVA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__3010),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__3010),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__3010),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__3010),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3026,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3030 = k3026;
var G__3030__$1 = (((G__3030 instanceof cljs.core.Keyword))?G__3030.fqn:null);
switch (G__3030__$1) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "l":
return self__.l;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3026,else__4475__auto__);

}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__3031){
var vec__3032 = p__3031;
var k__4496__auto__ = cljs.core.nth.call(null,vec__3032,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__3032,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.HSLA{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3025){
var self__ = this;
var G__3025__$1 = this;
return (new cljs.core.RecordIter((0),G__3025__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1684519653 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3027,other3028){
var self__ = this;
var this3027__$1 = this;
return (((!((other3028 == null)))) && ((((this3027__$1.constructor === other3028.constructor)) && (((cljs.core._EQ_.call(null,this3027__$1.h,other3028.h)) && (((cljs.core._EQ_.call(null,this3027__$1.s,other3028.s)) && (((cljs.core._EQ_.call(null,this3027__$1.l,other3028.l)) && (((cljs.core._EQ_.call(null,this3027__$1.a,other3028.a)) && (cljs.core._EQ_.call(null,this3027__$1.__extmap,other3028.__extmap)))))))))))));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.l);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.l,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.adjust_brightness.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = Math.round((self__.h * 360.0));
var s__$1 = Math.round((self__.s * 100.0));
var l__$1 = Math.round((self__.l * 100.0));
return thi.ng.color.core.css.call(null,(((self__.a < (1)))?["hsla(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),")"].join(''):["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%)"].join('')));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a,null,null,null));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h + thi.ng.math.core.THIRD)),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h - thi.ng.math.core.THIRD)),0.0,1.0),self__.a,null,null,null));
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsla.call(null,dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__1417__auto__ = (self__.h + (1));
return (((h2 - a__1417__auto__) * t) + a__1417__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__1417__auto__ = self__.h;
return ((((h2 + (1)) - a__1417__auto__) * t) + a__1417__auto__);
})(),1.0)):(function (){var a__1417__auto__ = self__.h;
return (((h2 - a__1417__auto__) * t) + a__1417__auto__);
})()),(function (){var a__1417__auto__ = self__.s;
return (((dest__$1.s - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.l;
return (((dest__$1.l - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.a;
return (((dest__$1.a - a__1417__auto__) * t) + a__1417__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3026){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3035 = k3026;
var G__3035__$1 = (((G__3035 instanceof cljs.core.Keyword))?G__3035.fqn:null);
switch (G__3035__$1) {
case "h":
case "s":
case "l":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3026);

}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3025){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3036 = cljs.core.keyword_identical_QMARK_;
var expr__3037 = k__4481__auto__;
if(cljs.core.truth_(pred__3036.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__3037))){
return (new thi.ng.color.core.HSLA(G__3025,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3036.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__3037))){
return (new thi.ng.color.core.HSLA(self__.h,G__3025,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3036.call(null,new cljs.core.Keyword(null,"l","l",1395893423),expr__3037))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,G__3025,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3036.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__3037))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,G__3025,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__3025),null));
}
}
}
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"l","l",1395893423),self__.l,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - thi.ng.math.core.abs_STAR_.call(null,(l2 - (1)))))) / (2));
var s_SINGLEQUOTE_ = (((2) * (v - self__.l)) / v);
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3025){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,G__3025,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSLA.cljs$lang$type = true);

(thi.ng.color.core.HSLA.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/HSLA",null,(1),null));
}));

(thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/HSLA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSLA.
 */
thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/HSLA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_HSLA = (function thi$ng$color$core$map__GT_HSLA(G__3029){
var extmap__4512__auto__ = (function (){var G__3039 = cljs.core.dissoc.call(null,G__3029,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586));
if(cljs.core.record_QMARK_.call(null,G__3029)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3039);
} else {
return G__3039;
}
})();
return (new thi.ng.color.core.HSLA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__3029),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__3029),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__3029),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__3029),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a,__meta,__extmap,__hash){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3043,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3047 = k3043;
var G__3047__$1 = (((G__3047 instanceof cljs.core.Keyword))?G__3047.fqn:null);
switch (G__3047__$1) {
case "c":
return self__.c;

break;
case "m":
return self__.m;

break;
case "y":
return self__.y;

break;
case "k":
return self__.k;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3043,else__4475__auto__);

}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__3048){
var vec__3049 = p__3048;
var k__4496__auto__ = cljs.core.nth.call(null,vec__3049,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__3049,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.CMYKA{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3042){
var self__ = this;
var G__3042__$1 = this;
return (new cljs.core.RecordIter((0),G__3042__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a,null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (495080490 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3044,other3045){
var self__ = this;
var this3044__$1 = this;
return (((!((other3045 == null)))) && ((((this3044__$1.constructor === other3045.constructor)) && (((cljs.core._EQ_.call(null,this3044__$1.c,other3045.c)) && (((cljs.core._EQ_.call(null,this3044__$1.m,other3045.m)) && (((cljs.core._EQ_.call(null,this3044__$1.y,other3045.y)) && (((cljs.core._EQ_.call(null,this3044__$1.k,other3045.k)) && (((cljs.core._EQ_.call(null,this3044__$1.a,other3045.a)) && (cljs.core._EQ_.call(null,this3044__$1.__extmap,other3045.__extmap)))))))))))))));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.rotate_hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_saturation.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_brightness.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__4309__auto__ = 1.0;
var y__4310__auto__ = (self__.c + self__.k);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()),(1.0 - (function (){var x__4309__auto__ = 1.0;
var y__4310__auto__ = (self__.m + self__.k);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()),(1.0 - (function (){var x__4309__auto__ = 1.0;
var y__4310__auto__ = (self__.y + self__.k);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()),self__.a,null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_cmyka.call(null,dest);
return (new thi.ng.color.core.CMYKA((function (){var a__1417__auto__ = self__.c;
return (((dest__$1.c - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.m;
return (((dest__$1.m - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.y;
return (((dest__$1.y - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.k;
return (((dest__$1.k - a__1417__auto__) * t) + a__1417__auto__);
})(),(function (){var a__1417__auto__ = self__.a;
return (((dest__$1.a - a__1417__auto__) * t) + a__1417__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3043){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3052 = k3043;
var G__3052__$1 = (((G__3052 instanceof cljs.core.Keyword))?G__3052.fqn:null);
switch (G__3052__$1) {
case "c":
case "m":
case "y":
case "k":
case "a":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3043);

}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3042){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3053 = cljs.core.keyword_identical_QMARK_;
var expr__3054 = k__4481__auto__;
if(cljs.core.truth_(pred__3053.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__3054))){
return (new thi.ng.color.core.CMYKA(G__3042,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3053.call(null,new cljs.core.Keyword(null,"m","m",1632677161),expr__3054))){
return (new thi.ng.color.core.CMYKA(self__.c,G__3042,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3053.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__3054))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,G__3042,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3053.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__3054))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,G__3042,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3053.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__3054))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,G__3042,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__3042),null));
}
}
}
}
}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"c","c",-1763192079),self__.c,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"m","m",1632677161),self__.m,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3042){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,G__3042,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.CMYKA.cljs$lang$type = true);

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/CMYKA",null,(1),null));
}));

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/CMYKA");
}));

/**
 * Positional factory function for thi.ng.color.core/CMYKA.
 */
thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/CMYKA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_CMYKA = (function thi$ng$color$core$map__GT_CMYKA(G__3046){
var extmap__4512__auto__ = (function (){var G__3056 = cljs.core.dissoc.call(null,G__3046,new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586));
if(cljs.core.record_QMARK_.call(null,G__3046)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3056);
} else {
return G__3056;
}
})();
return (new thi.ng.color.core.CMYKA(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(G__3046),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(G__3046),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__3046),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__3046),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__3046),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CSS = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k3060,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__3064 = k3060;
var G__3064__$1 = (((G__3064 instanceof cljs.core.Keyword))?G__3064.fqn:null);
switch (G__3064__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3060,else__4475__auto__);

}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__3065){
var vec__3066 = p__3065;
var k__4496__auto__ = cljs.core.nth.call(null,vec__3066,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__3066,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24.call(null,c);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32.call(null,c);
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#thi.ng.color.core.CSS{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3059){
var self__ = this;
var G__3059__$1 = this;
return (new cljs.core.RecordIter((0),G__3059__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.math.core.invert.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (272537508 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3061,other3062){
var self__ = this;
var this3061__$1 = this;
return (((!((other3062 == null)))) && ((((this3061__$1.constructor === other3062.constructor)) && (((cljs.core._EQ_.call(null,this3061__$1.col,other3062.col)) && (cljs.core._EQ_.call(null,this3061__$1.__extmap,other3062.__extmap)))))));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.rotate_hue.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_saturation.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_brightness.call(null,___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_alpha.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba.call(null,c);
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.math.core.mix.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,t));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k3060){
var self__ = this;
var this__4479__auto____$1 = this;
var G__3069 = k3060;
var G__3069__$1 = (((G__3069 instanceof cljs.core.Keyword))?G__3069.fqn:null);
switch (G__3069__$1) {
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3060);

}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__3059){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__3070 = cljs.core.keyword_identical_QMARK_;
var expr__3071 = k__4481__auto__;
if(cljs.core.truth_(pred__3070.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__3071))){
return (new thi.ng.color.core.CSS(G__3059,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__3059),null));
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__3059){
var self__ = this;
var this__4471__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,G__3059,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla.call(null,c);
}
}));

(thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
}));

(thi.ng.color.core.CSS.cljs$lang$type = true);

(thi.ng.color.core.CSS.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/CSS",null,(1),null));
}));

(thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"thi.ng.color.core/CSS");
}));

/**
 * Positional factory function for thi.ng.color.core/CSS.
 */
thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/CSS, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_CSS = (function thi$ng$color$core$map__GT_CSS(G__3063){
var extmap__4512__auto__ = (function (){var G__3073 = cljs.core.dissoc.call(null,G__3063,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_.call(null,G__3063)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3073);
} else {
return G__3073;
}
})();
return (new thi.ng.color.core.CSS(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__3063),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if((typeof thi !== 'undefined') && (typeof thi.ng !== 'undefined') && (typeof thi.ng.color !== 'undefined') && (typeof thi.ng.color.core !== 'undefined') && (typeof thi.ng.color.core.t_thi$ng$color$core3076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {thi.ng.color.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core3076 = (function (to_rgba,from_rgba,ctor,col,meta3077){
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta3077 = meta3077;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.call(null,self__.col);
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.math.core.invert.call(null,self__.to_rgba.call(null,self__.col))));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,self__.to_rgba.call(null,self__.col),dest,stride,idx);
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,self__.to_rgba.call(null,self__.col),theta)));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,self__.to_rgba.call(null,self__.col),offset)));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,self__.to_rgba.call(null,self__.col),offset)));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3078){
var self__ = this;
var _3078__$1 = this;
return self__.meta3077;
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to_rgba.call(null,self__.col);
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.math.core.mix.call(null,self__.to_rgba.call(null,self__.col),dest,t)));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3078,meta3077__$1){
var self__ = this;
var _3078__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core3076(self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta3077__$1));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core3076.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core3076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta3077","meta3077",2139095582,null)], null);
}));

(thi.ng.color.core.t_thi$ng$color$core3076.cljs$lang$type = true);

(thi.ng.color.core.t_thi$ng$color$core3076.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core3076");

(thi.ng.color.core.t_thi$ng$color$core3076.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"thi.ng.color.core/t_thi$ng$color$core3076");
}));

/**
 * Positional factory function for thi.ng.color.core/t_thi$ng$color$core3076.
 */
thi.ng.color.core.__GT_t_thi$ng$color$core3076 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core3076(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta3077){
return (new thi.ng.color.core.t_thi$ng$color$core3076(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta3077));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core3076(to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var G__3080 = arguments.length;
switch (G__3080) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__3081){
var vec__3082 = p__3081;
var r = cljs.core.nth.call(null,vec__3082,(0),null);
var g = cljs.core.nth.call(null,vec__3082,(1),null);
var b = cljs.core.nth.call(null,vec__3082,(2),null);
var a = cljs.core.nth.call(null,vec__3082,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0,null,null,null));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
}));

(thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24((col & (16777215)),null,null,null));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var G__3087 = arguments.length;
switch (G__3087) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col,null,null,null));
}));

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp.call(null,alpha,0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24))),null,null,null));
}));

(thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2);

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var G__3090 = arguments.length;
switch (G__3090) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__3091){
var vec__3092 = p__3091;
var h = cljs.core.nth.call(null,vec__3092,(0),null);
var s = cljs.core.nth.call(null,vec__3092,(1),null);
var v = cljs.core.nth.call(null,vec__3092,(2),null);
var a = cljs.core.nth.call(null,vec__3092,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0,null,null,null));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
}));

(thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var G__3097 = arguments.length;
switch (G__3097) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__3098){
var vec__3099 = p__3098;
var h = cljs.core.nth.call(null,vec__3099,(0),null);
var s = cljs.core.nth.call(null,vec__3099,(1),null);
var l = cljs.core.nth.call(null,vec__3099,(2),null);
var a = cljs.core.nth.call(null,vec__3099,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0,null,null,null));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
}));

(thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var G__3104 = arguments.length;
switch (G__3104) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__3105){
var vec__3106 = p__3105;
var c = cljs.core.nth.call(null,vec__3106,(0),null);
var m = cljs.core.nth.call(null,vec__3106,(1),null);
var y = cljs.core.nth.call(null,vec__3106,(2),null);
var k = cljs.core.nth.call(null,vec__3106,(3),null);
var a = cljs.core.nth.call(null,vec__3106,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0,null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5);

thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),1.0,null,null,null));
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.call(null,(1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.call(null,(0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.call(null,(0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.call(null,(0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.call(null,(1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.call(null,(1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.call(null,(0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.call(null,(1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.call(null,0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.math.core.SIXTH)){
var a__1417__auto__ = f1;
return (((f2 - a__1417__auto__) * (6.0 * h__$1)) + a__1417__auto__);
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.math.core.TWO_THIRD)){
var a__1417__auto__ = f1;
return (((f2 - a__1417__auto__) * ((thi.ng.math.core.TWO_THIRD - h__$1) * 6.0)) + a__1417__auto__);
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod.call(null,(6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 3.0)) - (1)),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 2.0))),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 4.0))),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__3110 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.math.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.math.core.THIRD)], null));
var px = cljs.core.nth.call(null,vec__3110,(0),null);
var py = cljs.core.nth.call(null,vec__3110,(1),null);
var pz = cljs.core.nth.call(null,vec__3110,(2),null);
var pw = cljs.core.nth.call(null,vec__3110,(3),null);
var vec__3113 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.call(null,vec__3113,(0),null);
var qy = cljs.core.nth.call(null,vec__3113,(1),null);
var qz = cljs.core.nth.call(null,vec__3113,(2),null);
var qw = cljs.core.nth.call(null,vec__3113,(3),null);
var c = (qx - (function (){var x__4309__auto__ = qw;
var y__4310__auto__ = qy;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})());
var h = thi.ng.math.core.abs_STAR_.call(null,(((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,h,0.0,1.0),thi.ng.math.core.clamp.call(null,c,0.0,1.0),thi.ng.math.core.clamp.call(null,qx,0.0,1.0),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__3116 = thi.ng.color.core.rgba__GT_hcva.call(null,rgba);
var h = cljs.core.nth.call(null,vec__3116,(0),null);
var c = cljs.core.nth.call(null,vec__3116,(1),null);
var v = cljs.core.nth.call(null,vec__3116,(2),null);
var a = cljs.core.nth.call(null,vec__3116,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__3119 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3119,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3119,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3119,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * ((1.0 - z) / (1.0 - y))),0.0,1.0),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * (z / y)),0.0,1.0),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var G__3123 = arguments.length;
switch (G__3123) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.call(null,thi.ng.color.core.hcya__GT_rgba,hcya);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.call(null,h,c,y,1.0);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__3124 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r = cljs.core.nth.call(null,vec__3124,(0),null);
var g = cljs.core.nth.call(null,vec__3124,(1),null);
var b = cljs.core.nth.call(null,vec__3124,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,(((r - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((g - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((b - z) * c_SINGLEQUOTE_) + y),0.0,1.0),a,null,null,null));
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var G__3129 = arguments.length;
switch (G__3129) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.call(null,thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.call(null,y,cb,cr,1.0);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((cr_SINGLEQUOTE_ * 1.402) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414))),0.0,1.0),thi.ng.math.core.clamp.call(null,((cb_SINGLEQUOTE_ * 1.772) + y),0.0,1.0),a,null,null,null));
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(((0.299 * r) + (0.587 * g)) + (0.114 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var G__3132 = arguments.length;
switch (G__3132) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.call(null,thi.ng.color.core.yuva__GT_rgba,yuva);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.call(null,y,u,v,1.0);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((1.13983 * v) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((0.39465 * u) + (0.5806 * v))),0.0,1.0),thi.ng.math.core.clamp.call(null,((2.03211 * u) + y),0.0,1.0),a,null,null,null));
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp.call(null,(((x < 0.0031308))?(12.92 * x):((1.055 * Math.pow(x,((1) / 2.4))) - 0.055)),0.0,1.0);
});
thi.ng.color.core.cie1931__GT_rgba = (function thi$ng$color$core$cie1931__GT_rgba(var_args){
var G__3135 = arguments.length;
switch (G__3135) {
case 1:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.call(null,thi.ng.color.core.cie1931__GT_rgba,xyz);
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgba.call(null,x,y,z,1.0);
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.cie1931_gamma_correct.call(null,(((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a,null,null,null));
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,hex)))?cljs.core.subs.call(null,hex,(1)):hex);
var len = cljs.core.count.call(null,hex__$1);
if(((3) === len)){
var vec__3137 = hex__$1;
var r = cljs.core.nth.call(null,vec__3137,(0),null);
var g = cljs.core.nth.call(null,vec__3137,(1),null);
var b = cljs.core.nth.call(null,vec__3137,(2),null);
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16),(0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
} else {
return thi.ng.color.core.int32.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float.call(null,cljs.core.subs.call(null,c,(0),(cljs.core.count.call(null,c) - (1)))));
} else {
return (thi.ng.math.core.INV8BIT * thi.ng.strf.core.parse_int.call(null,c,(10),(0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,col))){
return thi.ng.color.core.hex__GT_int.call(null,col);
} else {
var vec__3140 = cljs.core.re_seq.call(null,/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__3143 = cljs.core.nth.call(null,vec__3140,(0),null);
var _ = cljs.core.nth.call(null,vec__3143,(0),null);
var mode = cljs.core.nth.call(null,vec__3143,(1),null);
var a = cljs.core.nth.call(null,vec__3143,(2),null);
var b = cljs.core.nth.call(null,vec__3143,(3),null);
var c = cljs.core.nth.call(null,vec__3143,(4),null);
var d = cljs.core.nth.call(null,vec__3143,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null).call(null,mode))){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val.call(null,a),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0),null,null,null));
} else {
return thi.ng.color.core.as_rgba.call(null,(new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float.call(null,a) / 360.0),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0),null,null,null)));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.cie1931__GT_rgba,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.call(null,(function (p1__3146_SHARP_){
return (p1__3146_SHARP_ / 360.0);
}),cljs.core.range.call(null,(0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys.call(null,thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var G__3148 = arguments.length;
switch (G__3148) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.call(null,col,thi.ng.color.core.hues);
}));

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue.call(null,col);
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__3149,p__3150){
var vec__3151 = p__3149;
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3151,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3151,(1),null);
var vec__3154 = p__3150;
var k = cljs.core.nth.call(null,vec__3154,(0),null);
var v = cljs.core.nth.call(null,vec__3154,(1),null);
var d = (function (){var x__4309__auto__ = thi.ng.math.core.abs_diff.call(null,h,v);
var y__4310__auto__ = thi.ng.math.core.abs_diff.call(null,(h - (1)),v);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
}));

(thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2);

/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba.call(null,col);
return (new thi.ng.color.core.RGBA(Math.pow(col__$1.r,gamma),Math.pow(col__$1.g,gamma),Math.pow(col__$1.b,gamma),col__$1.a,null,null,null));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue.call(null,col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.rotate_hue.call(null,col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(var_args){
var G__3159 = arguments.length;
switch (G__3159) {
case 2:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2 = (function (col,delta){
return thi.ng.color.core.random_analog.call(null,col,delta,delta,delta);
}));

(thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4 = (function (col,theta,sat,bright){
return thi.ng.color.core.analog.call(null,col,(thi.ng.math.core.randnorm.call(null) * theta),(thi.ng.math.core.randnorm.call(null) * sat),(thi.ng.math.core.randnorm.call(null) * bright));
}));

(thi.ng.color.core.random_analog.cljs$lang$maxFixedArity = 4);

/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__3161 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,a));
var ra = cljs.core.nth.call(null,vec__3161,(0),null);
var ga = cljs.core.nth.call(null,vec__3161,(1),null);
var ba = cljs.core.nth.call(null,vec__3161,(2),null);
var vec__3164 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,b));
var rb = cljs.core.nth.call(null,vec__3164,(0),null);
var gb = cljs.core.nth.call(null,vec__3164,(1),null);
var bb = cljs.core.nth.call(null,vec__3164,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
return Math.sqrt((((dr * dr) + (dg * dg)) + (db * db)));
});
/**
 * Returns HSV distance of any two colors (in cartesian space).
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__3167 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,a));
var ha = cljs.core.nth.call(null,vec__3167,(0),null);
var sa = cljs.core.nth.call(null,vec__3167,(1),null);
var va = cljs.core.nth.call(null,vec__3167,(2),null);
var vec__3170 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,b));
var hb = cljs.core.nth.call(null,vec__3170,(0),null);
var sb = cljs.core.nth.call(null,vec__3170,(1),null);
var vb = cljs.core.nth.call(null,vec__3170,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
return Math.sqrt((((dh * dh) + (ds * ds)) + (dv * dv)));
});

//# sourceMappingURL=core.js.map
