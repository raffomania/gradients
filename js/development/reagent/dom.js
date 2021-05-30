// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__3510 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__3511 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__3511);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__3512 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__3513 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__3513);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__3512);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__3510);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__3515 = arguments.length;
switch (G__3515) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__3517_3521 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__3518_3522 = null;
var count__3519_3523 = (0);
var i__3520_3524 = (0);
while(true){
if((i__3520_3524 < count__3519_3523)){
var v_3525 = cljs.core._nth.call(null,chunk__3518_3522,i__3520_3524);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_3525);


var G__3526 = seq__3517_3521;
var G__3527 = chunk__3518_3522;
var G__3528 = count__3519_3523;
var G__3529 = (i__3520_3524 + (1));
seq__3517_3521 = G__3526;
chunk__3518_3522 = G__3527;
count__3519_3523 = G__3528;
i__3520_3524 = G__3529;
continue;
} else {
var temp__5753__auto___3530 = cljs.core.seq.call(null,seq__3517_3521);
if(temp__5753__auto___3530){
var seq__3517_3531__$1 = temp__5753__auto___3530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3517_3531__$1)){
var c__4649__auto___3532 = cljs.core.chunk_first.call(null,seq__3517_3531__$1);
var G__3533 = cljs.core.chunk_rest.call(null,seq__3517_3531__$1);
var G__3534 = c__4649__auto___3532;
var G__3535 = cljs.core.count.call(null,c__4649__auto___3532);
var G__3536 = (0);
seq__3517_3521 = G__3533;
chunk__3518_3522 = G__3534;
count__3519_3523 = G__3535;
i__3520_3524 = G__3536;
continue;
} else {
var v_3537 = cljs.core.first.call(null,seq__3517_3531__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_3537);


var G__3538 = cljs.core.next.call(null,seq__3517_3531__$1);
var G__3539 = null;
var G__3540 = (0);
var G__3541 = (0);
seq__3517_3521 = G__3538;
chunk__3518_3522 = G__3539;
count__3519_3523 = G__3540;
i__3520_3524 = G__3541;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
