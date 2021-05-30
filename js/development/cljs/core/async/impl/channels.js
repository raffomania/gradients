// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583 = (function (val,meta2584){
this.val = val;
this.meta2584 = meta2584;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2585,meta2584__$1){
var self__ = this;
var _2585__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583(self__.val,meta2584__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2585){
var self__ = this;
var _2585__$1 = this;
return self__.meta2584;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta2584","meta2584",1359468758,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels2583");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels2583");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels2583.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels2583 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels2583(val__$1,meta2584){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583(val__$1,meta2584));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels2583(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_2586 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$);
} else {
var m__4519__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_2586.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_2598 = self__.puts.pop();
if((putter_2598 == null)){
} else {
var put_handler_2599 = putter_2598.handler;
var val_2600 = putter_2598.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_2599)){
var put_cb_2601 = cljs.core.async.impl.protocols.commit.call(null,put_handler_2599);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_2601,put_handler_2599,val_2600,putter_2598,this$__$1){
return (function (){
return put_cb_2601.call(null,true);
});})(put_cb_2601,put_handler_2599,val_2600,putter_2598,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__4221__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__2602 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__2602;
continue;
} else {
var G__2603 = takers;
takers = G__2603;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__2587_2604 = cljs.core.seq.call(null,take_cbs);
var chunk__2588_2605 = null;
var count__2589_2606 = (0);
var i__2590_2607 = (0);
while(true){
if((i__2590_2607 < count__2589_2606)){
var f_2608 = cljs.core._nth.call(null,chunk__2588_2605,i__2590_2607);
cljs.core.async.impl.dispatch.run.call(null,f_2608);


var G__2609 = seq__2587_2604;
var G__2610 = chunk__2588_2605;
var G__2611 = count__2589_2606;
var G__2612 = (i__2590_2607 + (1));
seq__2587_2604 = G__2609;
chunk__2588_2605 = G__2610;
count__2589_2606 = G__2611;
i__2590_2607 = G__2612;
continue;
} else {
var temp__5753__auto___2613 = cljs.core.seq.call(null,seq__2587_2604);
if(temp__5753__auto___2613){
var seq__2587_2614__$1 = temp__5753__auto___2613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2587_2614__$1)){
var c__4649__auto___2615 = cljs.core.chunk_first.call(null,seq__2587_2614__$1);
var G__2616 = cljs.core.chunk_rest.call(null,seq__2587_2614__$1);
var G__2617 = c__4649__auto___2615;
var G__2618 = cljs.core.count.call(null,c__4649__auto___2615);
var G__2619 = (0);
seq__2587_2604 = G__2616;
chunk__2588_2605 = G__2617;
count__2589_2606 = G__2618;
i__2590_2607 = G__2619;
continue;
} else {
var f_2620 = cljs.core.first.call(null,seq__2587_2614__$1);
cljs.core.async.impl.dispatch.run.call(null,f_2620);


var G__2621 = cljs.core.next.call(null,seq__2587_2614__$1);
var G__2622 = null;
var G__2623 = (0);
var G__2624 = (0);
seq__2587_2604 = G__2621;
chunk__2588_2605 = G__2622;
count__2589_2606 = G__2623;
i__2590_2607 = G__2624;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5751__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5751__auto__)){
var take_cb = temp__5751__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__2591 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__4221__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__4221__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__4221__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))))){
var G__2625 = cbs__$1;
cbs = G__2625;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__2591,(0),null);
var cbs = cljs.core.nth.call(null,vec__2591,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__2594_2626 = cljs.core.seq.call(null,cbs);
var chunk__2595_2627 = null;
var count__2596_2628 = (0);
var i__2597_2629 = (0);
while(true){
if((i__2597_2629 < count__2596_2628)){
var cb_2630 = cljs.core._nth.call(null,chunk__2595_2627,i__2597_2629);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__2594_2626,chunk__2595_2627,count__2596_2628,i__2597_2629,cb_2630,val,vec__2591,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return cb_2630.call(null,true);
});})(seq__2594_2626,chunk__2595_2627,count__2596_2628,i__2597_2629,cb_2630,val,vec__2591,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__2631 = seq__2594_2626;
var G__2632 = chunk__2595_2627;
var G__2633 = count__2596_2628;
var G__2634 = (i__2597_2629 + (1));
seq__2594_2626 = G__2631;
chunk__2595_2627 = G__2632;
count__2596_2628 = G__2633;
i__2597_2629 = G__2634;
continue;
} else {
var temp__5753__auto___2635 = cljs.core.seq.call(null,seq__2594_2626);
if(temp__5753__auto___2635){
var seq__2594_2636__$1 = temp__5753__auto___2635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2594_2636__$1)){
var c__4649__auto___2637 = cljs.core.chunk_first.call(null,seq__2594_2636__$1);
var G__2638 = cljs.core.chunk_rest.call(null,seq__2594_2636__$1);
var G__2639 = c__4649__auto___2637;
var G__2640 = cljs.core.count.call(null,c__4649__auto___2637);
var G__2641 = (0);
seq__2594_2626 = G__2638;
chunk__2595_2627 = G__2639;
count__2596_2628 = G__2640;
i__2597_2629 = G__2641;
continue;
} else {
var cb_2642 = cljs.core.first.call(null,seq__2594_2636__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__2594_2626,chunk__2595_2627,count__2596_2628,i__2597_2629,cb_2642,seq__2594_2636__$1,temp__5753__auto___2635,val,vec__2591,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return cb_2642.call(null,true);
});})(seq__2594_2626,chunk__2595_2627,count__2596_2628,i__2597_2629,cb_2642,seq__2594_2636__$1,temp__5753__auto___2635,val,vec__2591,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__2643 = cljs.core.next.call(null,seq__2594_2636__$1);
var G__2644 = null;
var G__2645 = (0);
var G__2646 = (0);
seq__2594_2626 = G__2643;
chunk__2595_2627 = G__2644;
count__2596_2628 = G__2645;
i__2597_2629 = G__2646;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__4221__auto__;
}
})())){
var has_val = (function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4221__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return (self__.puts.length === (0));
} else {
return and__4221__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_2647 = self__.takes.pop();
if((taker_2647 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_2647)){
var take_cb_2648 = cljs.core.async.impl.protocols.commit.call(null,taker_2647);
var val_2649 = (cljs.core.truth_((function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4221__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_2648,val_2649,taker_2647,this$__$1){
return (function (){
return take_cb_2648.call(null,val_2649);
});})(take_cb_2648,val_2649,taker_2647,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4223__auto__ = exh;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__2651 = arguments.length;
switch (G__2651) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__2655 = null;
var G__2655__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e2652){var t = e2652;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__2655__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e2653){var t = e2653;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__2655 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__2655__1.call(this,buf__$1);
case 2:
return G__2655__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2655.cljs$core$IFn$_invoke$arity$1 = G__2655__1;
G__2655.cljs$core$IFn$_invoke$arity$2 = G__2655__2;
return G__2655;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map
