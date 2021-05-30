// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.math.core');
goog.require('cljs.core');

/**
 * @interface
 */
thi.ng.math.core.IMathOps = function(){};

var thi$ng$math$core$IMathOps$_PLUS_$dyn_2463 = (function() {
var G__2464 = null;
var G__2464__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
});
var G__2464__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
});
var G__2464__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
});
var G__2464__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
});
G__2464 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2464__1.call(this,_);
case 2:
return G__2464__2.call(this,_,a);
case 3:
return G__2464__3.call(this,_,a,b);
case 4:
return G__2464__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2464.cljs$core$IFn$_invoke$arity$1 = G__2464__1;
G__2464.cljs$core$IFn$_invoke$arity$2 = G__2464__2;
G__2464.cljs$core$IFn$_invoke$arity$3 = G__2464__3;
G__2464.cljs$core$IFn$_invoke$arity$4 = G__2464__4;
return G__2464;
})()
;
thi.ng.math.core._PLUS_ = (function thi$ng$math$core$_PLUS_(var_args){
var G__2456 = arguments.length;
switch (G__2456) {
case 1:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_2463.call(null,_);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_2463.call(null,_,a);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_2463.call(null,_,a,b);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_2463.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._PLUS_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$_$dyn_2466 = (function() {
var G__2467 = null;
var G__2467__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
});
var G__2467__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
});
var G__2467__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
});
var G__2467__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
});
G__2467 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2467__1.call(this,_);
case 2:
return G__2467__2.call(this,_,a);
case 3:
return G__2467__3.call(this,_,a,b);
case 4:
return G__2467__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2467.cljs$core$IFn$_invoke$arity$1 = G__2467__1;
G__2467.cljs$core$IFn$_invoke$arity$2 = G__2467__2;
G__2467.cljs$core$IFn$_invoke$arity$3 = G__2467__3;
G__2467.cljs$core$IFn$_invoke$arity$4 = G__2467__4;
return G__2467;
})()
;
thi.ng.math.core._ = (function thi$ng$math$core$_(var_args){
var G__2458 = arguments.length;
switch (G__2458) {
case 1:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$_$dyn_2466.call(null,_);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_$dyn_2466.call(null,_,a);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_$dyn_2466.call(null,_,a,b);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_$dyn_2466.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$_STAR_$dyn_2469 = (function() {
var G__2470 = null;
var G__2470__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
});
var G__2470__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
});
var G__2470__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
});
var G__2470__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
});
G__2470 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2470__1.call(this,_);
case 2:
return G__2470__2.call(this,_,a);
case 3:
return G__2470__3.call(this,_,a,b);
case 4:
return G__2470__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2470.cljs$core$IFn$_invoke$arity$1 = G__2470__1;
G__2470.cljs$core$IFn$_invoke$arity$2 = G__2470__2;
G__2470.cljs$core$IFn$_invoke$arity$3 = G__2470__3;
G__2470.cljs$core$IFn$_invoke$arity$4 = G__2470__4;
return G__2470;
})()
;
thi.ng.math.core._STAR_ = (function thi$ng$math$core$_STAR_(var_args){
var G__2460 = arguments.length;
switch (G__2460) {
case 1:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_2469.call(null,_);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_2469.call(null,_,a);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_2469.call(null,_,a,b);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_2469.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._STAR_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$div$dyn_2472 = (function() {
var G__2473 = null;
var G__2473__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
});
var G__2473__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
});
var G__2473__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
});
var G__2473__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
});
G__2473 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2473__1.call(this,_);
case 2:
return G__2473__2.call(this,_,a);
case 3:
return G__2473__3.call(this,_,a,b);
case 4:
return G__2473__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2473.cljs$core$IFn$_invoke$arity$1 = G__2473__1;
G__2473.cljs$core$IFn$_invoke$arity$2 = G__2473__2;
G__2473.cljs$core$IFn$_invoke$arity$3 = G__2473__3;
G__2473.cljs$core$IFn$_invoke$arity$4 = G__2473__4;
return G__2473;
})()
;
thi.ng.math.core.div = (function thi$ng$math$core$div(var_args){
var G__2462 = arguments.length;
switch (G__2462) {
case 1:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$div$dyn_2472.call(null,_);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$div$dyn_2472.call(null,_,a);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$div$dyn_2472.call(null,_,a,b);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$div$dyn_2472.call(null,_,a,b,c);
}
}));

