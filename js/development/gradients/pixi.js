// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('gradients.pixi');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
goog.require('gradients.util');
goog.require('gradients.draw');
goog.require('oops.core');
goog.require('thi.ng.color.core');
if((typeof gradients !== 'undefined') && (typeof gradients.pixi !== 'undefined') && (typeof gradients.pixi.tri_texture !== 'undefined')){
} else {
gradients.pixi.tri_texture = cljs.core.atom.call(null,null);
}
gradients.pixi.create_tri_texture = (function gradients$pixi$create_tri_texture(renderer){
var size = cljs.core.apply.call(null,cljs.core.max,gradients.util.screen_res.call(null));
var graphics = (new PIXI.Graphics());
graphics.beginFill((16777215)).drawPolygon([(size / (2)),(0),(0),size,size,size]).endFill();

return renderer.generateTexture(graphics,PIXI.SCALE_MODES.LINEAR,(1));
});
gradients.pixi.init_app = (function gradients$pixi$init_app(update_fn){
var vec__8775 = cljs.core.map.call(null,(function (p1__8774_SHARP_){
return (p1__8774_SHARP_ / (2));
}),gradients.util.screen_res.call(null));
var width = cljs.core.nth.call(null,vec__8775,(0),null);
var height = cljs.core.nth.call(null,vec__8775,(1),null);
var app_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),false,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(16777215)], null);
var app = (new PIXI.Application(cljs.core.clj__GT_js.call(null,app_opts)));
var stage = (function (){var target_obj_8778 = app;
var _STAR_runtime_state_STAR__orig_val__8780 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8781 = oops.state.prepare_state.call(null,target_obj_8778,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8781);

try{var next_obj_8779 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8778,(0),"stage",true,true,false))?(target_obj_8778["stage"]):null);
return next_obj_8779;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8780);
}})();
var container = document.getElementById("wp-preview");
var tris = (function (){var target_obj_8782 = (new PIXI.Container());
var _STAR_runtime_state_STAR__orig_val__8784 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8785 = oops.state.prepare_state.call(null,target_obj_8782,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8785);

try{var parent_obj_8783_8802 = target_obj_8782;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8783_8802,(0),"name",true,true,true)){
(parent_obj_8783_8802["name"] = "tris");
} else {
}

return target_obj_8782;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8784);
}})();
var bg = (function (){var target_obj_8786 = (new PIXI.Graphics());
var _STAR_runtime_state_STAR__orig_val__8788 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8789 = oops.state.prepare_state.call(null,target_obj_8786,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8789);

try{var parent_obj_8787_8803 = target_obj_8786;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8787_8803,(0),"name",true,true,true)){
(parent_obj_8787_8803["name"] = "bg");
} else {
}

return target_obj_8786;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8788);
}})().beginFill((16777215)).drawRect((0),(0),width,height).endFill();
stage.addChild(bg);

stage.addChild(tris);

container.appendChild((function (){var target_obj_8790 = app;
var _STAR_runtime_state_STAR__orig_val__8792 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8793 = oops.state.prepare_state.call(null,target_obj_8790,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8793);

try{var next_obj_8791 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8790,(0),"view",true,true,false))?(target_obj_8790["view"]):null);
return next_obj_8791;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8792);
}})());

(function (){var target_obj_8794 = app;
var _STAR_runtime_state_STAR__orig_val__8796 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8797 = oops.state.prepare_state.call(null,target_obj_8794,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8797);

try{var next_obj_8795 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8794,(0),"ticker",true,true,false))?(target_obj_8794["ticker"]):null);
return next_obj_8795;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8796);
}})().add(cljs.core.partial.call(null,update_fn,app));

cljs.core.reset_BANG_.call(null,gradients.pixi.tri_texture,gradients.pixi.create_tri_texture.call(null,(function (){var target_obj_8798 = app;
var _STAR_runtime_state_STAR__orig_val__8800 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8801 = oops.state.prepare_state.call(null,target_obj_8798,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8801);

try{var next_obj_8799 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8798,(0),"renderer",true,true,false))?(target_obj_8798["renderer"]):null);
return next_obj_8799;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8800);
}})()));

