// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__5565 = arguments.length;
switch (G__5565) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5566 = (function (f,blockable,meta5567){
this.f = f;
this.blockable = blockable;
this.meta5567 = meta5567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5568,meta5567__$1){
var self__ = this;
var _5568__$1 = this;
return (new cljs.core.async.t_cljs$core$async5566(self__.f,self__.blockable,meta5567__$1));
}));

(cljs.core.async.t_cljs$core$async5566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5568){
var self__ = this;
var _5568__$1 = this;
return self__.meta5567;
}));

(cljs.core.async.t_cljs$core$async5566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async5566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async5566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta5567","meta5567",1835093335,null)], null);
}));

(cljs.core.async.t_cljs$core$async5566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5566");

(cljs.core.async.t_cljs$core$async5566.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async5566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5566.
 */
cljs.core.async.__GT_t_cljs$core$async5566 = (function cljs$core$async$__GT_t_cljs$core$async5566(f__$1,blockable__$1,meta5567){
return (new cljs.core.async.t_cljs$core$async5566(f__$1,blockable__$1,meta5567));
});

}

return (new cljs.core.async.t_cljs$core$async5566(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__5572 = arguments.length;
switch (G__5572) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__5575 = arguments.length;
switch (G__5575) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__5578 = arguments.length;
switch (G__5578) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_5580 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_5580);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_5580);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__5582 = arguments.length;
switch (G__5582) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___5584 = n;
var x_5585 = (0);
while(true){
if((x_5585 < n__4706__auto___5584)){
(a[x_5585] = (0));

var G__5586 = (x_5585 + (1));
x_5585 = G__5586;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__5587 = (i + (1));
i = G__5587;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5588 = (function (flag,meta5589){
this.flag = flag;
this.meta5589 = meta5589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5590,meta5589__$1){
var self__ = this;
var _5590__$1 = this;
return (new cljs.core.async.t_cljs$core$async5588(self__.flag,meta5589__$1));
}));

(cljs.core.async.t_cljs$core$async5588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5590){
var self__ = this;
var _5590__$1 = this;
return self__.meta5589;
}));

(cljs.core.async.t_cljs$core$async5588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async5588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async5588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta5589","meta5589",-255993410,null)], null);
}));

(cljs.core.async.t_cljs$core$async5588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5588");

(cljs.core.async.t_cljs$core$async5588.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async5588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5588.
 */
cljs.core.async.__GT_t_cljs$core$async5588 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async5588(flag__$1,meta5589){
return (new cljs.core.async.t_cljs$core$async5588(flag__$1,meta5589));
});

}

return (new cljs.core.async.t_cljs$core$async5588(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5591 = (function (flag,cb,meta5592){
this.flag = flag;
this.cb = cb;
this.meta5592 = meta5592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5593,meta5592__$1){
var self__ = this;
var _5593__$1 = this;
return (new cljs.core.async.t_cljs$core$async5591(self__.flag,self__.cb,meta5592__$1));
}));

(cljs.core.async.t_cljs$core$async5591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5593){
var self__ = this;
var _5593__$1 = this;
return self__.meta5592;
}));

(cljs.core.async.t_cljs$core$async5591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async5591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async5591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta5592","meta5592",-1375596715,null)], null);
}));

(cljs.core.async.t_cljs$core$async5591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5591");

(cljs.core.async.t_cljs$core$async5591.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async5591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5591.
 */
cljs.core.async.__GT_t_cljs$core$async5591 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async5591(flag__$1,cb__$1,meta5592){
return (new cljs.core.async.t_cljs$core$async5591(flag__$1,cb__$1,meta5592));
});

}

