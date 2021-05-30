// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__1996__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1997__i = 0, G__1997__a = new Array(arguments.length -  0);
while (G__1997__i < G__1997__a.length) {G__1997__a[G__1997__i] = arguments[G__1997__i + 0]; ++G__1997__i;}
  args = new cljs.core.IndexedSeq(G__1997__a,0,null);
} 
return G__1996__delegate.call(this,args);};
G__1996.cljs$lang$maxFixedArity = 0;
G__1996.cljs$lang$applyTo = (function (arglist__1998){
var args = cljs.core.seq(arglist__1998);
return G__1996__delegate(args);
});
G__1996.cljs$core$IFn$_invoke$arity$variadic = G__1996__delegate;
return G__1996;
})()
);

(o.error = (function() { 
var G__1999__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2000__i = 0, G__2000__a = new Array(arguments.length -  0);
while (G__2000__i < G__2000__a.length) {G__2000__a[G__2000__i] = arguments[G__2000__i + 0]; ++G__2000__i;}
  args = new cljs.core.IndexedSeq(G__2000__a,0,null);
} 
return G__1999__delegate.call(this,args);};
G__1999.cljs$lang$maxFixedArity = 0;
G__1999.cljs$lang$applyTo = (function (arglist__2001){
var args = cljs.core.seq(arglist__2001);
return G__1999__delegate(args);
});
G__1999.cljs$core$IFn$_invoke$arity$variadic = G__1999__delegate;
return G__1999;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
