// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('gradients.draw');
goog.require('cljs.core');
goog.require('gradients.util');
goog.require('gradients.state');
goog.require('cljs.core.async');
goog.require('thi.ng.math.noise');
goog.require('thi.ng.math.core');
goog.require('thi.ng.color.core');
gradients.draw.p = (function gradients$draw$p(key){
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,gradients.state.state),new cljs.core.Keyword(null,"params","params",710516235)),key);
});
gradients.draw.scale_noise_input = (function gradients$draw$scale_noise_input(val,factor){
return ((val * factor) * gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-zoom","noise-zoom",951081292)));
});
gradients.draw.noise_octave = (function gradients$draw$noise_octave(x,y,previous,n){
var ox = (gradients.draw.scale_noise_input.call(null,x,n) + gradients.draw.p.call(null,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230)));
var oy = (gradients.draw.scale_noise_input.call(null,y,n) + gradients.draw.p.call(null,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008)));
return (previous + (thi.ng.math.noise.noise2.call(null,ox,oy) / n));
});
gradients.draw.noise_factor = (function gradients$draw$noise_factor(x,y){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,gradients.draw.noise_octave,x,y),(0),cljs.core.range.call(null,(1),(gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-detail","noise-detail",676292333)) + (1))));
});
gradients.draw.noise = (function gradients$draw$noise(tri){
var noise = new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468).cljs$core$IFn$_invoke$arity$1(tri);
var rescaled_noise = gradients.util.rescale.call(null,noise,(-1),(1),(0),(1));
var rot_factor = (noise * gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-rot","noise-rot",1290658452)));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,tri,new cljs.core.Keyword(null,"width","width",-384071477),(function (p1__8810_SHARP_){
return (p1__8810_SHARP_ + (gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-size","noise-size",-1945450551)) * noise));
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__8811_SHARP_){
return (p1__8811_SHARP_ + (gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-size","noise-size",-1945450551)) * noise));
})),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(function (p1__8812_SHARP_){
return (p1__8812_SHARP_ + rot_factor);
})),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(function (p1__8813_SHARP_){
return gradients.util.mixmul.call(null,p1__8813_SHARP_,gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-alpha","noise-alpha",1003989259)),rescaled_noise);
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__8814_SHARP_){
return (p1__8814_SHARP_ + (gradients.draw.p.call(null,new cljs.core.Keyword(null,"noise-sharpness","noise-sharpness",1716311874)) * noise));
}));
});
gradients.draw.min_size = (function gradients$draw$min_size(tri){
return cljs.core.update.call(null,cljs.core.update.call(null,tri,new cljs.core.Keyword(null,"width","width",-384071477),(function (p1__8815_SHARP_){
var x__4306__auto__ = p1__8815_SHARP_;
var y__4307__auto__ = gradients.draw.p.call(null,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__8816_SHARP_){
var x__4306__auto__ = p1__8816_SHARP_;
var y__4307__auto__ = gradients.draw.p.call(null,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
}));
});
gradients.draw.screen_relative_size = (function gradients$draw$screen_relative_size(tri){
return cljs.core.update.call(null,cljs.core.update.call(null,tri,new cljs.core.Keyword(null,"width","width",-384071477),(function (p1__8817_SHARP_){
return (p1__8817_SHARP_ * ((1) / gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825))));
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__8818_SHARP_){
return (p1__8818_SHARP_ * ((1) / gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825))));
}));
});
gradients.draw.size = (function gradients$draw$size(tri){
return cljs.core.update.call(null,cljs.core.update.call(null,tri,new cljs.core.Keyword(null,"width","width",-384071477),(function (p1__8819_SHARP_){
return (p1__8819_SHARP_ * gradients.draw.p.call(null,new cljs.core.Keyword(null,"size","size",1098693007)));
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__8820_SHARP_){
return (p1__8820_SHARP_ * gradients.draw.p.call(null,new cljs.core.Keyword(null,"size","size",1098693007)));
}));
});
gradients.draw.color = (function gradients$draw$color(tri){
var start = gradients.draw.p.call(null,new cljs.core.Keyword(null,"start-color","start-color",-43619883));
var end = gradients.draw.p.call(null,new cljs.core.Keyword(null,"end-color","end-color",-203015781));
var noise = gradients.util.rescale.call(null,new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468).cljs$core$IFn$_invoke$arity$1(tri),(-1),(1),(0),(1));
var mix = thi.ng.math.core.mix.call(null,start,end,noise);
return cljs.core.assoc.call(null,tri,new cljs.core.Keyword(null,"color","color",1011675173),mix);
});
gradients.draw.vignette = (function gradients$draw$vignette(tri){
var closeness_to_center = ((2) * (0.5 - Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tri) - 0.5))));
var noise = ((1) - new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468).cljs$core$IFn$_invoke$arity$1(tri));
return cljs.core.update.call(null,tri,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(function (p1__8821_SHARP_){
return gradients.util.mixmul.call(null,p1__8821_SHARP_,(noise * gradients.draw.p.call(null,new cljs.core.Keyword(null,"vignette","vignette",-336473712))),closeness_to_center);
}));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
gradients.draw.Tri = (function (x,y,noise_factor,alpha,rotation,width,height,color,index,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.noise_factor = noise_factor;
this.alpha = alpha;
this.rotation = rotation;
this.width = width;
this.height = height;
this.color = color;
this.index = index;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(gradients.draw.Tri.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(gradients.draw.Tri.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k8823,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__8827 = k8823;
var G__8827__$1 = (((G__8827 instanceof cljs.core.Keyword))?G__8827.fqn:null);
switch (G__8827__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "noise-factor":
return self__.noise_factor;

break;
case "alpha":
return self__.alpha;

break;
case "rotation":
return self__.rotation;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "color":
return self__.color;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8823,else__4475__auto__);

}
}));