return app;
});
gradients.pixi.create_tri = (function gradients$pixi$create_tri(){
var target_obj_8804 = (new PIXI.Sprite(cljs.core.deref.call(null,gradients.pixi.tri_texture)));
var _STAR_runtime_state_STAR__orig_val__8806 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8807 = oops.state.prepare_state.call(null,target_obj_8804,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8807);

try{var parent_obj_8805_8808 = target_obj_8804;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8805_8808,(0),"pivot",true,true,true)){
(parent_obj_8805_8808["pivot"] = (new PIXI.Point((cljs.core.deref.call(null,gradients.pixi.tri_texture).width / (2)),(cljs.core.deref.call(null,gradients.pixi.tri_texture).height / (2)))));
} else {
}

return target_obj_8804;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8806);
}});
gradients.pixi.update_tri_count = (function gradients$pixi$update_tri_count(stage,wanted){
var current = (function (){var target_obj_8809 = stage;
var _STAR_runtime_state_STAR__orig_val__8812 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8813 = oops.state.prepare_state.call(null,target_obj_8809,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8813);

try{var next_obj_8810 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8809,(0),"children",true,true,false))?(target_obj_8809["children"]):null);
var next_obj_8811 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8810,(0),"length",true,true,false))?(next_obj_8810["length"]):null);
return next_obj_8811;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8812);
}})();
var delta = (wanted - current);
if((delta > (0))){
var seq__8814 = cljs.core.seq.call(null,cljs.core.range.call(null,delta));
var chunk__8815 = null;
var count__8816 = (0);
var i__8817 = (0);
while(true){
if((i__8817 < count__8816)){
var _ = cljs.core._nth.call(null,chunk__8815,i__8817);
stage.addChild(gradients.pixi.create_tri.call(null));


var G__8818 = seq__8814;
var G__8819 = chunk__8815;
var G__8820 = count__8816;
var G__8821 = (i__8817 + (1));
seq__8814 = G__8818;
chunk__8815 = G__8819;
count__8816 = G__8820;
i__8817 = G__8821;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__8814);
if(temp__5753__auto__){
var seq__8814__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8814__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__8814__$1);
var G__8822 = cljs.core.chunk_rest.call(null,seq__8814__$1);
var G__8823 = c__4649__auto__;
var G__8824 = cljs.core.count.call(null,c__4649__auto__);
var G__8825 = (0);
seq__8814 = G__8822;
chunk__8815 = G__8823;
count__8816 = G__8824;
i__8817 = G__8825;
continue;
} else {
var _ = cljs.core.first.call(null,seq__8814__$1);
stage.addChild(gradients.pixi.create_tri.call(null));


var G__8826 = cljs.core.next.call(null,seq__8814__$1);
var G__8827 = null;
var G__8828 = (0);
var G__8829 = (0);
seq__8814 = G__8826;
chunk__8815 = G__8827;
count__8816 = G__8828;
i__8817 = G__8829;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((delta < (0))){
return stage.removeChildren((0),Math.abs(delta));
} else {
return null;
}
}
});
gradients.pixi.update_tri = (function gradients$pixi$update_tri(tris_container,sw,sh,spec){
var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(spec);
var child = tris_container.getChildAt(i);
var x = (sw * cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (sh * cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"y","y",-1757859776)));
var tw = (sw * (cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"width","width",-384071477)) / (2)));
var th = (sh * (cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"height","height",1025178622)) / (2)));
(child.alpha = cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"alpha","alpha",-1574982441)));

(child.rotation = cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)));

var target_obj_8830_8834 = child;
var _STAR_runtime_state_STAR__orig_val__8832_8835 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8833_8836 = oops.state.prepare_state.call(null,target_obj_8830_8834,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8833_8836);

try{var parent_obj_8831_8837 = target_obj_8830_8834;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8831_8837,(0),"tint",true,true,true)){
(parent_obj_8831_8837["tint"] = cljs.core.deref.call(null,thi.ng.color.core.as_int24.call(null,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"color","color",1011675173)))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8832_8835);
}
(child.width = tw);

(child.height = th);

(child.x = x);

return (child.y = y);
});
gradients.pixi.update_pixi = (function gradients$pixi$update_pixi(app,specs){
var sw = (function (){var target_obj_8838 = app;
var _STAR_runtime_state_STAR__orig_val__8841 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8842 = oops.state.prepare_state.call(null,target_obj_8838,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8842);

try{var next_obj_8839 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8838,(0),"renderer",true,true,false))?(target_obj_8838["renderer"]):null);
var next_obj_8840 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8839,(0),"width",true,true,false))?(next_obj_8839["width"]):null);
return next_obj_8840;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8841);
}})();
var sh = (function (){var target_obj_8843 = app;
var _STAR_runtime_state_STAR__orig_val__8846 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8847 = oops.state.prepare_state.call(null,target_obj_8843,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8847);

try{var next_obj_8844 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8843,(0),"renderer",true,true,false))?(target_obj_8843["renderer"]):null);
var next_obj_8845 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8844,(0),"height",true,true,false))?(next_obj_8844["height"]):null);
return next_obj_8845;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8846);
}})();
var stage = (function (){var target_obj_8848 = app;
var _STAR_runtime_state_STAR__orig_val__8850 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8851 = oops.state.prepare_state.call(null,target_obj_8848,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8851);

try{var next_obj_8849 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8848,(0),"stage",true,true,false))?(target_obj_8848["stage"]):null);
return next_obj_8849;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8850);
}})();
var tris_container = stage.getChildByName("tris");
var tris = new cljs.core.Keyword(null,"tris","tris",-1299590805).cljs$core$IFn$_invoke$arity$1(specs);
var target_obj_8852_8864 = (function (){var target_obj_8854 = (function (){var target_obj_8856 = stage.getChildByName("bg");
var _STAR_runtime_state_STAR__orig_val__8858 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8859 = oops.state.prepare_state.call(null,target_obj_8856,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8859);

try{var parent_obj_8857_8865 = target_obj_8856;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8857_8865,(0),"tint",true,true,true)){
(parent_obj_8857_8865["tint"] = cljs.core.deref.call(null,thi.ng.color.core.as_int24.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(specs))));
} else {
}

return target_obj_8856;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8858);
}})();
var _STAR_runtime_state_STAR__orig_val__8860 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8861 = oops.state.prepare_state.call(null,target_obj_8854,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8861);