return (new cljs.core.async.t_cljs$core$async5591(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5594_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5594_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5595_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5595_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__5596 = (i + (1));
i = G__5596;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___5601 = arguments.length;
var i__4830__auto___5602 = (0);
while(true){
if((i__4830__auto___5602 < len__4829__auto___5601)){
args__4835__auto__.push((arguments[i__4830__auto___5602]));

var G__5603 = (i__4830__auto___5602 + (1));
i__4830__auto___5602 = G__5603;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__5599){
var map__5600 = p__5599;
var map__5600__$1 = cljs.core.__destructure_map.call(null,map__5600);
var opts = map__5600__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq5597){
var G__5598 = cljs.core.first.call(null,seq5597);
var seq5597__$1 = cljs.core.next.call(null,seq5597);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5598,seq5597__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__5605 = arguments.length;
switch (G__5605) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__5505__auto___5651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_5629){
var state_val_5630 = (state_5629[(1)]);
if((state_val_5630 === (7))){
var inst_5625 = (state_5629[(2)]);
var state_5629__$1 = state_5629;
var statearr_5631_5652 = state_5629__$1;
(statearr_5631_5652[(2)] = inst_5625);

(statearr_5631_5652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (1))){
var state_5629__$1 = state_5629;
var statearr_5632_5653 = state_5629__$1;
(statearr_5632_5653[(2)] = null);

(statearr_5632_5653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (4))){
var inst_5608 = (state_5629[(7)]);
var inst_5608__$1 = (state_5629[(2)]);
var inst_5609 = (inst_5608__$1 == null);
var state_5629__$1 = (function (){var statearr_5633 = state_5629;
(statearr_5633[(7)] = inst_5608__$1);

return statearr_5633;
})();
if(cljs.core.truth_(inst_5609)){
var statearr_5634_5654 = state_5629__$1;
(statearr_5634_5654[(1)] = (5));

} else {
var statearr_5635_5655 = state_5629__$1;
(statearr_5635_5655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (13))){
var state_5629__$1 = state_5629;
var statearr_5636_5656 = state_5629__$1;
(statearr_5636_5656[(2)] = null);

(statearr_5636_5656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (6))){
var inst_5608 = (state_5629[(7)]);
var state_5629__$1 = state_5629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5629__$1,(11),to,inst_5608);
} else {
if((state_val_5630 === (3))){
var inst_5627 = (state_5629[(2)]);
var state_5629__$1 = state_5629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5629__$1,inst_5627);
} else {
if((state_val_5630 === (12))){
var state_5629__$1 = state_5629;
var statearr_5637_5657 = state_5629__$1;
(statearr_5637_5657[(2)] = null);

(statearr_5637_5657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (2))){
var state_5629__$1 = state_5629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5629__$1,(4),from);
} else {
if((state_val_5630 === (11))){
var inst_5618 = (state_5629[(2)]);
var state_5629__$1 = state_5629;
if(cljs.core.truth_(inst_5618)){
var statearr_5638_5658 = state_5629__$1;
(statearr_5638_5658[(1)] = (12));

} else {
var statearr_5639_5659 = state_5629__$1;
(statearr_5639_5659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (9))){
var state_5629__$1 = state_5629;
var statearr_5640_5660 = state_5629__$1;
(statearr_5640_5660[(2)] = null);

(statearr_5640_5660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (5))){
var state_5629__$1 = state_5629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5641_5661 = state_5629__$1;
(statearr_5641_5661[(1)] = (8));

} else {
var statearr_5642_5662 = state_5629__$1;
(statearr_5642_5662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (14))){
var inst_5623 = (state_5629[(2)]);
var state_5629__$1 = state_5629;
var statearr_5643_5663 = state_5629__$1;
(statearr_5643_5663[(2)] = inst_5623);

(statearr_5643_5663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (10))){
var inst_5615 = (state_5629[(2)]);
var state_5629__$1 = state_5629;
var statearr_5644_5664 = state_5629__$1;
(statearr_5644_5664[(2)] = inst_5615);

(statearr_5644_5664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5630 === (8))){
var inst_5612 = cljs.core.async.close_BANG_.call(null,to);
var state_5629__$1 = state_5629;
var statearr_5645_5665 = state_5629__$1;
(statearr_5645_5665[(2)] = inst_5612);

(statearr_5645_5665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_5646 = [null,null,null,null,null,null,null,null];
(statearr_5646[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_5646[(1)] = (1));

return statearr_5646;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_5629){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5647){if((e5647 instanceof Object)){
var ex__5412__auto__ = e5647;
var statearr_5648_5666 = state_5629;
(statearr_5648_5666[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5667 = state_5629;
state_5629 = G__5667;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_5629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_5629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_5649 = f__5506__auto__.call(null);
(statearr_5649[(6)] = c__5505__auto___5651);

return statearr_5649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__5668){
var vec__5669 = p__5668;
var v = cljs.core.nth.call(null,vec__5669,(0),null);
var p = cljs.core.nth.call(null,vec__5669,(1),null);
var job = vec__5669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5505__auto___5840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_5676){
var state_val_5677 = (state_5676[(1)]);
if((state_val_5677 === (1))){
var state_5676__$1 = state_5676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5676__$1,(2),res,v);
} else {
if((state_val_5677 === (2))){
var inst_5673 = (state_5676[(2)]);
var inst_5674 = cljs.core.async.close_BANG_.call(null,res);
var state_5676__$1 = (function (){var statearr_5678 = state_5676;
(statearr_5678[(7)] = inst_5673);

return statearr_5678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5676__$1,inst_5674);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0 = (function (){
var statearr_5679 = [null,null,null,null,null,null,null,null];
(statearr_5679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__);

(statearr_5679[(1)] = (1));

return statearr_5679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1 = (function (state_5676){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5680){if((e5680 instanceof Object)){
var ex__5412__auto__ = e5680;
var statearr_5681_5841 = state_5676;
(statearr_5681_5841[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5842 = state_5676;
state_5676 = G__5842;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = function(state_5676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1.call(this,state_5676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_5682 = f__5506__auto__.call(null);
(statearr_5682[(6)] = c__5505__auto___5840);

return statearr_5682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__5683){
var vec__5684 = p__5683;
var v = cljs.core.nth.call(null,vec__5684,(0),null);
var p = cljs.core.nth.call(null,vec__5684,(1),null);
var job = vec__5684;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4706__auto___5843 = n;
var __5844 = (0);
while(true){
if((__5844 < n__4706__auto___5843)){
var G__5687_5845 = type;
var G__5687_5846__$1 = (((G__5687_5845 instanceof cljs.core.Keyword))?G__5687_5845.fqn:null);
switch (G__5687_5846__$1) {
case "compute":
var c__5505__auto___5848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5844,c__5505__auto___5848,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async){
return (function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = ((function (__5844,c__5505__auto___5848,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async){
return (function (state_5700){
var state_val_5701 = (state_5700[(1)]);
if((state_val_5701 === (1))){
var state_5700__$1 = state_5700;
var statearr_5702_5849 = state_5700__$1;
(statearr_5702_5849[(2)] = null);

(statearr_5702_5849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5701 === (2))){
var state_5700__$1 = state_5700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5700__$1,(4),jobs);
} else {
if((state_val_5701 === (3))){
var inst_5698 = (state_5700[(2)]);
var state_5700__$1 = state_5700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5700__$1,inst_5698);
} else {
if((state_val_5701 === (4))){
var inst_5690 = (state_5700[(2)]);
var inst_5691 = process.call(null,inst_5690);
var state_5700__$1 = state_5700;
if(cljs.core.truth_(inst_5691)){
var statearr_5703_5850 = state_5700__$1;
(statearr_5703_5850[(1)] = (5));

} else {
var statearr_5704_5851 = state_5700__$1;
(statearr_5704_5851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5701 === (5))){
var state_5700__$1 = state_5700;
var statearr_5705_5852 = state_5700__$1;
(statearr_5705_5852[(2)] = null);

(statearr_5705_5852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5701 === (6))){
var state_5700__$1 = state_5700;
var statearr_5706_5853 = state_5700__$1;
(statearr_5706_5853[(2)] = null);

(statearr_5706_5853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5701 === (7))){
var inst_5696 = (state_5700[(2)]);
var state_5700__$1 = state_5700;
var statearr_5707_5854 = state_5700__$1;
(statearr_5707_5854[(2)] = inst_5696);

(statearr_5707_5854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__5844,c__5505__auto___5848,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async))
;
return ((function (__5844,switch__5408__auto__,c__5505__auto___5848,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0 = (function (){
var statearr_5708 = [null,null,null,null,null,null,null];
(statearr_5708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__);

(statearr_5708[(1)] = (1));

return statearr_5708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1 = (function (state_5700){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5709){if((e5709 instanceof Object)){
var ex__5412__auto__ = e5709;
var statearr_5710_5855 = state_5700;
(statearr_5710_5855[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5856 = state_5700;
state_5700 = G__5856;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = function(state_5700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1.call(this,state_5700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__;
})()
;})(__5844,switch__5408__auto__,c__5505__auto___5848,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async))
})();
var state__5507__auto__ = (function (){var statearr_5711 = f__5506__auto__.call(null);
(statearr_5711[(6)] = c__5505__auto___5848);

return statearr_5711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
});})(__5844,c__5505__auto___5848,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async))
);


break;
case "async":
var c__5505__auto___5857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5844,c__5505__auto___5857,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async){
return (function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = ((function (__5844,c__5505__auto___5857,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async){
return (function (state_5724){
var state_val_5725 = (state_5724[(1)]);
if((state_val_5725 === (1))){
var state_5724__$1 = state_5724;
var statearr_5726_5858 = state_5724__$1;
(statearr_5726_5858[(2)] = null);

(statearr_5726_5858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (2))){
var state_5724__$1 = state_5724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5724__$1,(4),jobs);
} else {
if((state_val_5725 === (3))){
var inst_5722 = (state_5724[(2)]);
var state_5724__$1 = state_5724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5724__$1,inst_5722);
} else {
if((state_val_5725 === (4))){
var inst_5714 = (state_5724[(2)]);
var inst_5715 = async.call(null,inst_5714);
var state_5724__$1 = state_5724;
if(cljs.core.truth_(inst_5715)){
var statearr_5727_5859 = state_5724__$1;
(statearr_5727_5859[(1)] = (5));

} else {
var statearr_5728_5860 = state_5724__$1;
(statearr_5728_5860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (5))){
var state_5724__$1 = state_5724;
var statearr_5729_5861 = state_5724__$1;
(statearr_5729_5861[(2)] = null);

(statearr_5729_5861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (6))){
var state_5724__$1 = state_5724;
var statearr_5730_5862 = state_5724__$1;
(statearr_5730_5862[(2)] = null);

(statearr_5730_5862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (7))){
var inst_5720 = (state_5724[(2)]);
var state_5724__$1 = state_5724;
var statearr_5731_5863 = state_5724__$1;
(statearr_5731_5863[(2)] = inst_5720);

(statearr_5731_5863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__5844,c__5505__auto___5857,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async))
;
return ((function (__5844,switch__5408__auto__,c__5505__auto___5857,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0 = (function (){
var statearr_5732 = [null,null,null,null,null,null,null];
(statearr_5732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__);

(statearr_5732[(1)] = (1));

return statearr_5732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1 = (function (state_5724){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5733){if((e5733 instanceof Object)){
var ex__5412__auto__ = e5733;
var statearr_5734_5864 = state_5724;
(statearr_5734_5864[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5865 = state_5724;
state_5724 = G__5865;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = function(state_5724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1.call(this,state_5724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__;
})()
;})(__5844,switch__5408__auto__,c__5505__auto___5857,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async))
})();
var state__5507__auto__ = (function (){var statearr_5735 = f__5506__auto__.call(null);
(statearr_5735[(6)] = c__5505__auto___5857);

return statearr_5735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
});})(__5844,c__5505__auto___5857,G__5687_5845,G__5687_5846__$1,n__4706__auto___5843,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5687_5846__$1)].join('')));

}

var G__5866 = (__5844 + (1));
__5844 = G__5866;
continue;
} else {
}
break;
}

var c__5505__auto___5867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_5757){
var state_val_5758 = (state_5757[(1)]);
if((state_val_5758 === (7))){
var inst_5753 = (state_5757[(2)]);
var state_5757__$1 = state_5757;
var statearr_5759_5868 = state_5757__$1;
(statearr_5759_5868[(2)] = inst_5753);

(statearr_5759_5868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5758 === (1))){
var state_5757__$1 = state_5757;
var statearr_5760_5869 = state_5757__$1;
(statearr_5760_5869[(2)] = null);

(statearr_5760_5869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5758 === (4))){
var inst_5738 = (state_5757[(7)]);
var inst_5738__$1 = (state_5757[(2)]);
var inst_5739 = (inst_5738__$1 == null);
var state_5757__$1 = (function (){var statearr_5761 = state_5757;
(statearr_5761[(7)] = inst_5738__$1);

return statearr_5761;
})();
if(cljs.core.truth_(inst_5739)){
var statearr_5762_5870 = state_5757__$1;
(statearr_5762_5870[(1)] = (5));

} else {
var statearr_5763_5871 = state_5757__$1;
(statearr_5763_5871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5758 === (6))){
var inst_5743 = (state_5757[(8)]);
var inst_5738 = (state_5757[(7)]);
var inst_5743__$1 = cljs.core.async.chan.call(null,(1));
var inst_5744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5745 = [inst_5738,inst_5743__$1];
var inst_5746 = (new cljs.core.PersistentVector(null,2,(5),inst_5744,inst_5745,null));
var state_5757__$1 = (function (){var statearr_5764 = state_5757;
(statearr_5764[(8)] = inst_5743__$1);

return statearr_5764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5757__$1,(8),jobs,inst_5746);
} else {
if((state_val_5758 === (3))){
var inst_5755 = (state_5757[(2)]);
var state_5757__$1 = state_5757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5757__$1,inst_5755);
} else {
if((state_val_5758 === (2))){
var state_5757__$1 = state_5757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5757__$1,(4),from);
} else {
if((state_val_5758 === (9))){
var inst_5750 = (state_5757[(2)]);
var state_5757__$1 = (function (){var statearr_5765 = state_5757;
(statearr_5765[(9)] = inst_5750);

return statearr_5765;
})();
var statearr_5766_5872 = state_5757__$1;
(statearr_5766_5872[(2)] = null);

(statearr_5766_5872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5758 === (5))){
var inst_5741 = cljs.core.async.close_BANG_.call(null,jobs);
var state_5757__$1 = state_5757;
var statearr_5767_5873 = state_5757__$1;
(statearr_5767_5873[(2)] = inst_5741);

(statearr_5767_5873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5758 === (8))){
var inst_5743 = (state_5757[(8)]);
var inst_5748 = (state_5757[(2)]);
var state_5757__$1 = (function (){var statearr_5768 = state_5757;
(statearr_5768[(10)] = inst_5748);

return statearr_5768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5757__$1,(9),results,inst_5743);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0 = (function (){
var statearr_5769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__);

(statearr_5769[(1)] = (1));

return statearr_5769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1 = (function (state_5757){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5770){if((e5770 instanceof Object)){
var ex__5412__auto__ = e5770;
var statearr_5771_5874 = state_5757;
(statearr_5771_5874[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5875 = state_5757;
state_5757 = G__5875;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = function(state_5757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1.call(this,state_5757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_5772 = f__5506__auto__.call(null);
(statearr_5772[(6)] = c__5505__auto___5867);

return statearr_5772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


var c__5505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_5810){
var state_val_5811 = (state_5810[(1)]);
if((state_val_5811 === (7))){
var inst_5806 = (state_5810[(2)]);
var state_5810__$1 = state_5810;
var statearr_5812_5876 = state_5810__$1;
(statearr_5812_5876[(2)] = inst_5806);

(statearr_5812_5876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (20))){
var state_5810__$1 = state_5810;
var statearr_5813_5877 = state_5810__$1;
(statearr_5813_5877[(2)] = null);

(statearr_5813_5877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (1))){
var state_5810__$1 = state_5810;
var statearr_5814_5878 = state_5810__$1;
(statearr_5814_5878[(2)] = null);

(statearr_5814_5878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (4))){
var inst_5775 = (state_5810[(7)]);
var inst_5775__$1 = (state_5810[(2)]);
var inst_5776 = (inst_5775__$1 == null);
var state_5810__$1 = (function (){var statearr_5815 = state_5810;
(statearr_5815[(7)] = inst_5775__$1);

return statearr_5815;
})();
if(cljs.core.truth_(inst_5776)){
var statearr_5816_5879 = state_5810__$1;
(statearr_5816_5879[(1)] = (5));

} else {
var statearr_5817_5880 = state_5810__$1;
(statearr_5817_5880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (15))){
var inst_5788 = (state_5810[(8)]);
var state_5810__$1 = state_5810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5810__$1,(18),to,inst_5788);
} else {
if((state_val_5811 === (21))){
var inst_5801 = (state_5810[(2)]);
var state_5810__$1 = state_5810;
var statearr_5818_5881 = state_5810__$1;
(statearr_5818_5881[(2)] = inst_5801);

(statearr_5818_5881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (13))){
var inst_5803 = (state_5810[(2)]);
var state_5810__$1 = (function (){var statearr_5819 = state_5810;
(statearr_5819[(9)] = inst_5803);

return statearr_5819;
})();
var statearr_5820_5882 = state_5810__$1;
(statearr_5820_5882[(2)] = null);

(statearr_5820_5882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (6))){
var inst_5775 = (state_5810[(7)]);
var state_5810__$1 = state_5810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5810__$1,(11),inst_5775);
} else {
if((state_val_5811 === (17))){
var inst_5796 = (state_5810[(2)]);
var state_5810__$1 = state_5810;
if(cljs.core.truth_(inst_5796)){
var statearr_5821_5883 = state_5810__$1;
(statearr_5821_5883[(1)] = (19));

} else {
var statearr_5822_5884 = state_5810__$1;
(statearr_5822_5884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (3))){
var inst_5808 = (state_5810[(2)]);
var state_5810__$1 = state_5810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5810__$1,inst_5808);
} else {
if((state_val_5811 === (12))){
var inst_5785 = (state_5810[(10)]);
var state_5810__$1 = state_5810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5810__$1,(14),inst_5785);
} else {
if((state_val_5811 === (2))){
var state_5810__$1 = state_5810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5810__$1,(4),results);
} else {
if((state_val_5811 === (19))){
var state_5810__$1 = state_5810;
var statearr_5823_5885 = state_5810__$1;
(statearr_5823_5885[(2)] = null);

(statearr_5823_5885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (11))){
var inst_5785 = (state_5810[(2)]);
var state_5810__$1 = (function (){var statearr_5824 = state_5810;
(statearr_5824[(10)] = inst_5785);

return statearr_5824;
})();
var statearr_5825_5886 = state_5810__$1;
(statearr_5825_5886[(2)] = null);

(statearr_5825_5886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (9))){
var state_5810__$1 = state_5810;
var statearr_5826_5887 = state_5810__$1;
(statearr_5826_5887[(2)] = null);

(statearr_5826_5887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (5))){
var state_5810__$1 = state_5810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5827_5888 = state_5810__$1;
(statearr_5827_5888[(1)] = (8));

} else {
var statearr_5828_5889 = state_5810__$1;
(statearr_5828_5889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (14))){
var inst_5788 = (state_5810[(8)]);
var inst_5790 = (state_5810[(11)]);
var inst_5788__$1 = (state_5810[(2)]);
var inst_5789 = (inst_5788__$1 == null);
var inst_5790__$1 = cljs.core.not.call(null,inst_5789);
var state_5810__$1 = (function (){var statearr_5829 = state_5810;
(statearr_5829[(8)] = inst_5788__$1);

(statearr_5829[(11)] = inst_5790__$1);

return statearr_5829;
})();
if(inst_5790__$1){
var statearr_5830_5890 = state_5810__$1;
(statearr_5830_5890[(1)] = (15));

} else {
var statearr_5831_5891 = state_5810__$1;
(statearr_5831_5891[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (16))){
var inst_5790 = (state_5810[(11)]);
var state_5810__$1 = state_5810;
var statearr_5832_5892 = state_5810__$1;
(statearr_5832_5892[(2)] = inst_5790);

(statearr_5832_5892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (10))){
var inst_5782 = (state_5810[(2)]);
var state_5810__$1 = state_5810;
var statearr_5833_5893 = state_5810__$1;
(statearr_5833_5893[(2)] = inst_5782);

(statearr_5833_5893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (18))){
var inst_5793 = (state_5810[(2)]);
var state_5810__$1 = state_5810;
var statearr_5834_5894 = state_5810__$1;
(statearr_5834_5894[(2)] = inst_5793);

(statearr_5834_5894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5811 === (8))){
var inst_5779 = cljs.core.async.close_BANG_.call(null,to);
var state_5810__$1 = state_5810;
var statearr_5835_5895 = state_5810__$1;
(statearr_5835_5895[(2)] = inst_5779);

(statearr_5835_5895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0 = (function (){
var statearr_5836 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__);

(statearr_5836[(1)] = (1));

return statearr_5836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1 = (function (state_5810){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5837){if((e5837 instanceof Object)){
var ex__5412__auto__ = e5837;
var statearr_5838_5896 = state_5810;
(statearr_5838_5896[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5897 = state_5810;
state_5810 = G__5897;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__ = function(state_5810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1.call(this,state_5810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_5839 = f__5506__auto__.call(null);
(statearr_5839[(6)] = c__5505__auto__);

return statearr_5839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));

return c__5505__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__5899 = arguments.length;
switch (G__5899) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__5902 = arguments.length;
switch (G__5902) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__5905 = arguments.length;
switch (G__5905) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__5505__auto___5954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_5931){
var state_val_5932 = (state_5931[(1)]);
if((state_val_5932 === (7))){
var inst_5927 = (state_5931[(2)]);
var state_5931__$1 = state_5931;
var statearr_5933_5955 = state_5931__$1;
(statearr_5933_5955[(2)] = inst_5927);

(statearr_5933_5955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (1))){
var state_5931__$1 = state_5931;
var statearr_5934_5956 = state_5931__$1;
(statearr_5934_5956[(2)] = null);

(statearr_5934_5956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (4))){
var inst_5908 = (state_5931[(7)]);
var inst_5908__$1 = (state_5931[(2)]);
var inst_5909 = (inst_5908__$1 == null);
var state_5931__$1 = (function (){var statearr_5935 = state_5931;
(statearr_5935[(7)] = inst_5908__$1);

return statearr_5935;
})();
if(cljs.core.truth_(inst_5909)){
var statearr_5936_5957 = state_5931__$1;
(statearr_5936_5957[(1)] = (5));

} else {
var statearr_5937_5958 = state_5931__$1;
(statearr_5937_5958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (13))){
var state_5931__$1 = state_5931;
var statearr_5938_5959 = state_5931__$1;
(statearr_5938_5959[(2)] = null);

(statearr_5938_5959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (6))){
var inst_5908 = (state_5931[(7)]);
var inst_5914 = p.call(null,inst_5908);
var state_5931__$1 = state_5931;
if(cljs.core.truth_(inst_5914)){
var statearr_5939_5960 = state_5931__$1;
(statearr_5939_5960[(1)] = (9));

} else {
var statearr_5940_5961 = state_5931__$1;
(statearr_5940_5961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (3))){
var inst_5929 = (state_5931[(2)]);
var state_5931__$1 = state_5931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5931__$1,inst_5929);
} else {
if((state_val_5932 === (12))){
var state_5931__$1 = state_5931;
var statearr_5941_5962 = state_5931__$1;
(statearr_5941_5962[(2)] = null);

(statearr_5941_5962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (2))){
var state_5931__$1 = state_5931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5931__$1,(4),ch);
} else {
if((state_val_5932 === (11))){
var inst_5908 = (state_5931[(7)]);
var inst_5918 = (state_5931[(2)]);
var state_5931__$1 = state_5931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5931__$1,(8),inst_5918,inst_5908);
} else {
if((state_val_5932 === (9))){
var state_5931__$1 = state_5931;
var statearr_5942_5963 = state_5931__$1;
(statearr_5942_5963[(2)] = tc);

(statearr_5942_5963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (5))){
var inst_5911 = cljs.core.async.close_BANG_.call(null,tc);
var inst_5912 = cljs.core.async.close_BANG_.call(null,fc);
var state_5931__$1 = (function (){var statearr_5943 = state_5931;
(statearr_5943[(8)] = inst_5911);

return statearr_5943;
})();
var statearr_5944_5964 = state_5931__$1;
(statearr_5944_5964[(2)] = inst_5912);

(statearr_5944_5964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (14))){
var inst_5925 = (state_5931[(2)]);
var state_5931__$1 = state_5931;
var statearr_5945_5965 = state_5931__$1;
(statearr_5945_5965[(2)] = inst_5925);

(statearr_5945_5965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (10))){
var state_5931__$1 = state_5931;
var statearr_5946_5966 = state_5931__$1;
(statearr_5946_5966[(2)] = fc);

(statearr_5946_5966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5932 === (8))){
var inst_5920 = (state_5931[(2)]);
var state_5931__$1 = state_5931;
if(cljs.core.truth_(inst_5920)){
var statearr_5947_5967 = state_5931__$1;
(statearr_5947_5967[(1)] = (12));

} else {
var statearr_5948_5968 = state_5931__$1;
(statearr_5948_5968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_5949 = [null,null,null,null,null,null,null,null,null];
(statearr_5949[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_5949[(1)] = (1));

return statearr_5949;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_5931){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e5950){if((e5950 instanceof Object)){
var ex__5412__auto__ = e5950;
var statearr_5951_5969 = state_5931;
(statearr_5951_5969[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5970 = state_5931;
state_5931 = G__5970;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_5931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_5931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_5952 = f__5506__auto__.call(null);
(statearr_5952[(6)] = c__5505__auto___5954);

return statearr_5952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__5505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_5991){
var state_val_5992 = (state_5991[(1)]);
if((state_val_5992 === (7))){
var inst_5987 = (state_5991[(2)]);
var state_5991__$1 = state_5991;
var statearr_5993_6011 = state_5991__$1;
(statearr_5993_6011[(2)] = inst_5987);

(statearr_5993_6011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (1))){
var inst_5971 = init;
var state_5991__$1 = (function (){var statearr_5994 = state_5991;
(statearr_5994[(7)] = inst_5971);

return statearr_5994;
})();
var statearr_5995_6012 = state_5991__$1;
(statearr_5995_6012[(2)] = null);

(statearr_5995_6012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (4))){
var inst_5974 = (state_5991[(8)]);
var inst_5974__$1 = (state_5991[(2)]);
var inst_5975 = (inst_5974__$1 == null);
var state_5991__$1 = (function (){var statearr_5996 = state_5991;
(statearr_5996[(8)] = inst_5974__$1);

return statearr_5996;
})();
if(cljs.core.truth_(inst_5975)){
var statearr_5997_6013 = state_5991__$1;
(statearr_5997_6013[(1)] = (5));

} else {
var statearr_5998_6014 = state_5991__$1;
(statearr_5998_6014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (6))){
var inst_5971 = (state_5991[(7)]);
var inst_5978 = (state_5991[(9)]);
var inst_5974 = (state_5991[(8)]);
var inst_5978__$1 = f.call(null,inst_5971,inst_5974);
var inst_5979 = cljs.core.reduced_QMARK_.call(null,inst_5978__$1);
var state_5991__$1 = (function (){var statearr_5999 = state_5991;
(statearr_5999[(9)] = inst_5978__$1);

return statearr_5999;
})();
if(inst_5979){
var statearr_6000_6015 = state_5991__$1;
(statearr_6000_6015[(1)] = (8));

} else {
var statearr_6001_6016 = state_5991__$1;
(statearr_6001_6016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (3))){
var inst_5989 = (state_5991[(2)]);
var state_5991__$1 = state_5991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5991__$1,inst_5989);
} else {
if((state_val_5992 === (2))){
var state_5991__$1 = state_5991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5991__$1,(4),ch);
} else {
if((state_val_5992 === (9))){
var inst_5978 = (state_5991[(9)]);
var inst_5971 = inst_5978;
var state_5991__$1 = (function (){var statearr_6002 = state_5991;
(statearr_6002[(7)] = inst_5971);

return statearr_6002;
})();
var statearr_6003_6017 = state_5991__$1;
(statearr_6003_6017[(2)] = null);

(statearr_6003_6017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (5))){
var inst_5971 = (state_5991[(7)]);
var state_5991__$1 = state_5991;
var statearr_6004_6018 = state_5991__$1;
(statearr_6004_6018[(2)] = inst_5971);

(statearr_6004_6018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (10))){
var inst_5985 = (state_5991[(2)]);
var state_5991__$1 = state_5991;
var statearr_6005_6019 = state_5991__$1;
(statearr_6005_6019[(2)] = inst_5985);

(statearr_6005_6019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5992 === (8))){
var inst_5978 = (state_5991[(9)]);
var inst_5981 = cljs.core.deref.call(null,inst_5978);
var state_5991__$1 = state_5991;
var statearr_6006_6020 = state_5991__$1;
(statearr_6006_6020[(2)] = inst_5981);

(statearr_6006_6020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__5409__auto__ = null;
var cljs$core$async$reduce_$_state_machine__5409__auto____0 = (function (){
var statearr_6007 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6007[(0)] = cljs$core$async$reduce_$_state_machine__5409__auto__);

(statearr_6007[(1)] = (1));

return statearr_6007;
});
var cljs$core$async$reduce_$_state_machine__5409__auto____1 = (function (state_5991){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_5991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6008){if((e6008 instanceof Object)){
var ex__5412__auto__ = e6008;
var statearr_6009_6021 = state_5991;
(statearr_6009_6021[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6022 = state_5991;
state_5991 = G__6022;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__5409__auto__ = function(state_5991){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__5409__auto____1.call(this,state_5991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__5409__auto____0;
cljs$core$async$reduce_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__5409__auto____1;
return cljs$core$async$reduce_$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6010 = f__5506__auto__.call(null);
(statearr_6010[(6)] = c__5505__auto__);

return statearr_6010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));

return c__5505__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__5505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6028){
var state_val_6029 = (state_6028[(1)]);
if((state_val_6029 === (1))){
var inst_6023 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_6028__$1 = state_6028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6028__$1,(2),inst_6023);
} else {
if((state_val_6029 === (2))){
var inst_6025 = (state_6028[(2)]);
var inst_6026 = f__$1.call(null,inst_6025);
var state_6028__$1 = state_6028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6028__$1,inst_6026);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__5409__auto__ = null;
var cljs$core$async$transduce_$_state_machine__5409__auto____0 = (function (){
var statearr_6030 = [null,null,null,null,null,null,null];
(statearr_6030[(0)] = cljs$core$async$transduce_$_state_machine__5409__auto__);

(statearr_6030[(1)] = (1));

return statearr_6030;
});
var cljs$core$async$transduce_$_state_machine__5409__auto____1 = (function (state_6028){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6031){if((e6031 instanceof Object)){
var ex__5412__auto__ = e6031;
var statearr_6032_6034 = state_6028;
(statearr_6032_6034[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6035 = state_6028;
state_6028 = G__6035;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__5409__auto__ = function(state_6028){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__5409__auto____1.call(this,state_6028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__5409__auto____0;
cljs$core$async$transduce_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__5409__auto____1;
return cljs$core$async$transduce_$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6033 = f__5506__auto__.call(null);
(statearr_6033[(6)] = c__5505__auto__);

return statearr_6033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));

return c__5505__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__6037 = arguments.length;
switch (G__6037) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__5505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6062){
var state_val_6063 = (state_6062[(1)]);
if((state_val_6063 === (7))){
var inst_6044 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
var statearr_6064_6085 = state_6062__$1;
(statearr_6064_6085[(2)] = inst_6044);

(statearr_6064_6085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (1))){
var inst_6038 = cljs.core.seq.call(null,coll);
var inst_6039 = inst_6038;
var state_6062__$1 = (function (){var statearr_6065 = state_6062;
(statearr_6065[(7)] = inst_6039);

return statearr_6065;
})();
var statearr_6066_6086 = state_6062__$1;
(statearr_6066_6086[(2)] = null);

(statearr_6066_6086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (4))){
var inst_6039 = (state_6062[(7)]);
var inst_6042 = cljs.core.first.call(null,inst_6039);
var state_6062__$1 = state_6062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6062__$1,(7),ch,inst_6042);
} else {
if((state_val_6063 === (13))){
var inst_6056 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
var statearr_6067_6087 = state_6062__$1;
(statearr_6067_6087[(2)] = inst_6056);

(statearr_6067_6087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (6))){
var inst_6047 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
if(cljs.core.truth_(inst_6047)){
var statearr_6068_6088 = state_6062__$1;
(statearr_6068_6088[(1)] = (8));

} else {
var statearr_6069_6089 = state_6062__$1;
(statearr_6069_6089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (3))){
var inst_6060 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6062__$1,inst_6060);
} else {
if((state_val_6063 === (12))){
var state_6062__$1 = state_6062;
var statearr_6070_6090 = state_6062__$1;
(statearr_6070_6090[(2)] = null);

(statearr_6070_6090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (2))){
var inst_6039 = (state_6062[(7)]);
var state_6062__$1 = state_6062;
if(cljs.core.truth_(inst_6039)){
var statearr_6071_6091 = state_6062__$1;
(statearr_6071_6091[(1)] = (4));

} else {
var statearr_6072_6092 = state_6062__$1;
(statearr_6072_6092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (11))){
var inst_6053 = cljs.core.async.close_BANG_.call(null,ch);
var state_6062__$1 = state_6062;
var statearr_6073_6093 = state_6062__$1;
(statearr_6073_6093[(2)] = inst_6053);

(statearr_6073_6093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (9))){
var state_6062__$1 = state_6062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6074_6094 = state_6062__$1;
(statearr_6074_6094[(1)] = (11));

} else {
var statearr_6075_6095 = state_6062__$1;
(statearr_6075_6095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (5))){
var inst_6039 = (state_6062[(7)]);
var state_6062__$1 = state_6062;
var statearr_6076_6096 = state_6062__$1;
(statearr_6076_6096[(2)] = inst_6039);

(statearr_6076_6096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (10))){
var inst_6058 = (state_6062[(2)]);
var state_6062__$1 = state_6062;
var statearr_6077_6097 = state_6062__$1;
(statearr_6077_6097[(2)] = inst_6058);

(statearr_6077_6097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6063 === (8))){
var inst_6039 = (state_6062[(7)]);
var inst_6049 = cljs.core.next.call(null,inst_6039);
var inst_6039__$1 = inst_6049;
var state_6062__$1 = (function (){var statearr_6078 = state_6062;
(statearr_6078[(7)] = inst_6039__$1);

return statearr_6078;
})();
var statearr_6079_6098 = state_6062__$1;
(statearr_6079_6098[(2)] = null);

(statearr_6079_6098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_6080 = [null,null,null,null,null,null,null,null];
(statearr_6080[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_6080[(1)] = (1));

return statearr_6080;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_6062){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6081){if((e6081 instanceof Object)){
var ex__5412__auto__ = e6081;
var statearr_6082_6099 = state_6062;
(statearr_6082_6099[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6100 = state_6062;
state_6062 = G__6100;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_6062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_6062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6083 = f__5506__auto__.call(null);
(statearr_6083[(6)] = c__5505__auto__);

return statearr_6083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));

return c__5505__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_6101 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_6101.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_6102 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_6102.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_6103 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_6103.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_6104 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m);
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_6104.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6105 = (function (ch,cs,meta6106){
this.ch = ch;
this.cs = cs;
this.meta6106 = meta6106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6107,meta6106__$1){
var self__ = this;
var _6107__$1 = this;
return (new cljs.core.async.t_cljs$core$async6105(self__.ch,self__.cs,meta6106__$1));
}));

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6107){
var self__ = this;
var _6107__$1 = this;
return self__.meta6106;
}));

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async6105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async6105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta6106","meta6106",-1108717039,null)], null);
}));

(cljs.core.async.t_cljs$core$async6105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6105");

(cljs.core.async.t_cljs$core$async6105.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6105.
 */
cljs.core.async.__GT_t_cljs$core$async6105 = (function cljs$core$async$mult_$___GT_t_cljs$core$async6105(ch__$1,cs__$1,meta6106){
return (new cljs.core.async.t_cljs$core$async6105(ch__$1,cs__$1,meta6106));
});

}

return (new cljs.core.async.t_cljs$core$async6105(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__5505__auto___6327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6242){
var state_val_6243 = (state_6242[(1)]);
if((state_val_6243 === (7))){
var inst_6238 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6244_6328 = state_6242__$1;
(statearr_6244_6328[(2)] = inst_6238);

(statearr_6244_6328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (20))){
var inst_6141 = (state_6242[(7)]);
var inst_6153 = cljs.core.first.call(null,inst_6141);
var inst_6154 = cljs.core.nth.call(null,inst_6153,(0),null);
var inst_6155 = cljs.core.nth.call(null,inst_6153,(1),null);
var state_6242__$1 = (function (){var statearr_6245 = state_6242;
(statearr_6245[(8)] = inst_6154);

return statearr_6245;
})();
if(cljs.core.truth_(inst_6155)){
var statearr_6246_6329 = state_6242__$1;
(statearr_6246_6329[(1)] = (22));

} else {
var statearr_6247_6330 = state_6242__$1;
(statearr_6247_6330[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (27))){
var inst_6185 = (state_6242[(9)]);
var inst_6183 = (state_6242[(10)]);
var inst_6110 = (state_6242[(11)]);
var inst_6190 = (state_6242[(12)]);
var inst_6190__$1 = cljs.core._nth.call(null,inst_6183,inst_6185);
var inst_6191 = cljs.core.async.put_BANG_.call(null,inst_6190__$1,inst_6110,done);
var state_6242__$1 = (function (){var statearr_6248 = state_6242;
(statearr_6248[(12)] = inst_6190__$1);

return statearr_6248;
})();
if(cljs.core.truth_(inst_6191)){
var statearr_6249_6331 = state_6242__$1;
(statearr_6249_6331[(1)] = (30));

} else {
var statearr_6250_6332 = state_6242__$1;
(statearr_6250_6332[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (1))){
var state_6242__$1 = state_6242;
var statearr_6251_6333 = state_6242__$1;
(statearr_6251_6333[(2)] = null);

(statearr_6251_6333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (24))){
var inst_6141 = (state_6242[(7)]);
var inst_6160 = (state_6242[(2)]);
var inst_6161 = cljs.core.next.call(null,inst_6141);
var inst_6119 = inst_6161;
var inst_6120 = null;
var inst_6121 = (0);
var inst_6122 = (0);
var state_6242__$1 = (function (){var statearr_6252 = state_6242;
(statearr_6252[(13)] = inst_6122);

(statearr_6252[(14)] = inst_6119);

(statearr_6252[(15)] = inst_6121);

(statearr_6252[(16)] = inst_6120);

(statearr_6252[(17)] = inst_6160);

return statearr_6252;
})();
var statearr_6253_6334 = state_6242__$1;
(statearr_6253_6334[(2)] = null);

(statearr_6253_6334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (39))){
var state_6242__$1 = state_6242;
var statearr_6257_6335 = state_6242__$1;
(statearr_6257_6335[(2)] = null);

(statearr_6257_6335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (4))){
var inst_6110 = (state_6242[(11)]);
var inst_6110__$1 = (state_6242[(2)]);
var inst_6111 = (inst_6110__$1 == null);
var state_6242__$1 = (function (){var statearr_6258 = state_6242;
(statearr_6258[(11)] = inst_6110__$1);

return statearr_6258;
})();
if(cljs.core.truth_(inst_6111)){
var statearr_6259_6336 = state_6242__$1;
(statearr_6259_6336[(1)] = (5));

} else {
var statearr_6260_6337 = state_6242__$1;
(statearr_6260_6337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (15))){
var inst_6122 = (state_6242[(13)]);
var inst_6119 = (state_6242[(14)]);
var inst_6121 = (state_6242[(15)]);
var inst_6120 = (state_6242[(16)]);
var inst_6137 = (state_6242[(2)]);
var inst_6138 = (inst_6122 + (1));
var tmp6254 = inst_6119;
var tmp6255 = inst_6121;
var tmp6256 = inst_6120;
var inst_6119__$1 = tmp6254;
var inst_6120__$1 = tmp6256;
var inst_6121__$1 = tmp6255;
var inst_6122__$1 = inst_6138;
var state_6242__$1 = (function (){var statearr_6261 = state_6242;
(statearr_6261[(13)] = inst_6122__$1);

(statearr_6261[(14)] = inst_6119__$1);

(statearr_6261[(15)] = inst_6121__$1);

(statearr_6261[(18)] = inst_6137);

(statearr_6261[(16)] = inst_6120__$1);

return statearr_6261;
})();
var statearr_6262_6338 = state_6242__$1;
(statearr_6262_6338[(2)] = null);

(statearr_6262_6338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (21))){
var inst_6164 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6266_6339 = state_6242__$1;
(statearr_6266_6339[(2)] = inst_6164);

(statearr_6266_6339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (31))){
var inst_6190 = (state_6242[(12)]);
var inst_6194 = done.call(null,null);
var inst_6195 = cljs.core.async.untap_STAR_.call(null,m,inst_6190);
var state_6242__$1 = (function (){var statearr_6267 = state_6242;
(statearr_6267[(19)] = inst_6194);

return statearr_6267;
})();
var statearr_6268_6340 = state_6242__$1;
(statearr_6268_6340[(2)] = inst_6195);

(statearr_6268_6340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (32))){
var inst_6185 = (state_6242[(9)]);
var inst_6183 = (state_6242[(10)]);
var inst_6182 = (state_6242[(20)]);
var inst_6184 = (state_6242[(21)]);
var inst_6197 = (state_6242[(2)]);
var inst_6198 = (inst_6185 + (1));
var tmp6263 = inst_6183;
var tmp6264 = inst_6182;
var tmp6265 = inst_6184;
var inst_6182__$1 = tmp6264;
var inst_6183__$1 = tmp6263;
var inst_6184__$1 = tmp6265;
var inst_6185__$1 = inst_6198;
var state_6242__$1 = (function (){var statearr_6269 = state_6242;
(statearr_6269[(22)] = inst_6197);

(statearr_6269[(9)] = inst_6185__$1);

(statearr_6269[(10)] = inst_6183__$1);

(statearr_6269[(20)] = inst_6182__$1);

(statearr_6269[(21)] = inst_6184__$1);

return statearr_6269;
})();
var statearr_6270_6341 = state_6242__$1;
(statearr_6270_6341[(2)] = null);

(statearr_6270_6341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (40))){
var inst_6210 = (state_6242[(23)]);
var inst_6214 = done.call(null,null);
var inst_6215 = cljs.core.async.untap_STAR_.call(null,m,inst_6210);
var state_6242__$1 = (function (){var statearr_6271 = state_6242;
(statearr_6271[(24)] = inst_6214);

return statearr_6271;
})();
var statearr_6272_6342 = state_6242__$1;
(statearr_6272_6342[(2)] = inst_6215);

(statearr_6272_6342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (33))){
var inst_6201 = (state_6242[(25)]);
var inst_6203 = cljs.core.chunked_seq_QMARK_.call(null,inst_6201);
var state_6242__$1 = state_6242;
if(inst_6203){
var statearr_6273_6343 = state_6242__$1;
(statearr_6273_6343[(1)] = (36));

} else {
var statearr_6274_6344 = state_6242__$1;
(statearr_6274_6344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (13))){
var inst_6131 = (state_6242[(26)]);
var inst_6134 = cljs.core.async.close_BANG_.call(null,inst_6131);
var state_6242__$1 = state_6242;
var statearr_6275_6345 = state_6242__$1;
(statearr_6275_6345[(2)] = inst_6134);

(statearr_6275_6345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (22))){
var inst_6154 = (state_6242[(8)]);
var inst_6157 = cljs.core.async.close_BANG_.call(null,inst_6154);
var state_6242__$1 = state_6242;
var statearr_6276_6346 = state_6242__$1;
(statearr_6276_6346[(2)] = inst_6157);

(statearr_6276_6346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (36))){
var inst_6201 = (state_6242[(25)]);
var inst_6205 = cljs.core.chunk_first.call(null,inst_6201);
var inst_6206 = cljs.core.chunk_rest.call(null,inst_6201);
var inst_6207 = cljs.core.count.call(null,inst_6205);
var inst_6182 = inst_6206;
var inst_6183 = inst_6205;
var inst_6184 = inst_6207;
var inst_6185 = (0);
var state_6242__$1 = (function (){var statearr_6277 = state_6242;
(statearr_6277[(9)] = inst_6185);

(statearr_6277[(10)] = inst_6183);

(statearr_6277[(20)] = inst_6182);

(statearr_6277[(21)] = inst_6184);

return statearr_6277;
})();
var statearr_6278_6347 = state_6242__$1;
(statearr_6278_6347[(2)] = null);

(statearr_6278_6347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (41))){
var inst_6201 = (state_6242[(25)]);
var inst_6217 = (state_6242[(2)]);
var inst_6218 = cljs.core.next.call(null,inst_6201);
var inst_6182 = inst_6218;
var inst_6183 = null;
var inst_6184 = (0);
var inst_6185 = (0);
var state_6242__$1 = (function (){var statearr_6279 = state_6242;
(statearr_6279[(9)] = inst_6185);

(statearr_6279[(10)] = inst_6183);

(statearr_6279[(20)] = inst_6182);

(statearr_6279[(21)] = inst_6184);

(statearr_6279[(27)] = inst_6217);

return statearr_6279;
})();
var statearr_6280_6348 = state_6242__$1;
(statearr_6280_6348[(2)] = null);

(statearr_6280_6348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (43))){
var state_6242__$1 = state_6242;
var statearr_6281_6349 = state_6242__$1;
(statearr_6281_6349[(2)] = null);

(statearr_6281_6349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (29))){
var inst_6226 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6282_6350 = state_6242__$1;
(statearr_6282_6350[(2)] = inst_6226);

(statearr_6282_6350[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (44))){
var inst_6235 = (state_6242[(2)]);
var state_6242__$1 = (function (){var statearr_6283 = state_6242;
(statearr_6283[(28)] = inst_6235);

return statearr_6283;
})();
var statearr_6284_6351 = state_6242__$1;
(statearr_6284_6351[(2)] = null);

(statearr_6284_6351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (6))){
var inst_6174 = (state_6242[(29)]);
var inst_6173 = cljs.core.deref.call(null,cs);
var inst_6174__$1 = cljs.core.keys.call(null,inst_6173);
var inst_6175 = cljs.core.count.call(null,inst_6174__$1);
var inst_6176 = cljs.core.reset_BANG_.call(null,dctr,inst_6175);
var inst_6181 = cljs.core.seq.call(null,inst_6174__$1);
var inst_6182 = inst_6181;
var inst_6183 = null;
var inst_6184 = (0);
var inst_6185 = (0);
var state_6242__$1 = (function (){var statearr_6285 = state_6242;
(statearr_6285[(9)] = inst_6185);

(statearr_6285[(30)] = inst_6176);

(statearr_6285[(10)] = inst_6183);

(statearr_6285[(20)] = inst_6182);

(statearr_6285[(29)] = inst_6174__$1);

(statearr_6285[(21)] = inst_6184);

return statearr_6285;
})();
var statearr_6286_6352 = state_6242__$1;
(statearr_6286_6352[(2)] = null);

(statearr_6286_6352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (28))){
var inst_6182 = (state_6242[(20)]);
var inst_6201 = (state_6242[(25)]);
var inst_6201__$1 = cljs.core.seq.call(null,inst_6182);
var state_6242__$1 = (function (){var statearr_6287 = state_6242;
(statearr_6287[(25)] = inst_6201__$1);

return statearr_6287;
})();
if(inst_6201__$1){
var statearr_6288_6353 = state_6242__$1;
(statearr_6288_6353[(1)] = (33));

} else {
var statearr_6289_6354 = state_6242__$1;
(statearr_6289_6354[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (25))){
var inst_6185 = (state_6242[(9)]);
var inst_6184 = (state_6242[(21)]);
var inst_6187 = (inst_6185 < inst_6184);
var inst_6188 = inst_6187;
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6188)){
var statearr_6290_6355 = state_6242__$1;
(statearr_6290_6355[(1)] = (27));

} else {
var statearr_6291_6356 = state_6242__$1;
(statearr_6291_6356[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (34))){
var state_6242__$1 = state_6242;
var statearr_6292_6357 = state_6242__$1;
(statearr_6292_6357[(2)] = null);

(statearr_6292_6357[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (17))){
var state_6242__$1 = state_6242;
var statearr_6293_6358 = state_6242__$1;
(statearr_6293_6358[(2)] = null);

(statearr_6293_6358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (3))){
var inst_6240 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6242__$1,inst_6240);
} else {
if((state_val_6243 === (12))){
var inst_6169 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6294_6359 = state_6242__$1;
(statearr_6294_6359[(2)] = inst_6169);

(statearr_6294_6359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (2))){
var state_6242__$1 = state_6242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6242__$1,(4),ch);
} else {
if((state_val_6243 === (23))){
var state_6242__$1 = state_6242;
var statearr_6295_6360 = state_6242__$1;
(statearr_6295_6360[(2)] = null);

(statearr_6295_6360[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (35))){
var inst_6224 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6296_6361 = state_6242__$1;
(statearr_6296_6361[(2)] = inst_6224);

(statearr_6296_6361[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (19))){
var inst_6141 = (state_6242[(7)]);
var inst_6145 = cljs.core.chunk_first.call(null,inst_6141);
var inst_6146 = cljs.core.chunk_rest.call(null,inst_6141);
var inst_6147 = cljs.core.count.call(null,inst_6145);
var inst_6119 = inst_6146;
var inst_6120 = inst_6145;
var inst_6121 = inst_6147;
var inst_6122 = (0);
var state_6242__$1 = (function (){var statearr_6297 = state_6242;
(statearr_6297[(13)] = inst_6122);

(statearr_6297[(14)] = inst_6119);

(statearr_6297[(15)] = inst_6121);

(statearr_6297[(16)] = inst_6120);

return statearr_6297;
})();
var statearr_6298_6362 = state_6242__$1;
(statearr_6298_6362[(2)] = null);

(statearr_6298_6362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (11))){
var inst_6119 = (state_6242[(14)]);
var inst_6141 = (state_6242[(7)]);
var inst_6141__$1 = cljs.core.seq.call(null,inst_6119);
var state_6242__$1 = (function (){var statearr_6299 = state_6242;
(statearr_6299[(7)] = inst_6141__$1);

return statearr_6299;
})();
if(inst_6141__$1){
var statearr_6300_6363 = state_6242__$1;
(statearr_6300_6363[(1)] = (16));

} else {
var statearr_6301_6364 = state_6242__$1;
(statearr_6301_6364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (9))){
var inst_6171 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6302_6365 = state_6242__$1;
(statearr_6302_6365[(2)] = inst_6171);

(statearr_6302_6365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (5))){
var inst_6117 = cljs.core.deref.call(null,cs);
var inst_6118 = cljs.core.seq.call(null,inst_6117);
var inst_6119 = inst_6118;
var inst_6120 = null;
var inst_6121 = (0);
var inst_6122 = (0);
var state_6242__$1 = (function (){var statearr_6303 = state_6242;
(statearr_6303[(13)] = inst_6122);

(statearr_6303[(14)] = inst_6119);

(statearr_6303[(15)] = inst_6121);

(statearr_6303[(16)] = inst_6120);

return statearr_6303;
})();
var statearr_6304_6366 = state_6242__$1;
(statearr_6304_6366[(2)] = null);

(statearr_6304_6366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (14))){
var state_6242__$1 = state_6242;
var statearr_6305_6367 = state_6242__$1;
(statearr_6305_6367[(2)] = null);

(statearr_6305_6367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (45))){
var inst_6232 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6306_6368 = state_6242__$1;
(statearr_6306_6368[(2)] = inst_6232);

(statearr_6306_6368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (26))){
var inst_6174 = (state_6242[(29)]);
var inst_6228 = (state_6242[(2)]);
var inst_6229 = cljs.core.seq.call(null,inst_6174);
var state_6242__$1 = (function (){var statearr_6307 = state_6242;
(statearr_6307[(31)] = inst_6228);

return statearr_6307;
})();
if(inst_6229){
var statearr_6308_6369 = state_6242__$1;
(statearr_6308_6369[(1)] = (42));

} else {
var statearr_6309_6370 = state_6242__$1;
(statearr_6309_6370[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (16))){
var inst_6141 = (state_6242[(7)]);
var inst_6143 = cljs.core.chunked_seq_QMARK_.call(null,inst_6141);
var state_6242__$1 = state_6242;
if(inst_6143){
var statearr_6310_6371 = state_6242__$1;
(statearr_6310_6371[(1)] = (19));

} else {
var statearr_6311_6372 = state_6242__$1;
(statearr_6311_6372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (38))){
var inst_6221 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6312_6373 = state_6242__$1;
(statearr_6312_6373[(2)] = inst_6221);

(statearr_6312_6373[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (30))){
var state_6242__$1 = state_6242;
var statearr_6313_6374 = state_6242__$1;
(statearr_6313_6374[(2)] = null);

(statearr_6313_6374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (10))){
var inst_6122 = (state_6242[(13)]);
var inst_6120 = (state_6242[(16)]);
var inst_6130 = cljs.core._nth.call(null,inst_6120,inst_6122);
var inst_6131 = cljs.core.nth.call(null,inst_6130,(0),null);
var inst_6132 = cljs.core.nth.call(null,inst_6130,(1),null);
var state_6242__$1 = (function (){var statearr_6314 = state_6242;
(statearr_6314[(26)] = inst_6131);

return statearr_6314;
})();
if(cljs.core.truth_(inst_6132)){
var statearr_6315_6375 = state_6242__$1;
(statearr_6315_6375[(1)] = (13));

} else {
var statearr_6316_6376 = state_6242__$1;
(statearr_6316_6376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (18))){
var inst_6167 = (state_6242[(2)]);
var state_6242__$1 = state_6242;
var statearr_6317_6377 = state_6242__$1;
(statearr_6317_6377[(2)] = inst_6167);

(statearr_6317_6377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (42))){
var state_6242__$1 = state_6242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6242__$1,(45),dchan);
} else {
if((state_val_6243 === (37))){
var inst_6210 = (state_6242[(23)]);
var inst_6110 = (state_6242[(11)]);
var inst_6201 = (state_6242[(25)]);
var inst_6210__$1 = cljs.core.first.call(null,inst_6201);
var inst_6211 = cljs.core.async.put_BANG_.call(null,inst_6210__$1,inst_6110,done);
var state_6242__$1 = (function (){var statearr_6318 = state_6242;
(statearr_6318[(23)] = inst_6210__$1);

return statearr_6318;
})();
if(cljs.core.truth_(inst_6211)){
var statearr_6319_6378 = state_6242__$1;
(statearr_6319_6378[(1)] = (39));

} else {
var statearr_6320_6379 = state_6242__$1;
(statearr_6320_6379[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6243 === (8))){
var inst_6122 = (state_6242[(13)]);
var inst_6121 = (state_6242[(15)]);
var inst_6124 = (inst_6122 < inst_6121);
var inst_6125 = inst_6124;
var state_6242__$1 = state_6242;
if(cljs.core.truth_(inst_6125)){
var statearr_6321_6380 = state_6242__$1;
(statearr_6321_6380[(1)] = (10));

} else {
var statearr_6322_6381 = state_6242__$1;
(statearr_6322_6381[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__5409__auto__ = null;
var cljs$core$async$mult_$_state_machine__5409__auto____0 = (function (){
var statearr_6323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6323[(0)] = cljs$core$async$mult_$_state_machine__5409__auto__);

(statearr_6323[(1)] = (1));

return statearr_6323;
});
var cljs$core$async$mult_$_state_machine__5409__auto____1 = (function (state_6242){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6324){if((e6324 instanceof Object)){
var ex__5412__auto__ = e6324;
var statearr_6325_6382 = state_6242;
(statearr_6325_6382[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6383 = state_6242;
state_6242 = G__6383;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__5409__auto__ = function(state_6242){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__5409__auto____1.call(this,state_6242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__5409__auto____0;
cljs$core$async$mult_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__5409__auto____1;
return cljs$core$async$mult_$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6326 = f__5506__auto__.call(null);
(statearr_6326[(6)] = c__5505__auto___6327);

return statearr_6326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__6385 = arguments.length;
switch (G__6385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_6387 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_6387.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_6388 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_6388.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_6389 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m);
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_6389.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_6390 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,state_map);
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_6390.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_6391 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,mode);
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_6391.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___6401 = arguments.length;
var i__4830__auto___6402 = (0);
while(true){
if((i__4830__auto___6402 < len__4829__auto___6401)){
args__4835__auto__.push((arguments[i__4830__auto___6402]));

var G__6403 = (i__4830__auto___6402 + (1));
i__4830__auto___6402 = G__6403;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__6396){
var map__6397 = p__6396;
var map__6397__$1 = cljs.core.__destructure_map.call(null,map__6397);
var opts = map__6397__$1;
var statearr_6398_6404 = state;
(statearr_6398_6404[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_6399_6405 = state;
(statearr_6399_6405[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_6400_6406 = state;
(statearr_6400_6406[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq6392){
var G__6393 = cljs.core.first.call(null,seq6392);
var seq6392__$1 = cljs.core.next.call(null,seq6392);
var G__6394 = cljs.core.first.call(null,seq6392__$1);
var seq6392__$2 = cljs.core.next.call(null,seq6392__$1);
var G__6395 = cljs.core.first.call(null,seq6392__$2);
var seq6392__$3 = cljs.core.next.call(null,seq6392__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6393,G__6394,G__6395,seq6392__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6407 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta6408){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta6408 = meta6408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6409,meta6408__$1){
var self__ = this;
var _6409__$1 = this;
return (new cljs.core.async.t_cljs$core$async6407(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta6408__$1));
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6409){
var self__ = this;
var _6409__$1 = this;
return self__.meta6408;
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta6408","meta6408",-1714288095,null)], null);
}));

(cljs.core.async.t_cljs$core$async6407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6407");

(cljs.core.async.t_cljs$core$async6407.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6407.
 */
cljs.core.async.__GT_t_cljs$core$async6407 = (function cljs$core$async$mix_$___GT_t_cljs$core$async6407(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6408){
return (new cljs.core.async.t_cljs$core$async6407(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6408));
});

}

return (new cljs.core.async.t_cljs$core$async6407(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5505__auto___6521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6477){
var state_val_6478 = (state_6477[(1)]);
if((state_val_6478 === (7))){
var inst_6437 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
if(cljs.core.truth_(inst_6437)){
var statearr_6479_6522 = state_6477__$1;
(statearr_6479_6522[(1)] = (8));

} else {
var statearr_6480_6523 = state_6477__$1;
(statearr_6480_6523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (20))){
var inst_6430 = (state_6477[(7)]);
var state_6477__$1 = state_6477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6477__$1,(23),out,inst_6430);
} else {
if((state_val_6478 === (1))){
var inst_6413 = calc_state.call(null);
var inst_6414 = cljs.core.__destructure_map.call(null,inst_6413);
var inst_6415 = cljs.core.get.call(null,inst_6414,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6416 = cljs.core.get.call(null,inst_6414,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6417 = cljs.core.get.call(null,inst_6414,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_6418 = inst_6413;
var state_6477__$1 = (function (){var statearr_6481 = state_6477;
(statearr_6481[(8)] = inst_6416);

(statearr_6481[(9)] = inst_6417);

(statearr_6481[(10)] = inst_6415);

(statearr_6481[(11)] = inst_6418);

return statearr_6481;
})();
var statearr_6482_6524 = state_6477__$1;
(statearr_6482_6524[(2)] = null);

(statearr_6482_6524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (24))){
var inst_6421 = (state_6477[(12)]);
var inst_6418 = inst_6421;
var state_6477__$1 = (function (){var statearr_6483 = state_6477;
(statearr_6483[(11)] = inst_6418);

return statearr_6483;
})();
var statearr_6484_6525 = state_6477__$1;
(statearr_6484_6525[(2)] = null);

(statearr_6484_6525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (4))){
var inst_6432 = (state_6477[(13)]);
var inst_6430 = (state_6477[(7)]);
var inst_6429 = (state_6477[(2)]);
var inst_6430__$1 = cljs.core.nth.call(null,inst_6429,(0),null);
var inst_6431 = cljs.core.nth.call(null,inst_6429,(1),null);
var inst_6432__$1 = (inst_6430__$1 == null);
var state_6477__$1 = (function (){var statearr_6485 = state_6477;
(statearr_6485[(13)] = inst_6432__$1);

(statearr_6485[(7)] = inst_6430__$1);

(statearr_6485[(14)] = inst_6431);

return statearr_6485;
})();
if(cljs.core.truth_(inst_6432__$1)){
var statearr_6486_6526 = state_6477__$1;
(statearr_6486_6526[(1)] = (5));

} else {
var statearr_6487_6527 = state_6477__$1;
(statearr_6487_6527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (15))){
var inst_6451 = (state_6477[(15)]);
var inst_6422 = (state_6477[(16)]);
var inst_6451__$1 = cljs.core.empty_QMARK_.call(null,inst_6422);
var state_6477__$1 = (function (){var statearr_6488 = state_6477;
(statearr_6488[(15)] = inst_6451__$1);

return statearr_6488;
})();
if(inst_6451__$1){
var statearr_6489_6528 = state_6477__$1;
(statearr_6489_6528[(1)] = (17));

} else {
var statearr_6490_6529 = state_6477__$1;
(statearr_6490_6529[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (21))){
var inst_6421 = (state_6477[(12)]);
var inst_6418 = inst_6421;
var state_6477__$1 = (function (){var statearr_6491 = state_6477;
(statearr_6491[(11)] = inst_6418);

return statearr_6491;
})();
var statearr_6492_6530 = state_6477__$1;
(statearr_6492_6530[(2)] = null);

(statearr_6492_6530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (13))){
var inst_6444 = (state_6477[(2)]);
var inst_6445 = calc_state.call(null);
var inst_6418 = inst_6445;
var state_6477__$1 = (function (){var statearr_6493 = state_6477;
(statearr_6493[(17)] = inst_6444);

(statearr_6493[(11)] = inst_6418);

return statearr_6493;
})();
var statearr_6494_6531 = state_6477__$1;
(statearr_6494_6531[(2)] = null);

(statearr_6494_6531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (22))){
var inst_6471 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
var statearr_6495_6532 = state_6477__$1;
(statearr_6495_6532[(2)] = inst_6471);

(statearr_6495_6532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (6))){
var inst_6431 = (state_6477[(14)]);
var inst_6435 = cljs.core._EQ_.call(null,inst_6431,change);
var state_6477__$1 = state_6477;
var statearr_6496_6533 = state_6477__$1;
(statearr_6496_6533[(2)] = inst_6435);

(statearr_6496_6533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (25))){
var state_6477__$1 = state_6477;
var statearr_6497_6534 = state_6477__$1;
(statearr_6497_6534[(2)] = null);

(statearr_6497_6534[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (17))){
var inst_6431 = (state_6477[(14)]);
var inst_6423 = (state_6477[(18)]);
var inst_6453 = inst_6423.call(null,inst_6431);
var inst_6454 = cljs.core.not.call(null,inst_6453);
var state_6477__$1 = state_6477;
var statearr_6498_6535 = state_6477__$1;
(statearr_6498_6535[(2)] = inst_6454);

(statearr_6498_6535[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (3))){
var inst_6475 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6477__$1,inst_6475);
} else {
if((state_val_6478 === (12))){
var state_6477__$1 = state_6477;
var statearr_6499_6536 = state_6477__$1;
(statearr_6499_6536[(2)] = null);

(statearr_6499_6536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (2))){
var inst_6418 = (state_6477[(11)]);
var inst_6421 = (state_6477[(12)]);
var inst_6421__$1 = cljs.core.__destructure_map.call(null,inst_6418);
var inst_6422 = cljs.core.get.call(null,inst_6421__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6423 = cljs.core.get.call(null,inst_6421__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6424 = cljs.core.get.call(null,inst_6421__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_6477__$1 = (function (){var statearr_6500 = state_6477;
(statearr_6500[(16)] = inst_6422);

(statearr_6500[(12)] = inst_6421__$1);

(statearr_6500[(18)] = inst_6423);

return statearr_6500;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_6477__$1,(4),inst_6424);
} else {
if((state_val_6478 === (23))){
var inst_6462 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
if(cljs.core.truth_(inst_6462)){
var statearr_6501_6537 = state_6477__$1;
(statearr_6501_6537[(1)] = (24));

} else {
var statearr_6502_6538 = state_6477__$1;
(statearr_6502_6538[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (19))){
var inst_6457 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
var statearr_6503_6539 = state_6477__$1;
(statearr_6503_6539[(2)] = inst_6457);

(statearr_6503_6539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (11))){
var inst_6431 = (state_6477[(14)]);
var inst_6441 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_6431);
var state_6477__$1 = state_6477;
var statearr_6504_6540 = state_6477__$1;
(statearr_6504_6540[(2)] = inst_6441);

(statearr_6504_6540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (9))){
var inst_6422 = (state_6477[(16)]);
var inst_6431 = (state_6477[(14)]);
var inst_6448 = (state_6477[(19)]);
var inst_6448__$1 = inst_6422.call(null,inst_6431);
var state_6477__$1 = (function (){var statearr_6505 = state_6477;
(statearr_6505[(19)] = inst_6448__$1);

return statearr_6505;
})();
if(cljs.core.truth_(inst_6448__$1)){
var statearr_6506_6541 = state_6477__$1;
(statearr_6506_6541[(1)] = (14));

} else {
var statearr_6507_6542 = state_6477__$1;
(statearr_6507_6542[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (5))){
var inst_6432 = (state_6477[(13)]);
var state_6477__$1 = state_6477;
var statearr_6508_6543 = state_6477__$1;
(statearr_6508_6543[(2)] = inst_6432);

(statearr_6508_6543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (14))){
var inst_6448 = (state_6477[(19)]);
var state_6477__$1 = state_6477;
var statearr_6509_6544 = state_6477__$1;
(statearr_6509_6544[(2)] = inst_6448);

(statearr_6509_6544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (26))){
var inst_6467 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
var statearr_6510_6545 = state_6477__$1;
(statearr_6510_6545[(2)] = inst_6467);

(statearr_6510_6545[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (16))){
var inst_6459 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
if(cljs.core.truth_(inst_6459)){
var statearr_6511_6546 = state_6477__$1;
(statearr_6511_6546[(1)] = (20));

} else {
var statearr_6512_6547 = state_6477__$1;
(statearr_6512_6547[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (10))){
var inst_6473 = (state_6477[(2)]);
var state_6477__$1 = state_6477;
var statearr_6513_6548 = state_6477__$1;
(statearr_6513_6548[(2)] = inst_6473);

(statearr_6513_6548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (18))){
var inst_6451 = (state_6477[(15)]);
var state_6477__$1 = state_6477;
var statearr_6514_6549 = state_6477__$1;
(statearr_6514_6549[(2)] = inst_6451);

(statearr_6514_6549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6478 === (8))){
var inst_6430 = (state_6477[(7)]);
var inst_6439 = (inst_6430 == null);
var state_6477__$1 = state_6477;
if(cljs.core.truth_(inst_6439)){
var statearr_6515_6550 = state_6477__$1;
(statearr_6515_6550[(1)] = (11));

} else {
var statearr_6516_6551 = state_6477__$1;
(statearr_6516_6551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__5409__auto__ = null;
var cljs$core$async$mix_$_state_machine__5409__auto____0 = (function (){
var statearr_6517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6517[(0)] = cljs$core$async$mix_$_state_machine__5409__auto__);

(statearr_6517[(1)] = (1));

return statearr_6517;
});
var cljs$core$async$mix_$_state_machine__5409__auto____1 = (function (state_6477){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6518){if((e6518 instanceof Object)){
var ex__5412__auto__ = e6518;
var statearr_6519_6552 = state_6477;
(statearr_6519_6552[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6553 = state_6477;
state_6477 = G__6553;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__5409__auto__ = function(state_6477){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__5409__auto____1.call(this,state_6477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__5409__auto____0;
cljs$core$async$mix_$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__5409__auto____1;
return cljs$core$async$mix_$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6520 = f__5506__auto__.call(null);
(statearr_6520[(6)] = c__5505__auto___6521);

return statearr_6520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_6556 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_6556.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_6557 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v,ch);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_6557.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_6558 = (function() {
var G__6559 = null;
var G__6559__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__6559__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__6559 = function(p,v){
switch(arguments.length){
case 1:
return G__6559__1.call(this,p);
case 2:
return G__6559__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6559.cljs$core$IFn$_invoke$arity$1 = G__6559__1;
G__6559.cljs$core$IFn$_invoke$arity$2 = G__6559__2;
return G__6559;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__6555 = arguments.length;
switch (G__6555) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6558.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6558.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__6563 = arguments.length;
switch (G__6563) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__6561_SHARP_){
if(cljs.core.truth_(p1__6561_SHARP_.call(null,topic))){
return p1__6561_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__6561_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6564 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6565){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6565 = meta6565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6566,meta6565__$1){
var self__ = this;
var _6566__$1 = this;
return (new cljs.core.async.t_cljs$core$async6564(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6565__$1));
}));

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6566){
var self__ = this;
var _6566__$1 = this;
return self__.meta6565;
}));

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async6564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async6564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta6565","meta6565",1482941428,null)], null);
}));

(cljs.core.async.t_cljs$core$async6564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6564");

(cljs.core.async.t_cljs$core$async6564.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6564.
 */
cljs.core.async.__GT_t_cljs$core$async6564 = (function cljs$core$async$__GT_t_cljs$core$async6564(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6565){
return (new cljs.core.async.t_cljs$core$async6564(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6565));
});

}

return (new cljs.core.async.t_cljs$core$async6564(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5505__auto___6684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6638){
var state_val_6639 = (state_6638[(1)]);
if((state_val_6639 === (7))){
var inst_6634 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
var statearr_6640_6685 = state_6638__$1;
(statearr_6640_6685[(2)] = inst_6634);

(statearr_6640_6685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (20))){
var state_6638__$1 = state_6638;
var statearr_6641_6686 = state_6638__$1;
(statearr_6641_6686[(2)] = null);

(statearr_6641_6686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (1))){
var state_6638__$1 = state_6638;
var statearr_6642_6687 = state_6638__$1;
(statearr_6642_6687[(2)] = null);

(statearr_6642_6687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (24))){
var inst_6617 = (state_6638[(7)]);
var inst_6626 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_6617);
var state_6638__$1 = state_6638;
var statearr_6643_6688 = state_6638__$1;
(statearr_6643_6688[(2)] = inst_6626);

(statearr_6643_6688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (4))){
var inst_6569 = (state_6638[(8)]);
var inst_6569__$1 = (state_6638[(2)]);
var inst_6570 = (inst_6569__$1 == null);
var state_6638__$1 = (function (){var statearr_6644 = state_6638;
(statearr_6644[(8)] = inst_6569__$1);

return statearr_6644;
})();
if(cljs.core.truth_(inst_6570)){
var statearr_6645_6689 = state_6638__$1;
(statearr_6645_6689[(1)] = (5));

} else {
var statearr_6646_6690 = state_6638__$1;
(statearr_6646_6690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (15))){
var inst_6611 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
var statearr_6647_6691 = state_6638__$1;
(statearr_6647_6691[(2)] = inst_6611);

(statearr_6647_6691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (21))){
var inst_6631 = (state_6638[(2)]);
var state_6638__$1 = (function (){var statearr_6648 = state_6638;
(statearr_6648[(9)] = inst_6631);

return statearr_6648;
})();
var statearr_6649_6692 = state_6638__$1;
(statearr_6649_6692[(2)] = null);

(statearr_6649_6692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (13))){
var inst_6593 = (state_6638[(10)]);
var inst_6595 = cljs.core.chunked_seq_QMARK_.call(null,inst_6593);
var state_6638__$1 = state_6638;
if(inst_6595){
var statearr_6650_6693 = state_6638__$1;
(statearr_6650_6693[(1)] = (16));

} else {
var statearr_6651_6694 = state_6638__$1;
(statearr_6651_6694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (22))){
var inst_6623 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
if(cljs.core.truth_(inst_6623)){
var statearr_6652_6695 = state_6638__$1;
(statearr_6652_6695[(1)] = (23));

} else {
var statearr_6653_6696 = state_6638__$1;
(statearr_6653_6696[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (6))){
var inst_6619 = (state_6638[(11)]);
var inst_6617 = (state_6638[(7)]);
var inst_6569 = (state_6638[(8)]);
var inst_6617__$1 = topic_fn.call(null,inst_6569);
var inst_6618 = cljs.core.deref.call(null,mults);
var inst_6619__$1 = cljs.core.get.call(null,inst_6618,inst_6617__$1);
var state_6638__$1 = (function (){var statearr_6654 = state_6638;
(statearr_6654[(11)] = inst_6619__$1);

(statearr_6654[(7)] = inst_6617__$1);

return statearr_6654;
})();
if(cljs.core.truth_(inst_6619__$1)){
var statearr_6655_6697 = state_6638__$1;
(statearr_6655_6697[(1)] = (19));

} else {
var statearr_6656_6698 = state_6638__$1;
(statearr_6656_6698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (25))){
var inst_6628 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
var statearr_6657_6699 = state_6638__$1;
(statearr_6657_6699[(2)] = inst_6628);

(statearr_6657_6699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (17))){
var inst_6593 = (state_6638[(10)]);
var inst_6602 = cljs.core.first.call(null,inst_6593);
var inst_6603 = cljs.core.async.muxch_STAR_.call(null,inst_6602);
var inst_6604 = cljs.core.async.close_BANG_.call(null,inst_6603);
var inst_6605 = cljs.core.next.call(null,inst_6593);
var inst_6579 = inst_6605;
var inst_6580 = null;
var inst_6581 = (0);
var inst_6582 = (0);
var state_6638__$1 = (function (){var statearr_6658 = state_6638;
(statearr_6658[(12)] = inst_6581);

(statearr_6658[(13)] = inst_6579);

(statearr_6658[(14)] = inst_6604);

(statearr_6658[(15)] = inst_6580);

(statearr_6658[(16)] = inst_6582);

return statearr_6658;
})();
var statearr_6659_6700 = state_6638__$1;
(statearr_6659_6700[(2)] = null);

(statearr_6659_6700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (3))){
var inst_6636 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6638__$1,inst_6636);
} else {
if((state_val_6639 === (12))){
var inst_6613 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
var statearr_6660_6701 = state_6638__$1;
(statearr_6660_6701[(2)] = inst_6613);

(statearr_6660_6701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (2))){
var state_6638__$1 = state_6638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6638__$1,(4),ch);
} else {
if((state_val_6639 === (23))){
var state_6638__$1 = state_6638;
var statearr_6661_6702 = state_6638__$1;
(statearr_6661_6702[(2)] = null);

(statearr_6661_6702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (19))){
var inst_6619 = (state_6638[(11)]);
var inst_6569 = (state_6638[(8)]);
var inst_6621 = cljs.core.async.muxch_STAR_.call(null,inst_6619);
var state_6638__$1 = state_6638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6638__$1,(22),inst_6621,inst_6569);
} else {
if((state_val_6639 === (11))){
var inst_6593 = (state_6638[(10)]);
var inst_6579 = (state_6638[(13)]);
var inst_6593__$1 = cljs.core.seq.call(null,inst_6579);
var state_6638__$1 = (function (){var statearr_6662 = state_6638;
(statearr_6662[(10)] = inst_6593__$1);

return statearr_6662;
})();
if(inst_6593__$1){
var statearr_6663_6703 = state_6638__$1;
(statearr_6663_6703[(1)] = (13));

} else {
var statearr_6664_6704 = state_6638__$1;
(statearr_6664_6704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (9))){
var inst_6615 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
var statearr_6665_6705 = state_6638__$1;
(statearr_6665_6705[(2)] = inst_6615);

(statearr_6665_6705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (5))){
var inst_6576 = cljs.core.deref.call(null,mults);
var inst_6577 = cljs.core.vals.call(null,inst_6576);
var inst_6578 = cljs.core.seq.call(null,inst_6577);
var inst_6579 = inst_6578;
var inst_6580 = null;
var inst_6581 = (0);
var inst_6582 = (0);
var state_6638__$1 = (function (){var statearr_6666 = state_6638;
(statearr_6666[(12)] = inst_6581);

(statearr_6666[(13)] = inst_6579);

(statearr_6666[(15)] = inst_6580);

(statearr_6666[(16)] = inst_6582);

return statearr_6666;
})();
var statearr_6667_6706 = state_6638__$1;
(statearr_6667_6706[(2)] = null);

(statearr_6667_6706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (14))){
var state_6638__$1 = state_6638;
var statearr_6671_6707 = state_6638__$1;
(statearr_6671_6707[(2)] = null);

(statearr_6671_6707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (16))){
var inst_6593 = (state_6638[(10)]);
var inst_6597 = cljs.core.chunk_first.call(null,inst_6593);
var inst_6598 = cljs.core.chunk_rest.call(null,inst_6593);
var inst_6599 = cljs.core.count.call(null,inst_6597);
var inst_6579 = inst_6598;
var inst_6580 = inst_6597;
var inst_6581 = inst_6599;
var inst_6582 = (0);
var state_6638__$1 = (function (){var statearr_6672 = state_6638;
(statearr_6672[(12)] = inst_6581);

(statearr_6672[(13)] = inst_6579);

(statearr_6672[(15)] = inst_6580);

(statearr_6672[(16)] = inst_6582);

return statearr_6672;
})();
var statearr_6673_6708 = state_6638__$1;
(statearr_6673_6708[(2)] = null);

(statearr_6673_6708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (10))){
var inst_6581 = (state_6638[(12)]);
var inst_6579 = (state_6638[(13)]);
var inst_6580 = (state_6638[(15)]);
var inst_6582 = (state_6638[(16)]);
var inst_6587 = cljs.core._nth.call(null,inst_6580,inst_6582);
var inst_6588 = cljs.core.async.muxch_STAR_.call(null,inst_6587);
var inst_6589 = cljs.core.async.close_BANG_.call(null,inst_6588);
var inst_6590 = (inst_6582 + (1));
var tmp6668 = inst_6581;
var tmp6669 = inst_6579;
var tmp6670 = inst_6580;
var inst_6579__$1 = tmp6669;
var inst_6580__$1 = tmp6670;
var inst_6581__$1 = tmp6668;
var inst_6582__$1 = inst_6590;
var state_6638__$1 = (function (){var statearr_6674 = state_6638;
(statearr_6674[(12)] = inst_6581__$1);

(statearr_6674[(17)] = inst_6589);

(statearr_6674[(13)] = inst_6579__$1);

(statearr_6674[(15)] = inst_6580__$1);

(statearr_6674[(16)] = inst_6582__$1);

return statearr_6674;
})();
var statearr_6675_6709 = state_6638__$1;
(statearr_6675_6709[(2)] = null);

(statearr_6675_6709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (18))){
var inst_6608 = (state_6638[(2)]);
var state_6638__$1 = state_6638;
var statearr_6676_6710 = state_6638__$1;
(statearr_6676_6710[(2)] = inst_6608);

(statearr_6676_6710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6639 === (8))){
var inst_6581 = (state_6638[(12)]);
var inst_6582 = (state_6638[(16)]);
var inst_6584 = (inst_6582 < inst_6581);
var inst_6585 = inst_6584;
var state_6638__$1 = state_6638;
if(cljs.core.truth_(inst_6585)){
var statearr_6677_6711 = state_6638__$1;
(statearr_6677_6711[(1)] = (10));

} else {
var statearr_6678_6712 = state_6638__$1;
(statearr_6678_6712[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_6679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6679[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_6679[(1)] = (1));

return statearr_6679;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_6638){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6680){if((e6680 instanceof Object)){
var ex__5412__auto__ = e6680;
var statearr_6681_6713 = state_6638;
(statearr_6681_6713[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6714 = state_6638;
state_6638 = G__6714;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_6638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_6638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6682 = f__5506__auto__.call(null);
(statearr_6682[(6)] = c__5505__auto___6684);

return statearr_6682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__6716 = arguments.length;
switch (G__6716) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__6719 = arguments.length;
switch (G__6719) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__6722 = arguments.length;
switch (G__6722) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__5505__auto___6789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6761){
var state_val_6762 = (state_6761[(1)]);
if((state_val_6762 === (7))){
var state_6761__$1 = state_6761;
var statearr_6763_6790 = state_6761__$1;
(statearr_6763_6790[(2)] = null);

(statearr_6763_6790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (1))){
var state_6761__$1 = state_6761;
var statearr_6764_6791 = state_6761__$1;
(statearr_6764_6791[(2)] = null);

(statearr_6764_6791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (4))){
var inst_6725 = (state_6761[(7)]);
var inst_6727 = (inst_6725 < cnt);
var state_6761__$1 = state_6761;
if(cljs.core.truth_(inst_6727)){
var statearr_6765_6792 = state_6761__$1;
(statearr_6765_6792[(1)] = (6));

} else {
var statearr_6766_6793 = state_6761__$1;
(statearr_6766_6793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (15))){
var inst_6757 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
var statearr_6767_6794 = state_6761__$1;
(statearr_6767_6794[(2)] = inst_6757);

(statearr_6767_6794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (13))){
var inst_6750 = cljs.core.async.close_BANG_.call(null,out);
var state_6761__$1 = state_6761;
var statearr_6768_6795 = state_6761__$1;
(statearr_6768_6795[(2)] = inst_6750);

(statearr_6768_6795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (6))){
var state_6761__$1 = state_6761;
var statearr_6769_6796 = state_6761__$1;
(statearr_6769_6796[(2)] = null);

(statearr_6769_6796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (3))){
var inst_6759 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6761__$1,inst_6759);
} else {
if((state_val_6762 === (12))){
var inst_6747 = (state_6761[(8)]);
var inst_6747__$1 = (state_6761[(2)]);
var inst_6748 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_6747__$1);
var state_6761__$1 = (function (){var statearr_6770 = state_6761;
(statearr_6770[(8)] = inst_6747__$1);

return statearr_6770;
})();
if(cljs.core.truth_(inst_6748)){
var statearr_6771_6797 = state_6761__$1;
(statearr_6771_6797[(1)] = (13));

} else {
var statearr_6772_6798 = state_6761__$1;
(statearr_6772_6798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (2))){
var inst_6724 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_6725 = (0);
var state_6761__$1 = (function (){var statearr_6773 = state_6761;
(statearr_6773[(7)] = inst_6725);

(statearr_6773[(9)] = inst_6724);

return statearr_6773;
})();
var statearr_6774_6799 = state_6761__$1;
(statearr_6774_6799[(2)] = null);

(statearr_6774_6799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (11))){
var inst_6725 = (state_6761[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_6761,(10),Object,null,(9));
var inst_6734 = chs__$1.call(null,inst_6725);
var inst_6735 = done.call(null,inst_6725);
var inst_6736 = cljs.core.async.take_BANG_.call(null,inst_6734,inst_6735);
var state_6761__$1 = state_6761;
var statearr_6775_6800 = state_6761__$1;
(statearr_6775_6800[(2)] = inst_6736);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (9))){
var inst_6725 = (state_6761[(7)]);
var inst_6738 = (state_6761[(2)]);
var inst_6739 = (inst_6725 + (1));
var inst_6725__$1 = inst_6739;
var state_6761__$1 = (function (){var statearr_6776 = state_6761;
(statearr_6776[(7)] = inst_6725__$1);

(statearr_6776[(10)] = inst_6738);

return statearr_6776;
})();
var statearr_6777_6801 = state_6761__$1;
(statearr_6777_6801[(2)] = null);

(statearr_6777_6801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (5))){
var inst_6745 = (state_6761[(2)]);
var state_6761__$1 = (function (){var statearr_6778 = state_6761;
(statearr_6778[(11)] = inst_6745);

return statearr_6778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6761__$1,(12),dchan);
} else {
if((state_val_6762 === (14))){
var inst_6747 = (state_6761[(8)]);
var inst_6752 = cljs.core.apply.call(null,f,inst_6747);
var state_6761__$1 = state_6761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6761__$1,(16),out,inst_6752);
} else {
if((state_val_6762 === (16))){
var inst_6754 = (state_6761[(2)]);
var state_6761__$1 = (function (){var statearr_6779 = state_6761;
(statearr_6779[(12)] = inst_6754);

return statearr_6779;
})();
var statearr_6780_6802 = state_6761__$1;
(statearr_6780_6802[(2)] = null);

(statearr_6780_6802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (10))){
var inst_6729 = (state_6761[(2)]);
var inst_6730 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_6761__$1 = (function (){var statearr_6781 = state_6761;
(statearr_6781[(13)] = inst_6729);

return statearr_6781;
})();
var statearr_6782_6803 = state_6761__$1;
(statearr_6782_6803[(2)] = inst_6730);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6762 === (8))){
var inst_6743 = (state_6761[(2)]);
var state_6761__$1 = state_6761;
var statearr_6783_6804 = state_6761__$1;
(statearr_6783_6804[(2)] = inst_6743);

(statearr_6783_6804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_6784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6784[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_6784[(1)] = (1));

return statearr_6784;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_6761){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6785){if((e6785 instanceof Object)){
var ex__5412__auto__ = e6785;
var statearr_6786_6805 = state_6761;
(statearr_6786_6805[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6806 = state_6761;
state_6761 = G__6806;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_6761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_6761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6787 = f__5506__auto__.call(null);
(statearr_6787[(6)] = c__5505__auto___6789);

return statearr_6787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__6809 = arguments.length;
switch (G__6809) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5505__auto___6863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6841){
var state_val_6842 = (state_6841[(1)]);
if((state_val_6842 === (7))){
var inst_6820 = (state_6841[(7)]);
var inst_6821 = (state_6841[(8)]);
var inst_6820__$1 = (state_6841[(2)]);
var inst_6821__$1 = cljs.core.nth.call(null,inst_6820__$1,(0),null);
var inst_6822 = cljs.core.nth.call(null,inst_6820__$1,(1),null);
var inst_6823 = (inst_6821__$1 == null);
var state_6841__$1 = (function (){var statearr_6843 = state_6841;
(statearr_6843[(7)] = inst_6820__$1);

(statearr_6843[(8)] = inst_6821__$1);

(statearr_6843[(9)] = inst_6822);

return statearr_6843;
})();
if(cljs.core.truth_(inst_6823)){
var statearr_6844_6864 = state_6841__$1;
(statearr_6844_6864[(1)] = (8));

} else {
var statearr_6845_6865 = state_6841__$1;
(statearr_6845_6865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (1))){
var inst_6810 = cljs.core.vec.call(null,chs);
var inst_6811 = inst_6810;
var state_6841__$1 = (function (){var statearr_6846 = state_6841;
(statearr_6846[(10)] = inst_6811);

return statearr_6846;
})();
var statearr_6847_6866 = state_6841__$1;
(statearr_6847_6866[(2)] = null);

(statearr_6847_6866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (4))){
var inst_6811 = (state_6841[(10)]);
var state_6841__$1 = state_6841;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6841__$1,(7),inst_6811);
} else {
if((state_val_6842 === (6))){
var inst_6837 = (state_6841[(2)]);
var state_6841__$1 = state_6841;
var statearr_6848_6867 = state_6841__$1;
(statearr_6848_6867[(2)] = inst_6837);

(statearr_6848_6867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (3))){
var inst_6839 = (state_6841[(2)]);
var state_6841__$1 = state_6841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6841__$1,inst_6839);
} else {
if((state_val_6842 === (2))){
var inst_6811 = (state_6841[(10)]);
var inst_6813 = cljs.core.count.call(null,inst_6811);
var inst_6814 = (inst_6813 > (0));
var state_6841__$1 = state_6841;
if(cljs.core.truth_(inst_6814)){
var statearr_6850_6868 = state_6841__$1;
(statearr_6850_6868[(1)] = (4));

} else {
var statearr_6851_6869 = state_6841__$1;
(statearr_6851_6869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (11))){
var inst_6811 = (state_6841[(10)]);
var inst_6830 = (state_6841[(2)]);
var tmp6849 = inst_6811;
var inst_6811__$1 = tmp6849;
var state_6841__$1 = (function (){var statearr_6852 = state_6841;
(statearr_6852[(11)] = inst_6830);

(statearr_6852[(10)] = inst_6811__$1);

return statearr_6852;
})();
var statearr_6853_6870 = state_6841__$1;
(statearr_6853_6870[(2)] = null);

(statearr_6853_6870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (9))){
var inst_6821 = (state_6841[(8)]);
var state_6841__$1 = state_6841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6841__$1,(11),out,inst_6821);
} else {
if((state_val_6842 === (5))){
var inst_6835 = cljs.core.async.close_BANG_.call(null,out);
var state_6841__$1 = state_6841;
var statearr_6854_6871 = state_6841__$1;
(statearr_6854_6871[(2)] = inst_6835);

(statearr_6854_6871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (10))){
var inst_6833 = (state_6841[(2)]);
var state_6841__$1 = state_6841;
var statearr_6855_6872 = state_6841__$1;
(statearr_6855_6872[(2)] = inst_6833);

(statearr_6855_6872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (8))){
var inst_6820 = (state_6841[(7)]);
var inst_6821 = (state_6841[(8)]);
var inst_6822 = (state_6841[(9)]);
var inst_6811 = (state_6841[(10)]);
var inst_6825 = (function (){var cs = inst_6811;
var vec__6816 = inst_6820;
var v = inst_6821;
var c = inst_6822;
return (function (p1__6807_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__6807_SHARP_);
});
})();
var inst_6826 = cljs.core.filterv.call(null,inst_6825,inst_6811);
var inst_6811__$1 = inst_6826;
var state_6841__$1 = (function (){var statearr_6856 = state_6841;
(statearr_6856[(10)] = inst_6811__$1);

return statearr_6856;
})();
var statearr_6857_6873 = state_6841__$1;
(statearr_6857_6873[(2)] = null);

(statearr_6857_6873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_6858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6858[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_6858[(1)] = (1));

return statearr_6858;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_6841){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6859){if((e6859 instanceof Object)){
var ex__5412__auto__ = e6859;
var statearr_6860_6874 = state_6841;
(statearr_6860_6874[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6875 = state_6841;
state_6841 = G__6875;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_6841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_6841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6861 = f__5506__auto__.call(null);
(statearr_6861[(6)] = c__5505__auto___6863);

return statearr_6861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__6877 = arguments.length;
switch (G__6877) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5505__auto___6922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6901){
var state_val_6902 = (state_6901[(1)]);
if((state_val_6902 === (7))){
var inst_6883 = (state_6901[(7)]);
var inst_6883__$1 = (state_6901[(2)]);
var inst_6884 = (inst_6883__$1 == null);
var inst_6885 = cljs.core.not.call(null,inst_6884);
var state_6901__$1 = (function (){var statearr_6903 = state_6901;
(statearr_6903[(7)] = inst_6883__$1);

return statearr_6903;
})();
if(inst_6885){
var statearr_6904_6923 = state_6901__$1;
(statearr_6904_6923[(1)] = (8));

} else {
var statearr_6905_6924 = state_6901__$1;
(statearr_6905_6924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (1))){
var inst_6878 = (0);
var state_6901__$1 = (function (){var statearr_6906 = state_6901;
(statearr_6906[(8)] = inst_6878);

return statearr_6906;
})();
var statearr_6907_6925 = state_6901__$1;
(statearr_6907_6925[(2)] = null);

(statearr_6907_6925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (4))){
var state_6901__$1 = state_6901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6901__$1,(7),ch);
} else {
if((state_val_6902 === (6))){
var inst_6896 = (state_6901[(2)]);
var state_6901__$1 = state_6901;
var statearr_6908_6926 = state_6901__$1;
(statearr_6908_6926[(2)] = inst_6896);

(statearr_6908_6926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (3))){
var inst_6898 = (state_6901[(2)]);
var inst_6899 = cljs.core.async.close_BANG_.call(null,out);
var state_6901__$1 = (function (){var statearr_6909 = state_6901;
(statearr_6909[(9)] = inst_6898);

return statearr_6909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6901__$1,inst_6899);
} else {
if((state_val_6902 === (2))){
var inst_6878 = (state_6901[(8)]);
var inst_6880 = (inst_6878 < n);
var state_6901__$1 = state_6901;
if(cljs.core.truth_(inst_6880)){
var statearr_6910_6927 = state_6901__$1;
(statearr_6910_6927[(1)] = (4));

} else {
var statearr_6911_6928 = state_6901__$1;
(statearr_6911_6928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (11))){
var inst_6878 = (state_6901[(8)]);
var inst_6888 = (state_6901[(2)]);
var inst_6889 = (inst_6878 + (1));
var inst_6878__$1 = inst_6889;
var state_6901__$1 = (function (){var statearr_6912 = state_6901;
(statearr_6912[(8)] = inst_6878__$1);

(statearr_6912[(10)] = inst_6888);

return statearr_6912;
})();
var statearr_6913_6929 = state_6901__$1;
(statearr_6913_6929[(2)] = null);

(statearr_6913_6929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (9))){
var state_6901__$1 = state_6901;
var statearr_6914_6930 = state_6901__$1;
(statearr_6914_6930[(2)] = null);

(statearr_6914_6930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (5))){
var state_6901__$1 = state_6901;
var statearr_6915_6931 = state_6901__$1;
(statearr_6915_6931[(2)] = null);

(statearr_6915_6931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (10))){
var inst_6893 = (state_6901[(2)]);
var state_6901__$1 = state_6901;
var statearr_6916_6932 = state_6901__$1;
(statearr_6916_6932[(2)] = inst_6893);

(statearr_6916_6932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6902 === (8))){
var inst_6883 = (state_6901[(7)]);
var state_6901__$1 = state_6901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6901__$1,(11),out,inst_6883);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_6917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6917[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_6917[(1)] = (1));

return statearr_6917;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_6901){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6918){if((e6918 instanceof Object)){
var ex__5412__auto__ = e6918;
var statearr_6919_6933 = state_6901;
(statearr_6919_6933[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6934 = state_6901;
state_6901 = G__6934;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_6901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_6901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6920 = f__5506__auto__.call(null);
(statearr_6920[(6)] = c__5505__auto___6922);

return statearr_6920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6936 = (function (f,ch,meta6937){
this.f = f;
this.ch = ch;
this.meta6937 = meta6937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6938,meta6937__$1){
var self__ = this;
var _6938__$1 = this;
return (new cljs.core.async.t_cljs$core$async6936(self__.f,self__.ch,meta6937__$1));
}));

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6938){
var self__ = this;
var _6938__$1 = this;
return self__.meta6937;
}));

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6939 = (function (f,ch,meta6937,_,fn1,meta6940){
this.f = f;
this.ch = ch;
this.meta6937 = meta6937;
this._ = _;
this.fn1 = fn1;
this.meta6940 = meta6940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6941,meta6940__$1){
var self__ = this;
var _6941__$1 = this;
return (new cljs.core.async.t_cljs$core$async6939(self__.f,self__.ch,self__.meta6937,self__._,self__.fn1,meta6940__$1));
}));

(cljs.core.async.t_cljs$core$async6939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6941){
var self__ = this;
var _6941__$1 = this;
return self__.meta6940;
}));

(cljs.core.async.t_cljs$core$async6939.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async6939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async6939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__6935_SHARP_){
return f1.call(null,(((p1__6935_SHARP_ == null))?null:self__.f.call(null,p1__6935_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async6939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6937","meta6937",148285710,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async6936","cljs.core.async/t_cljs$core$async6936",1026814892,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6940","meta6940",1340034769,null)], null);
}));

(cljs.core.async.t_cljs$core$async6939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6939");

(cljs.core.async.t_cljs$core$async6939.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6939.
 */
cljs.core.async.__GT_t_cljs$core$async6939 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6939(f__$1,ch__$1,meta6937__$1,___$2,fn1__$1,meta6940){
return (new cljs.core.async.t_cljs$core$async6939(f__$1,ch__$1,meta6937__$1,___$2,fn1__$1,meta6940));
});

}

return (new cljs.core.async.t_cljs$core$async6939(self__.f,self__.ch,self__.meta6937,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async6936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6937","meta6937",148285710,null)], null);
}));

(cljs.core.async.t_cljs$core$async6936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6936");

(cljs.core.async.t_cljs$core$async6936.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6936.
 */
cljs.core.async.__GT_t_cljs$core$async6936 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6936(f__$1,ch__$1,meta6937){
return (new cljs.core.async.t_cljs$core$async6936(f__$1,ch__$1,meta6937));
});

}

return (new cljs.core.async.t_cljs$core$async6936(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6942 = (function (f,ch,meta6943){
this.f = f;
this.ch = ch;
this.meta6943 = meta6943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6944,meta6943__$1){
var self__ = this;
var _6944__$1 = this;
return (new cljs.core.async.t_cljs$core$async6942(self__.f,self__.ch,meta6943__$1));
}));

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6944){
var self__ = this;
var _6944__$1 = this;
return self__.meta6943;
}));

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async6942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6943","meta6943",-51056227,null)], null);
}));

(cljs.core.async.t_cljs$core$async6942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6942");

(cljs.core.async.t_cljs$core$async6942.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6942.
 */
cljs.core.async.__GT_t_cljs$core$async6942 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6942(f__$1,ch__$1,meta6943){
return (new cljs.core.async.t_cljs$core$async6942(f__$1,ch__$1,meta6943));
});

}

return (new cljs.core.async.t_cljs$core$async6942(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6945 = (function (p,ch,meta6946){
this.p = p;
this.ch = ch;
this.meta6946 = meta6946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6947,meta6946__$1){
var self__ = this;
var _6947__$1 = this;
return (new cljs.core.async.t_cljs$core$async6945(self__.p,self__.ch,meta6946__$1));
}));

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6947){
var self__ = this;
var _6947__$1 = this;
return self__.meta6946;
}));

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async6945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6946","meta6946",-264941662,null)], null);
}));

(cljs.core.async.t_cljs$core$async6945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6945");

(cljs.core.async.t_cljs$core$async6945.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6945.
 */
cljs.core.async.__GT_t_cljs$core$async6945 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6945(p__$1,ch__$1,meta6946){
return (new cljs.core.async.t_cljs$core$async6945(p__$1,ch__$1,meta6946));
});

}

return (new cljs.core.async.t_cljs$core$async6945(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__6949 = arguments.length;
switch (G__6949) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5505__auto___6989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_6970){
var state_val_6971 = (state_6970[(1)]);
if((state_val_6971 === (7))){
var inst_6966 = (state_6970[(2)]);
var state_6970__$1 = state_6970;
var statearr_6972_6990 = state_6970__$1;
(statearr_6972_6990[(2)] = inst_6966);

(statearr_6972_6990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (1))){
var state_6970__$1 = state_6970;
var statearr_6973_6991 = state_6970__$1;
(statearr_6973_6991[(2)] = null);

(statearr_6973_6991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (4))){
var inst_6952 = (state_6970[(7)]);
var inst_6952__$1 = (state_6970[(2)]);
var inst_6953 = (inst_6952__$1 == null);
var state_6970__$1 = (function (){var statearr_6974 = state_6970;
(statearr_6974[(7)] = inst_6952__$1);

return statearr_6974;
})();
if(cljs.core.truth_(inst_6953)){
var statearr_6975_6992 = state_6970__$1;
(statearr_6975_6992[(1)] = (5));

} else {
var statearr_6976_6993 = state_6970__$1;
(statearr_6976_6993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (6))){
var inst_6952 = (state_6970[(7)]);
var inst_6957 = p.call(null,inst_6952);
var state_6970__$1 = state_6970;
if(cljs.core.truth_(inst_6957)){
var statearr_6977_6994 = state_6970__$1;
(statearr_6977_6994[(1)] = (8));

} else {
var statearr_6978_6995 = state_6970__$1;
(statearr_6978_6995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (3))){
var inst_6968 = (state_6970[(2)]);
var state_6970__$1 = state_6970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6970__$1,inst_6968);
} else {
if((state_val_6971 === (2))){
var state_6970__$1 = state_6970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6970__$1,(4),ch);
} else {
if((state_val_6971 === (11))){
var inst_6960 = (state_6970[(2)]);
var state_6970__$1 = state_6970;
var statearr_6979_6996 = state_6970__$1;
(statearr_6979_6996[(2)] = inst_6960);

(statearr_6979_6996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (9))){
var state_6970__$1 = state_6970;
var statearr_6980_6997 = state_6970__$1;
(statearr_6980_6997[(2)] = null);

(statearr_6980_6997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (5))){
var inst_6955 = cljs.core.async.close_BANG_.call(null,out);
var state_6970__$1 = state_6970;
var statearr_6981_6998 = state_6970__$1;
(statearr_6981_6998[(2)] = inst_6955);

(statearr_6981_6998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (10))){
var inst_6963 = (state_6970[(2)]);
var state_6970__$1 = (function (){var statearr_6982 = state_6970;
(statearr_6982[(8)] = inst_6963);

return statearr_6982;
})();
var statearr_6983_6999 = state_6970__$1;
(statearr_6983_6999[(2)] = null);

(statearr_6983_6999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6971 === (8))){
var inst_6952 = (state_6970[(7)]);
var state_6970__$1 = state_6970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6970__$1,(11),out,inst_6952);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_6984 = [null,null,null,null,null,null,null,null,null];
(statearr_6984[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_6984[(1)] = (1));

return statearr_6984;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_6970){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_6970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e6985){if((e6985 instanceof Object)){
var ex__5412__auto__ = e6985;
var statearr_6986_7000 = state_6970;
(statearr_6986_7000[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7001 = state_6970;
state_6970 = G__7001;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_6970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_6970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_6987 = f__5506__auto__.call(null);
(statearr_6987[(6)] = c__5505__auto___6989);

return statearr_6987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__7003 = arguments.length;
switch (G__7003) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__5505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_7066){
var state_val_7067 = (state_7066[(1)]);
if((state_val_7067 === (7))){
var inst_7062 = (state_7066[(2)]);
var state_7066__$1 = state_7066;
var statearr_7068_7106 = state_7066__$1;
(statearr_7068_7106[(2)] = inst_7062);

(statearr_7068_7106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (20))){
var inst_7032 = (state_7066[(7)]);
var inst_7043 = (state_7066[(2)]);
var inst_7044 = cljs.core.next.call(null,inst_7032);
var inst_7018 = inst_7044;
var inst_7019 = null;
var inst_7020 = (0);
var inst_7021 = (0);
var state_7066__$1 = (function (){var statearr_7069 = state_7066;
(statearr_7069[(8)] = inst_7021);

(statearr_7069[(9)] = inst_7019);

(statearr_7069[(10)] = inst_7018);

(statearr_7069[(11)] = inst_7020);

(statearr_7069[(12)] = inst_7043);

return statearr_7069;
})();
var statearr_7070_7107 = state_7066__$1;
(statearr_7070_7107[(2)] = null);

(statearr_7070_7107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (1))){
var state_7066__$1 = state_7066;
var statearr_7071_7108 = state_7066__$1;
(statearr_7071_7108[(2)] = null);

(statearr_7071_7108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (4))){
var inst_7007 = (state_7066[(13)]);
var inst_7007__$1 = (state_7066[(2)]);
var inst_7008 = (inst_7007__$1 == null);
var state_7066__$1 = (function (){var statearr_7072 = state_7066;
(statearr_7072[(13)] = inst_7007__$1);

return statearr_7072;
})();
if(cljs.core.truth_(inst_7008)){
var statearr_7073_7109 = state_7066__$1;
(statearr_7073_7109[(1)] = (5));

} else {
var statearr_7074_7110 = state_7066__$1;
(statearr_7074_7110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (15))){
var state_7066__$1 = state_7066;
var statearr_7078_7111 = state_7066__$1;
(statearr_7078_7111[(2)] = null);

(statearr_7078_7111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (21))){
var state_7066__$1 = state_7066;
var statearr_7079_7112 = state_7066__$1;
(statearr_7079_7112[(2)] = null);

(statearr_7079_7112[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (13))){
var inst_7021 = (state_7066[(8)]);
var inst_7019 = (state_7066[(9)]);
var inst_7018 = (state_7066[(10)]);
var inst_7020 = (state_7066[(11)]);
var inst_7028 = (state_7066[(2)]);
var inst_7029 = (inst_7021 + (1));
var tmp7075 = inst_7019;
var tmp7076 = inst_7018;
var tmp7077 = inst_7020;
var inst_7018__$1 = tmp7076;
var inst_7019__$1 = tmp7075;
var inst_7020__$1 = tmp7077;
var inst_7021__$1 = inst_7029;
var state_7066__$1 = (function (){var statearr_7080 = state_7066;
(statearr_7080[(8)] = inst_7021__$1);

(statearr_7080[(9)] = inst_7019__$1);

(statearr_7080[(14)] = inst_7028);

(statearr_7080[(10)] = inst_7018__$1);

(statearr_7080[(11)] = inst_7020__$1);

return statearr_7080;
})();
var statearr_7081_7113 = state_7066__$1;
(statearr_7081_7113[(2)] = null);

(statearr_7081_7113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (22))){
var state_7066__$1 = state_7066;
var statearr_7082_7114 = state_7066__$1;
(statearr_7082_7114[(2)] = null);

(statearr_7082_7114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (6))){
var inst_7007 = (state_7066[(13)]);
var inst_7016 = f.call(null,inst_7007);
var inst_7017 = cljs.core.seq.call(null,inst_7016);
var inst_7018 = inst_7017;
var inst_7019 = null;
var inst_7020 = (0);
var inst_7021 = (0);
var state_7066__$1 = (function (){var statearr_7083 = state_7066;
(statearr_7083[(8)] = inst_7021);

(statearr_7083[(9)] = inst_7019);

(statearr_7083[(10)] = inst_7018);

(statearr_7083[(11)] = inst_7020);

return statearr_7083;
})();
var statearr_7084_7115 = state_7066__$1;
(statearr_7084_7115[(2)] = null);

(statearr_7084_7115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (17))){
var inst_7032 = (state_7066[(7)]);
var inst_7036 = cljs.core.chunk_first.call(null,inst_7032);
var inst_7037 = cljs.core.chunk_rest.call(null,inst_7032);
var inst_7038 = cljs.core.count.call(null,inst_7036);
var inst_7018 = inst_7037;
var inst_7019 = inst_7036;
var inst_7020 = inst_7038;
var inst_7021 = (0);
var state_7066__$1 = (function (){var statearr_7085 = state_7066;
(statearr_7085[(8)] = inst_7021);

(statearr_7085[(9)] = inst_7019);

(statearr_7085[(10)] = inst_7018);

(statearr_7085[(11)] = inst_7020);

return statearr_7085;
})();
var statearr_7086_7116 = state_7066__$1;
(statearr_7086_7116[(2)] = null);

(statearr_7086_7116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (3))){
var inst_7064 = (state_7066[(2)]);
var state_7066__$1 = state_7066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7066__$1,inst_7064);
} else {
if((state_val_7067 === (12))){
var inst_7052 = (state_7066[(2)]);
var state_7066__$1 = state_7066;
var statearr_7087_7117 = state_7066__$1;
(statearr_7087_7117[(2)] = inst_7052);

(statearr_7087_7117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (2))){
var state_7066__$1 = state_7066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7066__$1,(4),in$);
} else {
if((state_val_7067 === (23))){
var inst_7060 = (state_7066[(2)]);
var state_7066__$1 = state_7066;
var statearr_7088_7118 = state_7066__$1;
(statearr_7088_7118[(2)] = inst_7060);

(statearr_7088_7118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (19))){
var inst_7047 = (state_7066[(2)]);
var state_7066__$1 = state_7066;
var statearr_7089_7119 = state_7066__$1;
(statearr_7089_7119[(2)] = inst_7047);

(statearr_7089_7119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (11))){
var inst_7018 = (state_7066[(10)]);
var inst_7032 = (state_7066[(7)]);
var inst_7032__$1 = cljs.core.seq.call(null,inst_7018);
var state_7066__$1 = (function (){var statearr_7090 = state_7066;
(statearr_7090[(7)] = inst_7032__$1);

return statearr_7090;
})();
if(inst_7032__$1){
var statearr_7091_7120 = state_7066__$1;
(statearr_7091_7120[(1)] = (14));

} else {
var statearr_7092_7121 = state_7066__$1;
(statearr_7092_7121[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (9))){
var inst_7054 = (state_7066[(2)]);
var inst_7055 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_7066__$1 = (function (){var statearr_7093 = state_7066;
(statearr_7093[(15)] = inst_7054);

return statearr_7093;
})();
if(cljs.core.truth_(inst_7055)){
var statearr_7094_7122 = state_7066__$1;
(statearr_7094_7122[(1)] = (21));

} else {
var statearr_7095_7123 = state_7066__$1;
(statearr_7095_7123[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (5))){
var inst_7010 = cljs.core.async.close_BANG_.call(null,out);
var state_7066__$1 = state_7066;
var statearr_7096_7124 = state_7066__$1;
(statearr_7096_7124[(2)] = inst_7010);

(statearr_7096_7124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (14))){
var inst_7032 = (state_7066[(7)]);
var inst_7034 = cljs.core.chunked_seq_QMARK_.call(null,inst_7032);
var state_7066__$1 = state_7066;
if(inst_7034){
var statearr_7097_7125 = state_7066__$1;
(statearr_7097_7125[(1)] = (17));

} else {
var statearr_7098_7126 = state_7066__$1;
(statearr_7098_7126[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (16))){
var inst_7050 = (state_7066[(2)]);
var state_7066__$1 = state_7066;
var statearr_7099_7127 = state_7066__$1;
(statearr_7099_7127[(2)] = inst_7050);

(statearr_7099_7127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7067 === (10))){
var inst_7021 = (state_7066[(8)]);
var inst_7019 = (state_7066[(9)]);
var inst_7026 = cljs.core._nth.call(null,inst_7019,inst_7021);
var state_7066__$1 = state_7066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7066__$1,(13),out,inst_7026);
} else {
if((state_val_7067 === (18))){
var inst_7032 = (state_7066[(7)]);
var inst_7041 = cljs.core.first.call(null,inst_7032);
var state_7066__$1 = state_7066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7066__$1,(20),out,inst_7041);
} else {
if((state_val_7067 === (8))){
var inst_7021 = (state_7066[(8)]);
var inst_7020 = (state_7066[(11)]);
var inst_7023 = (inst_7021 < inst_7020);
var inst_7024 = inst_7023;
var state_7066__$1 = state_7066;
if(cljs.core.truth_(inst_7024)){
var statearr_7100_7128 = state_7066__$1;
(statearr_7100_7128[(1)] = (10));

} else {
var statearr_7101_7129 = state_7066__$1;
(statearr_7101_7129[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__5409__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__5409__auto____0 = (function (){
var statearr_7102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7102[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__5409__auto__);

(statearr_7102[(1)] = (1));

return statearr_7102;
});
var cljs$core$async$mapcat_STAR__$_state_machine__5409__auto____1 = (function (state_7066){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_7066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e7103){if((e7103 instanceof Object)){
var ex__5412__auto__ = e7103;
var statearr_7104_7130 = state_7066;
(statearr_7104_7130[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7131 = state_7066;
state_7066 = G__7131;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__5409__auto__ = function(state_7066){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__5409__auto____1.call(this,state_7066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__5409__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__5409__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_7105 = f__5506__auto__.call(null);
(statearr_7105[(6)] = c__5505__auto__);

return statearr_7105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));

return c__5505__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__7133 = arguments.length;
switch (G__7133) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__7136 = arguments.length;
switch (G__7136) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__7139 = arguments.length;
switch (G__7139) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5505__auto___7186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_7163){
var state_val_7164 = (state_7163[(1)]);
if((state_val_7164 === (7))){
var inst_7158 = (state_7163[(2)]);
var state_7163__$1 = state_7163;
var statearr_7165_7187 = state_7163__$1;
(statearr_7165_7187[(2)] = inst_7158);

(statearr_7165_7187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (1))){
var inst_7140 = null;
var state_7163__$1 = (function (){var statearr_7166 = state_7163;
(statearr_7166[(7)] = inst_7140);

return statearr_7166;
})();
var statearr_7167_7188 = state_7163__$1;
(statearr_7167_7188[(2)] = null);

(statearr_7167_7188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (4))){
var inst_7143 = (state_7163[(8)]);
var inst_7143__$1 = (state_7163[(2)]);
var inst_7144 = (inst_7143__$1 == null);
var inst_7145 = cljs.core.not.call(null,inst_7144);
var state_7163__$1 = (function (){var statearr_7168 = state_7163;
(statearr_7168[(8)] = inst_7143__$1);

return statearr_7168;
})();
if(inst_7145){
var statearr_7169_7189 = state_7163__$1;
(statearr_7169_7189[(1)] = (5));

} else {
var statearr_7170_7190 = state_7163__$1;
(statearr_7170_7190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (6))){
var state_7163__$1 = state_7163;
var statearr_7171_7191 = state_7163__$1;
(statearr_7171_7191[(2)] = null);

(statearr_7171_7191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (3))){
var inst_7160 = (state_7163[(2)]);
var inst_7161 = cljs.core.async.close_BANG_.call(null,out);
var state_7163__$1 = (function (){var statearr_7172 = state_7163;
(statearr_7172[(9)] = inst_7160);

return statearr_7172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7163__$1,inst_7161);
} else {
if((state_val_7164 === (2))){
var state_7163__$1 = state_7163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7163__$1,(4),ch);
} else {
if((state_val_7164 === (11))){
var inst_7143 = (state_7163[(8)]);
var inst_7152 = (state_7163[(2)]);
var inst_7140 = inst_7143;
var state_7163__$1 = (function (){var statearr_7173 = state_7163;
(statearr_7173[(7)] = inst_7140);

(statearr_7173[(10)] = inst_7152);

return statearr_7173;
})();
var statearr_7174_7192 = state_7163__$1;
(statearr_7174_7192[(2)] = null);

(statearr_7174_7192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (9))){
var inst_7143 = (state_7163[(8)]);
var state_7163__$1 = state_7163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7163__$1,(11),out,inst_7143);
} else {
if((state_val_7164 === (5))){
var inst_7140 = (state_7163[(7)]);
var inst_7143 = (state_7163[(8)]);
var inst_7147 = cljs.core._EQ_.call(null,inst_7143,inst_7140);
var state_7163__$1 = state_7163;
if(inst_7147){
var statearr_7176_7193 = state_7163__$1;
(statearr_7176_7193[(1)] = (8));

} else {
var statearr_7177_7194 = state_7163__$1;
(statearr_7177_7194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (10))){
var inst_7155 = (state_7163[(2)]);
var state_7163__$1 = state_7163;
var statearr_7178_7195 = state_7163__$1;
(statearr_7178_7195[(2)] = inst_7155);

(statearr_7178_7195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7164 === (8))){
var inst_7140 = (state_7163[(7)]);
var tmp7175 = inst_7140;
var inst_7140__$1 = tmp7175;
var state_7163__$1 = (function (){var statearr_7179 = state_7163;
(statearr_7179[(7)] = inst_7140__$1);

return statearr_7179;
})();
var statearr_7180_7196 = state_7163__$1;
(statearr_7180_7196[(2)] = null);

(statearr_7180_7196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_7181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7181[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_7181[(1)] = (1));

return statearr_7181;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_7163){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_7163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e7182){if((e7182 instanceof Object)){
var ex__5412__auto__ = e7182;
var statearr_7183_7197 = state_7163;
(statearr_7183_7197[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7198 = state_7163;
state_7163 = G__7198;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_7163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_7163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_7184 = f__5506__auto__.call(null);
(statearr_7184[(6)] = c__5505__auto___7186);

return statearr_7184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__7200 = arguments.length;
switch (G__7200) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5505__auto___7266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_7238){
var state_val_7239 = (state_7238[(1)]);
if((state_val_7239 === (7))){
var inst_7234 = (state_7238[(2)]);
var state_7238__$1 = state_7238;
var statearr_7240_7267 = state_7238__$1;
(statearr_7240_7267[(2)] = inst_7234);

(statearr_7240_7267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (1))){
var inst_7201 = (new Array(n));
var inst_7202 = inst_7201;
var inst_7203 = (0);
var state_7238__$1 = (function (){var statearr_7241 = state_7238;
(statearr_7241[(7)] = inst_7203);

(statearr_7241[(8)] = inst_7202);

return statearr_7241;
})();
var statearr_7242_7268 = state_7238__$1;
(statearr_7242_7268[(2)] = null);

(statearr_7242_7268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (4))){
var inst_7206 = (state_7238[(9)]);
var inst_7206__$1 = (state_7238[(2)]);
var inst_7207 = (inst_7206__$1 == null);
var inst_7208 = cljs.core.not.call(null,inst_7207);
var state_7238__$1 = (function (){var statearr_7243 = state_7238;
(statearr_7243[(9)] = inst_7206__$1);

return statearr_7243;
})();
if(inst_7208){
var statearr_7244_7269 = state_7238__$1;
(statearr_7244_7269[(1)] = (5));

} else {
var statearr_7245_7270 = state_7238__$1;
(statearr_7245_7270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (15))){
var inst_7228 = (state_7238[(2)]);
var state_7238__$1 = state_7238;
var statearr_7246_7271 = state_7238__$1;
(statearr_7246_7271[(2)] = inst_7228);

(statearr_7246_7271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (13))){
var state_7238__$1 = state_7238;
var statearr_7247_7272 = state_7238__$1;
(statearr_7247_7272[(2)] = null);

(statearr_7247_7272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (6))){
var inst_7203 = (state_7238[(7)]);
var inst_7224 = (inst_7203 > (0));
var state_7238__$1 = state_7238;
if(cljs.core.truth_(inst_7224)){
var statearr_7248_7273 = state_7238__$1;
(statearr_7248_7273[(1)] = (12));

} else {
var statearr_7249_7274 = state_7238__$1;
(statearr_7249_7274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (3))){
var inst_7236 = (state_7238[(2)]);
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7238__$1,inst_7236);
} else {
if((state_val_7239 === (12))){
var inst_7202 = (state_7238[(8)]);
var inst_7226 = cljs.core.vec.call(null,inst_7202);
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7238__$1,(15),out,inst_7226);
} else {
if((state_val_7239 === (2))){
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7238__$1,(4),ch);
} else {
if((state_val_7239 === (11))){
var inst_7218 = (state_7238[(2)]);
var inst_7219 = (new Array(n));
var inst_7202 = inst_7219;
var inst_7203 = (0);
var state_7238__$1 = (function (){var statearr_7250 = state_7238;
(statearr_7250[(7)] = inst_7203);

(statearr_7250[(10)] = inst_7218);

(statearr_7250[(8)] = inst_7202);

return statearr_7250;
})();
var statearr_7251_7275 = state_7238__$1;
(statearr_7251_7275[(2)] = null);

(statearr_7251_7275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (9))){
var inst_7202 = (state_7238[(8)]);
var inst_7216 = cljs.core.vec.call(null,inst_7202);
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7238__$1,(11),out,inst_7216);
} else {
if((state_val_7239 === (5))){
var inst_7203 = (state_7238[(7)]);
var inst_7211 = (state_7238[(11)]);
var inst_7206 = (state_7238[(9)]);
var inst_7202 = (state_7238[(8)]);
var inst_7210 = (inst_7202[inst_7203] = inst_7206);
var inst_7211__$1 = (inst_7203 + (1));
var inst_7212 = (inst_7211__$1 < n);
var state_7238__$1 = (function (){var statearr_7252 = state_7238;
(statearr_7252[(11)] = inst_7211__$1);

(statearr_7252[(12)] = inst_7210);

return statearr_7252;
})();
if(cljs.core.truth_(inst_7212)){
var statearr_7253_7276 = state_7238__$1;
(statearr_7253_7276[(1)] = (8));

} else {
var statearr_7254_7277 = state_7238__$1;
(statearr_7254_7277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (14))){
var inst_7231 = (state_7238[(2)]);
var inst_7232 = cljs.core.async.close_BANG_.call(null,out);
var state_7238__$1 = (function (){var statearr_7256 = state_7238;
(statearr_7256[(13)] = inst_7231);

return statearr_7256;
})();
var statearr_7257_7278 = state_7238__$1;
(statearr_7257_7278[(2)] = inst_7232);

(statearr_7257_7278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (10))){
var inst_7222 = (state_7238[(2)]);
var state_7238__$1 = state_7238;
var statearr_7258_7279 = state_7238__$1;
(statearr_7258_7279[(2)] = inst_7222);

(statearr_7258_7279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7239 === (8))){
var inst_7211 = (state_7238[(11)]);
var inst_7202 = (state_7238[(8)]);
var tmp7255 = inst_7202;
var inst_7202__$1 = tmp7255;
var inst_7203 = inst_7211;
var state_7238__$1 = (function (){var statearr_7259 = state_7238;
(statearr_7259[(7)] = inst_7203);

(statearr_7259[(8)] = inst_7202__$1);

return statearr_7259;
})();
var statearr_7260_7280 = state_7238__$1;
(statearr_7260_7280[(2)] = null);

(statearr_7260_7280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_7261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7261[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_7261[(1)] = (1));

return statearr_7261;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_7238){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_7238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e7262){if((e7262 instanceof Object)){
var ex__5412__auto__ = e7262;
var statearr_7263_7281 = state_7238;
(statearr_7263_7281[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7282 = state_7238;
state_7238 = G__7282;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_7238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_7238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_7264 = f__5506__auto__.call(null);
(statearr_7264[(6)] = c__5505__auto___7266);

return statearr_7264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__7284 = arguments.length;
switch (G__7284) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5505__auto___7361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5506__auto__ = (function (){var switch__5408__auto__ = (function (state_7329){
var state_val_7330 = (state_7329[(1)]);
if((state_val_7330 === (7))){
var inst_7325 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
var statearr_7331_7362 = state_7329__$1;
(statearr_7331_7362[(2)] = inst_7325);

(statearr_7331_7362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (1))){
var inst_7285 = [];
var inst_7286 = inst_7285;
var inst_7287 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_7329__$1 = (function (){var statearr_7332 = state_7329;
(statearr_7332[(7)] = inst_7286);

(statearr_7332[(8)] = inst_7287);

return statearr_7332;
})();
var statearr_7333_7363 = state_7329__$1;
(statearr_7333_7363[(2)] = null);

(statearr_7333_7363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (4))){
var inst_7290 = (state_7329[(9)]);
var inst_7290__$1 = (state_7329[(2)]);
var inst_7291 = (inst_7290__$1 == null);
var inst_7292 = cljs.core.not.call(null,inst_7291);
var state_7329__$1 = (function (){var statearr_7334 = state_7329;
(statearr_7334[(9)] = inst_7290__$1);

return statearr_7334;
})();
if(inst_7292){
var statearr_7335_7364 = state_7329__$1;
(statearr_7335_7364[(1)] = (5));

} else {
var statearr_7336_7365 = state_7329__$1;
(statearr_7336_7365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (15))){
var inst_7286 = (state_7329[(7)]);
var inst_7317 = cljs.core.vec.call(null,inst_7286);
var state_7329__$1 = state_7329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7329__$1,(18),out,inst_7317);
} else {
if((state_val_7330 === (13))){
var inst_7312 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
var statearr_7337_7366 = state_7329__$1;
(statearr_7337_7366[(2)] = inst_7312);

(statearr_7337_7366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (6))){
var inst_7286 = (state_7329[(7)]);
var inst_7314 = inst_7286.length;
var inst_7315 = (inst_7314 > (0));
var state_7329__$1 = state_7329;
if(cljs.core.truth_(inst_7315)){
var statearr_7338_7367 = state_7329__$1;
(statearr_7338_7367[(1)] = (15));

} else {
var statearr_7339_7368 = state_7329__$1;
(statearr_7339_7368[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (17))){
var inst_7322 = (state_7329[(2)]);
var inst_7323 = cljs.core.async.close_BANG_.call(null,out);
var state_7329__$1 = (function (){var statearr_7340 = state_7329;
(statearr_7340[(10)] = inst_7322);

return statearr_7340;
})();
var statearr_7341_7369 = state_7329__$1;
(statearr_7341_7369[(2)] = inst_7323);

(statearr_7341_7369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (3))){
var inst_7327 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7329__$1,inst_7327);
} else {
if((state_val_7330 === (12))){
var inst_7286 = (state_7329[(7)]);
var inst_7305 = cljs.core.vec.call(null,inst_7286);
var state_7329__$1 = state_7329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7329__$1,(14),out,inst_7305);
} else {
if((state_val_7330 === (2))){
var state_7329__$1 = state_7329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7329__$1,(4),ch);
} else {
if((state_val_7330 === (11))){
var inst_7286 = (state_7329[(7)]);
var inst_7294 = (state_7329[(11)]);
var inst_7290 = (state_7329[(9)]);
var inst_7302 = inst_7286.push(inst_7290);
var tmp7342 = inst_7286;
var inst_7286__$1 = tmp7342;
var inst_7287 = inst_7294;
var state_7329__$1 = (function (){var statearr_7343 = state_7329;
(statearr_7343[(7)] = inst_7286__$1);

(statearr_7343[(12)] = inst_7302);

(statearr_7343[(8)] = inst_7287);

return statearr_7343;
})();
var statearr_7344_7370 = state_7329__$1;
(statearr_7344_7370[(2)] = null);

(statearr_7344_7370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (9))){
var inst_7287 = (state_7329[(8)]);
var inst_7298 = cljs.core.keyword_identical_QMARK_.call(null,inst_7287,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_7329__$1 = state_7329;
var statearr_7345_7371 = state_7329__$1;
(statearr_7345_7371[(2)] = inst_7298);

(statearr_7345_7371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (5))){
var inst_7295 = (state_7329[(13)]);
var inst_7294 = (state_7329[(11)]);
var inst_7287 = (state_7329[(8)]);
var inst_7290 = (state_7329[(9)]);
var inst_7294__$1 = f.call(null,inst_7290);
var inst_7295__$1 = cljs.core._EQ_.call(null,inst_7294__$1,inst_7287);
var state_7329__$1 = (function (){var statearr_7346 = state_7329;
(statearr_7346[(13)] = inst_7295__$1);

(statearr_7346[(11)] = inst_7294__$1);

return statearr_7346;
})();
if(inst_7295__$1){
var statearr_7347_7372 = state_7329__$1;
(statearr_7347_7372[(1)] = (8));

} else {
var statearr_7348_7373 = state_7329__$1;
(statearr_7348_7373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (14))){
var inst_7294 = (state_7329[(11)]);
var inst_7290 = (state_7329[(9)]);
var inst_7307 = (state_7329[(2)]);
var inst_7308 = [];
var inst_7309 = inst_7308.push(inst_7290);
var inst_7286 = inst_7308;
var inst_7287 = inst_7294;
var state_7329__$1 = (function (){var statearr_7349 = state_7329;
(statearr_7349[(7)] = inst_7286);

(statearr_7349[(14)] = inst_7309);

(statearr_7349[(15)] = inst_7307);

(statearr_7349[(8)] = inst_7287);

return statearr_7349;
})();
var statearr_7350_7374 = state_7329__$1;
(statearr_7350_7374[(2)] = null);

(statearr_7350_7374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (16))){
var state_7329__$1 = state_7329;
var statearr_7351_7375 = state_7329__$1;
(statearr_7351_7375[(2)] = null);

(statearr_7351_7375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (10))){
var inst_7300 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
if(cljs.core.truth_(inst_7300)){
var statearr_7352_7376 = state_7329__$1;
(statearr_7352_7376[(1)] = (11));

} else {
var statearr_7353_7377 = state_7329__$1;
(statearr_7353_7377[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (18))){
var inst_7319 = (state_7329[(2)]);
var state_7329__$1 = state_7329;
var statearr_7354_7378 = state_7329__$1;
(statearr_7354_7378[(2)] = inst_7319);

(statearr_7354_7378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7330 === (8))){
var inst_7295 = (state_7329[(13)]);
var state_7329__$1 = state_7329;
var statearr_7355_7379 = state_7329__$1;
(statearr_7355_7379[(2)] = inst_7295);

(statearr_7355_7379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__5409__auto__ = null;
var cljs$core$async$state_machine__5409__auto____0 = (function (){
var statearr_7356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7356[(0)] = cljs$core$async$state_machine__5409__auto__);

(statearr_7356[(1)] = (1));

return statearr_7356;
});
var cljs$core$async$state_machine__5409__auto____1 = (function (state_7329){
while(true){
var ret_value__5410__auto__ = (function (){try{while(true){
var result__5411__auto__ = switch__5408__auto__.call(null,state_7329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5411__auto__;
}
break;
}
}catch (e7357){if((e7357 instanceof Object)){
var ex__5412__auto__ = e7357;
var statearr_7358_7380 = state_7329;
(statearr_7358_7380[(5)] = ex__5412__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7381 = state_7329;
state_7329 = G__7381;
continue;
} else {
return ret_value__5410__auto__;
}
break;
}
});
cljs$core$async$state_machine__5409__auto__ = function(state_7329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5409__auto____1.call(this,state_7329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5409__auto____0;
cljs$core$async$state_machine__5409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5409__auto____1;
return cljs$core$async$state_machine__5409__auto__;
})()
})();
var state__5507__auto__ = (function (){var statearr_7359 = f__5506__auto__.call(null);
(statearr_7359[(6)] = c__5505__auto___7361);

return statearr_7359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5507__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
