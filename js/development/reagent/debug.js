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
var G__2508__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2509__i = 0, G__2509__a = new Array(arguments.length -  0);
while (G__2509__i < G__2509__a.length) {G__2509__a[G__2509__i] = arguments[G__2509__i + 0]; ++G__2509__i;}
  args = new cljs.core.IndexedSeq(G__2509__a,0,null);
} 
return G__2508__delegate.call(this,args);};
G__2508.cljs$lang$maxFixedArity = 0;
G__2508.cljs$lang$applyTo = (function (arglist__2510){
var args = cljs.core.seq(arglist__2510);
return G__2508__delegate(args);
});
G__2508.cljs$core$IFn$_invoke$arity$variadic = G__2508__delegate;
return G__2508;
})()
);

(o.error = (function() { 
var G__2511__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2512__i = 0, G__2512__a = new Array(arguments.length -  0);
while (G__2512__i < G__2512__a.length) {G__2512__a[G__2512__i] = arguments[G__2512__i + 0]; ++G__2512__i;}
  args = new cljs.core.IndexedSeq(G__2512__a,0,null);
} 
return G__2511__delegate.call(this,args);};
G__2511.cljs$lang$maxFixedArity = 0;
G__2511.cljs$lang$applyTo = (function (arglist__2513){
var args = cljs.core.seq(arglist__2513);
return G__2511__delegate(args);
});
G__2511.cljs$core$IFn$_invoke$arity$variadic = G__2511__delegate;
return G__2511;
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