(gradients.draw.Tri.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__8828){
var vec__8829 = p__8828;
var k__4496__auto__ = cljs.core.nth.call(null,vec__8829,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__8829,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(gradients.draw.Tri.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#gradients.draw.Tri{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468),self__.noise_factor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotation","rotation",-1728051644),self__.rotation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null))], null),self__.__extmap));
}));

(gradients.draw.Tri.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8822){
var self__ = this;
var G__8822__$1 = this;
return (new cljs.core.RecordIter((0),G__8822__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"index","index",-1531685915)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(gradients.draw.Tri.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(gradients.draw.Tri.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,self__.__hash));
}));

(gradients.draw.Tri.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
}));

(gradients.draw.Tri.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1978986957 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(gradients.draw.Tri.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8824,other8825){
var self__ = this;
var this8824__$1 = this;
return (((!((other8825 == null)))) && ((((this8824__$1.constructor === other8825.constructor)) && (((cljs.core._EQ_.call(null,this8824__$1.x,other8825.x)) && (((cljs.core._EQ_.call(null,this8824__$1.y,other8825.y)) && (((cljs.core._EQ_.call(null,this8824__$1.noise_factor,other8825.noise_factor)) && (((cljs.core._EQ_.call(null,this8824__$1.alpha,other8825.alpha)) && (((cljs.core._EQ_.call(null,this8824__$1.rotation,other8825.rotation)) && (((cljs.core._EQ_.call(null,this8824__$1.width,other8825.width)) && (((cljs.core._EQ_.call(null,this8824__$1.height,other8825.height)) && (((cljs.core._EQ_.call(null,this8824__$1.color,other8825.color)) && (((cljs.core._EQ_.call(null,this8824__$1.index,other8825.index)) && (cljs.core._EQ_.call(null,this8824__$1.__extmap,other8825.__extmap)))))))))))))))))))))));
}));

(gradients.draw.Tri.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(gradients.draw.Tri.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k8823){
var self__ = this;
var this__4479__auto____$1 = this;
var G__8832 = k8823;
var G__8832__$1 = (((G__8832 instanceof cljs.core.Keyword))?G__8832.fqn:null);
switch (G__8832__$1) {
case "x":
case "y":
case "noise-factor":
case "alpha":
case "rotation":
case "width":
case "height":
case "color":
case "index":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k8823);

}
}));

(gradients.draw.Tri.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__8822){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__8833 = cljs.core.keyword_identical_QMARK_;
var expr__8834 = k__4481__auto__;
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__8834))){
return (new gradients.draw.Tri(G__8822,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__8834))){
return (new gradients.draw.Tri(self__.x,G__8822,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,G__8822,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,G__8822,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,G__8822,self__.width,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,G__8822,self__.height,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,G__8822,self__.color,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,G__8822,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8833.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__8834))){
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,G__8822,self__.__meta,self__.__extmap,null));
} else {
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__8822),null));
}
}
}
}
}
}
}
}
}
}));

(gradients.draw.Tri.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468),self__.noise_factor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),self__.rotation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color","color",1011675173),self__.color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null))], null),self__.__extmap));
}));

(gradients.draw.Tri.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__8822){
var self__ = this;
var this__4471__auto____$1 = this;
return (new gradients.draw.Tri(self__.x,self__.y,self__.noise_factor,self__.alpha,self__.rotation,self__.width,self__.height,self__.color,self__.index,G__8822,self__.__extmap,self__.__hash));
}));

(gradients.draw.Tri.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(gradients.draw.Tri.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"noise-factor","noise-factor",674916059,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null),new cljs.core.Symbol(null,"rotation","rotation",-87520117,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null);
}));

(gradients.draw.Tri.cljs$lang$type = true);

(gradients.draw.Tri.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"gradients.draw/Tri",null,(1),null));
}));

