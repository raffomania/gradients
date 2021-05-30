// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('gradients.core');
goog.require('cljs.core');
goog.require('gradients.view');
goog.require('reagent.core');
goog.require('gradients.params');
goog.require('gradients.draw');
goog.require('gradients.state');
goog.require('gradients.pixi');
goog.require('gradients.util');
goog.require('cljs.core.async');
gradients.core.update_pixi = (function gradients$core$update_pixi(app,dt){
var image = gradients.draw.draw.call(null);
gradients.pixi.update_pixi.call(null,app,image);

var G__8903 = cljs.core.async.poll_BANG_.call(null,gradients.state.commands);
var G__8903__$1 = (((G__8903 instanceof cljs.core.Keyword))?G__8903.fqn:null);
switch (G__8903__$1) {
case "save":
return gradients.pixi.save_png.call(null,app,image);

break;
default:
return null;

}
});
if((typeof gradients !== 'undefined') && (typeof gradients.core !== 'undefined') && (typeof gradients.core.app !== 'undefined')){
} else {
gradients.core.app = gradients.pixi.init_app.call(null,gradients.core.update_pixi);
}
gradients.view.mount.call(null,gradients.state.state);

//# sourceMappingURL=core.js.map