(thi.ng.math.core.div.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$madd$dyn_2475 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.madd[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.madd["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.madd",_);
}
}
});
thi.ng.math.core.madd = (function thi$ng$math$core$madd(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$madd$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$madd$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$madd$dyn_2475.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$addm$dyn_2476 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.addm[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.addm["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.addm",_);
}
}
});
thi.ng.math.core.addm = (function thi$ng$math$core$addm(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$addm$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$addm$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$addm$dyn_2476.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$msub$dyn_2477 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.msub[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.msub["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.msub",_);
}
}
});
thi.ng.math.core.msub = (function thi$ng$math$core$msub(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$msub$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$msub$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$msub$dyn_2477.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$subm$dyn_2478 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.subm[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.subm["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.subm",_);
}
}
});
thi.ng.math.core.subm = (function thi$ng$math$core$subm(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$subm$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$subm$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$subm$dyn_2478.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$abs$dyn_2479 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.abs[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.abs["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.abs",_);
}
}
});
thi.ng.math.core.abs = (function thi$ng$math$core$abs(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$abs$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$abs$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$abs$dyn_2479.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMutableMathOps = function(){};

var thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_2488 = (function() {
var G__2489 = null;
var G__2489__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
});
var G__2489__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
});
var G__2489__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
});
var G__2489__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
});
G__2489 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2489__1.call(this,_);
case 2:
return G__2489__2.call(this,_,a);
case 3:
return G__2489__3.call(this,_,a,b);
case 4:
return G__2489__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2489.cljs$core$IFn$_invoke$arity$1 = G__2489__1;
G__2489.cljs$core$IFn$_invoke$arity$2 = G__2489__2;
G__2489.cljs$core$IFn$_invoke$arity$3 = G__2489__3;
G__2489.cljs$core$IFn$_invoke$arity$4 = G__2489__4;
return G__2489;
})()
;
thi.ng.math.core._PLUS__BANG_ = (function thi$ng$math$core$_PLUS__BANG_(var_args){
var G__2481 = arguments.length;
switch (G__2481) {
case 1:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_2488.call(null,_);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_2488.call(null,_,a);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_2488.call(null,_,a,b);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_2488.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$__BANG_$dyn_2491 = (function() {
var G__2492 = null;
var G__2492__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
});
var G__2492__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
});
var G__2492__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
});
var G__2492__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
});
G__2492 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2492__1.call(this,_);
case 2:
return G__2492__2.call(this,_,a);
case 3:
return G__2492__3.call(this,_,a,b);
case 4:
return G__2492__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2492.cljs$core$IFn$_invoke$arity$1 = G__2492__1;
G__2492.cljs$core$IFn$_invoke$arity$2 = G__2492__2;
G__2492.cljs$core$IFn$_invoke$arity$3 = G__2492__3;
G__2492.cljs$core$IFn$_invoke$arity$4 = G__2492__4;
return G__2492;
})()
;
thi.ng.math.core.__BANG_ = (function thi$ng$math$core$__BANG_(var_args){
var G__2483 = arguments.length;
switch (G__2483) {
case 1:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_2491.call(null,_);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_2491.call(null,_,a);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_2491.call(null,_,a,b);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_2491.call(null,_,a,b,c);
}
}));

(thi.ng.math.core.__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_2494 = (function() {
var G__2495 = null;
var G__2495__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
});
var G__2495__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
});
var G__2495__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
});
var G__2495__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
});
G__2495 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2495__1.call(this,_);
case 2:
return G__2495__2.call(this,_,a);
case 3:
return G__2495__3.call(this,_,a,b);
case 4:
return G__2495__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2495.cljs$core$IFn$_invoke$arity$1 = G__2495__1;
G__2495.cljs$core$IFn$_invoke$arity$2 = G__2495__2;
G__2495.cljs$core$IFn$_invoke$arity$3 = G__2495__3;
G__2495.cljs$core$IFn$_invoke$arity$4 = G__2495__4;
return G__2495;
})()
;
thi.ng.math.core._STAR__BANG_ = (function thi$ng$math$core$_STAR__BANG_(var_args){
var G__2485 = arguments.length;
switch (G__2485) {
case 1:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_2494.call(null,_);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_2494.call(null,_,a);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_2494.call(null,_,a,b);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_2494.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_2497 = (function() {
var G__2498 = null;
var G__2498__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
});
var G__2498__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
});
var G__2498__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
});
var G__2498__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c);
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
});
G__2498 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__2498__1.call(this,_);
case 2:
return G__2498__2.call(this,_,a);
case 3:
return G__2498__3.call(this,_,a,b);
case 4:
return G__2498__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2498.cljs$core$IFn$_invoke$arity$1 = G__2498__1;
G__2498.cljs$core$IFn$_invoke$arity$2 = G__2498__2;
G__2498.cljs$core$IFn$_invoke$arity$3 = G__2498__3;
G__2498.cljs$core$IFn$_invoke$arity$4 = G__2498__4;
return G__2498;
})()
;
thi.ng.math.core.div_BANG_ = (function thi$ng$math$core$div_BANG_(var_args){
var G__2487 = arguments.length;
switch (G__2487) {
case 1:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_2497.call(null,_);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_2497.call(null,_,a);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_2497.call(null,_,a,b);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_2497.call(null,_,a,b,c);
}
}));

(thi.ng.math.core.div_BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$madd_BANG_$dyn_2500 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.madd_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.madd_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.madd!",_);
}
}
});
thi.ng.math.core.madd_BANG_ = (function thi$ng$math$core$madd_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$madd_BANG_$dyn_2500.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$addm_BANG_$dyn_2501 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.addm_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.addm_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.addm!",_);
}
}
});
thi.ng.math.core.addm_BANG_ = (function thi$ng$math$core$addm_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$addm_BANG_$dyn_2501.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$msub_BANG_$dyn_2502 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.msub_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.msub_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.msub!",_);
}
}
});
thi.ng.math.core.msub_BANG_ = (function thi$ng$math$core$msub_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$msub_BANG_$dyn_2502.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$subm_BANG_$dyn_2503 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.subm_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.subm_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.subm!",_);
}
}
});
thi.ng.math.core.subm_BANG_ = (function thi$ng$math$core$subm_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$subm_BANG_$dyn_2503.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$abs_BANG_$dyn_2504 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.abs_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.abs_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.abs!",_);
}
}
});
thi.ng.math.core.abs_BANG_ = (function thi$ng$math$core$abs_BANG_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$abs_BANG_$dyn_2504.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IConjugate = function(){};

var thi$ng$math$core$IConjugate$conjugate$dyn_2505 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.conjugate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.conjugate["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConjugate.conjugate",_);
}
}
});
thi.ng.math.core.conjugate = (function thi$ng$math$core$conjugate(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IConjugate$conjugate$arity$1 == null)))))){
return _.thi$ng$math$core$IConjugate$conjugate$arity$1(_);
} else {
return thi$ng$math$core$IConjugate$conjugate$dyn_2505.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.ICrossProduct = function(){};

var thi$ng$math$core$ICrossProduct$cross$dyn_2506 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.cross[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.cross["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossProduct.cross",_);
}
}
});
thi.ng.math.core.cross = (function thi$ng$math$core$cross(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ICrossProduct$cross$arity$2 == null)))))){
return _.thi$ng$math$core$ICrossProduct$cross$arity$2(_,a);
} else {
return thi$ng$math$core$ICrossProduct$cross$dyn_2506.call(null,_,a);
}
});


