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
var vec__8850 = cljs.core.map.call(null,(function (p1__8849_SHARP_){
return (p1__8849_SHARP_ / (2));
}),gradients.util.screen_res.call(null));
var width = cljs.core.nth.call(null,vec__8850,(0),null);
var height = cljs.core.nth.call(null,vec__8850,(1),null);
var app_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),false,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(16777215)], null);
var app = (new PIXI.Application(cljs.core.clj__GT_js.call(null,app_opts)));
var stage = (function (){var target_obj_8853 = app;
var _STAR_runtime_state_STAR__orig_val__8855 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8856 = oops.state.prepare_state.call(null,target_obj_8853,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8856);

try{var next_obj_8854 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8853,(0),"stage",true,true,false))?(target_obj_8853["stage"]):null);
return next_obj_8854;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8855);
}})();
var container = document.getElementById("wp-preview");
var tris = (function (){var target_obj_8857 = (new PIXI.Container());
var _STAR_runtime_state_STAR__orig_val__8859 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8860 = oops.state.prepare_state.call(null,target_obj_8857,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8860);

try{var parent_obj_8858_8877 = target_obj_8857;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8858_8877,(0),"name",true,true,true)){
(parent_obj_8858_8877["name"] = "tris");
} else {
}

return target_obj_8857;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8859);
}})();
var bg = (function (){var target_obj_8861 = (new PIXI.Graphics());
var _STAR_runtime_state_STAR__orig_val__8863 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8864 = oops.state.prepare_state.call(null,target_obj_8861,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8864);

try{var parent_obj_8862_8878 = target_obj_8861;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8862_8878,(0),"name",true,true,true)){
(parent_obj_8862_8878["name"] = "bg");
} else {
}

return target_obj_8861;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8863);
}})().beginFill((16777215)).drawRect((0),(0),width,height).endFill();
stage.addChild(bg);

stage.addChild(tris);

container.appendChild((function (){var target_obj_8865 = app;
var _STAR_runtime_state_STAR__orig_val__8867 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8868 = oops.state.prepare_state.call(null,target_obj_8865,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8868);

try{var next_obj_8866 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8865,(0),"view",true,true,false))?(target_obj_8865["view"]):null);
return next_obj_8866;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8867);
}})());

(function (){var target_obj_8869 = app;
var _STAR_runtime_state_STAR__orig_val__8871 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8872 = oops.state.prepare_state.call(null,target_obj_8869,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8872);

try{var next_obj_8870 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8869,(0),"ticker",true,true,false))?(target_obj_8869["ticker"]):null);
return next_obj_8870;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8871);
}})().add(cljs.core.partial.call(null,update_fn,app));

cljs.core.reset_BANG_.call(null,gradients.pixi.tri_texture,gradients.pixi.create_tri_texture.call(null,(function (){var target_obj_8873 = app;
var _STAR_runtime_state_STAR__orig_val__8875 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8876 = oops.state.prepare_state.call(null,target_obj_8873,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8876);

try{var next_obj_8874 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8873,(0),"renderer",true,true,false))?(target_obj_8873["renderer"]):null);
return next_obj_8874;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8875);
}})()));