(gradients.draw.Tri.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"gradients.draw/Tri");
}));

/**
 * Positional factory function for gradients.draw/Tri.
 */
gradients.draw.__GT_Tri = (function gradients$draw$__GT_Tri(x,y,noise_factor,alpha,rotation,width,height,color,index){
return (new gradients.draw.Tri(x,y,noise_factor,alpha,rotation,width,height,color,index,null,null,null));
});

/**
 * Factory function for gradients.draw/Tri, taking a map of keywords to field values.
 */
gradients.draw.map__GT_Tri = (function gradients$draw$map__GT_Tri(G__8826){
var extmap__4512__auto__ = (function (){var G__8836 = cljs.core.dissoc.call(null,G__8826,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core.record_QMARK_.call(null,G__8826)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8836);
} else {
return G__8836;
}
})();
return (new gradients.draw.Tri(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"noise-factor","noise-factor",-965615468).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__8826),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__8826),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});

gradients.draw.get_tris = (function gradients$draw$get_tris(){
var padding = (2);
var bounds = ((padding + gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825))) + padding);
var iter__4622__auto__ = (function gradients$draw$get_tris_$_iter__8839(s__8840){
return (new cljs.core.LazySeq(null,(function (){
var s__8840__$1 = s__8840;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__8840__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first.call(null,xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__8840__$1,x,xs__6308__auto__,temp__5753__auto__,padding,bounds){
return (function gradients$draw$get_tris_$_iter__8839_$_iter__8841(s__8842){
return (new cljs.core.LazySeq(null,((function (s__8840__$1,x,xs__6308__auto__,temp__5753__auto__,padding,bounds){
return (function (){
var s__8842__$1 = s__8842;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__8842__$1);
if(temp__5753__auto____$1){
var s__8842__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8842__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__8842__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__8844 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__8843 = (0);
while(true){
if((i__8843 < size__4621__auto__)){
var y = cljs.core._nth.call(null,c__4620__auto__,i__8843);
cljs.core.chunk_append.call(null,b__8844,(function (){var relative_x = (x / gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)));
var relative_y = (y / gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)));
return (new gradients.draw.Tri(relative_x,relative_y,gradients.draw.noise_factor.call(null,relative_x,relative_y),(1),(0),(1),(1),gradients.draw.p.call(null,new cljs.core.Keyword(null,"start-color","start-color",-43619883)),((x + padding) + (bounds * (y + padding))),null,null,null));
})());

var G__8845 = (i__8843 + (1));
i__8843 = G__8845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8844),gradients$draw$get_tris_$_iter__8839_$_iter__8841.call(null,cljs.core.chunk_rest.call(null,s__8842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8844),null);
}
} else {
var y = cljs.core.first.call(null,s__8842__$2);
return cljs.core.cons.call(null,(function (){var relative_x = (x / gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)));
var relative_y = (y / gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)));
return (new gradients.draw.Tri(relative_x,relative_y,gradients.draw.noise_factor.call(null,relative_x,relative_y),(1),(0),(1),(1),gradients.draw.p.call(null,new cljs.core.Keyword(null,"start-color","start-color",-43619883)),((x + padding) + (bounds * (y + padding))),null,null,null));
})(),gradients$draw$get_tris_$_iter__8839_$_iter__8841.call(null,cljs.core.rest.call(null,s__8842__$2)));
}
} else {
return null;
}
break;
}
});})(s__8840__$1,x,xs__6308__auto__,temp__5753__auto__,padding,bounds))
,null,null));
});})(s__8840__$1,x,xs__6308__auto__,temp__5753__auto__,padding,bounds))
;
var fs__4619__auto__ = cljs.core.seq.call(null,iterys__4618__auto__.call(null,cljs.core.range.call(null,(- padding),(padding + gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825))))));
if(fs__4619__auto__){
return cljs.core.concat.call(null,fs__4619__auto__,gradients$draw$get_tris_$_iter__8839.call(null,cljs.core.rest.call(null,s__8840__$1)));
} else {
var G__8846 = cljs.core.rest.call(null,s__8840__$1);
s__8840__$1 = G__8846;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.range.call(null,(- padding),(padding + gradients.draw.p.call(null,new cljs.core.Keyword(null,"particle-count","particle-count",-1413139825)))));
});
gradients.draw.draw = (function gradients$draw$draw(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tris","tris",-1299590805),cljs.core.map.call(null,cljs.core.comp.call(null,gradients.draw.vignette,gradients.draw.color,gradients.draw.screen_relative_size,gradients.draw.min_size,gradients.draw.size,gradients.draw.noise),gradients.draw.get_tris.call(null)),new cljs.core.Keyword(null,"background-color","background-color",570434026),gradients.draw.p.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026))], null);
});

//# sourceMappingURL=draw.js.map