/**
 * @interface
 */
thi.ng.math.core.IDeltaEquals = function(){};

var thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_2509 = (function() {
var G__2510 = null;
var G__2510__2 = (function (a,b){
var x__4521__auto__ = (((a == null))?null:a);
var m__4522__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.delta_EQ_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IDeltaEquals.delta=",a);
}
}
});
var G__2510__3 = (function (a,b,eps){
var x__4521__auto__ = (((a == null))?null:a);
var m__4522__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,a,b,eps);
} else {
var m__4519__auto__ = (thi.ng.math.core.delta_EQ_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,a,b,eps);
} else {
throw cljs.core.missing_protocol.call(null,"IDeltaEquals.delta=",a);
}
}
});
G__2510 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__2510__2.call(this,a,b);
case 3:
return G__2510__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2510.cljs$core$IFn$_invoke$arity$2 = G__2510__2;
G__2510.cljs$core$IFn$_invoke$arity$3 = G__2510__3;
return G__2510;
})()
;
thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(var_args){
var G__2508 = arguments.length;
switch (G__2508) {
case 2:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((((!((a == null)))) && ((!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 == null)))))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
return thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_2509.call(null,a,b);
}
}));

(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((((!((a == null)))) && ((!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 == null)))))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
return thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_2509.call(null,a,b,eps);
}
}));

(thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.math.core.IDeterminant = function(){};

var thi$ng$math$core$IDeterminant$determinant$dyn_2512 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.determinant[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.determinant["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDeterminant.determinant",_);
}
}
});
thi.ng.math.core.determinant = (function thi$ng$math$core$determinant(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDeterminant$determinant$arity$1 == null)))))){
return _.thi$ng$math$core$IDeterminant$determinant$arity$1(_);
} else {
return thi$ng$math$core$IDeterminant$determinant$dyn_2512.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IDotProduct = function(){};

var thi$ng$math$core$IDotProduct$dot$dyn_2515 = (function() {
var G__2516 = null;
var G__2516__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.dot["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDotProduct.dot",_);
}
}
});
var G__2516__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.dot["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IDotProduct.dot",_);
}
}
});
G__2516 = function(_,a){
switch(arguments.length){
case 1:
return G__2516__1.call(this,_);
case 2:
return G__2516__2.call(this,_,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2516.cljs$core$IFn$_invoke$arity$1 = G__2516__1;
G__2516.cljs$core$IFn$_invoke$arity$2 = G__2516__2;
return G__2516;
})()
;
thi.ng.math.core.dot = (function thi$ng$math$core$dot(var_args){
var G__2514 = arguments.length;
switch (G__2514) {
case 1:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDotProduct$dot$arity$1 == null)))))){
return _.thi$ng$math$core$IDotProduct$dot$arity$1(_);
} else {
return thi$ng$math$core$IDotProduct$dot$dyn_2515.call(null,_);
}
}));

(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDotProduct$dot$arity$2 == null)))))){
return _.thi$ng$math$core$IDotProduct$dot$arity$2(_,a);
} else {
return thi$ng$math$core$IDotProduct$dot$dyn_2515.call(null,_,a);
}
}));

(thi.ng.math.core.dot.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.math.core.IInterpolate = function(){};

var thi$ng$math$core$IInterpolate$mix$dyn_2520 = (function() {
var G__2521 = null;
var G__2521__2 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.math.core.mix["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix",_);
}
}
});
var G__2521__3 = (function (_,x,t){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x,t);
} else {
var m__4519__auto__ = (thi.ng.math.core.mix["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x,t);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix",_);
}
}
});
var G__2521__6 = (function (_,a,b,c,u,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b,c,u,v);
} else {
var m__4519__auto__ = (thi.ng.math.core.mix["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b,c,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix",_);
}
}
});
G__2521 = function(_,a,b,c,u,v){
switch(arguments.length){
case 2:
return G__2521__2.call(this,_,a);
case 3:
return G__2521__3.call(this,_,a,b);
case 6:
return G__2521__6.call(this,_,a,b,c,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2521.cljs$core$IFn$_invoke$arity$2 = G__2521__2;
G__2521.cljs$core$IFn$_invoke$arity$3 = G__2521__3;
G__2521.cljs$core$IFn$_invoke$arity$6 = G__2521__6;
return G__2521;
})()
;
thi.ng.math.core.mix = (function thi$ng$math$core$mix(var_args){
var G__2519 = arguments.length;
switch (G__2519) {
case 2:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$2 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$2(_,x);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_2520.call(null,_,x);
}
}));

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$3 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$3(_,x,t);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_2520.call(null,_,x,t);
}
}));

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$6 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_2520.call(null,_,a,b,c,u,v);
}
}));

(thi.ng.math.core.mix.cljs$lang$maxFixedArity = 6);