return app;
});
gradients.pixi.create_tri = (function gradients$pixi$create_tri(){
var target_obj_8879 = (new PIXI.Sprite(cljs.core.deref.call(null,gradients.pixi.tri_texture)));
var _STAR_runtime_state_STAR__orig_val__8881 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8882 = oops.state.prepare_state.call(null,target_obj_8879,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8882);

try{var parent_obj_8880_8883 = target_obj_8879;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8880_8883,(0),"pivot",true,true,true)){
(parent_obj_8880_8883["pivot"] = (new PIXI.Point((cljs.core.deref.call(null,gradients.pixi.tri_texture).width / (2)),(cljs.core.deref.call(null,gradients.pixi.tri_texture).height / (2)))));
} else {
}

return target_obj_8879;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8881);
}});
gradients.pixi.update_tri_count = (function gradients$pixi$update_tri_count(stage,wanted){
var current = (function (){var target_obj_8884 = stage;
var _STAR_runtime_state_STAR__orig_val__8887 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8888 = oops.state.prepare_state.call(null,target_obj_8884,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8888);

try{var next_obj_8885 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8884,(0),"children",true,true,false))?(target_obj_8884["children"]):null);
var next_obj_8886 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8885,(0),"length",true,true,false))?(next_obj_8885["length"]):null);
return next_obj_8886;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8887);
}})();
var delta = (wanted - current);
if((delta > (0))){
var seq__8889 = cljs.core.seq.call(null,cljs.core.range.call(null,delta));
var chunk__8890 = null;
var count__8891 = (0);
var i__8892 = (0);
while(true){
if((i__8892 < count__8891)){
var _ = cljs.core._nth.call(null,chunk__8890,i__8892);
stage.addChild(gradients.pixi.create_tri.call(null));


var G__8893 = seq__8889;
var G__8894 = chunk__8890;
var G__8895 = count__8891;
var G__8896 = (i__8892 + (1));
seq__8889 = G__8893;
chunk__8890 = G__8894;
count__8891 = G__8895;
i__8892 = G__8896;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__8889);
if(temp__5753__auto__){
var seq__8889__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8889__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__8889__$1);
var G__8897 = cljs.core.chunk_rest.call(null,seq__8889__$1);
var G__8898 = c__4649__auto__;
var G__8899 = cljs.core.count.call(null,c__4649__auto__);
var G__8900 = (0);
seq__8889 = G__8897;
chunk__8890 = G__8898;
count__8891 = G__8899;
i__8892 = G__8900;
continue;
} else {
var _ = cljs.core.first.call(null,seq__8889__$1);
stage.addChild(gradients.pixi.create_tri.call(null));


var G__8901 = cljs.core.next.call(null,seq__8889__$1);
var G__8902 = null;
var G__8903 = (0);
var G__8904 = (0);
seq__8889 = G__8901;
chunk__8890 = G__8902;
count__8891 = G__8903;
i__8892 = G__8904;
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

var target_obj_8905_8909 = child;
var _STAR_runtime_state_STAR__orig_val__8907_8910 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8908_8911 = oops.state.prepare_state.call(null,target_obj_8905_8909,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8908_8911);

try{var parent_obj_8906_8912 = target_obj_8905_8909;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8906_8912,(0),"tint",true,true,true)){
(parent_obj_8906_8912["tint"] = cljs.core.deref.call(null,thi.ng.color.core.as_int24.call(null,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"color","color",1011675173)))));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8907_8910);
}
(child.width = tw);

(child.height = th);

(child.x = x);

return (child.y = y);
});
gradients.pixi.update_pixi = (function gradients$pixi$update_pixi(app,specs){
var sw = (function (){var target_obj_8913 = app;
var _STAR_runtime_state_STAR__orig_val__8916 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8917 = oops.state.prepare_state.call(null,target_obj_8913,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8917);

try{var next_obj_8914 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8913,(0),"renderer",true,true,false))?(target_obj_8913["renderer"]):null);
var next_obj_8915 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8914,(0),"width",true,true,false))?(next_obj_8914["width"]):null);
return next_obj_8915;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8916);
}})();
var sh = (function (){var target_obj_8918 = app;
var _STAR_runtime_state_STAR__orig_val__8921 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8922 = oops.state.prepare_state.call(null,target_obj_8918,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8922);

try{var next_obj_8919 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8918,(0),"renderer",true,true,false))?(target_obj_8918["renderer"]):null);
var next_obj_8920 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8919,(0),"height",true,true,false))?(next_obj_8919["height"]):null);
return next_obj_8920;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8921);
}})();
var stage = (function (){var target_obj_8923 = app;
var _STAR_runtime_state_STAR__orig_val__8925 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8926 = oops.state.prepare_state.call(null,target_obj_8923,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8926);

try{var next_obj_8924 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8923,(0),"stage",true,true,false))?(target_obj_8923["stage"]):null);
return next_obj_8924;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8925);
}})();
var tris_container = stage.getChildByName("tris");
var tris = new cljs.core.Keyword(null,"tris","tris",-1299590805).cljs$core$IFn$_invoke$arity$1(specs);
var target_obj_8927_8939 = (function (){var target_obj_8929 = (function (){var target_obj_8931 = stage.getChildByName("bg");
var _STAR_runtime_state_STAR__orig_val__8933 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8934 = oops.state.prepare_state.call(null,target_obj_8931,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8934);

try{var parent_obj_8932_8940 = target_obj_8931;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8932_8940,(0),"tint",true,true,true)){
(parent_obj_8932_8940["tint"] = cljs.core.deref.call(null,thi.ng.color.core.as_int24.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(specs))));
} else {
}

return target_obj_8931;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8933);
}})();
var _STAR_runtime_state_STAR__orig_val__8935 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8936 = oops.state.prepare_state.call(null,target_obj_8929,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8936);