try{var parent_obj_8855_8866 = target_obj_8854;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8855_8866,(0),"width",true,true,true)){
(parent_obj_8855_8866["width"] = sw);
} else {
}

return target_obj_8854;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8860);
}})();
var _STAR_runtime_state_STAR__orig_val__8862_8867 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8863_8868 = oops.state.prepare_state.call(null,target_obj_8852_8864,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8863_8868);

try{var parent_obj_8853_8869 = target_obj_8852_8864;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8853_8869,(0),"height",true,true,true)){
(parent_obj_8853_8869["height"] = sh);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8862_8867);
}
gradients.pixi.update_tri_count.call(null,tris_container,gradients.util.sqr.call(null,((4) + gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)))));

return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,gradients.pixi.update_tri,tris_container,sw,sh),tris));
});
gradients.pixi.save_png = (function gradients$pixi$save_png(app,specs){
var renderer = (function (){var target_obj_8873 = app;
var _STAR_runtime_state_STAR__orig_val__8875 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8876 = oops.state.prepare_state.call(null,target_obj_8873,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8876);

try{var next_obj_8874 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8873,(0),"renderer",true,true,false))?(target_obj_8873["renderer"]):null);
return next_obj_8874;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8875);
}})();
var original_width = (function (){var target_obj_8877 = renderer;
var _STAR_runtime_state_STAR__orig_val__8879 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8880 = oops.state.prepare_state.call(null,target_obj_8877,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8880);

try{var next_obj_8878 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8877,(0),"width",true,true,false))?(target_obj_8877["width"]):null);
return next_obj_8878;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8879);
}})();
var original_height = (function (){var target_obj_8881 = renderer;
var _STAR_runtime_state_STAR__orig_val__8883 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8884 = oops.state.prepare_state.call(null,target_obj_8881,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8884);

try{var next_obj_8882 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8881,(0),"height",true,true,false))?(target_obj_8881["height"]):null);
return next_obj_8882;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8883);
}})();
var vec__8870 = gradients.util.screen_res.call(null);
var width = cljs.core.nth.call(null,vec__8870,(0),null);
var height = cljs.core.nth.call(null,vec__8870,(1),null);
var extract_plugin = (function (){var target_obj_8885 = renderer;
var _STAR_runtime_state_STAR__orig_val__8887 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8888 = oops.state.prepare_state.call(null,target_obj_8885,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8888);

try{var next_obj_8886 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8885,(0),"extract",true,true,false))?(target_obj_8885["extract"]):null);
return next_obj_8886;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8887);
}})();
var link = document.createElement("a");
var stage = (function (){var target_obj_8889 = app;
var _STAR_runtime_state_STAR__orig_val__8891 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8892 = oops.state.prepare_state.call(null,target_obj_8889,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8892);

try{var next_obj_8890 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8889,(0),"stage",true,true,false))?(target_obj_8889["stage"]):null);
return next_obj_8890;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8891);
}})();
var texture = PIXI.RenderTexture.create(width,height);
renderer.resize(width,height);

gradients.pixi.update_pixi.call(null,app,specs);

renderer.render(stage,texture);

link.setAttribute("href",extract_plugin.base64(texture));

var target_obj_8893_8897 = link;
var _STAR_runtime_state_STAR__orig_val__8895_8898 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8896_8899 = oops.state.prepare_state.call(null,target_obj_8893_8897,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8896_8899);

try{var parent_obj_8894_8900 = target_obj_8893_8897;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8894_8900,(0),"innerHTML",true,true,true)){
(parent_obj_8894_8900["innerHTML"] = "image link");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8895_8898);
}
link.setAttribute("download","gradients.png");

link.click();

return renderer.resize(original_width,original_height);
});

//# sourceMappingURL=pixi.js.map