var thi$ng$math$core$IInterpolate$mix_with$dyn_2523 = (function (_,x,t,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix_with[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x,t,f);
} else {
var m__4519__auto__ = (thi.ng.math.core.mix_with["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x,t,f);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix-with",_);
}
}
});
thi.ng.math.core.mix_with = (function thi$ng$math$core$mix_with(_,x,t,f){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix_with$arity$4 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix_with$arity$4(_,x,t,f);
} else {
return thi$ng$math$core$IInterpolate$mix_with$dyn_2523.call(null,_,x,t,f);
}
});

var thi$ng$math$core$IInterpolate$step$dyn_2524 = (function (_,e){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.step[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,e);
} else {
var m__4519__auto__ = (thi.ng.math.core.step["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,e);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.step",_);
}
}
});
thi.ng.math.core.step = (function thi$ng$math$core$step(_,e){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$step$arity$2 == null)))))){
return _.thi$ng$math$core$IInterpolate$step$arity$2(_,e);
} else {
return thi$ng$math$core$IInterpolate$step$dyn_2524.call(null,_,e);
}
});

var thi$ng$math$core$IInterpolate$smoothstep$dyn_2525 = (function (_,e1,e2){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.smoothstep[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,e1,e2);
} else {
var m__4519__auto__ = (thi.ng.math.core.smoothstep["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,e1,e2);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.smoothstep",_);
}
}
});
thi.ng.math.core.smoothstep = (function thi$ng$math$core$smoothstep(_,e1,e2){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$smoothstep$arity$3 == null)))))){
return _.thi$ng$math$core$IInterpolate$smoothstep$arity$3(_,e1,e2);
} else {
return thi$ng$math$core$IInterpolate$smoothstep$dyn_2525.call(null,_,e1,e2);
}
});


/**
 * @interface
 */
thi.ng.math.core.IInvert = function(){};

var thi$ng$math$core$IInvert$invert$dyn_2526 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.invert[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.invert["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInvert.invert",_);
}
}
});
thi.ng.math.core.invert = (function thi$ng$math$core$invert(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInvert$invert$arity$1 == null)))))){
return _.thi$ng$math$core$IInvert$invert$arity$1(_);
} else {
return thi$ng$math$core$IInvert$invert$dyn_2526.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMinMax = function(){};

var thi$ng$math$core$IMinMax$min$dyn_2531 = (function() {
var G__2532 = null;
var G__2532__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.min[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.min["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.min",_);
}
}
});
var G__2532__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.min[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.min["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.min",_);
}
}
});
G__2532 = function(_,a,b){
switch(arguments.length){
case 2:
return G__2532__2.call(this,_,a);
case 3:
return G__2532__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2532.cljs$core$IFn$_invoke$arity$2 = G__2532__2;
G__2532.cljs$core$IFn$_invoke$arity$3 = G__2532__3;
return G__2532;
})()
;
thi.ng.math.core.min = (function thi$ng$math$core$min(var_args){
var G__2528 = arguments.length;
switch (G__2528) {
case 2:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$min$arity$2 == null)))))){
return _.thi$ng$math$core$IMinMax$min$arity$2(_,a);
} else {
return thi$ng$math$core$IMinMax$min$dyn_2531.call(null,_,a);
}
}));

(thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$min$arity$3 == null)))))){
return _.thi$ng$math$core$IMinMax$min$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMinMax$min$dyn_2531.call(null,_,a,b);
}
}));

(thi.ng.math.core.min.cljs$lang$maxFixedArity = 3);


var thi$ng$math$core$IMinMax$max$dyn_2534 = (function() {
var G__2535 = null;
var G__2535__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.max[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a);
} else {
var m__4519__auto__ = (thi.ng.math.core.max["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.max",_);
}
}
});
var G__2535__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.max[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,a,b);
} else {
var m__4519__auto__ = (thi.ng.math.core.max["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.max",_);
}
}
});
G__2535 = function(_,a,b){
switch(arguments.length){
case 2:
return G__2535__2.call(this,_,a);
case 3:
return G__2535__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2535.cljs$core$IFn$_invoke$arity$2 = G__2535__2;
G__2535.cljs$core$IFn$_invoke$arity$3 = G__2535__3;
return G__2535;
})()
;
thi.ng.math.core.max = (function thi$ng$math$core$max(var_args){
var G__2530 = arguments.length;
switch (G__2530) {
case 2:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$max$arity$2 == null)))))){
return _.thi$ng$math$core$IMinMax$max$arity$2(_,a);
} else {
return thi$ng$math$core$IMinMax$max$dyn_2534.call(null,_,a);
}
}));

(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$max$arity$3 == null)))))){
return _.thi$ng$math$core$IMinMax$max$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMinMax$max$dyn_2534.call(null,_,a,b);
}
}));

(thi.ng.math.core.max.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.math.core.ILimit = function(){};

var thi$ng$math$core$ILimit$limit$dyn_2537 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.limit[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.math.core.limit["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ILimit.limit",_);
}
}
});
thi.ng.math.core.limit = (function thi$ng$math$core$limit(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ILimit$limit$arity$2 == null)))))){
return _.thi$ng$math$core$ILimit$limit$arity$2(_,x);
} else {
return thi$ng$math$core$ILimit$limit$dyn_2537.call(null,_,x);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMagnitude = function(){};

var thi$ng$math$core$IMagnitude$mag$dyn_2538 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mag[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.mag["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMagnitude.mag",_);
}
}
});
thi.ng.math.core.mag = (function thi$ng$math$core$mag(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMagnitude$mag$arity$1 == null)))))){
return _.thi$ng$math$core$IMagnitude$mag$arity$1(_);
} else {
return thi$ng$math$core$IMagnitude$mag$dyn_2538.call(null,_);
}
});