try{var parent_obj_8930_8941 = target_obj_8929;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8930_8941,(0),"width",true,true,true)){
(parent_obj_8930_8941["width"] = sw);
} else {
}

return target_obj_8929;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8935);
}})();
var _STAR_runtime_state_STAR__orig_val__8937_8942 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8938_8943 = oops.state.prepare_state.call(null,target_obj_8927_8939,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8938_8943);

try{var parent_obj_8928_8944 = target_obj_8927_8939;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8928_8944,(0),"height",true,true,true)){
(parent_obj_8928_8944["height"] = sh);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8937_8942);
}
gradients.pixi.update_tri_count.call(null,tris_container,gradients.util.sqr.call(null,((4) + gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)))));

return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,gradients.pixi.update_tri,tris_container,sw,sh),tris));
});
gradients.pixi.save_png = (function gradients$pixi$save_png(app,specs){
var renderer = (function (){var target_obj_8948 = app;
var _STAR_runtime_state_STAR__orig_val__8950 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8951 = oops.state.prepare_state.call(null,target_obj_8948,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8951);

try{var next_obj_8949 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8948,(0),"renderer",true,true,false))?(target_obj_8948["renderer"]):null);
return next_obj_8949;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8950);
}})();
var original_width = (function (){var target_obj_8952 = renderer;
var _STAR_runtime_state_STAR__orig_val__8954 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8955 = oops.state.prepare_state.call(null,target_obj_8952,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8955);

try{var next_obj_8953 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8952,(0),"width",true,true,false))?(target_obj_8952["width"]):null);
return next_obj_8953;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8954);
}})();
var original_height = (function (){var target_obj_8956 = renderer;
var _STAR_runtime_state_STAR__orig_val__8958 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8959 = oops.state.prepare_state.call(null,target_obj_8956,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8959);

try{var next_obj_8957 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8956,(0),"height",true,true,false))?(target_obj_8956["height"]):null);
return next_obj_8957;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8958);
}})();
var vec__8945 = gradients.util.screen_res.call(null);
var width = cljs.core.nth.call(null,vec__8945,(0),null);
var height = cljs.core.nth.call(null,vec__8945,(1),null);
var extract_plugin = (function (){var target_obj_8960 = renderer;
var _STAR_runtime_state_STAR__orig_val__8962 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8963 = oops.state.prepare_state.call(null,target_obj_8960,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8963);

try{var next_obj_8961 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8960,(0),"extract",true,true,false))?(target_obj_8960["extract"]):null);
return next_obj_8961;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8962);
}})();
var link = document.createElement("a");
var stage = (function (){var target_obj_8964 = app;
var _STAR_runtime_state_STAR__orig_val__8966 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8967 = oops.state.prepare_state.call(null,target_obj_8964,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8967);

try{var next_obj_8965 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8964,(0),"stage",true,true,false))?(target_obj_8964["stage"]):null);
return next_obj_8965;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8966);
}})();
var texture = PIXI.RenderTexture.create(width,height);
renderer.resize(width,height);

gradients.pixi.update_pixi.call(null,app,specs);

renderer.render(stage,texture);

link.setAttribute("href",extract_plugin.base64(texture));

var target_obj_8968_8972 = link;
var _STAR_runtime_state_STAR__orig_val__8970_8973 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8971_8974 = oops.state.prepare_state.call(null,target_obj_8968_8972,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8971_8974);

try{var parent_obj_8969_8975 = target_obj_8968_8972;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_8969_8975,(0),"innerHTML",true,true,true)){
(parent_obj_8969_8975["innerHTML"] = "image link");
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8970_8973);
}
link.setAttribute("download","gradients.png");

link.click();

return renderer.resize(original_width,original_height);
});

//# sourceMappingURL=pixi.js.map
