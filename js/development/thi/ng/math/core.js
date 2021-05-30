// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.math.core');
goog.require('cljs.core');

/**
 * @interface
 */
thi.ng.math.core.IMathOps = function(){};

var thi$ng$math$core$IMathOps$_PLUS_$dyn_1452 = (function() {
var G__1453 = null;
var G__1453__1 = (function (_){
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
var G__1453__2 = (function (_,a){
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
var G__1453__3 = (function (_,a,b){
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
var G__1453__4 = (function (_,a,b,c){
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
G__1453 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1453__1.call(this,_);
case 2:
return G__1453__2.call(this,_,a);
case 3:
return G__1453__3.call(this,_,a,b);
case 4:
return G__1453__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1453.cljs$core$IFn$_invoke$arity$1 = G__1453__1;
G__1453.cljs$core$IFn$_invoke$arity$2 = G__1453__2;
G__1453.cljs$core$IFn$_invoke$arity$3 = G__1453__3;
G__1453.cljs$core$IFn$_invoke$arity$4 = G__1453__4;
return G__1453;
})()
;
thi.ng.math.core._PLUS_ = (function thi$ng$math$core$_PLUS_(var_args){
var G__1445 = arguments.length;
switch (G__1445) {
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
return thi$ng$math$core$IMathOps$_PLUS_$dyn_1452.call(null,_);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_1452.call(null,_,a);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_1452.call(null,_,a,b);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_1452.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._PLUS_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$_$dyn_1455 = (function() {
var G__1456 = null;
var G__1456__1 = (function (_){
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
var G__1456__2 = (function (_,a){
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
var G__1456__3 = (function (_,a,b){
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
var G__1456__4 = (function (_,a,b,c){
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
G__1456 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1456__1.call(this,_);
case 2:
return G__1456__2.call(this,_,a);
case 3:
return G__1456__3.call(this,_,a,b);
case 4:
return G__1456__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1456.cljs$core$IFn$_invoke$arity$1 = G__1456__1;
G__1456.cljs$core$IFn$_invoke$arity$2 = G__1456__2;
G__1456.cljs$core$IFn$_invoke$arity$3 = G__1456__3;
G__1456.cljs$core$IFn$_invoke$arity$4 = G__1456__4;
return G__1456;
})()
;
thi.ng.math.core._ = (function thi$ng$math$core$_(var_args){
var G__1447 = arguments.length;
switch (G__1447) {
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
return thi$ng$math$core$IMathOps$_$dyn_1455.call(null,_);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_$dyn_1455.call(null,_,a);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_$dyn_1455.call(null,_,a,b);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_$dyn_1455.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$_STAR_$dyn_1458 = (function() {
var G__1459 = null;
var G__1459__1 = (function (_){
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
var G__1459__2 = (function (_,a){
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
var G__1459__3 = (function (_,a,b){
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
var G__1459__4 = (function (_,a,b,c){
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
G__1459 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1459__1.call(this,_);
case 2:
return G__1459__2.call(this,_,a);
case 3:
return G__1459__3.call(this,_,a,b);
case 4:
return G__1459__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1459.cljs$core$IFn$_invoke$arity$1 = G__1459__1;
G__1459.cljs$core$IFn$_invoke$arity$2 = G__1459__2;
G__1459.cljs$core$IFn$_invoke$arity$3 = G__1459__3;
G__1459.cljs$core$IFn$_invoke$arity$4 = G__1459__4;
return G__1459;
})()
;
thi.ng.math.core._STAR_ = (function thi$ng$math$core$_STAR_(var_args){
var G__1449 = arguments.length;
switch (G__1449) {
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
return thi$ng$math$core$IMathOps$_STAR_$dyn_1458.call(null,_);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_1458.call(null,_,a);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_1458.call(null,_,a,b);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_1458.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._STAR_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$div$dyn_1461 = (function() {
var G__1462 = null;
var G__1462__1 = (function (_){
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
var G__1462__2 = (function (_,a){
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
var G__1462__3 = (function (_,a,b){
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
var G__1462__4 = (function (_,a,b,c){
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
G__1462 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1462__1.call(this,_);
case 2:
return G__1462__2.call(this,_,a);
case 3:
return G__1462__3.call(this,_,a,b);
case 4:
return G__1462__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1462.cljs$core$IFn$_invoke$arity$1 = G__1462__1;
G__1462.cljs$core$IFn$_invoke$arity$2 = G__1462__2;
G__1462.cljs$core$IFn$_invoke$arity$3 = G__1462__3;
G__1462.cljs$core$IFn$_invoke$arity$4 = G__1462__4;
return G__1462;
})()
;
thi.ng.math.core.div = (function thi$ng$math$core$div(var_args){
var G__1451 = arguments.length;
switch (G__1451) {
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
return thi$ng$math$core$IMathOps$div$dyn_1461.call(null,_);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$div$dyn_1461.call(null,_,a);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$div$dyn_1461.call(null,_,a,b);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$div$dyn_1461.call(null,_,a,b,c);
}
}));

(thi.ng.math.core.div.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$madd$dyn_1464 = (function (_,a,b){
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
return thi$ng$math$core$IMathOps$madd$dyn_1464.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$addm$dyn_1465 = (function (_,a,b){
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
return thi$ng$math$core$IMathOps$addm$dyn_1465.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$msub$dyn_1466 = (function (_,a,b){
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
return thi$ng$math$core$IMathOps$msub$dyn_1466.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$subm$dyn_1467 = (function (_,a,b){
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
return thi$ng$math$core$IMathOps$subm$dyn_1467.call(null,_,a,b);
}
});

var thi$ng$math$core$IMathOps$abs$dyn_1468 = (function (_){
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
return thi$ng$math$core$IMathOps$abs$dyn_1468.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMutableMathOps = function(){};

var thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_1477 = (function() {
var G__1478 = null;
var G__1478__1 = (function (_){
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
var G__1478__2 = (function (_,a){
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
var G__1478__3 = (function (_,a,b){
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
var G__1478__4 = (function (_,a,b,c){
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
G__1478 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1478__1.call(this,_);
case 2:
return G__1478__2.call(this,_,a);
case 3:
return G__1478__3.call(this,_,a,b);
case 4:
return G__1478__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1478.cljs$core$IFn$_invoke$arity$1 = G__1478__1;
G__1478.cljs$core$IFn$_invoke$arity$2 = G__1478__2;
G__1478.cljs$core$IFn$_invoke$arity$3 = G__1478__3;
G__1478.cljs$core$IFn$_invoke$arity$4 = G__1478__4;
return G__1478;
})()
;
thi.ng.math.core._PLUS__BANG_ = (function thi$ng$math$core$_PLUS__BANG_(var_args){
var G__1470 = arguments.length;
switch (G__1470) {
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
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_1477.call(null,_);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_1477.call(null,_,a);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_1477.call(null,_,a,b);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_1477.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$__BANG_$dyn_1480 = (function() {
var G__1481 = null;
var G__1481__1 = (function (_){
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
var G__1481__2 = (function (_,a){
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
var G__1481__3 = (function (_,a,b){
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
var G__1481__4 = (function (_,a,b,c){
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
G__1481 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1481__1.call(this,_);
case 2:
return G__1481__2.call(this,_,a);
case 3:
return G__1481__3.call(this,_,a,b);
case 4:
return G__1481__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1481.cljs$core$IFn$_invoke$arity$1 = G__1481__1;
G__1481.cljs$core$IFn$_invoke$arity$2 = G__1481__2;
G__1481.cljs$core$IFn$_invoke$arity$3 = G__1481__3;
G__1481.cljs$core$IFn$_invoke$arity$4 = G__1481__4;
return G__1481;
})()
;
thi.ng.math.core.__BANG_ = (function thi$ng$math$core$__BANG_(var_args){
var G__1472 = arguments.length;
switch (G__1472) {
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
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_1480.call(null,_);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_1480.call(null,_,a);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_1480.call(null,_,a,b);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_1480.call(null,_,a,b,c);
}
}));

(thi.ng.math.core.__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_1483 = (function() {
var G__1484 = null;
var G__1484__1 = (function (_){
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
var G__1484__2 = (function (_,a){
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
var G__1484__3 = (function (_,a,b){
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
var G__1484__4 = (function (_,a,b,c){
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
G__1484 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1484__1.call(this,_);
case 2:
return G__1484__2.call(this,_,a);
case 3:
return G__1484__3.call(this,_,a,b);
case 4:
return G__1484__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1484.cljs$core$IFn$_invoke$arity$1 = G__1484__1;
G__1484.cljs$core$IFn$_invoke$arity$2 = G__1484__2;
G__1484.cljs$core$IFn$_invoke$arity$3 = G__1484__3;
G__1484.cljs$core$IFn$_invoke$arity$4 = G__1484__4;
return G__1484;
})()
;
thi.ng.math.core._STAR__BANG_ = (function thi$ng$math$core$_STAR__BANG_(var_args){
var G__1474 = arguments.length;
switch (G__1474) {
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
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_1483.call(null,_);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_1483.call(null,_,a);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_1483.call(null,_,a,b);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_1483.call(null,_,a,b,c);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_1486 = (function() {
var G__1487 = null;
var G__1487__1 = (function (_){
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
var G__1487__2 = (function (_,a){
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
var G__1487__3 = (function (_,a,b){
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
var G__1487__4 = (function (_,a,b,c){
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
G__1487 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__1487__1.call(this,_);
case 2:
return G__1487__2.call(this,_,a);
case 3:
return G__1487__3.call(this,_,a,b);
case 4:
return G__1487__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1487.cljs$core$IFn$_invoke$arity$1 = G__1487__1;
G__1487.cljs$core$IFn$_invoke$arity$2 = G__1487__2;
G__1487.cljs$core$IFn$_invoke$arity$3 = G__1487__3;
G__1487.cljs$core$IFn$_invoke$arity$4 = G__1487__4;
return G__1487;
})()
;
thi.ng.math.core.div_BANG_ = (function thi$ng$math$core$div_BANG_(var_args){
var G__1476 = arguments.length;
switch (G__1476) {
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
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_1486.call(null,_);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_1486.call(null,_,a);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_1486.call(null,_,a,b);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_1486.call(null,_,a,b,c);
}
}));

(thi.ng.math.core.div_BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$madd_BANG_$dyn_1489 = (function (_,a,b){
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
return thi$ng$math$core$IMutableMathOps$madd_BANG_$dyn_1489.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$addm_BANG_$dyn_1490 = (function (_,a,b){
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
return thi$ng$math$core$IMutableMathOps$addm_BANG_$dyn_1490.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$msub_BANG_$dyn_1491 = (function (_,a,b){
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
return thi$ng$math$core$IMutableMathOps$msub_BANG_$dyn_1491.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$subm_BANG_$dyn_1492 = (function (_,a,b){
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
return thi$ng$math$core$IMutableMathOps$subm_BANG_$dyn_1492.call(null,_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$abs_BANG_$dyn_1493 = (function (_){
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
return thi$ng$math$core$IMutableMathOps$abs_BANG_$dyn_1493.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IConjugate = function(){};

var thi$ng$math$core$IConjugate$conjugate$dyn_1494 = (function (_){
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
return thi$ng$math$core$IConjugate$conjugate$dyn_1494.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.ICrossProduct = function(){};

var thi$ng$math$core$ICrossProduct$cross$dyn_1495 = (function (_,a){
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
return thi$ng$math$core$ICrossProduct$cross$dyn_1495.call(null,_,a);
}
});


/**
 * @interface
 */
thi.ng.math.core.IDeltaEquals = function(){};

var thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_1498 = (function() {
var G__1499 = null;
var G__1499__2 = (function (a,b){
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
var G__1499__3 = (function (a,b,eps){
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
G__1499 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__1499__2.call(this,a,b);
case 3:
return G__1499__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1499.cljs$core$IFn$_invoke$arity$2 = G__1499__2;
G__1499.cljs$core$IFn$_invoke$arity$3 = G__1499__3;
return G__1499;
})()
;
thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(var_args){
var G__1497 = arguments.length;
switch (G__1497) {
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
return thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_1498.call(null,a,b);
}
}));

(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((((!((a == null)))) && ((!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 == null)))))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
return thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_1498.call(null,a,b,eps);
}
}));

(thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.math.core.IDeterminant = function(){};

var thi$ng$math$core$IDeterminant$determinant$dyn_1501 = (function (_){
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
return thi$ng$math$core$IDeterminant$determinant$dyn_1501.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IDotProduct = function(){};

var thi$ng$math$core$IDotProduct$dot$dyn_1504 = (function() {
var G__1505 = null;
var G__1505__1 = (function (_){
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
var G__1505__2 = (function (_,a){
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
G__1505 = function(_,a){
switch(arguments.length){
case 1:
return G__1505__1.call(this,_);
case 2:
return G__1505__2.call(this,_,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1505.cljs$core$IFn$_invoke$arity$1 = G__1505__1;
G__1505.cljs$core$IFn$_invoke$arity$2 = G__1505__2;
return G__1505;
})()
;
thi.ng.math.core.dot = (function thi$ng$math$core$dot(var_args){
var G__1503 = arguments.length;
switch (G__1503) {
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
return thi$ng$math$core$IDotProduct$dot$dyn_1504.call(null,_);
}
}));

(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDotProduct$dot$arity$2 == null)))))){
return _.thi$ng$math$core$IDotProduct$dot$arity$2(_,a);
} else {
return thi$ng$math$core$IDotProduct$dot$dyn_1504.call(null,_,a);
}
}));

(thi.ng.math.core.dot.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.math.core.IInterpolate = function(){};

var thi$ng$math$core$IInterpolate$mix$dyn_1509 = (function() {
var G__1510 = null;
var G__1510__2 = (function (_,x){
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
var G__1510__3 = (function (_,x,t){
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
var G__1510__6 = (function (_,a,b,c,u,v){
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
G__1510 = function(_,a,b,c,u,v){
switch(arguments.length){
case 2:
return G__1510__2.call(this,_,a);
case 3:
return G__1510__3.call(this,_,a,b);
case 6:
return G__1510__6.call(this,_,a,b,c,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1510.cljs$core$IFn$_invoke$arity$2 = G__1510__2;
G__1510.cljs$core$IFn$_invoke$arity$3 = G__1510__3;
G__1510.cljs$core$IFn$_invoke$arity$6 = G__1510__6;
return G__1510;
})()
;
thi.ng.math.core.mix = (function thi$ng$math$core$mix(var_args){
var G__1508 = arguments.length;
switch (G__1508) {
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
return thi$ng$math$core$IInterpolate$mix$dyn_1509.call(null,_,x);
}
}));

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$3 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$3(_,x,t);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_1509.call(null,_,x,t);
}
}));

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$6 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_1509.call(null,_,a,b,c,u,v);
}
}));

(thi.ng.math.core.mix.cljs$lang$maxFixedArity = 6);


var thi$ng$math$core$IInterpolate$mix_with$dyn_1512 = (function (_,x,t,f){
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
return thi$ng$math$core$IInterpolate$mix_with$dyn_1512.call(null,_,x,t,f);
}
});

var thi$ng$math$core$IInterpolate$step$dyn_1513 = (function (_,e){
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
return thi$ng$math$core$IInterpolate$step$dyn_1513.call(null,_,e);
}
});

var thi$ng$math$core$IInterpolate$smoothstep$dyn_1514 = (function (_,e1,e2){
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
return thi$ng$math$core$IInterpolate$smoothstep$dyn_1514.call(null,_,e1,e2);
}
});


/**
 * @interface
 */
thi.ng.math.core.IInvert = function(){};

var thi$ng$math$core$IInvert$invert$dyn_1515 = (function (_){
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
return thi$ng$math$core$IInvert$invert$dyn_1515.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMinMax = function(){};

var thi$ng$math$core$IMinMax$min$dyn_1520 = (function() {
var G__1521 = null;
var G__1521__2 = (function (_,a){
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
var G__1521__3 = (function (_,a,b){
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
G__1521 = function(_,a,b){
switch(arguments.length){
case 2:
return G__1521__2.call(this,_,a);
case 3:
return G__1521__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1521.cljs$core$IFn$_invoke$arity$2 = G__1521__2;
G__1521.cljs$core$IFn$_invoke$arity$3 = G__1521__3;
return G__1521;
})()
;
thi.ng.math.core.min = (function thi$ng$math$core$min(var_args){
var G__1517 = arguments.length;
switch (G__1517) {
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
return thi$ng$math$core$IMinMax$min$dyn_1520.call(null,_,a);
}
}));

(thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$min$arity$3 == null)))))){
return _.thi$ng$math$core$IMinMax$min$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMinMax$min$dyn_1520.call(null,_,a,b);
}
}));

(thi.ng.math.core.min.cljs$lang$maxFixedArity = 3);


var thi$ng$math$core$IMinMax$max$dyn_1523 = (function() {
var G__1524 = null;
var G__1524__2 = (function (_,a){
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
var G__1524__3 = (function (_,a,b){
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
G__1524 = function(_,a,b){
switch(arguments.length){
case 2:
return G__1524__2.call(this,_,a);
case 3:
return G__1524__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1524.cljs$core$IFn$_invoke$arity$2 = G__1524__2;
G__1524.cljs$core$IFn$_invoke$arity$3 = G__1524__3;
return G__1524;
})()
;
thi.ng.math.core.max = (function thi$ng$math$core$max(var_args){
var G__1519 = arguments.length;
switch (G__1519) {
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
return thi$ng$math$core$IMinMax$max$dyn_1523.call(null,_,a);
}
}));

(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$max$arity$3 == null)))))){
return _.thi$ng$math$core$IMinMax$max$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMinMax$max$dyn_1523.call(null,_,a,b);
}
}));

(thi.ng.math.core.max.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.math.core.ILimit = function(){};

var thi$ng$math$core$ILimit$limit$dyn_1526 = (function (_,x){
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
return thi$ng$math$core$ILimit$limit$dyn_1526.call(null,_,x);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMagnitude = function(){};

var thi$ng$math$core$IMagnitude$mag$dyn_1527 = (function (_){
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
return thi$ng$math$core$IMagnitude$mag$dyn_1527.call(null,_);
}
});

var thi$ng$math$core$IMagnitude$mag_squared$dyn_1528 = (function (_){
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
return thi$ng$math$core$IMagnitude$mag_squared$dyn_1528.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.INormalize = function(){};

var thi$ng$math$core$INormalize$normalize$dyn_1531 = (function() {
var G__1532 = null;
var G__1532__1 = (function (_){
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
var G__1532__2 = (function (_,norm){
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
G__1532 = function(_,norm){
switch(arguments.length){
case 1:
return G__1532__1.call(this,_);
case 2:
return G__1532__2.call(this,_,norm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1532.cljs$core$IFn$_invoke$arity$1 = G__1532__1;
G__1532.cljs$core$IFn$_invoke$arity$2 = G__1532__2;
return G__1532;
})()
;
thi.ng.math.core.normalize = (function thi$ng$math$core$normalize(var_args){
var G__1530 = arguments.length;
switch (G__1530) {
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
return thi$ng$math$core$INormalize$normalize$dyn_1531.call(null,_);
}
}));

(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,norm){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalize$arity$2 == null)))))){
return _.thi$ng$math$core$INormalize$normalize$arity$2(_,norm);
} else {
return thi$ng$math$core$INormalize$normalize$dyn_1531.call(null,_,norm);
}
}));

(thi.ng.math.core.normalize.cljs$lang$maxFixedArity = 2);


var thi$ng$math$core$INormalize$normalized_QMARK_$dyn_1534 = (function (_){
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
return thi$ng$math$core$INormalize$normalized_QMARK_$dyn_1534.call(null,_);
}
});


/**
 * @interface
 */
thi.ng.math.core.ISetOps = function(){};

var thi$ng$math$core$ISetOps$union$dyn_1535 = (function (_,x){
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
return thi$ng$math$core$ISetOps$union$dyn_1535.call(null,_,x);
}
});

var thi$ng$math$core$ISetOps$intersection$dyn_1536 = (function (_,x){
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
return thi$ng$math$core$ISetOps$intersection$dyn_1536.call(null,_,x);
}
});

var thi$ng$math$core$ISetOps$difference$dyn_1537 = (function (_,x){
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
return thi$ng$math$core$ISetOps$difference$dyn_1537.call(null,_,x);
}
});


/**
 * @interface
 */
thi.ng.math.core.ITranspose = function(){};

var thi$ng$math$core$ITranspose$transpose$dyn_1538 = (function (_){
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
return thi$ng$math$core$ITranspose$transpose$dyn_1538.call(null,_);
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
var G__1539 = null;
var G__1539__2 = (function (a,b){
if(typeof b === 'number'){
return (thi.ng.math.core.abs_STAR_.call(null,(a - b)) <= thi.ng.math.core._STAR_eps_STAR_);
} else {
return null;
}
});
var G__1539__3 = (function (a,b,eps){
if(typeof b === 'number'){
return (thi.ng.math.core.abs_STAR_.call(null,(a - b)) <= eps);
} else {
return null;
}
});
G__1539 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__1539__2.call(this,a,b);
case 3:
return G__1539__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1539.cljs$core$IFn$_invoke$arity$2 = G__1539__2;
G__1539.cljs$core$IFn$_invoke$arity$3 = G__1539__3;
return G__1539;
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
var G__1540 = cljs.core.next.call(null,a__$2);
var G__1541 = cljs.core.next.call(null,b__$1);
a__$2 = G__1540;
b__$1 = G__1541;
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
var G__1542 = cljs.core.next.call(null,a__$2);
var G__1543 = cljs.core.next.call(null,b__$1);
a__$2 = G__1542;
b__$1 = G__1543;
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
var G__1544 = cljs.core.next.call(null,a__$2);
var G__1545 = cljs.core.next.call(null,b__$1);
a__$2 = G__1544;
b__$1 = G__1545;
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
var G__1546 = cljs.core.next.call(null,a__$2);
var G__1547 = cljs.core.next.call(null,b__$1);
a__$2 = G__1546;
b__$1 = G__1547;
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
var G__1548 = null;
var G__1548__2 = (function (_,b){
return (b == null);
});
var G__1548__3 = (function (_,b,___$1){
return (b == null);
});
G__1548 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__1548__2.call(this,_,b);
case 3:
return G__1548__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1548.cljs$core$IFn$_invoke$arity$2 = G__1548__2;
G__1548.cljs$core$IFn$_invoke$arity$3 = G__1548__3;
return G__1548;
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
var G__1550 = arguments.length;
switch (G__1550) {
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
 * Constraints x to be in closed interval [min max].
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
 * Constraints x to be in closed interval [0.0 .. 1.0]
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
 * Maps x from one interval into another. Intervals can be defined as
 *   vectors. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(var_args){
var G__1553 = arguments.length;
switch (G__1553) {
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

(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__1554,p__1555){
var vec__1556 = p__1554;
var in1 = cljs.core.nth.call(null,vec__1556,(0),null);
var in2 = cljs.core.nth.call(null,vec__1556,(1),null);
var vec__1559 = p__1555;
var out1 = cljs.core.nth.call(null,vec__1559,(0),null);
var out2 = cljs.core.nth.call(null,vec__1559,(1),null);
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
var G__1564 = arguments.length;
switch (G__1564) {
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

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__1565,p__1566){
var vec__1567 = p__1565;
var in1 = cljs.core.nth.call(null,vec__1567,(0),null);
var in2 = cljs.core.nth.call(null,vec__1567,(1),null);
var vec__1570 = p__1566;
var out1 = cljs.core.nth.call(null,vec__1570,(0),null);
var out2 = cljs.core.nth.call(null,vec__1570,(1),null);
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

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__1573,p__1574,p__1575){
var vec__1576 = p__1573;
var in1 = cljs.core.nth.call(null,vec__1576,(0),null);
var in2 = cljs.core.nth.call(null,vec__1576,(1),null);
var vec__1579 = p__1574;
var out1 = cljs.core.nth.call(null,vec__1579,(0),null);
var out2 = cljs.core.nth.call(null,vec__1579,(1),null);
var vec__1582 = p__1575;
var c1 = cljs.core.nth.call(null,vec__1582,(0),null);
var c2 = cljs.core.nth.call(null,vec__1582,(1),null);
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
var G__1587 = arguments.length;
switch (G__1587) {
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

(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__1588,x){
var vec__1589 = p__1588;
var min = cljs.core.nth.call(null,vec__1589,(0),null);
var max = cljs.core.nth.call(null,vec__1589,(1),null);
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
return cljs.core.map.call(null,(function (p1__1593_SHARP_){
return (p1__1593_SHARP_ / n);
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
var G__1594 = (pow2 << (1));
pow2 = G__1594;
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
var G__1596 = arguments.length;
switch (G__1596) {
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
var G__1599 = arguments.length;
switch (G__1599) {
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
var vec__1601 = thi.ng.math.core.quartile_range.call(null,n,cljs.core.count.call(null,sorted));
var a = cljs.core.nth.call(null,vec__1601,(0),null);
var b = cljs.core.nth.call(null,vec__1601,(1),null);
return cljs.core.take.call(null,(b - a),cljs.core.drop.call(null,a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(var_args){
var G__1606 = arguments.length;
switch (G__1606) {
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
return cljs.core.map.call(null,(function (p1__1604_SHARP_){
return (s * p1__1604_SHARP_);
}),ws);
}));

(thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map