var thi$ng$math$core$IMagnitude$mag_squared$dyn_2539 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mag_squared[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.mag_squared["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMagnitude.mag-squared",_);
}
}
});
thi.ng.math.core.mag_squared = (function thi$ng$math$core$mag_squared(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMagnitude$mag_squared$arity$1 == null)))))){
return _.thi$ng$math$core$IMagnitude$mag_squared$arity$1(_);
} else {
return thi$ng$math$core$IMagnitude$mag_squared$dyn_2539.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.INormalize = function(){};

var thi$ng$math$core$INormalize$normalize$dyn_2542 = (function() {
var G__2543 = null;
var G__2543__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.normalize["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalize.normalize",_);
}
}
});
var G__2543__2 = (function (_,norm){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,norm);
} else {
var m__4519__auto__ = (thi.ng.math.core.normalize["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,norm);
} else {
throw cljs.core.missing_protocol.call(null,"INormalize.normalize",_);
}
}
});
G__2543 = function(_,norm){
switch(arguments.length){
case 1:
return G__2543__1.call(this,_);
case 2:
return G__2543__2.call(this,_,norm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2543.cljs$core$IFn$_invoke$arity$1 = G__2543__1;
G__2543.cljs$core$IFn$_invoke$arity$2 = G__2543__2;
return G__2543;
})()
;
thi.ng.math.core.normalize = (function thi$ng$math$core$normalize(var_args){
var G__2541 = arguments.length;
switch (G__2541) {
case 1:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalize$arity$1 == null)))))){
return _.thi$ng$math$core$INormalize$normalize$arity$1(_);
} else {
return thi$ng$math$core$INormalize$normalize$dyn_2542.call(null,_);
}
}));

(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,norm){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalize$arity$2 == null)))))){
return _.thi$ng$math$core$INormalize$normalize$arity$2(_,norm);
} else {
return thi$ng$math$core$INormalize$normalize$dyn_2542.call(null,_,norm);
}
}));

(thi.ng.math.core.normalize.cljs$lang$maxFixedArity = 2);


var thi$ng$math$core$INormalize$normalized_QMARK_$dyn_2545 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.normalized_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.normalized_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalize.normalized?",_);
}
}
});
thi.ng.math.core.normalized_QMARK_ = (function thi$ng$math$core$normalized_QMARK_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 == null)))))){
return _.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1(_);
} else {
return thi$ng$math$core$INormalize$normalized_QMARK_$dyn_2545.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.ISetOps = function(){};

var thi$ng$math$core$ISetOps$union$dyn_2546 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.union[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.math.core.union["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ISetOps.union",_);
}
}
});
thi.ng.math.core.union = (function thi$ng$math$core$union(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ISetOps$union$arity$2 == null)))))){
return _.thi$ng$math$core$ISetOps$union$arity$2(_,x);
} else {
return thi$ng$math$core$ISetOps$union$dyn_2546.call(null,_,x);
}
});

var thi$ng$math$core$ISetOps$intersection$dyn_2547 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.intersection[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.math.core.intersection["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ISetOps.intersection",_);
}
}
});
thi.ng.math.core.intersection = (function thi$ng$math$core$intersection(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ISetOps$intersection$arity$2 == null)))))){
return _.thi$ng$math$core$ISetOps$intersection$arity$2(_,x);
} else {
return thi$ng$math$core$ISetOps$intersection$dyn_2547.call(null,_,x);
}
});

var thi$ng$math$core$ISetOps$difference$dyn_2548 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.difference[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_,x);
} else {
var m__4519__auto__ = (thi.ng.math.core.difference["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ISetOps.difference",_);
}
}
});
thi.ng.math.core.difference = (function thi$ng$math$core$difference(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ISetOps$difference$arity$2 == null)))))){
return _.thi$ng$math$core$ISetOps$difference$arity$2(_,x);
} else {
return thi$ng$math$core$ISetOps$difference$dyn_2548.call(null,_,x);
}
});


/**
 * @interface
 */
thi.ng.math.core.ITranspose = function(){};

var thi$ng$math$core$ITranspose$transpose$dyn_2549 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.transpose[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (thi.ng.math.core.transpose["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITranspose.transpose",_);
}
}
});
thi.ng.math.core.transpose = (function thi$ng$math$core$transpose(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ITranspose$transpose$arity$1 == null)))))){
return _.thi$ng$math$core$ITranspose$transpose$arity$1(_);
} else {
return thi$ng$math$core$ITranspose$transpose$dyn_2549.call(null,_);
}
});

