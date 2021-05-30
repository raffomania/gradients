// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.xerror.core');
goog.require('cljs.core');
thi.ng.xerror.core.throw_BANG_ = (function thi$ng$xerror$core$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.xerror.core.key_error_BANG_ = (function thi$ng$xerror$core$key_error_BANG_(k){
return thi.ng.xerror.core.throw_BANG_.call(null,["Illegal lookup key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
});
thi.ng.xerror.core.type_error_BANG_ = (function thi$ng$xerror$core$type_error_BANG_(t,x){
return thi.ng.xerror.core.throw_BANG_.call(null,["Can't cast to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," from ",cljs.core.pr_str.call(null,x)].join(''));
});
thi.ng.xerror.core.arity_error_BANG_ = (function thi$ng$xerror$core$arity_error_BANG_(n){
return thi.ng.xerror.core.throw_BANG_.call(null,["Wrong number of args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});
thi.ng.xerror.core.illegal_arg_BANG_ = (function thi$ng$xerror$core$illegal_arg_BANG_(var_args){
var G__2294 = arguments.length;
switch (G__2294) {
case 1:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,"Illegal argument",x);
}));

(thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
}));

(thi.ng.xerror.core.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2);

thi.ng.xerror.core.unsupported_BANG_ = (function thi$ng$xerror$core$unsupported_BANG_(var_args){
var G__2297 = arguments.length;
switch (G__2297) {
case 0:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.xerror.core.unsupported_BANG_.call(null,"Unsupported operation");
}));

(thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
}));

(thi.ng.xerror.core.unsupported_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=core.js.map
