// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('gradients.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gradients.params');
goog.require('cljs.core.async');
goog.require('gradients.util');
goog.require('thi.ng.color.core');
gradients.state.initial_params = (function gradients$state$initial_params(){
return cljs.core.reduce.call(null,(function (map,p__8728){
var vec__8729 = p__8728;
var key = cljs.core.nth.call(null,vec__8729,(0),null);
var specs = cljs.core.nth.call(null,vec__8729,(1),null);
return cljs.core.assoc.call(null,map,key,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(specs));
}),cljs.core.PersistentHashMap.EMPTY,gradients.params.config);
});
gradients.state.round_to_step = (function gradients$state$round_to_step(val,step){
return (step * (Math.floor((val / step)) | (0)));
});
gradients.state.random_param = (function gradients$state$random_param(key){
var conf = key.call(null,gradients.params.config);
var G__8732 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(conf);
var G__8732__$1 = (((G__8732 instanceof cljs.core.Keyword))?G__8732.fqn:null);
switch (G__8732__$1) {
case "float":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,gradients.state.round_to_step.call(null,gradients.util.rescale.call(null,cljs.core.rand.call(null),(0),(1),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(conf),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(conf)),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(conf))], null);

break;
case "color":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,thi.ng.color.core.random_rgb.call(null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8732__$1)].join('')));

}
});
gradients.state.randomize = (function gradients$state$randomize(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
return cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.map.call(null,gradients.state.random_param,cljs.core.keys.call(null,params)));
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
gradients.state.State = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(gradients.state.State.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(gradients.state.State.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k8735,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__8739 = k8735;
var G__8739__$1 = (((G__8739 instanceof cljs.core.Keyword))?G__8739.fqn:null);
switch (G__8739__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8735,else__4475__auto__);

}
}));

(gradients.state.State.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4495__auto__,p__8740){
var vec__8741 = p__8740;
var k__4496__auto__ = cljs.core.nth.call(null,vec__8741,(0),null);
var v__4497__auto__ = cljs.core.nth.call(null,vec__8741,(1),null);
return f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__);
}),init__4494__auto__,this__4492__auto____$1);
}));

(gradients.state.State.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4488__auto__,pr_pair__4490__auto__,"#gradients.state.State{",", ","}",opts__4489__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
}));

(gradients.state.State.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8734){
var self__ = this;
var G__8734__$1 = this;
return (new cljs.core.RecordIter((0),G__8734__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(gradients.state.State.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(gradients.state.State.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new gradients.state.State(self__.params,self__.__meta,self__.__extmap,self__.__hash));
}));

(gradients.state.State.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(gradients.state.State.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-567862992 ^ cljs.core.hash_unordered_coll.call(null,coll__4469__auto__));
}).call(null,this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(gradients.state.State.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8736,other8737){
var self__ = this;
var this8736__$1 = this;
return (((!((other8737 == null)))) && ((((this8736__$1.constructor === other8737.constructor)) && (((cljs.core._EQ_.call(null,this8736__$1.params,other8737.params)) && (cljs.core._EQ_.call(null,this8736__$1.__extmap,other8737.__extmap)))))));
}));

(gradients.state.State.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new gradients.state.State(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4483__auto__)),null));
}
}));

(gradients.state.State.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k8735){
var self__ = this;
var this__4479__auto____$1 = this;
var G__8744 = k8735;
var G__8744__$1 = (((G__8744 instanceof cljs.core.Keyword))?G__8744.fqn:null);
switch (G__8744__$1) {
case "params":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k8735);

}
}));

(gradients.state.State.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__8734){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__8745 = cljs.core.keyword_identical_QMARK_;
var expr__8746 = k__4481__auto__;
if(cljs.core.truth_(pred__8745.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__8746))){
return (new gradients.state.State(G__8734,self__.__meta,self__.__extmap,null));
} else {
return (new gradients.state.State(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4481__auto__,G__8734),null));
}
}));

(gradients.state.State.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null))], null),self__.__extmap));
}));

(gradients.state.State.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__8734){
var self__ = this;
var this__4471__auto____$1 = this;
return (new gradients.state.State(self__.params,G__8734,self__.__extmap,self__.__hash));
}));

(gradients.state.State.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4478__auto__,(0)),cljs.core._nth.call(null,entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(gradients.state.State.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
}));

(gradients.state.State.cljs$lang$type = true);

(gradients.state.State.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"gradients.state/State",null,(1),null));
}));

(gradients.state.State.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write.call(null,writer__4517__auto__,"gradients.state/State");
}));

/**
 * Positional factory function for gradients.state/State.
 */
gradients.state.__GT_State = (function gradients$state$__GT_State(params){
return (new gradients.state.State(params,null,null,null));
});

/**
 * Factory function for gradients.state/State, taking a map of keywords to field values.
 */
gradients.state.map__GT_State = (function gradients$state$map__GT_State(G__8738){
var extmap__4512__auto__ = (function (){var G__8748 = cljs.core.dissoc.call(null,G__8738,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.record_QMARK_.call(null,G__8738)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8748);
} else {
return G__8748;
}
})();
return (new gradients.state.State(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__8738),null,cljs.core.not_empty.call(null,extmap__4512__auto__),null));
});

if((typeof gradients !== 'undefined') && (typeof gradients.state !== 'undefined') && (typeof gradients.state.state !== 'undefined')){
} else {
gradients.state.state = reagent.core.atom.call(null,(new gradients.state.State(gradients.state.initial_params.call(null),null,null,null)));
}
if((typeof gradients !== 'undefined') && (typeof gradients.state !== 'undefined') && (typeof gradients.state.commands !== 'undefined')){
} else {
gradients.state.commands = cljs.core.async.chan.call(null);
}

//# sourceMappingURL=state.js.map