thi.ng.math.core.PI = Math.PI;
thi.ng.math.core.TWO_PI = (thi.ng.math.core.PI * 2.0);
thi.ng.math.core.HALF_PI = (thi.ng.math.core.PI / 2.0);
thi.ng.math.core.THIRD_PI = (thi.ng.math.core.PI / 3.0);
thi.ng.math.core.QUARTER_PI = (thi.ng.math.core.PI / 4.0);
thi.ng.math.core.SIXTH_PI = (thi.ng.math.core.PI / 6.0);
thi.ng.math.core.THREE_HALVES_PI = (thi.ng.math.core.PI * 1.5);
thi.ng.math.core.MAX = 1.7976931348623157E308;
thi.ng.math.core.MIN = 4.9E-324;
thi.ng.math.core.SQRT2 = Math.sqrt((2));
thi.ng.math.core.SQRT3 = Math.sqrt((3));
thi.ng.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.math.core.THIRD = (1.0 / 3.0);
thi.ng.math.core.TWO_THIRD = (2.0 / 3.0);
thi.ng.math.core.SIXTH = (1.0 / 6.0);
thi.ng.math.core.LOG2 = Math.log(2.0);
thi.ng.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.math.core.DEG = (180.0 / thi.ng.math.core.PI);
thi.ng.math.core.RAD = (thi.ng.math.core.PI / 180.0);
thi.ng.math.core.INV7BIT = (1.0 / (127));
thi.ng.math.core.INV8BIT = (1.0 / (255));
thi.ng.math.core.INV15BIT = (1.0 / (32767));
thi.ng.math.core.INV16BIT = (1.0 / (65535));
thi.ng.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.math.core.abs_STAR_ = Math.abs;
thi.ng.math.core.abs_diff = (function thi$ng$math$core$abs_diff(x,y){
return thi.ng.math.core.abs_STAR_.call(null,(x - y));
});
thi.ng.math.core.sign = (function thi$ng$math$core$sign(x){
if((x === (0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);
}
}
});
goog.object.set(thi.ng.math.core.IDeltaEquals,"number",true);

goog.object.set(thi.ng.math.core.delta_EQ_,"number",(function() {
var G__2550 = null;
var G__2550__2 = (function (a,b){
if(typeof b === 'number'){
return (thi.ng.math.core.abs_STAR_.call(null,(a - b)) <= thi.ng.math.core._STAR_eps_STAR_);
} else {
return null;
}
});
var G__2550__3 = (function (a,b,eps){
if(typeof b === 'number'){
return (thi.ng.math.core.abs_STAR_.call(null,(a - b)) <= eps);
} else {
return null;
}
});
G__2550 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__2550__2.call(this,a,b);
case 3:
return G__2550__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2550.cljs$core$IFn$_invoke$arity$2 = G__2550__2;
G__2550.cljs$core$IFn$_invoke$arity$3 = G__2550__3;
return G__2550;
})()
);

(cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__2551 = cljs.core.next.call(null,a__$2);
var G__2552 = cljs.core.next.call(null,b__$1);
a__$2 = G__2551;
b__$1 = G__2552;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

(cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__2553 = cljs.core.next.call(null,a__$2);
var G__2554 = cljs.core.next.call(null,b__$1);
a__$2 = G__2553;
b__$1 = G__2554;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

(cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__2555 = cljs.core.next.call(null,a__$2);
var G__2556 = cljs.core.next.call(null,b__$1);
a__$2 = G__2555;
b__$1 = G__2556;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

(cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__2557 = cljs.core.next.call(null,a__$2);
var G__2558 = cljs.core.next.call(null,b__$1);
a__$2 = G__2557;
b__$1 = G__2558;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

goog.object.set(thi.ng.math.core.IDeltaEquals,"null",true);

goog.object.set(thi.ng.math.core.delta_EQ_,"null",(function() {
var G__2559 = null;
var G__2559__2 = (function (_,b){
return (b == null);
});
var G__2559__3 = (function (_,b,___$1){
return (b == null);
});
G__2559 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__2559__2.call(this,_,b);
case 3:
return G__2559__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2559.cljs$core$IFn$_invoke$arity$2 = G__2559__2;
G__2559.cljs$core$IFn$_invoke$arity$3 = G__2559__3;
return G__2559;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.math.core.ensure_even = (function thi$ng$math$core$ensure_even(x){
if(cljs.core.even_QMARK_.call(null,x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.math.core.ensure_odd = (function thi$ng$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_.call(null,x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.math.core.signum = (function thi$ng$math$core$signum(var_args){
var G__2561 = arguments.length;
switch (G__2561) {
case 1:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
}));

(thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
}));

(thi.ng.math.core.signum.cljs$lang$maxFixedArity = 2);

/**
 * Constraints x to be closed [min .. max] interval.
 */
thi.ng.math.core.clamp = (function thi$ng$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
/**
 * Constraints x to closed [0.0 .. 1.0] interval.
 */
thi.ng.math.core.clamp_normalized = (function thi$ng$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Constraints x to closed [0 .. 1] interval.
 */
thi.ng.math.core.clamp01 = (function thi$ng$math$core$clamp01(x){
if((x < 0.0)){
return 0.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
thi.ng.math.core.clamp11 = thi.ng.math.core.clamp_normalized;
/**
 * Maps x from one interval into another. Intervals can be defined as
 *   vectors. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(var_args){
var G__2564 = arguments.length;
switch (G__2564) {
case 3:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__2565,p__2566){
var vec__2567 = p__2565;
var in1 = cljs.core.nth.call(null,vec__2567,(0),null);
var in2 = cljs.core.nth.call(null,vec__2567,(1),null);
var vec__2570 = p__2566;
var out1 = cljs.core.nth.call(null,vec__2570,(0),null);
var out2 = cljs.core.nth.call(null,vec__2570,(1),null);
if(cljs.core.not_EQ_.call(null,in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
}));

(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if(cljs.core.not_EQ_.call(null,in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
}));

(thi.ng.math.core.map_interval.cljs$lang$maxFixedArity = 5);

/**
 * Takes a number x, input interval and output interval. Returns x
 *   mapped proportionally from input to output interval and clamps it to
 *   output. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval_clamped = (function thi$ng$math$core$map_interval_clamped(var_args){
var G__2575 = arguments.length;
switch (G__2575) {
case 3:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__2576,p__2577){
var vec__2578 = p__2576;
var in1 = cljs.core.nth.call(null,vec__2578,(0),null);
var in2 = cljs.core.nth.call(null,vec__2578,(1),null);
var vec__2581 = p__2577;
var out1 = cljs.core.nth.call(null,vec__2581,(0),null);
var out2 = cljs.core.nth.call(null,vec__2581,(1),null);
return thi.ng.math.core.map_interval_clamped.call(null,x,in1,in2,out1,out2);
}));

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2);
}
}
}));

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__2584,p__2585,p__2586){
var vec__2587 = p__2584;
var in1 = cljs.core.nth.call(null,vec__2587,(0),null);
var in2 = cljs.core.nth.call(null,vec__2587,(1),null);
var vec__2590 = p__2585;
var out1 = cljs.core.nth.call(null,vec__2590,(0),null);
var out2 = cljs.core.nth.call(null,vec__2590,(1),null);
var vec__2593 = p__2586;
var c1 = cljs.core.nth.call(null,vec__2593,(0),null);
var c2 = cljs.core.nth.call(null,vec__2593,(1),null);
return thi.ng.math.core.clamp.call(null,thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
}));

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.math.core.clamp.call(null,thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
}));

(thi.ng.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7);

/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.math.core.in_range_QMARK_ = (function thi$ng$math$core$in_range_QMARK_(var_args){
var G__2598 = arguments.length;
switch (G__2598) {
case 2:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__2599,x){
var vec__2600 = p__2599;
var min = cljs.core.nth.call(null,vec__2600,(0),null);
var max = cljs.core.nth.call(null,vec__2600,(1),null);
if((x >= min)){
return (x <= max);
} else {
return null;
}
}));

(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
if((x >= min)){
return (x <= max);
} else {
return null;
}
}));

(thi.ng.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Returns x mod y with result always in semi-closed interval [0..y
 */
thi.ng.math.core.wrap_range = (function thi$ng$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem.call(null,x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of n values in the closed interval [0.0, 1.0] at
 *   resolution 1/x.
 */
thi.ng.math.core.norm_range = (function thi$ng$math$core$norm_range(n){
return cljs.core.map.call(null,(function (p1__2604_SHARP_){
return (p1__2604_SHARP_ / n);
}),cljs.core.range.call(null,(n + (1))));
});
thi.ng.math.core.mix_STAR_ = (function thi$ng$math$core$mix_STAR_(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.math.core.step_STAR_ = (function thi$ng$math$core$step_STAR_(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.math.core.smoothstep_STAR_ = (function thi$ng$math$core$smoothstep_STAR_(e0,e1,x){
var t = thi.ng.math.core.clamp.call(null,((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.math.core.mix_circular = (function thi$ng$math$core$mix_circular(a,b,t){
var t__$1 = (1.0 - t);
return (((b - a) * Math.sqrt((1.0 - (t__$1 * t__$1)))) + a);
});
thi.ng.math.core.mix_circular_flipped = (function thi$ng$math$core$mix_circular_flipped(a,b,t){
return (((b - a) * (- (Math.sqrt((1.0 - (t * t))) - 1.0))) + a);
});
thi.ng.math.core.mix_cosine = (function thi$ng$math$core$mix_cosine(a,b,t){
return (((a - b) * ((Math.cos((t * thi.ng.math.core.PI)) * 0.5) + 0.5)) + b);
});
thi.ng.math.core.mix_bezier = (function thi$ng$math$core$mix_bezier(a,b,t,c1,c2){
var tsq = (t * t);
var invt = (1.0 - t);
var itsq = (invt * invt);
return (((((a * t) * itsq) + ((((((b - a) * c1) + a) * 3.0) * t) * itsq)) + ((((((b - a) * c2) + b) * 3.0) * tsq) * invt)) + ((b * t) * tsq));
});
thi.ng.math.core.mix_exp = (function thi$ng$math$core$mix_exp(a,b,t,e){
return (((b - a) * Math.pow(t,e)) + a);
});
thi.ng.math.core.mix_decimated = (function thi$ng$math$core$mix_decimated(a,b,t,n){
return (((b - a) * (((t * n) | (0)) / n)) + a);
});
thi.ng.math.core.mix_lens = (function thi$ng$math$core$mix_lens(a,b,t,pos,strength){
var v = (((b - a) * t) + a);
return ((((t < pos))?(((((strength > (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular).call(null,a,(((b - a) * pos) + a),(t / pos)) - v) * strength):(((((strength < (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular).call(null,(((b - a) * pos) + a),b,((t - pos) / (1.0 - pos))) - v) * thi.ng.math.core.abs_STAR_.call(null,strength))) + v);
});
thi.ng.math.core.mix_bounce = (function thi$ng$math$core$mix_bounce(a,b,t,k){
if((!((t === (0))))){
var t_SINGLEQUOTE_ = (t * k);
var t_SINGLEQUOTE___$1 = (1.0 - ((Math.sin(t_SINGLEQUOTE_) / t_SINGLEQUOTE_) * Math.cos((t * thi.ng.math.core.HALF_PI))));
return (((b - a) * t_SINGLEQUOTE___$1) + a);
} else {
return a;
}
});
thi.ng.math.core.floor = (function thi$ng$math$core$floor(x){
return Math.floor(x);
});
thi.ng.math.core.ceil = (function thi$ng$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.math.core.roundto = (function thi$ng$math$core$roundto(x,prec){
return (thi.ng.math.core.floor.call(null,((x / prec) + 0.5)) * prec);
});
thi.ng.math.core.ceil_pow2 = (function thi$ng$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__2605 = (pow2 << (1));
pow2 = G__2605;
continue;
}
break;
}
});
thi.ng.math.core.floor_pow2 = (function thi$ng$math$core$floor_pow2(x){
return Math.pow((2),((Math.log(x) / thi.ng.math.core.LOG2) | (0)));
});
thi.ng.math.core.bit_count = (function thi$ng$math$core$bit_count(x){
return thi.ng.math.core.ceil.call(null,(Math.log(x) / thi.ng.math.core.LOG2));
});
thi.ng.math.core.trunc = (function thi$ng$math$core$trunc(x){
if((x < (0))){
return thi.ng.math.core.ceil.call(null,x);
} else {
return thi.ng.math.core.floor.call(null,x);
}
});
thi.ng.math.core.fract = (function thi$ng$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.math.core.fdim = (function thi$ng$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.math.core.radians = (function thi$ng$math$core$radians(x){
return (x * thi.ng.math.core.RAD);
});
thi.ng.math.core.degrees = (function thi$ng$math$core$degrees(x){
return (x * thi.ng.math.core.DEG);
});
thi.ng.math.core.maxmag = (function thi$ng$math$core$maxmag(x,y){
var ax = thi.ng.math.core.abs_STAR_.call(null,x);
var ay = thi.ng.math.core.abs_STAR_.call(null,y);
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.minmag = (function thi$ng$math$core$minmag(x,y){
var ax = thi.ng.math.core.abs_STAR_.call(null,x);
var ay = thi.ng.math.core.abs_STAR_.call(null,y);
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.ldexp = (function thi$ng$math$core$ldexp(x,k){
return (x * Math.pow((2),(k | (0))));
});
thi.ng.math.core.remquo = (function thi$ng$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.math.core.fract.call(null,k);
var k__$1 = ((cljs.core._EQ_.call(null,f,0.5))?((cljs.core.even_QMARK_.call(null,(k | (0))))?(k | (0)):thi.ng.math.core.ceil.call(null,k)):(((f < 0.5))?thi.ng.math.core.floor.call(null,k):thi.ng.math.core.ceil.call(null,k)
));
return (x - (k__$1 * y));
});
thi.ng.math.core.hypot = (function thi$ng$math$core$hypot(x,y){
return Math.sqrt(((x * x) + (y * y)));
});
thi.ng.math.core.rootn = (function thi$ng$math$core$rootn(x,y){
return Math.pow(x,(1.0 / y));
});
thi.ng.math.core.rsqrt = (function thi$ng$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.math.core.impulse = (function thi$ng$math$core$impulse(k,t){
var h = (k * t);
return (h * Math.exp((1.0 - h)));
});
thi.ng.math.core.sinc = (function thi$ng$math$core$sinc(var_args){
var G__2607 = arguments.length;
switch (G__2607) {
case 1:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x === (0))){
return 0.0;
} else {
return (Math.sin(x) / x);
}
}));

(thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2 = (function (x,freq){
if((x === (0))){
return 0.0;
} else {
var x_SINGLEQUOTE_ = (x * freq);
return (Math.sin(x_SINGLEQUOTE_) / x_SINGLEQUOTE_);
}
}));

(thi.ng.math.core.sinc.cljs$lang$maxFixedArity = 2);

thi.ng.math.core.random = (function thi$ng$math$core$random(var_args){
var G__2610 = arguments.length;
switch (G__2610) {
case 0:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core._STAR_rnd_STAR_.call(null);
}));

(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return (thi.ng.math.core._STAR_rnd_STAR_.call(null) * max);
}));

(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * thi.ng.math.core._STAR_rnd_STAR_.call(null)) + min);
}));

(thi.ng.math.core.random.cljs$lang$maxFixedArity = 2);

thi.ng.math.core.randnorm = (function thi$ng$math$core$randnorm(){
return ((thi.ng.math.core._STAR_rnd_STAR_.call(null) * 2.0) - (1));
});
thi.ng.math.core.percentile_index = (function thi$ng$math$core$percentile_index(n,num){
return ((((n < (100)))?(Math.round((((n / 100.0) * num) + 0.5)) | (0)):num) - (1));
});
thi.ng.math.core.percentile = (function thi$ng$math$core$percentile(n,sorted){
return cljs.core.nth.call(null,sorted,thi.ng.math.core.percentile_index.call(null,n,cljs.core.count.call(null,sorted)));
});
thi.ng.math.core.quartile_index = (function thi$ng$math$core$quartile_index(n,num){
return thi.ng.math.core.percentile_index.call(null,(n * (25)),num);
});
thi.ng.math.core.quartile_range = (function thi$ng$math$core$quartile_range(n,num){
var a = thi.ng.math.core.quartile_index.call(null,(n - (1)),num);
var b = thi.ng.math.core.quartile_index.call(null,n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.call(null,n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.math.core.quartile = (function thi$ng$math$core$quartile(n,sorted){
var vec__2612 = thi.ng.math.core.quartile_range.call(null,n,cljs.core.count.call(null,sorted));
var a = cljs.core.nth.call(null,vec__2612,(0),null);
var b = cljs.core.nth.call(null,vec__2612,(1),null);
return cljs.core.take.call(null,(b - a),cljs.core.drop.call(null,a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(var_args){
var G__2617 = arguments.length;
switch (G__2617) {
case 1:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normdist_weights.call(null,n,1.0);
}));

(thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.call(null,n,thi.ng.math.core.random);
var s = (scale / cljs.core.reduce.call(null,cljs.core._PLUS_,ws));
return cljs.core.map.call(null,(function (p1__2615_SHARP_){
return (s * p1__2615_SHARP_);
}),ws);
}));

(thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map
