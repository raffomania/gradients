// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__5535 = arguments.length;
switch (G__5535) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5536 = (function (f,blockable,meta5537){
this.f = f;
this.blockable = blockable;
this.meta5537 = meta5537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5538,meta5537__$1){
var self__ = this;
var _5538__$1 = this;
return (new cljs.core.async.t_cljs$core$async5536(self__.f,self__.blockable,meta5537__$1));
}));

(cljs.core.async.t_cljs$core$async5536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5538){
var self__ = this;
var _5538__$1 = this;
return self__.meta5537;
}));

(cljs.core.async.t_cljs$core$async5536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async5536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async5536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta5537","meta5537",829084017,null)], null);
}));

(cljs.core.async.t_cljs$core$async5536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5536");

(cljs.core.async.t_cljs$core$async5536.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async5536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5536.
 */
cljs.core.async.__GT_t_cljs$core$async5536 = (function cljs$core$async$__GT_t_cljs$core$async5536(f__$1,blockable__$1,meta5537){
return (new cljs.core.async.t_cljs$core$async5536(f__$1,blockable__$1,meta5537));
});

}

return (new cljs.core.async.t_cljs$core$async5536(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__5542 = arguments.length;
switch (G__5542) {
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
var G__5545 = arguments.length;
switch (G__5545) {
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
var G__5548 = arguments.length;
switch (G__5548) {
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
var val_5550 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_5550);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_5550);
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__5552 = arguments.length;
switch (G__5552) {
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
var n__4706__auto___5554 = n;
var x_5555 = (0);
while(true){
if((x_5555 < n__4706__auto___5554)){
(a[x_5555] = x_5555);

var G__5556 = (x_5555 + (1));
x_5555 = G__5556;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5557 = (function (flag,meta5558){
this.flag = flag;
this.meta5558 = meta5558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5559,meta5558__$1){
var self__ = this;
var _5559__$1 = this;
return (new cljs.core.async.t_cljs$core$async5557(self__.flag,meta5558__$1));
}));

(cljs.core.async.t_cljs$core$async5557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5559){
var self__ = this;
var _5559__$1 = this;
return self__.meta5558;
}));

(cljs.core.async.t_cljs$core$async5557.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async5557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async5557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta5558","meta5558",1397816441,null)], null);
}));

(cljs.core.async.t_cljs$core$async5557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5557");

(cljs.core.async.t_cljs$core$async5557.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async5557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5557.
 */
cljs.core.async.__GT_t_cljs$core$async5557 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async5557(flag__$1,meta5558){
return (new cljs.core.async.t_cljs$core$async5557(flag__$1,meta5558));
});

}

return (new cljs.core.async.t_cljs$core$async5557(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5560 = (function (flag,cb,meta5561){
this.flag = flag;
this.cb = cb;
this.meta5561 = meta5561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5562,meta5561__$1){
var self__ = this;
var _5562__$1 = this;
return (new cljs.core.async.t_cljs$core$async5560(self__.flag,self__.cb,meta5561__$1));
}));

(cljs.core.async.t_cljs$core$async5560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5562){
var self__ = this;
var _5562__$1 = this;
return self__.meta5561;
}));

(cljs.core.async.t_cljs$core$async5560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async5560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async5560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta5561","meta5561",-169409561,null)], null);
}));

(cljs.core.async.t_cljs$core$async5560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5560");

(cljs.core.async.t_cljs$core$async5560.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async5560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5560.
 */
cljs.core.async.__GT_t_cljs$core$async5560 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async5560(flag__$1,cb__$1,meta5561){
return (new cljs.core.async.t_cljs$core$async5560(flag__$1,cb__$1,meta5561));
});

}

return (new cljs.core.async.t_cljs$core$async5560(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__5563_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5563_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5564_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5564_SHARP_,port], null));
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
var G__5565 = (i + (1));
i = G__5565;
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
var len__4829__auto___5570 = arguments.length;
var i__4830__auto___5571 = (0);
while(true){
if((i__4830__auto___5571 < len__4829__auto___5570)){
args__4835__auto__.push((arguments[i__4830__auto___5571]));

var G__5572 = (i__4830__auto___5571 + (1));
i__4830__auto___5571 = G__5572;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__5568){
var map__5569 = p__5568;
var map__5569__$1 = cljs.core.__destructure_map.call(null,map__5569);
var opts = map__5569__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq5566){
var G__5567 = cljs.core.first.call(null,seq5566);
var seq5566__$1 = cljs.core.next.call(null,seq5566);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5567,seq5566__$1);
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
var G__5574 = arguments.length;
switch (G__5574) {
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
var c__5475__auto___5621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_5598){
var state_val_5599 = (state_5598[(1)]);
if((state_val_5599 === (7))){
var inst_5594 = (state_5598[(2)]);
var state_5598__$1 = state_5598;
var statearr_5600_5622 = state_5598__$1;
(statearr_5600_5622[(2)] = inst_5594);

(statearr_5600_5622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (1))){
var state_5598__$1 = state_5598;
var statearr_5601_5623 = state_5598__$1;
(statearr_5601_5623[(2)] = null);

(statearr_5601_5623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (4))){
var inst_5577 = (state_5598[(7)]);
var inst_5577__$1 = (state_5598[(2)]);
var inst_5578 = (inst_5577__$1 == null);
var state_5598__$1 = (function (){var statearr_5602 = state_5598;
(statearr_5602[(7)] = inst_5577__$1);

return statearr_5602;
})();
if(cljs.core.truth_(inst_5578)){
var statearr_5603_5624 = state_5598__$1;
(statearr_5603_5624[(1)] = (5));

} else {
var statearr_5604_5625 = state_5598__$1;
(statearr_5604_5625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (13))){
var state_5598__$1 = state_5598;
var statearr_5605_5626 = state_5598__$1;
(statearr_5605_5626[(2)] = null);

(statearr_5605_5626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (6))){
var inst_5577 = (state_5598[(7)]);
var state_5598__$1 = state_5598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5598__$1,(11),to,inst_5577);
} else {
if((state_val_5599 === (3))){
var inst_5596 = (state_5598[(2)]);
var state_5598__$1 = state_5598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5598__$1,inst_5596);
} else {
if((state_val_5599 === (12))){
var state_5598__$1 = state_5598;
var statearr_5606_5627 = state_5598__$1;
(statearr_5606_5627[(2)] = null);

(statearr_5606_5627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (2))){
var state_5598__$1 = state_5598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5598__$1,(4),from);
} else {
if((state_val_5599 === (11))){
var inst_5587 = (state_5598[(2)]);
var state_5598__$1 = state_5598;
if(cljs.core.truth_(inst_5587)){
var statearr_5607_5628 = state_5598__$1;
(statearr_5607_5628[(1)] = (12));

} else {
var statearr_5608_5629 = state_5598__$1;
(statearr_5608_5629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (9))){
var state_5598__$1 = state_5598;
var statearr_5609_5630 = state_5598__$1;
(statearr_5609_5630[(2)] = null);

(statearr_5609_5630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (5))){
var state_5598__$1 = state_5598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5610_5631 = state_5598__$1;
(statearr_5610_5631[(1)] = (8));

} else {
var statearr_5611_5632 = state_5598__$1;
(statearr_5611_5632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (14))){
var inst_5592 = (state_5598[(2)]);
var state_5598__$1 = state_5598;
var statearr_5612_5633 = state_5598__$1;
(statearr_5612_5633[(2)] = inst_5592);

(statearr_5612_5633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (10))){
var inst_5584 = (state_5598[(2)]);
var state_5598__$1 = state_5598;
var statearr_5613_5634 = state_5598__$1;
(statearr_5613_5634[(2)] = inst_5584);

(statearr_5613_5634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5599 === (8))){
var inst_5581 = cljs.core.async.close_BANG_.call(null,to);
var state_5598__$1 = state_5598;
var statearr_5614_5635 = state_5598__$1;
(statearr_5614_5635[(2)] = inst_5581);

(statearr_5614_5635[(1)] = (10));


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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_5615 = [null,null,null,null,null,null,null,null];
(statearr_5615[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_5615[(1)] = (1));

return statearr_5615;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_5598){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5616){var ex__5405__auto__ = e5616;
var statearr_5617_5636 = state_5598;
(statearr_5617_5636[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5598[(4)]))){
var statearr_5618_5637 = state_5598;
(statearr_5618_5637[(1)] = cljs.core.first.call(null,(state_5598[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5638 = state_5598;
state_5598 = G__5638;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_5598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_5598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_5619 = f__5476__auto__.call(null);
(statearr_5619[(6)] = c__5475__auto___5621);

return statearr_5619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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
var process = (function (p__5639){
var vec__5640 = p__5639;
var v = cljs.core.nth.call(null,vec__5640,(0),null);
var p = cljs.core.nth.call(null,vec__5640,(1),null);
var job = vec__5640;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5475__auto___5816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_5647){
var state_val_5648 = (state_5647[(1)]);
if((state_val_5648 === (1))){
var state_5647__$1 = state_5647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5647__$1,(2),res,v);
} else {
if((state_val_5648 === (2))){
var inst_5644 = (state_5647[(2)]);
var inst_5645 = cljs.core.async.close_BANG_.call(null,res);
var state_5647__$1 = (function (){var statearr_5649 = state_5647;
(statearr_5649[(7)] = inst_5644);

return statearr_5649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5647__$1,inst_5645);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0 = (function (){
var statearr_5650 = [null,null,null,null,null,null,null,null];
(statearr_5650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__);

(statearr_5650[(1)] = (1));

return statearr_5650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1 = (function (state_5647){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5651){var ex__5405__auto__ = e5651;
var statearr_5652_5817 = state_5647;
(statearr_5652_5817[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5647[(4)]))){
var statearr_5653_5818 = state_5647;
(statearr_5653_5818[(1)] = cljs.core.first.call(null,(state_5647[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5819 = state_5647;
state_5647 = G__5819;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = function(state_5647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1.call(this,state_5647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_5654 = f__5476__auto__.call(null);
(statearr_5654[(6)] = c__5475__auto___5816);

return statearr_5654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__5655){
var vec__5656 = p__5655;
var v = cljs.core.nth.call(null,vec__5656,(0),null);
var p = cljs.core.nth.call(null,vec__5656,(1),null);
var job = vec__5656;
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
var n__4706__auto___5820 = n;
var __5821 = (0);
while(true){
if((__5821 < n__4706__auto___5820)){
var G__5659_5822 = type;
var G__5659_5823__$1 = (((G__5659_5822 instanceof cljs.core.Keyword))?G__5659_5822.fqn:null);
switch (G__5659_5823__$1) {
case "compute":
var c__5475__auto___5825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5821,c__5475__auto___5825,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async){
return (function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = ((function (__5821,c__5475__auto___5825,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async){
return (function (state_5672){
var state_val_5673 = (state_5672[(1)]);
if((state_val_5673 === (1))){
var state_5672__$1 = state_5672;
var statearr_5674_5826 = state_5672__$1;
(statearr_5674_5826[(2)] = null);

(statearr_5674_5826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5673 === (2))){
var state_5672__$1 = state_5672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5672__$1,(4),jobs);
} else {
if((state_val_5673 === (3))){
var inst_5670 = (state_5672[(2)]);
var state_5672__$1 = state_5672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5672__$1,inst_5670);
} else {
if((state_val_5673 === (4))){
var inst_5662 = (state_5672[(2)]);
var inst_5663 = process.call(null,inst_5662);
var state_5672__$1 = state_5672;
if(cljs.core.truth_(inst_5663)){
var statearr_5675_5827 = state_5672__$1;
(statearr_5675_5827[(1)] = (5));

} else {
var statearr_5676_5828 = state_5672__$1;
(statearr_5676_5828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5673 === (5))){
var state_5672__$1 = state_5672;
var statearr_5677_5829 = state_5672__$1;
(statearr_5677_5829[(2)] = null);

(statearr_5677_5829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5673 === (6))){
var state_5672__$1 = state_5672;
var statearr_5678_5830 = state_5672__$1;
(statearr_5678_5830[(2)] = null);

(statearr_5678_5830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5673 === (7))){
var inst_5668 = (state_5672[(2)]);
var state_5672__$1 = state_5672;
var statearr_5679_5831 = state_5672__$1;
(statearr_5679_5831[(2)] = inst_5668);

(statearr_5679_5831[(1)] = (3));


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
});})(__5821,c__5475__auto___5825,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async))
;
return ((function (__5821,switch__5401__auto__,c__5475__auto___5825,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0 = (function (){
var statearr_5680 = [null,null,null,null,null,null,null];
(statearr_5680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__);

(statearr_5680[(1)] = (1));

return statearr_5680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1 = (function (state_5672){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5681){var ex__5405__auto__ = e5681;
var statearr_5682_5832 = state_5672;
(statearr_5682_5832[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5672[(4)]))){
var statearr_5683_5833 = state_5672;
(statearr_5683_5833[(1)] = cljs.core.first.call(null,(state_5672[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5834 = state_5672;
state_5672 = G__5834;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = function(state_5672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1.call(this,state_5672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__;
})()
;})(__5821,switch__5401__auto__,c__5475__auto___5825,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async))
})();
var state__5477__auto__ = (function (){var statearr_5684 = f__5476__auto__.call(null);
(statearr_5684[(6)] = c__5475__auto___5825);

return statearr_5684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
});})(__5821,c__5475__auto___5825,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async))
);


break;
case "async":
var c__5475__auto___5835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__5821,c__5475__auto___5835,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async){
return (function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = ((function (__5821,c__5475__auto___5835,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async){
return (function (state_5697){
var state_val_5698 = (state_5697[(1)]);
if((state_val_5698 === (1))){
var state_5697__$1 = state_5697;
var statearr_5699_5836 = state_5697__$1;
(statearr_5699_5836[(2)] = null);

(statearr_5699_5836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5698 === (2))){
var state_5697__$1 = state_5697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5697__$1,(4),jobs);
} else {
if((state_val_5698 === (3))){
var inst_5695 = (state_5697[(2)]);
var state_5697__$1 = state_5697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5697__$1,inst_5695);
} else {
if((state_val_5698 === (4))){
var inst_5687 = (state_5697[(2)]);
var inst_5688 = async.call(null,inst_5687);
var state_5697__$1 = state_5697;
if(cljs.core.truth_(inst_5688)){
var statearr_5700_5837 = state_5697__$1;
(statearr_5700_5837[(1)] = (5));

} else {
var statearr_5701_5838 = state_5697__$1;
(statearr_5701_5838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5698 === (5))){
var state_5697__$1 = state_5697;
var statearr_5702_5839 = state_5697__$1;
(statearr_5702_5839[(2)] = null);

(statearr_5702_5839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5698 === (6))){
var state_5697__$1 = state_5697;
var statearr_5703_5840 = state_5697__$1;
(statearr_5703_5840[(2)] = null);

(statearr_5703_5840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5698 === (7))){
var inst_5693 = (state_5697[(2)]);
var state_5697__$1 = state_5697;
var statearr_5704_5841 = state_5697__$1;
(statearr_5704_5841[(2)] = inst_5693);

(statearr_5704_5841[(1)] = (3));


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
});})(__5821,c__5475__auto___5835,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async))
;
return ((function (__5821,switch__5401__auto__,c__5475__auto___5835,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0 = (function (){
var statearr_5705 = [null,null,null,null,null,null,null];
(statearr_5705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__);

(statearr_5705[(1)] = (1));

return statearr_5705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1 = (function (state_5697){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5706){var ex__5405__auto__ = e5706;
var statearr_5707_5842 = state_5697;
(statearr_5707_5842[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5697[(4)]))){
var statearr_5708_5843 = state_5697;
(statearr_5708_5843[(1)] = cljs.core.first.call(null,(state_5697[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5844 = state_5697;
state_5697 = G__5844;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = function(state_5697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1.call(this,state_5697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__;
})()
;})(__5821,switch__5401__auto__,c__5475__auto___5835,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async))
})();
var state__5477__auto__ = (function (){var statearr_5709 = f__5476__auto__.call(null);
(statearr_5709[(6)] = c__5475__auto___5835);

return statearr_5709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
});})(__5821,c__5475__auto___5835,G__5659_5822,G__5659_5823__$1,n__4706__auto___5820,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5659_5823__$1)].join('')));

}

var G__5845 = (__5821 + (1));
__5821 = G__5845;
continue;
} else {
}
break;
}

var c__5475__auto___5846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_5731){
var state_val_5732 = (state_5731[(1)]);
if((state_val_5732 === (7))){
var inst_5727 = (state_5731[(2)]);
var state_5731__$1 = state_5731;
var statearr_5733_5847 = state_5731__$1;
(statearr_5733_5847[(2)] = inst_5727);

(statearr_5733_5847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5732 === (1))){
var state_5731__$1 = state_5731;
var statearr_5734_5848 = state_5731__$1;
(statearr_5734_5848[(2)] = null);

(statearr_5734_5848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5732 === (4))){
var inst_5712 = (state_5731[(7)]);
var inst_5712__$1 = (state_5731[(2)]);
var inst_5713 = (inst_5712__$1 == null);
var state_5731__$1 = (function (){var statearr_5735 = state_5731;
(statearr_5735[(7)] = inst_5712__$1);

return statearr_5735;
})();
if(cljs.core.truth_(inst_5713)){
var statearr_5736_5849 = state_5731__$1;
(statearr_5736_5849[(1)] = (5));

} else {
var statearr_5737_5850 = state_5731__$1;
(statearr_5737_5850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5732 === (6))){
var inst_5717 = (state_5731[(8)]);
var inst_5712 = (state_5731[(7)]);
var inst_5717__$1 = cljs.core.async.chan.call(null,(1));
var inst_5718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5719 = [inst_5712,inst_5717__$1];
var inst_5720 = (new cljs.core.PersistentVector(null,2,(5),inst_5718,inst_5719,null));
var state_5731__$1 = (function (){var statearr_5738 = state_5731;
(statearr_5738[(8)] = inst_5717__$1);

return statearr_5738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5731__$1,(8),jobs,inst_5720);
} else {
if((state_val_5732 === (3))){
var inst_5729 = (state_5731[(2)]);
var state_5731__$1 = state_5731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5731__$1,inst_5729);
} else {
if((state_val_5732 === (2))){
var state_5731__$1 = state_5731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5731__$1,(4),from);
} else {
if((state_val_5732 === (9))){
var inst_5724 = (state_5731[(2)]);
var state_5731__$1 = (function (){var statearr_5739 = state_5731;
(statearr_5739[(9)] = inst_5724);

return statearr_5739;
})();
var statearr_5740_5851 = state_5731__$1;
(statearr_5740_5851[(2)] = null);

(statearr_5740_5851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5732 === (5))){
var inst_5715 = cljs.core.async.close_BANG_.call(null,jobs);
var state_5731__$1 = state_5731;
var statearr_5741_5852 = state_5731__$1;
(statearr_5741_5852[(2)] = inst_5715);

(statearr_5741_5852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5732 === (8))){
var inst_5717 = (state_5731[(8)]);
var inst_5722 = (state_5731[(2)]);
var state_5731__$1 = (function (){var statearr_5742 = state_5731;
(statearr_5742[(10)] = inst_5722);

return statearr_5742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5731__$1,(9),results,inst_5717);
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
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0 = (function (){
var statearr_5743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__);

(statearr_5743[(1)] = (1));

return statearr_5743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1 = (function (state_5731){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5744){var ex__5405__auto__ = e5744;
var statearr_5745_5853 = state_5731;
(statearr_5745_5853[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5731[(4)]))){
var statearr_5746_5854 = state_5731;
(statearr_5746_5854[(1)] = cljs.core.first.call(null,(state_5731[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5855 = state_5731;
state_5731 = G__5855;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = function(state_5731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1.call(this,state_5731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_5747 = f__5476__auto__.call(null);
(statearr_5747[(6)] = c__5475__auto___5846);

return statearr_5747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


var c__5475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_5785){
var state_val_5786 = (state_5785[(1)]);
if((state_val_5786 === (7))){
var inst_5781 = (state_5785[(2)]);
var state_5785__$1 = state_5785;
var statearr_5787_5856 = state_5785__$1;
(statearr_5787_5856[(2)] = inst_5781);

(statearr_5787_5856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (20))){
var state_5785__$1 = state_5785;
var statearr_5788_5857 = state_5785__$1;
(statearr_5788_5857[(2)] = null);

(statearr_5788_5857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (1))){
var state_5785__$1 = state_5785;
var statearr_5789_5858 = state_5785__$1;
(statearr_5789_5858[(2)] = null);

(statearr_5789_5858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (4))){
var inst_5750 = (state_5785[(7)]);
var inst_5750__$1 = (state_5785[(2)]);
var inst_5751 = (inst_5750__$1 == null);
var state_5785__$1 = (function (){var statearr_5790 = state_5785;
(statearr_5790[(7)] = inst_5750__$1);

return statearr_5790;
})();
if(cljs.core.truth_(inst_5751)){
var statearr_5791_5859 = state_5785__$1;
(statearr_5791_5859[(1)] = (5));

} else {
var statearr_5792_5860 = state_5785__$1;
(statearr_5792_5860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (15))){
var inst_5763 = (state_5785[(8)]);
var state_5785__$1 = state_5785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5785__$1,(18),to,inst_5763);
} else {
if((state_val_5786 === (21))){
var inst_5776 = (state_5785[(2)]);
var state_5785__$1 = state_5785;
var statearr_5793_5861 = state_5785__$1;
(statearr_5793_5861[(2)] = inst_5776);

(statearr_5793_5861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (13))){
var inst_5778 = (state_5785[(2)]);
var state_5785__$1 = (function (){var statearr_5794 = state_5785;
(statearr_5794[(9)] = inst_5778);

return statearr_5794;
})();
var statearr_5795_5862 = state_5785__$1;
(statearr_5795_5862[(2)] = null);

(statearr_5795_5862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (6))){
var inst_5750 = (state_5785[(7)]);
var state_5785__$1 = state_5785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5785__$1,(11),inst_5750);
} else {
if((state_val_5786 === (17))){
var inst_5771 = (state_5785[(2)]);
var state_5785__$1 = state_5785;
if(cljs.core.truth_(inst_5771)){
var statearr_5796_5863 = state_5785__$1;
(statearr_5796_5863[(1)] = (19));

} else {
var statearr_5797_5864 = state_5785__$1;
(statearr_5797_5864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (3))){
var inst_5783 = (state_5785[(2)]);
var state_5785__$1 = state_5785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5785__$1,inst_5783);
} else {
if((state_val_5786 === (12))){
var inst_5760 = (state_5785[(10)]);
var state_5785__$1 = state_5785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5785__$1,(14),inst_5760);
} else {
if((state_val_5786 === (2))){
var state_5785__$1 = state_5785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5785__$1,(4),results);
} else {
if((state_val_5786 === (19))){
var state_5785__$1 = state_5785;
var statearr_5798_5865 = state_5785__$1;
(statearr_5798_5865[(2)] = null);

(statearr_5798_5865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (11))){
var inst_5760 = (state_5785[(2)]);
var state_5785__$1 = (function (){var statearr_5799 = state_5785;
(statearr_5799[(10)] = inst_5760);

return statearr_5799;
})();
var statearr_5800_5866 = state_5785__$1;
(statearr_5800_5866[(2)] = null);

(statearr_5800_5866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (9))){
var state_5785__$1 = state_5785;
var statearr_5801_5867 = state_5785__$1;
(statearr_5801_5867[(2)] = null);

(statearr_5801_5867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (5))){
var state_5785__$1 = state_5785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5802_5868 = state_5785__$1;
(statearr_5802_5868[(1)] = (8));

} else {
var statearr_5803_5869 = state_5785__$1;
(statearr_5803_5869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (14))){
var inst_5763 = (state_5785[(8)]);
var inst_5765 = (state_5785[(11)]);
var inst_5763__$1 = (state_5785[(2)]);
var inst_5764 = (inst_5763__$1 == null);
var inst_5765__$1 = cljs.core.not.call(null,inst_5764);
var state_5785__$1 = (function (){var statearr_5804 = state_5785;
(statearr_5804[(8)] = inst_5763__$1);

(statearr_5804[(11)] = inst_5765__$1);

return statearr_5804;
})();
if(inst_5765__$1){
var statearr_5805_5870 = state_5785__$1;
(statearr_5805_5870[(1)] = (15));

} else {
var statearr_5806_5871 = state_5785__$1;
(statearr_5806_5871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (16))){
var inst_5765 = (state_5785[(11)]);
var state_5785__$1 = state_5785;
var statearr_5807_5872 = state_5785__$1;
(statearr_5807_5872[(2)] = inst_5765);

(statearr_5807_5872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (10))){
var inst_5757 = (state_5785[(2)]);
var state_5785__$1 = state_5785;
var statearr_5808_5873 = state_5785__$1;
(statearr_5808_5873[(2)] = inst_5757);

(statearr_5808_5873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (18))){
var inst_5768 = (state_5785[(2)]);
var state_5785__$1 = state_5785;
var statearr_5809_5874 = state_5785__$1;
(statearr_5809_5874[(2)] = inst_5768);

(statearr_5809_5874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5786 === (8))){
var inst_5754 = cljs.core.async.close_BANG_.call(null,to);
var state_5785__$1 = state_5785;
var statearr_5810_5875 = state_5785__$1;
(statearr_5810_5875[(2)] = inst_5754);

(statearr_5810_5875[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0 = (function (){
var statearr_5811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__);

(statearr_5811[(1)] = (1));

return statearr_5811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1 = (function (state_5785){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5812){var ex__5405__auto__ = e5812;
var statearr_5813_5876 = state_5785;
(statearr_5813_5876[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5785[(4)]))){
var statearr_5814_5877 = state_5785;
(statearr_5814_5877[(1)] = cljs.core.first.call(null,(state_5785[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5878 = state_5785;
state_5785 = G__5878;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__ = function(state_5785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1.call(this,state_5785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_5815 = f__5476__auto__.call(null);
(statearr_5815[(6)] = c__5475__auto__);

return statearr_5815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));

return c__5475__auto__;
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
var G__5880 = arguments.length;
switch (G__5880) {
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
var G__5883 = arguments.length;
switch (G__5883) {
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
var G__5886 = arguments.length;
switch (G__5886) {
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
var c__5475__auto___5936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_5912){
var state_val_5913 = (state_5912[(1)]);
if((state_val_5913 === (7))){
var inst_5908 = (state_5912[(2)]);
var state_5912__$1 = state_5912;
var statearr_5914_5937 = state_5912__$1;
(statearr_5914_5937[(2)] = inst_5908);

(statearr_5914_5937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (1))){
var state_5912__$1 = state_5912;
var statearr_5915_5938 = state_5912__$1;
(statearr_5915_5938[(2)] = null);

(statearr_5915_5938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (4))){
var inst_5889 = (state_5912[(7)]);
var inst_5889__$1 = (state_5912[(2)]);
var inst_5890 = (inst_5889__$1 == null);
var state_5912__$1 = (function (){var statearr_5916 = state_5912;
(statearr_5916[(7)] = inst_5889__$1);

return statearr_5916;
})();
if(cljs.core.truth_(inst_5890)){
var statearr_5917_5939 = state_5912__$1;
(statearr_5917_5939[(1)] = (5));

} else {
var statearr_5918_5940 = state_5912__$1;
(statearr_5918_5940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (13))){
var state_5912__$1 = state_5912;
var statearr_5919_5941 = state_5912__$1;
(statearr_5919_5941[(2)] = null);

(statearr_5919_5941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (6))){
var inst_5889 = (state_5912[(7)]);
var inst_5895 = p.call(null,inst_5889);
var state_5912__$1 = state_5912;
if(cljs.core.truth_(inst_5895)){
var statearr_5920_5942 = state_5912__$1;
(statearr_5920_5942[(1)] = (9));

} else {
var statearr_5921_5943 = state_5912__$1;
(statearr_5921_5943[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (3))){
var inst_5910 = (state_5912[(2)]);
var state_5912__$1 = state_5912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5912__$1,inst_5910);
} else {
if((state_val_5913 === (12))){
var state_5912__$1 = state_5912;
var statearr_5922_5944 = state_5912__$1;
(statearr_5922_5944[(2)] = null);

(statearr_5922_5944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (2))){
var state_5912__$1 = state_5912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5912__$1,(4),ch);
} else {
if((state_val_5913 === (11))){
var inst_5889 = (state_5912[(7)]);
var inst_5899 = (state_5912[(2)]);
var state_5912__$1 = state_5912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5912__$1,(8),inst_5899,inst_5889);
} else {
if((state_val_5913 === (9))){
var state_5912__$1 = state_5912;
var statearr_5923_5945 = state_5912__$1;
(statearr_5923_5945[(2)] = tc);

(statearr_5923_5945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (5))){
var inst_5892 = cljs.core.async.close_BANG_.call(null,tc);
var inst_5893 = cljs.core.async.close_BANG_.call(null,fc);
var state_5912__$1 = (function (){var statearr_5924 = state_5912;
(statearr_5924[(8)] = inst_5892);

return statearr_5924;
})();
var statearr_5925_5946 = state_5912__$1;
(statearr_5925_5946[(2)] = inst_5893);

(statearr_5925_5946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (14))){
var inst_5906 = (state_5912[(2)]);
var state_5912__$1 = state_5912;
var statearr_5926_5947 = state_5912__$1;
(statearr_5926_5947[(2)] = inst_5906);

(statearr_5926_5947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (10))){
var state_5912__$1 = state_5912;
var statearr_5927_5948 = state_5912__$1;
(statearr_5927_5948[(2)] = fc);

(statearr_5927_5948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5913 === (8))){
var inst_5901 = (state_5912[(2)]);
var state_5912__$1 = state_5912;
if(cljs.core.truth_(inst_5901)){
var statearr_5928_5949 = state_5912__$1;
(statearr_5928_5949[(1)] = (12));

} else {
var statearr_5929_5950 = state_5912__$1;
(statearr_5929_5950[(1)] = (13));

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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_5930 = [null,null,null,null,null,null,null,null,null];
(statearr_5930[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_5930[(1)] = (1));

return statearr_5930;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_5912){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5931){var ex__5405__auto__ = e5931;
var statearr_5932_5951 = state_5912;
(statearr_5932_5951[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5912[(4)]))){
var statearr_5933_5952 = state_5912;
(statearr_5933_5952[(1)] = cljs.core.first.call(null,(state_5912[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5953 = state_5912;
state_5912 = G__5953;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_5912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_5912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_5934 = f__5476__auto__.call(null);
(statearr_5934[(6)] = c__5475__auto___5936);

return statearr_5934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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
var c__5475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_5975){
var state_val_5976 = (state_5975[(1)]);
if((state_val_5976 === (7))){
var inst_5971 = (state_5975[(2)]);
var state_5975__$1 = state_5975;
var statearr_5977_5996 = state_5975__$1;
(statearr_5977_5996[(2)] = inst_5971);

(statearr_5977_5996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (1))){
var inst_5954 = init;
var inst_5955 = inst_5954;
var state_5975__$1 = (function (){var statearr_5978 = state_5975;
(statearr_5978[(7)] = inst_5955);

return statearr_5978;
})();
var statearr_5979_5997 = state_5975__$1;
(statearr_5979_5997[(2)] = null);

(statearr_5979_5997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (4))){
var inst_5958 = (state_5975[(8)]);
var inst_5958__$1 = (state_5975[(2)]);
var inst_5959 = (inst_5958__$1 == null);
var state_5975__$1 = (function (){var statearr_5980 = state_5975;
(statearr_5980[(8)] = inst_5958__$1);

return statearr_5980;
})();
if(cljs.core.truth_(inst_5959)){
var statearr_5981_5998 = state_5975__$1;
(statearr_5981_5998[(1)] = (5));

} else {
var statearr_5982_5999 = state_5975__$1;
(statearr_5982_5999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (6))){
var inst_5955 = (state_5975[(7)]);
var inst_5962 = (state_5975[(9)]);
var inst_5958 = (state_5975[(8)]);
var inst_5962__$1 = f.call(null,inst_5955,inst_5958);
var inst_5963 = cljs.core.reduced_QMARK_.call(null,inst_5962__$1);
var state_5975__$1 = (function (){var statearr_5983 = state_5975;
(statearr_5983[(9)] = inst_5962__$1);

return statearr_5983;
})();
if(inst_5963){
var statearr_5984_6000 = state_5975__$1;
(statearr_5984_6000[(1)] = (8));

} else {
var statearr_5985_6001 = state_5975__$1;
(statearr_5985_6001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (3))){
var inst_5973 = (state_5975[(2)]);
var state_5975__$1 = state_5975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5975__$1,inst_5973);
} else {
if((state_val_5976 === (2))){
var state_5975__$1 = state_5975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5975__$1,(4),ch);
} else {
if((state_val_5976 === (9))){
var inst_5962 = (state_5975[(9)]);
var inst_5955 = inst_5962;
var state_5975__$1 = (function (){var statearr_5986 = state_5975;
(statearr_5986[(7)] = inst_5955);

return statearr_5986;
})();
var statearr_5987_6002 = state_5975__$1;
(statearr_5987_6002[(2)] = null);

(statearr_5987_6002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (5))){
var inst_5955 = (state_5975[(7)]);
var state_5975__$1 = state_5975;
var statearr_5988_6003 = state_5975__$1;
(statearr_5988_6003[(2)] = inst_5955);

(statearr_5988_6003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (10))){
var inst_5969 = (state_5975[(2)]);
var state_5975__$1 = state_5975;
var statearr_5989_6004 = state_5975__$1;
(statearr_5989_6004[(2)] = inst_5969);

(statearr_5989_6004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5976 === (8))){
var inst_5962 = (state_5975[(9)]);
var inst_5965 = cljs.core.deref.call(null,inst_5962);
var state_5975__$1 = state_5975;
var statearr_5990_6005 = state_5975__$1;
(statearr_5990_6005[(2)] = inst_5965);

(statearr_5990_6005[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__5402__auto__ = null;
var cljs$core$async$reduce_$_state_machine__5402__auto____0 = (function (){
var statearr_5991 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5991[(0)] = cljs$core$async$reduce_$_state_machine__5402__auto__);

(statearr_5991[(1)] = (1));

return statearr_5991;
});
var cljs$core$async$reduce_$_state_machine__5402__auto____1 = (function (state_5975){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_5975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e5992){var ex__5405__auto__ = e5992;
var statearr_5993_6006 = state_5975;
(statearr_5993_6006[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_5975[(4)]))){
var statearr_5994_6007 = state_5975;
(statearr_5994_6007[(1)] = cljs.core.first.call(null,(state_5975[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6008 = state_5975;
state_5975 = G__6008;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__5402__auto__ = function(state_5975){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__5402__auto____1.call(this,state_5975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__5402__auto____0;
cljs$core$async$reduce_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__5402__auto____1;
return cljs$core$async$reduce_$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_5995 = f__5476__auto__.call(null);
(statearr_5995[(6)] = c__5475__auto__);

return statearr_5995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));

return c__5475__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__5475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6014){
var state_val_6015 = (state_6014[(1)]);
if((state_val_6015 === (1))){
var inst_6009 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_6014__$1 = state_6014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6014__$1,(2),inst_6009);
} else {
if((state_val_6015 === (2))){
var inst_6011 = (state_6014[(2)]);
var inst_6012 = f__$1.call(null,inst_6011);
var state_6014__$1 = state_6014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6014__$1,inst_6012);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__5402__auto__ = null;
var cljs$core$async$transduce_$_state_machine__5402__auto____0 = (function (){
var statearr_6016 = [null,null,null,null,null,null,null];
(statearr_6016[(0)] = cljs$core$async$transduce_$_state_machine__5402__auto__);

(statearr_6016[(1)] = (1));

return statearr_6016;
});
var cljs$core$async$transduce_$_state_machine__5402__auto____1 = (function (state_6014){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6017){var ex__5405__auto__ = e6017;
var statearr_6018_6021 = state_6014;
(statearr_6018_6021[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6014[(4)]))){
var statearr_6019_6022 = state_6014;
(statearr_6019_6022[(1)] = cljs.core.first.call(null,(state_6014[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6023 = state_6014;
state_6014 = G__6023;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__5402__auto__ = function(state_6014){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__5402__auto____1.call(this,state_6014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__5402__auto____0;
cljs$core$async$transduce_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__5402__auto____1;
return cljs$core$async$transduce_$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6020 = f__5476__auto__.call(null);
(statearr_6020[(6)] = c__5475__auto__);

return statearr_6020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));

return c__5475__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__6025 = arguments.length;
switch (G__6025) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__5475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6050){
var state_val_6051 = (state_6050[(1)]);
if((state_val_6051 === (7))){
var inst_6032 = (state_6050[(2)]);
var state_6050__$1 = state_6050;
var statearr_6052_6074 = state_6050__$1;
(statearr_6052_6074[(2)] = inst_6032);

(statearr_6052_6074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (1))){
var inst_6026 = cljs.core.seq.call(null,coll);
var inst_6027 = inst_6026;
var state_6050__$1 = (function (){var statearr_6053 = state_6050;
(statearr_6053[(7)] = inst_6027);

return statearr_6053;
})();
var statearr_6054_6075 = state_6050__$1;
(statearr_6054_6075[(2)] = null);

(statearr_6054_6075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (4))){
var inst_6027 = (state_6050[(7)]);
var inst_6030 = cljs.core.first.call(null,inst_6027);
var state_6050__$1 = state_6050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6050__$1,(7),ch,inst_6030);
} else {
if((state_val_6051 === (13))){
var inst_6044 = (state_6050[(2)]);
var state_6050__$1 = state_6050;
var statearr_6055_6076 = state_6050__$1;
(statearr_6055_6076[(2)] = inst_6044);

(statearr_6055_6076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (6))){
var inst_6035 = (state_6050[(2)]);
var state_6050__$1 = state_6050;
if(cljs.core.truth_(inst_6035)){
var statearr_6056_6077 = state_6050__$1;
(statearr_6056_6077[(1)] = (8));

} else {
var statearr_6057_6078 = state_6050__$1;
(statearr_6057_6078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (3))){
var inst_6048 = (state_6050[(2)]);
var state_6050__$1 = state_6050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6050__$1,inst_6048);
} else {
if((state_val_6051 === (12))){
var state_6050__$1 = state_6050;
var statearr_6058_6079 = state_6050__$1;
(statearr_6058_6079[(2)] = null);

(statearr_6058_6079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (2))){
var inst_6027 = (state_6050[(7)]);
var state_6050__$1 = state_6050;
if(cljs.core.truth_(inst_6027)){
var statearr_6059_6080 = state_6050__$1;
(statearr_6059_6080[(1)] = (4));

} else {
var statearr_6060_6081 = state_6050__$1;
(statearr_6060_6081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (11))){
var inst_6041 = cljs.core.async.close_BANG_.call(null,ch);
var state_6050__$1 = state_6050;
var statearr_6061_6082 = state_6050__$1;
(statearr_6061_6082[(2)] = inst_6041);

(statearr_6061_6082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (9))){
var state_6050__$1 = state_6050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_6062_6083 = state_6050__$1;
(statearr_6062_6083[(1)] = (11));

} else {
var statearr_6063_6084 = state_6050__$1;
(statearr_6063_6084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (5))){
var inst_6027 = (state_6050[(7)]);
var state_6050__$1 = state_6050;
var statearr_6064_6085 = state_6050__$1;
(statearr_6064_6085[(2)] = inst_6027);

(statearr_6064_6085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (10))){
var inst_6046 = (state_6050[(2)]);
var state_6050__$1 = state_6050;
var statearr_6065_6086 = state_6050__$1;
(statearr_6065_6086[(2)] = inst_6046);

(statearr_6065_6086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6051 === (8))){
var inst_6027 = (state_6050[(7)]);
var inst_6037 = cljs.core.next.call(null,inst_6027);
var inst_6027__$1 = inst_6037;
var state_6050__$1 = (function (){var statearr_6066 = state_6050;
(statearr_6066[(7)] = inst_6027__$1);

return statearr_6066;
})();
var statearr_6067_6087 = state_6050__$1;
(statearr_6067_6087[(2)] = null);

(statearr_6067_6087[(1)] = (2));


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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_6068 = [null,null,null,null,null,null,null,null];
(statearr_6068[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_6068[(1)] = (1));

return statearr_6068;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_6050){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6069){var ex__5405__auto__ = e6069;
var statearr_6070_6088 = state_6050;
(statearr_6070_6088[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6050[(4)]))){
var statearr_6071_6089 = state_6050;
(statearr_6071_6089[(1)] = cljs.core.first.call(null,(state_6050[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6090 = state_6050;
state_6050 = G__6090;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_6050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_6050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6072 = f__5476__auto__.call(null);
(statearr_6072[(6)] = c__5475__auto__);

return statearr_6072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));

return c__5475__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__6092 = arguments.length;
switch (G__6092) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_6094 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_6094.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_6095 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_6095.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_6096 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_6096.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_6097 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_6097.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6098 = (function (ch,cs,meta6099){
this.ch = ch;
this.cs = cs;
this.meta6099 = meta6099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6100,meta6099__$1){
var self__ = this;
var _6100__$1 = this;
return (new cljs.core.async.t_cljs$core$async6098(self__.ch,self__.cs,meta6099__$1));
}));

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6100){
var self__ = this;
var _6100__$1 = this;
return self__.meta6099;
}));

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async6098.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async6098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta6099","meta6099",1614078825,null)], null);
}));

(cljs.core.async.t_cljs$core$async6098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6098");

(cljs.core.async.t_cljs$core$async6098.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6098.
 */
cljs.core.async.__GT_t_cljs$core$async6098 = (function cljs$core$async$mult_$___GT_t_cljs$core$async6098(ch__$1,cs__$1,meta6099){
return (new cljs.core.async.t_cljs$core$async6098(ch__$1,cs__$1,meta6099));
});

}

return (new cljs.core.async.t_cljs$core$async6098(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__5475__auto___6317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6233){
var state_val_6234 = (state_6233[(1)]);
if((state_val_6234 === (7))){
var inst_6229 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6235_6318 = state_6233__$1;
(statearr_6235_6318[(2)] = inst_6229);

(statearr_6235_6318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (20))){
var inst_6134 = (state_6233[(7)]);
var inst_6146 = cljs.core.first.call(null,inst_6134);
var inst_6147 = cljs.core.nth.call(null,inst_6146,(0),null);
var inst_6148 = cljs.core.nth.call(null,inst_6146,(1),null);
var state_6233__$1 = (function (){var statearr_6236 = state_6233;
(statearr_6236[(8)] = inst_6147);

return statearr_6236;
})();
if(cljs.core.truth_(inst_6148)){
var statearr_6237_6319 = state_6233__$1;
(statearr_6237_6319[(1)] = (22));

} else {
var statearr_6238_6320 = state_6233__$1;
(statearr_6238_6320[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (27))){
var inst_6176 = (state_6233[(9)]);
var inst_6183 = (state_6233[(10)]);
var inst_6103 = (state_6233[(11)]);
var inst_6178 = (state_6233[(12)]);
var inst_6183__$1 = cljs.core._nth.call(null,inst_6176,inst_6178);
var inst_6184 = cljs.core.async.put_BANG_.call(null,inst_6183__$1,inst_6103,done);
var state_6233__$1 = (function (){var statearr_6239 = state_6233;
(statearr_6239[(10)] = inst_6183__$1);

return statearr_6239;
})();
if(cljs.core.truth_(inst_6184)){
var statearr_6240_6321 = state_6233__$1;
(statearr_6240_6321[(1)] = (30));

} else {
var statearr_6241_6322 = state_6233__$1;
(statearr_6241_6322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (1))){
var state_6233__$1 = state_6233;
var statearr_6242_6323 = state_6233__$1;
(statearr_6242_6323[(2)] = null);

(statearr_6242_6323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (24))){
var inst_6134 = (state_6233[(7)]);
var inst_6153 = (state_6233[(2)]);
var inst_6154 = cljs.core.next.call(null,inst_6134);
var inst_6112 = inst_6154;
var inst_6113 = null;
var inst_6114 = (0);
var inst_6115 = (0);
var state_6233__$1 = (function (){var statearr_6243 = state_6233;
(statearr_6243[(13)] = inst_6113);

(statearr_6243[(14)] = inst_6153);

(statearr_6243[(15)] = inst_6112);

(statearr_6243[(16)] = inst_6115);

(statearr_6243[(17)] = inst_6114);

return statearr_6243;
})();
var statearr_6244_6324 = state_6233__$1;
(statearr_6244_6324[(2)] = null);

(statearr_6244_6324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (39))){
var state_6233__$1 = state_6233;
var statearr_6248_6325 = state_6233__$1;
(statearr_6248_6325[(2)] = null);

(statearr_6248_6325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (4))){
var inst_6103 = (state_6233[(11)]);
var inst_6103__$1 = (state_6233[(2)]);
var inst_6104 = (inst_6103__$1 == null);
var state_6233__$1 = (function (){var statearr_6249 = state_6233;
(statearr_6249[(11)] = inst_6103__$1);

return statearr_6249;
})();
if(cljs.core.truth_(inst_6104)){
var statearr_6250_6326 = state_6233__$1;
(statearr_6250_6326[(1)] = (5));

} else {
var statearr_6251_6327 = state_6233__$1;
(statearr_6251_6327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (15))){
var inst_6113 = (state_6233[(13)]);
var inst_6112 = (state_6233[(15)]);
var inst_6115 = (state_6233[(16)]);
var inst_6114 = (state_6233[(17)]);
var inst_6130 = (state_6233[(2)]);
var inst_6131 = (inst_6115 + (1));
var tmp6245 = inst_6113;
var tmp6246 = inst_6112;
var tmp6247 = inst_6114;
var inst_6112__$1 = tmp6246;
var inst_6113__$1 = tmp6245;
var inst_6114__$1 = tmp6247;
var inst_6115__$1 = inst_6131;
var state_6233__$1 = (function (){var statearr_6252 = state_6233;
(statearr_6252[(13)] = inst_6113__$1);

(statearr_6252[(15)] = inst_6112__$1);

(statearr_6252[(16)] = inst_6115__$1);

(statearr_6252[(17)] = inst_6114__$1);

(statearr_6252[(18)] = inst_6130);

return statearr_6252;
})();
var statearr_6253_6328 = state_6233__$1;
(statearr_6253_6328[(2)] = null);

(statearr_6253_6328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (21))){
var inst_6157 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6257_6329 = state_6233__$1;
(statearr_6257_6329[(2)] = inst_6157);

(statearr_6257_6329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (31))){
var inst_6183 = (state_6233[(10)]);
var inst_6187 = cljs.core.async.untap_STAR_.call(null,m,inst_6183);
var state_6233__$1 = state_6233;
var statearr_6258_6330 = state_6233__$1;
(statearr_6258_6330[(2)] = inst_6187);

(statearr_6258_6330[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (32))){
var inst_6175 = (state_6233[(19)]);
var inst_6176 = (state_6233[(9)]);
var inst_6177 = (state_6233[(20)]);
var inst_6178 = (state_6233[(12)]);
var inst_6189 = (state_6233[(2)]);
var inst_6190 = (inst_6178 + (1));
var tmp6254 = inst_6175;
var tmp6255 = inst_6176;
var tmp6256 = inst_6177;
var inst_6175__$1 = tmp6254;
var inst_6176__$1 = tmp6255;
var inst_6177__$1 = tmp6256;
var inst_6178__$1 = inst_6190;
var state_6233__$1 = (function (){var statearr_6259 = state_6233;
(statearr_6259[(19)] = inst_6175__$1);

(statearr_6259[(9)] = inst_6176__$1);

(statearr_6259[(21)] = inst_6189);

(statearr_6259[(20)] = inst_6177__$1);

(statearr_6259[(12)] = inst_6178__$1);

return statearr_6259;
})();
var statearr_6260_6331 = state_6233__$1;
(statearr_6260_6331[(2)] = null);

(statearr_6260_6331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (40))){
var inst_6202 = (state_6233[(22)]);
var inst_6206 = cljs.core.async.untap_STAR_.call(null,m,inst_6202);
var state_6233__$1 = state_6233;
var statearr_6261_6332 = state_6233__$1;
(statearr_6261_6332[(2)] = inst_6206);

(statearr_6261_6332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (33))){
var inst_6193 = (state_6233[(23)]);
var inst_6195 = cljs.core.chunked_seq_QMARK_.call(null,inst_6193);
var state_6233__$1 = state_6233;
if(inst_6195){
var statearr_6262_6333 = state_6233__$1;
(statearr_6262_6333[(1)] = (36));

} else {
var statearr_6263_6334 = state_6233__$1;
(statearr_6263_6334[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (13))){
var inst_6124 = (state_6233[(24)]);
var inst_6127 = cljs.core.async.close_BANG_.call(null,inst_6124);
var state_6233__$1 = state_6233;
var statearr_6264_6335 = state_6233__$1;
(statearr_6264_6335[(2)] = inst_6127);

(statearr_6264_6335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (22))){
var inst_6147 = (state_6233[(8)]);
var inst_6150 = cljs.core.async.close_BANG_.call(null,inst_6147);
var state_6233__$1 = state_6233;
var statearr_6265_6336 = state_6233__$1;
(statearr_6265_6336[(2)] = inst_6150);

(statearr_6265_6336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (36))){
var inst_6193 = (state_6233[(23)]);
var inst_6197 = cljs.core.chunk_first.call(null,inst_6193);
var inst_6198 = cljs.core.chunk_rest.call(null,inst_6193);
var inst_6199 = cljs.core.count.call(null,inst_6197);
var inst_6175 = inst_6198;
var inst_6176 = inst_6197;
var inst_6177 = inst_6199;
var inst_6178 = (0);
var state_6233__$1 = (function (){var statearr_6266 = state_6233;
(statearr_6266[(19)] = inst_6175);

(statearr_6266[(9)] = inst_6176);

(statearr_6266[(20)] = inst_6177);

(statearr_6266[(12)] = inst_6178);

return statearr_6266;
})();
var statearr_6267_6337 = state_6233__$1;
(statearr_6267_6337[(2)] = null);

(statearr_6267_6337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (41))){
var inst_6193 = (state_6233[(23)]);
var inst_6208 = (state_6233[(2)]);
var inst_6209 = cljs.core.next.call(null,inst_6193);
var inst_6175 = inst_6209;
var inst_6176 = null;
var inst_6177 = (0);
var inst_6178 = (0);
var state_6233__$1 = (function (){var statearr_6268 = state_6233;
(statearr_6268[(19)] = inst_6175);

(statearr_6268[(9)] = inst_6176);

(statearr_6268[(20)] = inst_6177);

(statearr_6268[(12)] = inst_6178);

(statearr_6268[(25)] = inst_6208);

return statearr_6268;
})();
var statearr_6269_6338 = state_6233__$1;
(statearr_6269_6338[(2)] = null);

(statearr_6269_6338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (43))){
var state_6233__$1 = state_6233;
var statearr_6270_6339 = state_6233__$1;
(statearr_6270_6339[(2)] = null);

(statearr_6270_6339[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (29))){
var inst_6217 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6271_6340 = state_6233__$1;
(statearr_6271_6340[(2)] = inst_6217);

(statearr_6271_6340[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (44))){
var inst_6226 = (state_6233[(2)]);
var state_6233__$1 = (function (){var statearr_6272 = state_6233;
(statearr_6272[(26)] = inst_6226);

return statearr_6272;
})();
var statearr_6273_6341 = state_6233__$1;
(statearr_6273_6341[(2)] = null);

(statearr_6273_6341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (6))){
var inst_6167 = (state_6233[(27)]);
var inst_6166 = cljs.core.deref.call(null,cs);
var inst_6167__$1 = cljs.core.keys.call(null,inst_6166);
var inst_6168 = cljs.core.count.call(null,inst_6167__$1);
var inst_6169 = cljs.core.reset_BANG_.call(null,dctr,inst_6168);
var inst_6174 = cljs.core.seq.call(null,inst_6167__$1);
var inst_6175 = inst_6174;
var inst_6176 = null;
var inst_6177 = (0);
var inst_6178 = (0);
var state_6233__$1 = (function (){var statearr_6274 = state_6233;
(statearr_6274[(19)] = inst_6175);

(statearr_6274[(9)] = inst_6176);

(statearr_6274[(27)] = inst_6167__$1);

(statearr_6274[(28)] = inst_6169);

(statearr_6274[(20)] = inst_6177);

(statearr_6274[(12)] = inst_6178);

return statearr_6274;
})();
var statearr_6275_6342 = state_6233__$1;
(statearr_6275_6342[(2)] = null);

(statearr_6275_6342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (28))){
var inst_6175 = (state_6233[(19)]);
var inst_6193 = (state_6233[(23)]);
var inst_6193__$1 = cljs.core.seq.call(null,inst_6175);
var state_6233__$1 = (function (){var statearr_6276 = state_6233;
(statearr_6276[(23)] = inst_6193__$1);

return statearr_6276;
})();
if(inst_6193__$1){
var statearr_6277_6343 = state_6233__$1;
(statearr_6277_6343[(1)] = (33));

} else {
var statearr_6278_6344 = state_6233__$1;
(statearr_6278_6344[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (25))){
var inst_6177 = (state_6233[(20)]);
var inst_6178 = (state_6233[(12)]);
var inst_6180 = (inst_6178 < inst_6177);
var inst_6181 = inst_6180;
var state_6233__$1 = state_6233;
if(cljs.core.truth_(inst_6181)){
var statearr_6279_6345 = state_6233__$1;
(statearr_6279_6345[(1)] = (27));

} else {
var statearr_6280_6346 = state_6233__$1;
(statearr_6280_6346[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (34))){
var state_6233__$1 = state_6233;
var statearr_6281_6347 = state_6233__$1;
(statearr_6281_6347[(2)] = null);

(statearr_6281_6347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (17))){
var state_6233__$1 = state_6233;
var statearr_6282_6348 = state_6233__$1;
(statearr_6282_6348[(2)] = null);

(statearr_6282_6348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (3))){
var inst_6231 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6233__$1,inst_6231);
} else {
if((state_val_6234 === (12))){
var inst_6162 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6283_6349 = state_6233__$1;
(statearr_6283_6349[(2)] = inst_6162);

(statearr_6283_6349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (2))){
var state_6233__$1 = state_6233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6233__$1,(4),ch);
} else {
if((state_val_6234 === (23))){
var state_6233__$1 = state_6233;
var statearr_6284_6350 = state_6233__$1;
(statearr_6284_6350[(2)] = null);

(statearr_6284_6350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (35))){
var inst_6215 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6285_6351 = state_6233__$1;
(statearr_6285_6351[(2)] = inst_6215);

(statearr_6285_6351[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (19))){
var inst_6134 = (state_6233[(7)]);
var inst_6138 = cljs.core.chunk_first.call(null,inst_6134);
var inst_6139 = cljs.core.chunk_rest.call(null,inst_6134);
var inst_6140 = cljs.core.count.call(null,inst_6138);
var inst_6112 = inst_6139;
var inst_6113 = inst_6138;
var inst_6114 = inst_6140;
var inst_6115 = (0);
var state_6233__$1 = (function (){var statearr_6286 = state_6233;
(statearr_6286[(13)] = inst_6113);

(statearr_6286[(15)] = inst_6112);

(statearr_6286[(16)] = inst_6115);

(statearr_6286[(17)] = inst_6114);

return statearr_6286;
})();
var statearr_6287_6352 = state_6233__$1;
(statearr_6287_6352[(2)] = null);

(statearr_6287_6352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (11))){
var inst_6134 = (state_6233[(7)]);
var inst_6112 = (state_6233[(15)]);
var inst_6134__$1 = cljs.core.seq.call(null,inst_6112);
var state_6233__$1 = (function (){var statearr_6288 = state_6233;
(statearr_6288[(7)] = inst_6134__$1);

return statearr_6288;
})();
if(inst_6134__$1){
var statearr_6289_6353 = state_6233__$1;
(statearr_6289_6353[(1)] = (16));

} else {
var statearr_6290_6354 = state_6233__$1;
(statearr_6290_6354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (9))){
var inst_6164 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6291_6355 = state_6233__$1;
(statearr_6291_6355[(2)] = inst_6164);

(statearr_6291_6355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (5))){
var inst_6110 = cljs.core.deref.call(null,cs);
var inst_6111 = cljs.core.seq.call(null,inst_6110);
var inst_6112 = inst_6111;
var inst_6113 = null;
var inst_6114 = (0);
var inst_6115 = (0);
var state_6233__$1 = (function (){var statearr_6292 = state_6233;
(statearr_6292[(13)] = inst_6113);

(statearr_6292[(15)] = inst_6112);

(statearr_6292[(16)] = inst_6115);

(statearr_6292[(17)] = inst_6114);

return statearr_6292;
})();
var statearr_6293_6356 = state_6233__$1;
(statearr_6293_6356[(2)] = null);

(statearr_6293_6356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (14))){
var state_6233__$1 = state_6233;
var statearr_6294_6357 = state_6233__$1;
(statearr_6294_6357[(2)] = null);

(statearr_6294_6357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (45))){
var inst_6223 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6295_6358 = state_6233__$1;
(statearr_6295_6358[(2)] = inst_6223);

(statearr_6295_6358[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (26))){
var inst_6167 = (state_6233[(27)]);
var inst_6219 = (state_6233[(2)]);
var inst_6220 = cljs.core.seq.call(null,inst_6167);
var state_6233__$1 = (function (){var statearr_6296 = state_6233;
(statearr_6296[(29)] = inst_6219);

return statearr_6296;
})();
if(inst_6220){
var statearr_6297_6359 = state_6233__$1;
(statearr_6297_6359[(1)] = (42));

} else {
var statearr_6298_6360 = state_6233__$1;
(statearr_6298_6360[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (16))){
var inst_6134 = (state_6233[(7)]);
var inst_6136 = cljs.core.chunked_seq_QMARK_.call(null,inst_6134);
var state_6233__$1 = state_6233;
if(inst_6136){
var statearr_6299_6361 = state_6233__$1;
(statearr_6299_6361[(1)] = (19));

} else {
var statearr_6300_6362 = state_6233__$1;
(statearr_6300_6362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (38))){
var inst_6212 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6301_6363 = state_6233__$1;
(statearr_6301_6363[(2)] = inst_6212);

(statearr_6301_6363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (30))){
var state_6233__$1 = state_6233;
var statearr_6302_6364 = state_6233__$1;
(statearr_6302_6364[(2)] = null);

(statearr_6302_6364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (10))){
var inst_6113 = (state_6233[(13)]);
var inst_6115 = (state_6233[(16)]);
var inst_6123 = cljs.core._nth.call(null,inst_6113,inst_6115);
var inst_6124 = cljs.core.nth.call(null,inst_6123,(0),null);
var inst_6125 = cljs.core.nth.call(null,inst_6123,(1),null);
var state_6233__$1 = (function (){var statearr_6303 = state_6233;
(statearr_6303[(24)] = inst_6124);

return statearr_6303;
})();
if(cljs.core.truth_(inst_6125)){
var statearr_6304_6365 = state_6233__$1;
(statearr_6304_6365[(1)] = (13));

} else {
var statearr_6305_6366 = state_6233__$1;
(statearr_6305_6366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (18))){
var inst_6160 = (state_6233[(2)]);
var state_6233__$1 = state_6233;
var statearr_6306_6367 = state_6233__$1;
(statearr_6306_6367[(2)] = inst_6160);

(statearr_6306_6367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (42))){
var state_6233__$1 = state_6233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6233__$1,(45),dchan);
} else {
if((state_val_6234 === (37))){
var inst_6193 = (state_6233[(23)]);
var inst_6202 = (state_6233[(22)]);
var inst_6103 = (state_6233[(11)]);
var inst_6202__$1 = cljs.core.first.call(null,inst_6193);
var inst_6203 = cljs.core.async.put_BANG_.call(null,inst_6202__$1,inst_6103,done);
var state_6233__$1 = (function (){var statearr_6307 = state_6233;
(statearr_6307[(22)] = inst_6202__$1);

return statearr_6307;
})();
if(cljs.core.truth_(inst_6203)){
var statearr_6308_6368 = state_6233__$1;
(statearr_6308_6368[(1)] = (39));

} else {
var statearr_6309_6369 = state_6233__$1;
(statearr_6309_6369[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6234 === (8))){
var inst_6115 = (state_6233[(16)]);
var inst_6114 = (state_6233[(17)]);
var inst_6117 = (inst_6115 < inst_6114);
var inst_6118 = inst_6117;
var state_6233__$1 = state_6233;
if(cljs.core.truth_(inst_6118)){
var statearr_6310_6370 = state_6233__$1;
(statearr_6310_6370[(1)] = (10));

} else {
var statearr_6311_6371 = state_6233__$1;
(statearr_6311_6371[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__5402__auto__ = null;
var cljs$core$async$mult_$_state_machine__5402__auto____0 = (function (){
var statearr_6312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6312[(0)] = cljs$core$async$mult_$_state_machine__5402__auto__);

(statearr_6312[(1)] = (1));

return statearr_6312;
});
var cljs$core$async$mult_$_state_machine__5402__auto____1 = (function (state_6233){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6313){var ex__5405__auto__ = e6313;
var statearr_6314_6372 = state_6233;
(statearr_6314_6372[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6233[(4)]))){
var statearr_6315_6373 = state_6233;
(statearr_6315_6373[(1)] = cljs.core.first.call(null,(state_6233[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6374 = state_6233;
state_6233 = G__6374;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__5402__auto__ = function(state_6233){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__5402__auto____1.call(this,state_6233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__5402__auto____0;
cljs$core$async$mult_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__5402__auto____1;
return cljs$core$async$mult_$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6316 = f__5476__auto__.call(null);
(statearr_6316[(6)] = c__5475__auto___6317);

return statearr_6316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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
var G__6376 = arguments.length;
switch (G__6376) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_6378 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_6378.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_6379 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_6379.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_6380 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_6380.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_6381 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_6381.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_6382 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_6382.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___6392 = arguments.length;
var i__4830__auto___6393 = (0);
while(true){
if((i__4830__auto___6393 < len__4829__auto___6392)){
args__4835__auto__.push((arguments[i__4830__auto___6393]));

var G__6394 = (i__4830__auto___6393 + (1));
i__4830__auto___6393 = G__6394;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__6387){
var map__6388 = p__6387;
var map__6388__$1 = cljs.core.__destructure_map.call(null,map__6388);
var opts = map__6388__$1;
var statearr_6389_6395 = state;
(statearr_6389_6395[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_6390_6396 = state;
(statearr_6390_6396[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_6391_6397 = state;
(statearr_6391_6397[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq6383){
var G__6384 = cljs.core.first.call(null,seq6383);
var seq6383__$1 = cljs.core.next.call(null,seq6383);
var G__6385 = cljs.core.first.call(null,seq6383__$1);
var seq6383__$2 = cljs.core.next.call(null,seq6383__$1);
var G__6386 = cljs.core.first.call(null,seq6383__$2);
var seq6383__$3 = cljs.core.next.call(null,seq6383__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6384,G__6385,G__6386,seq6383__$3);
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
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6398 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta6399){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta6399 = meta6399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6400,meta6399__$1){
var self__ = this;
var _6400__$1 = this;
return (new cljs.core.async.t_cljs$core$async6398(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta6399__$1));
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6400){
var self__ = this;
var _6400__$1 = this;
return self__.meta6399;
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6398.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async6398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta6399","meta6399",-216454993,null)], null);
}));

(cljs.core.async.t_cljs$core$async6398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6398");

(cljs.core.async.t_cljs$core$async6398.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6398.
 */
cljs.core.async.__GT_t_cljs$core$async6398 = (function cljs$core$async$mix_$___GT_t_cljs$core$async6398(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6399){
return (new cljs.core.async.t_cljs$core$async6398(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6399));
});

}

return (new cljs.core.async.t_cljs$core$async6398(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5475__auto___6513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6468){
var state_val_6469 = (state_6468[(1)]);
if((state_val_6469 === (7))){
var inst_6428 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
if(cljs.core.truth_(inst_6428)){
var statearr_6470_6514 = state_6468__$1;
(statearr_6470_6514[(1)] = (8));

} else {
var statearr_6471_6515 = state_6468__$1;
(statearr_6471_6515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (20))){
var inst_6421 = (state_6468[(7)]);
var state_6468__$1 = state_6468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6468__$1,(23),out,inst_6421);
} else {
if((state_val_6469 === (1))){
var inst_6404 = calc_state.call(null);
var inst_6405 = cljs.core.__destructure_map.call(null,inst_6404);
var inst_6406 = cljs.core.get.call(null,inst_6405,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6407 = cljs.core.get.call(null,inst_6405,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6408 = cljs.core.get.call(null,inst_6405,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_6409 = inst_6404;
var state_6468__$1 = (function (){var statearr_6472 = state_6468;
(statearr_6472[(8)] = inst_6409);

(statearr_6472[(9)] = inst_6406);

(statearr_6472[(10)] = inst_6408);

(statearr_6472[(11)] = inst_6407);

return statearr_6472;
})();
var statearr_6473_6516 = state_6468__$1;
(statearr_6473_6516[(2)] = null);

(statearr_6473_6516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (24))){
var inst_6412 = (state_6468[(12)]);
var inst_6409 = inst_6412;
var state_6468__$1 = (function (){var statearr_6474 = state_6468;
(statearr_6474[(8)] = inst_6409);

return statearr_6474;
})();
var statearr_6475_6517 = state_6468__$1;
(statearr_6475_6517[(2)] = null);

(statearr_6475_6517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (4))){
var inst_6421 = (state_6468[(7)]);
var inst_6423 = (state_6468[(13)]);
var inst_6420 = (state_6468[(2)]);
var inst_6421__$1 = cljs.core.nth.call(null,inst_6420,(0),null);
var inst_6422 = cljs.core.nth.call(null,inst_6420,(1),null);
var inst_6423__$1 = (inst_6421__$1 == null);
var state_6468__$1 = (function (){var statearr_6476 = state_6468;
(statearr_6476[(14)] = inst_6422);

(statearr_6476[(7)] = inst_6421__$1);

(statearr_6476[(13)] = inst_6423__$1);

return statearr_6476;
})();
if(cljs.core.truth_(inst_6423__$1)){
var statearr_6477_6518 = state_6468__$1;
(statearr_6477_6518[(1)] = (5));

} else {
var statearr_6478_6519 = state_6468__$1;
(statearr_6478_6519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (15))){
var inst_6413 = (state_6468[(15)]);
var inst_6442 = (state_6468[(16)]);
var inst_6442__$1 = cljs.core.empty_QMARK_.call(null,inst_6413);
var state_6468__$1 = (function (){var statearr_6479 = state_6468;
(statearr_6479[(16)] = inst_6442__$1);

return statearr_6479;
})();
if(inst_6442__$1){
var statearr_6480_6520 = state_6468__$1;
(statearr_6480_6520[(1)] = (17));

} else {
var statearr_6481_6521 = state_6468__$1;
(statearr_6481_6521[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (21))){
var inst_6412 = (state_6468[(12)]);
var inst_6409 = inst_6412;
var state_6468__$1 = (function (){var statearr_6482 = state_6468;
(statearr_6482[(8)] = inst_6409);

return statearr_6482;
})();
var statearr_6483_6522 = state_6468__$1;
(statearr_6483_6522[(2)] = null);

(statearr_6483_6522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (13))){
var inst_6435 = (state_6468[(2)]);
var inst_6436 = calc_state.call(null);
var inst_6409 = inst_6436;
var state_6468__$1 = (function (){var statearr_6484 = state_6468;
(statearr_6484[(8)] = inst_6409);

(statearr_6484[(17)] = inst_6435);

return statearr_6484;
})();
var statearr_6485_6523 = state_6468__$1;
(statearr_6485_6523[(2)] = null);

(statearr_6485_6523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (22))){
var inst_6462 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
var statearr_6486_6524 = state_6468__$1;
(statearr_6486_6524[(2)] = inst_6462);

(statearr_6486_6524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (6))){
var inst_6422 = (state_6468[(14)]);
var inst_6426 = cljs.core._EQ_.call(null,inst_6422,change);
var state_6468__$1 = state_6468;
var statearr_6487_6525 = state_6468__$1;
(statearr_6487_6525[(2)] = inst_6426);

(statearr_6487_6525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (25))){
var state_6468__$1 = state_6468;
var statearr_6488_6526 = state_6468__$1;
(statearr_6488_6526[(2)] = null);

(statearr_6488_6526[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (17))){
var inst_6422 = (state_6468[(14)]);
var inst_6414 = (state_6468[(18)]);
var inst_6444 = inst_6414.call(null,inst_6422);
var inst_6445 = cljs.core.not.call(null,inst_6444);
var state_6468__$1 = state_6468;
var statearr_6489_6527 = state_6468__$1;
(statearr_6489_6527[(2)] = inst_6445);

(statearr_6489_6527[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (3))){
var inst_6466 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6468__$1,inst_6466);
} else {
if((state_val_6469 === (12))){
var state_6468__$1 = state_6468;
var statearr_6490_6528 = state_6468__$1;
(statearr_6490_6528[(2)] = null);

(statearr_6490_6528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (2))){
var inst_6409 = (state_6468[(8)]);
var inst_6412 = (state_6468[(12)]);
var inst_6412__$1 = cljs.core.__destructure_map.call(null,inst_6409);
var inst_6413 = cljs.core.get.call(null,inst_6412__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_6414 = cljs.core.get.call(null,inst_6412__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_6415 = cljs.core.get.call(null,inst_6412__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_6468__$1 = (function (){var statearr_6491 = state_6468;
(statearr_6491[(15)] = inst_6413);

(statearr_6491[(12)] = inst_6412__$1);

(statearr_6491[(18)] = inst_6414);

return statearr_6491;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_6468__$1,(4),inst_6415);
} else {
if((state_val_6469 === (23))){
var inst_6453 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
if(cljs.core.truth_(inst_6453)){
var statearr_6492_6529 = state_6468__$1;
(statearr_6492_6529[(1)] = (24));

} else {
var statearr_6493_6530 = state_6468__$1;
(statearr_6493_6530[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (19))){
var inst_6448 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
var statearr_6494_6531 = state_6468__$1;
(statearr_6494_6531[(2)] = inst_6448);

(statearr_6494_6531[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (11))){
var inst_6422 = (state_6468[(14)]);
var inst_6432 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_6422);
var state_6468__$1 = state_6468;
var statearr_6495_6532 = state_6468__$1;
(statearr_6495_6532[(2)] = inst_6432);

(statearr_6495_6532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (9))){
var inst_6413 = (state_6468[(15)]);
var inst_6422 = (state_6468[(14)]);
var inst_6439 = (state_6468[(19)]);
var inst_6439__$1 = inst_6413.call(null,inst_6422);
var state_6468__$1 = (function (){var statearr_6496 = state_6468;
(statearr_6496[(19)] = inst_6439__$1);

return statearr_6496;
})();
if(cljs.core.truth_(inst_6439__$1)){
var statearr_6497_6533 = state_6468__$1;
(statearr_6497_6533[(1)] = (14));

} else {
var statearr_6498_6534 = state_6468__$1;
(statearr_6498_6534[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (5))){
var inst_6423 = (state_6468[(13)]);
var state_6468__$1 = state_6468;
var statearr_6499_6535 = state_6468__$1;
(statearr_6499_6535[(2)] = inst_6423);

(statearr_6499_6535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (14))){
var inst_6439 = (state_6468[(19)]);
var state_6468__$1 = state_6468;
var statearr_6500_6536 = state_6468__$1;
(statearr_6500_6536[(2)] = inst_6439);

(statearr_6500_6536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (26))){
var inst_6458 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
var statearr_6501_6537 = state_6468__$1;
(statearr_6501_6537[(2)] = inst_6458);

(statearr_6501_6537[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (16))){
var inst_6450 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
if(cljs.core.truth_(inst_6450)){
var statearr_6502_6538 = state_6468__$1;
(statearr_6502_6538[(1)] = (20));

} else {
var statearr_6503_6539 = state_6468__$1;
(statearr_6503_6539[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (10))){
var inst_6464 = (state_6468[(2)]);
var state_6468__$1 = state_6468;
var statearr_6504_6540 = state_6468__$1;
(statearr_6504_6540[(2)] = inst_6464);

(statearr_6504_6540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (18))){
var inst_6442 = (state_6468[(16)]);
var state_6468__$1 = state_6468;
var statearr_6505_6541 = state_6468__$1;
(statearr_6505_6541[(2)] = inst_6442);

(statearr_6505_6541[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6469 === (8))){
var inst_6421 = (state_6468[(7)]);
var inst_6430 = (inst_6421 == null);
var state_6468__$1 = state_6468;
if(cljs.core.truth_(inst_6430)){
var statearr_6506_6542 = state_6468__$1;
(statearr_6506_6542[(1)] = (11));

} else {
var statearr_6507_6543 = state_6468__$1;
(statearr_6507_6543[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__5402__auto__ = null;
var cljs$core$async$mix_$_state_machine__5402__auto____0 = (function (){
var statearr_6508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6508[(0)] = cljs$core$async$mix_$_state_machine__5402__auto__);

(statearr_6508[(1)] = (1));

return statearr_6508;
});
var cljs$core$async$mix_$_state_machine__5402__auto____1 = (function (state_6468){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6509){var ex__5405__auto__ = e6509;
var statearr_6510_6544 = state_6468;
(statearr_6510_6544[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6468[(4)]))){
var statearr_6511_6545 = state_6468;
(statearr_6511_6545[(1)] = cljs.core.first.call(null,(state_6468[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6546 = state_6468;
state_6468 = G__6546;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__5402__auto__ = function(state_6468){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__5402__auto____1.call(this,state_6468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__5402__auto____0;
cljs$core$async$mix_$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__5402__auto____1;
return cljs$core$async$mix_$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6512 = f__5476__auto__.call(null);
(statearr_6512[(6)] = c__5475__auto___6513);

return statearr_6512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_6549 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_6549.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_6550 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_6550.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_6551 = (function() {
var G__6552 = null;
var G__6552__1 = (function (p){
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
var G__6552__2 = (function (p,v){
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
G__6552 = function(p,v){
switch(arguments.length){
case 1:
return G__6552__1.call(this,p);
case 2:
return G__6552__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6552.cljs$core$IFn$_invoke$arity$1 = G__6552__1;
G__6552.cljs$core$IFn$_invoke$arity$2 = G__6552__2;
return G__6552;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__6548 = arguments.length;
switch (G__6548) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6551.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6551.call(null,p,v);
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
var G__6556 = arguments.length;
switch (G__6556) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__6554_SHARP_){
if(cljs.core.truth_(p1__6554_SHARP_.call(null,topic))){
return p1__6554_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__6554_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6557 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6558){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6558 = meta6558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6559,meta6558__$1){
var self__ = this;
var _6559__$1 = this;
return (new cljs.core.async.t_cljs$core$async6557(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6558__$1));
}));

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6559){
var self__ = this;
var _6559__$1 = this;
return self__.meta6558;
}));

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async6557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async6557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta6558","meta6558",-5688810,null)], null);
}));

(cljs.core.async.t_cljs$core$async6557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6557");

(cljs.core.async.t_cljs$core$async6557.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6557.
 */
cljs.core.async.__GT_t_cljs$core$async6557 = (function cljs$core$async$__GT_t_cljs$core$async6557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6558){
return (new cljs.core.async.t_cljs$core$async6557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6558));
});

}

return (new cljs.core.async.t_cljs$core$async6557(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5475__auto___6678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6631){
var state_val_6632 = (state_6631[(1)]);
if((state_val_6632 === (7))){
var inst_6627 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6633_6679 = state_6631__$1;
(statearr_6633_6679[(2)] = inst_6627);

(statearr_6633_6679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (20))){
var state_6631__$1 = state_6631;
var statearr_6634_6680 = state_6631__$1;
(statearr_6634_6680[(2)] = null);

(statearr_6634_6680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (1))){
var state_6631__$1 = state_6631;
var statearr_6635_6681 = state_6631__$1;
(statearr_6635_6681[(2)] = null);

(statearr_6635_6681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (24))){
var inst_6610 = (state_6631[(7)]);
var inst_6619 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_6610);
var state_6631__$1 = state_6631;
var statearr_6636_6682 = state_6631__$1;
(statearr_6636_6682[(2)] = inst_6619);

(statearr_6636_6682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (4))){
var inst_6562 = (state_6631[(8)]);
var inst_6562__$1 = (state_6631[(2)]);
var inst_6563 = (inst_6562__$1 == null);
var state_6631__$1 = (function (){var statearr_6637 = state_6631;
(statearr_6637[(8)] = inst_6562__$1);

return statearr_6637;
})();
if(cljs.core.truth_(inst_6563)){
var statearr_6638_6683 = state_6631__$1;
(statearr_6638_6683[(1)] = (5));

} else {
var statearr_6639_6684 = state_6631__$1;
(statearr_6639_6684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (15))){
var inst_6604 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6640_6685 = state_6631__$1;
(statearr_6640_6685[(2)] = inst_6604);

(statearr_6640_6685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (21))){
var inst_6624 = (state_6631[(2)]);
var state_6631__$1 = (function (){var statearr_6641 = state_6631;
(statearr_6641[(9)] = inst_6624);

return statearr_6641;
})();
var statearr_6642_6686 = state_6631__$1;
(statearr_6642_6686[(2)] = null);

(statearr_6642_6686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (13))){
var inst_6586 = (state_6631[(10)]);
var inst_6588 = cljs.core.chunked_seq_QMARK_.call(null,inst_6586);
var state_6631__$1 = state_6631;
if(inst_6588){
var statearr_6643_6687 = state_6631__$1;
(statearr_6643_6687[(1)] = (16));

} else {
var statearr_6644_6688 = state_6631__$1;
(statearr_6644_6688[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (22))){
var inst_6616 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
if(cljs.core.truth_(inst_6616)){
var statearr_6645_6689 = state_6631__$1;
(statearr_6645_6689[(1)] = (23));

} else {
var statearr_6646_6690 = state_6631__$1;
(statearr_6646_6690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (6))){
var inst_6612 = (state_6631[(11)]);
var inst_6562 = (state_6631[(8)]);
var inst_6610 = (state_6631[(7)]);
var inst_6610__$1 = topic_fn.call(null,inst_6562);
var inst_6611 = cljs.core.deref.call(null,mults);
var inst_6612__$1 = cljs.core.get.call(null,inst_6611,inst_6610__$1);
var state_6631__$1 = (function (){var statearr_6647 = state_6631;
(statearr_6647[(11)] = inst_6612__$1);

(statearr_6647[(7)] = inst_6610__$1);

return statearr_6647;
})();
if(cljs.core.truth_(inst_6612__$1)){
var statearr_6648_6691 = state_6631__$1;
(statearr_6648_6691[(1)] = (19));

} else {
var statearr_6649_6692 = state_6631__$1;
(statearr_6649_6692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (25))){
var inst_6621 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6650_6693 = state_6631__$1;
(statearr_6650_6693[(2)] = inst_6621);

(statearr_6650_6693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (17))){
var inst_6586 = (state_6631[(10)]);
var inst_6595 = cljs.core.first.call(null,inst_6586);
var inst_6596 = cljs.core.async.muxch_STAR_.call(null,inst_6595);
var inst_6597 = cljs.core.async.close_BANG_.call(null,inst_6596);
var inst_6598 = cljs.core.next.call(null,inst_6586);
var inst_6572 = inst_6598;
var inst_6573 = null;
var inst_6574 = (0);
var inst_6575 = (0);
var state_6631__$1 = (function (){var statearr_6651 = state_6631;
(statearr_6651[(12)] = inst_6573);

(statearr_6651[(13)] = inst_6574);

(statearr_6651[(14)] = inst_6575);

(statearr_6651[(15)] = inst_6572);

(statearr_6651[(16)] = inst_6597);

return statearr_6651;
})();
var statearr_6652_6694 = state_6631__$1;
(statearr_6652_6694[(2)] = null);

(statearr_6652_6694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (3))){
var inst_6629 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6631__$1,inst_6629);
} else {
if((state_val_6632 === (12))){
var inst_6606 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6653_6695 = state_6631__$1;
(statearr_6653_6695[(2)] = inst_6606);

(statearr_6653_6695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (2))){
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6631__$1,(4),ch);
} else {
if((state_val_6632 === (23))){
var state_6631__$1 = state_6631;
var statearr_6654_6696 = state_6631__$1;
(statearr_6654_6696[(2)] = null);

(statearr_6654_6696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (19))){
var inst_6612 = (state_6631[(11)]);
var inst_6562 = (state_6631[(8)]);
var inst_6614 = cljs.core.async.muxch_STAR_.call(null,inst_6612);
var state_6631__$1 = state_6631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6631__$1,(22),inst_6614,inst_6562);
} else {
if((state_val_6632 === (11))){
var inst_6586 = (state_6631[(10)]);
var inst_6572 = (state_6631[(15)]);
var inst_6586__$1 = cljs.core.seq.call(null,inst_6572);
var state_6631__$1 = (function (){var statearr_6655 = state_6631;
(statearr_6655[(10)] = inst_6586__$1);

return statearr_6655;
})();
if(inst_6586__$1){
var statearr_6656_6697 = state_6631__$1;
(statearr_6656_6697[(1)] = (13));

} else {
var statearr_6657_6698 = state_6631__$1;
(statearr_6657_6698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (9))){
var inst_6608 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6658_6699 = state_6631__$1;
(statearr_6658_6699[(2)] = inst_6608);

(statearr_6658_6699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (5))){
var inst_6569 = cljs.core.deref.call(null,mults);
var inst_6570 = cljs.core.vals.call(null,inst_6569);
var inst_6571 = cljs.core.seq.call(null,inst_6570);
var inst_6572 = inst_6571;
var inst_6573 = null;
var inst_6574 = (0);
var inst_6575 = (0);
var state_6631__$1 = (function (){var statearr_6659 = state_6631;
(statearr_6659[(12)] = inst_6573);

(statearr_6659[(13)] = inst_6574);

(statearr_6659[(14)] = inst_6575);

(statearr_6659[(15)] = inst_6572);

return statearr_6659;
})();
var statearr_6660_6700 = state_6631__$1;
(statearr_6660_6700[(2)] = null);

(statearr_6660_6700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (14))){
var state_6631__$1 = state_6631;
var statearr_6664_6701 = state_6631__$1;
(statearr_6664_6701[(2)] = null);

(statearr_6664_6701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (16))){
var inst_6586 = (state_6631[(10)]);
var inst_6590 = cljs.core.chunk_first.call(null,inst_6586);
var inst_6591 = cljs.core.chunk_rest.call(null,inst_6586);
var inst_6592 = cljs.core.count.call(null,inst_6590);
var inst_6572 = inst_6591;
var inst_6573 = inst_6590;
var inst_6574 = inst_6592;
var inst_6575 = (0);
var state_6631__$1 = (function (){var statearr_6665 = state_6631;
(statearr_6665[(12)] = inst_6573);

(statearr_6665[(13)] = inst_6574);

(statearr_6665[(14)] = inst_6575);

(statearr_6665[(15)] = inst_6572);

return statearr_6665;
})();
var statearr_6666_6702 = state_6631__$1;
(statearr_6666_6702[(2)] = null);

(statearr_6666_6702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (10))){
var inst_6573 = (state_6631[(12)]);
var inst_6574 = (state_6631[(13)]);
var inst_6575 = (state_6631[(14)]);
var inst_6572 = (state_6631[(15)]);
var inst_6580 = cljs.core._nth.call(null,inst_6573,inst_6575);
var inst_6581 = cljs.core.async.muxch_STAR_.call(null,inst_6580);
var inst_6582 = cljs.core.async.close_BANG_.call(null,inst_6581);
var inst_6583 = (inst_6575 + (1));
var tmp6661 = inst_6573;
var tmp6662 = inst_6574;
var tmp6663 = inst_6572;
var inst_6572__$1 = tmp6663;
var inst_6573__$1 = tmp6661;
var inst_6574__$1 = tmp6662;
var inst_6575__$1 = inst_6583;
var state_6631__$1 = (function (){var statearr_6667 = state_6631;
(statearr_6667[(12)] = inst_6573__$1);

(statearr_6667[(13)] = inst_6574__$1);

(statearr_6667[(14)] = inst_6575__$1);

(statearr_6667[(15)] = inst_6572__$1);

(statearr_6667[(17)] = inst_6582);

return statearr_6667;
})();
var statearr_6668_6703 = state_6631__$1;
(statearr_6668_6703[(2)] = null);

(statearr_6668_6703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (18))){
var inst_6601 = (state_6631[(2)]);
var state_6631__$1 = state_6631;
var statearr_6669_6704 = state_6631__$1;
(statearr_6669_6704[(2)] = inst_6601);

(statearr_6669_6704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6632 === (8))){
var inst_6574 = (state_6631[(13)]);
var inst_6575 = (state_6631[(14)]);
var inst_6577 = (inst_6575 < inst_6574);
var inst_6578 = inst_6577;
var state_6631__$1 = state_6631;
if(cljs.core.truth_(inst_6578)){
var statearr_6670_6705 = state_6631__$1;
(statearr_6670_6705[(1)] = (10));

} else {
var statearr_6671_6706 = state_6631__$1;
(statearr_6671_6706[(1)] = (11));

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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_6672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6672[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_6672[(1)] = (1));

return statearr_6672;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_6631){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6673){var ex__5405__auto__ = e6673;
var statearr_6674_6707 = state_6631;
(statearr_6674_6707[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6631[(4)]))){
var statearr_6675_6708 = state_6631;
(statearr_6675_6708[(1)] = cljs.core.first.call(null,(state_6631[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6709 = state_6631;
state_6631 = G__6709;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_6631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_6631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6676 = f__5476__auto__.call(null);
(statearr_6676[(6)] = c__5475__auto___6678);

return statearr_6676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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
var G__6711 = arguments.length;
switch (G__6711) {
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
var G__6714 = arguments.length;
switch (G__6714) {
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
var G__6717 = arguments.length;
switch (G__6717) {
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
var c__5475__auto___6795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6760){
var state_val_6761 = (state_6760[(1)]);
if((state_val_6761 === (7))){
var state_6760__$1 = state_6760;
var statearr_6762_6796 = state_6760__$1;
(statearr_6762_6796[(2)] = null);

(statearr_6762_6796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (1))){
var state_6760__$1 = state_6760;
var statearr_6763_6797 = state_6760__$1;
(statearr_6763_6797[(2)] = null);

(statearr_6763_6797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (4))){
var inst_6720 = (state_6760[(7)]);
var inst_6721 = (state_6760[(8)]);
var inst_6723 = (inst_6721 < inst_6720);
var state_6760__$1 = state_6760;
if(cljs.core.truth_(inst_6723)){
var statearr_6764_6798 = state_6760__$1;
(statearr_6764_6798[(1)] = (6));

} else {
var statearr_6765_6799 = state_6760__$1;
(statearr_6765_6799[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (15))){
var inst_6746 = (state_6760[(9)]);
var inst_6751 = cljs.core.apply.call(null,f,inst_6746);
var state_6760__$1 = state_6760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6760__$1,(17),out,inst_6751);
} else {
if((state_val_6761 === (13))){
var inst_6746 = (state_6760[(9)]);
var inst_6746__$1 = (state_6760[(2)]);
var inst_6747 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_6746__$1);
var state_6760__$1 = (function (){var statearr_6766 = state_6760;
(statearr_6766[(9)] = inst_6746__$1);

return statearr_6766;
})();
if(cljs.core.truth_(inst_6747)){
var statearr_6767_6800 = state_6760__$1;
(statearr_6767_6800[(1)] = (14));

} else {
var statearr_6768_6801 = state_6760__$1;
(statearr_6768_6801[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (6))){
var state_6760__$1 = state_6760;
var statearr_6769_6802 = state_6760__$1;
(statearr_6769_6802[(2)] = null);

(statearr_6769_6802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (17))){
var inst_6753 = (state_6760[(2)]);
var state_6760__$1 = (function (){var statearr_6771 = state_6760;
(statearr_6771[(10)] = inst_6753);

return statearr_6771;
})();
var statearr_6772_6803 = state_6760__$1;
(statearr_6772_6803[(2)] = null);

(statearr_6772_6803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (3))){
var inst_6758 = (state_6760[(2)]);
var state_6760__$1 = state_6760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6760__$1,inst_6758);
} else {
if((state_val_6761 === (12))){
var _ = (function (){var statearr_6773 = state_6760;
(statearr_6773[(4)] = cljs.core.rest.call(null,(state_6760[(4)])));

return statearr_6773;
})();
var state_6760__$1 = state_6760;
var ex6770 = (state_6760__$1[(2)]);
var statearr_6774_6804 = state_6760__$1;
(statearr_6774_6804[(5)] = ex6770);


if((ex6770 instanceof Object)){
var statearr_6775_6805 = state_6760__$1;
(statearr_6775_6805[(1)] = (11));

(statearr_6775_6805[(5)] = null);

} else {
throw ex6770;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (2))){
var inst_6719 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_6720 = cnt;
var inst_6721 = (0);
var state_6760__$1 = (function (){var statearr_6776 = state_6760;
(statearr_6776[(7)] = inst_6720);

(statearr_6776[(8)] = inst_6721);

(statearr_6776[(11)] = inst_6719);

return statearr_6776;
})();
var statearr_6777_6806 = state_6760__$1;
(statearr_6777_6806[(2)] = null);

(statearr_6777_6806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (11))){
var inst_6725 = (state_6760[(2)]);
var inst_6726 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_6760__$1 = (function (){var statearr_6778 = state_6760;
(statearr_6778[(12)] = inst_6725);

return statearr_6778;
})();
var statearr_6779_6807 = state_6760__$1;
(statearr_6779_6807[(2)] = inst_6726);

(statearr_6779_6807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (9))){
var inst_6721 = (state_6760[(8)]);
var _ = (function (){var statearr_6780 = state_6760;
(statearr_6780[(4)] = cljs.core.cons.call(null,(12),(state_6760[(4)])));

return statearr_6780;
})();
var inst_6732 = chs__$1.call(null,inst_6721);
var inst_6733 = done.call(null,inst_6721);
var inst_6734 = cljs.core.async.take_BANG_.call(null,inst_6732,inst_6733);
var ___$1 = (function (){var statearr_6781 = state_6760;
(statearr_6781[(4)] = cljs.core.rest.call(null,(state_6760[(4)])));

return statearr_6781;
})();
var state_6760__$1 = state_6760;
var statearr_6782_6808 = state_6760__$1;
(statearr_6782_6808[(2)] = inst_6734);

(statearr_6782_6808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (5))){
var inst_6744 = (state_6760[(2)]);
var state_6760__$1 = (function (){var statearr_6783 = state_6760;
(statearr_6783[(13)] = inst_6744);

return statearr_6783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6760__$1,(13),dchan);
} else {
if((state_val_6761 === (14))){
var inst_6749 = cljs.core.async.close_BANG_.call(null,out);
var state_6760__$1 = state_6760;
var statearr_6784_6809 = state_6760__$1;
(statearr_6784_6809[(2)] = inst_6749);

(statearr_6784_6809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (16))){
var inst_6756 = (state_6760[(2)]);
var state_6760__$1 = state_6760;
var statearr_6785_6810 = state_6760__$1;
(statearr_6785_6810[(2)] = inst_6756);

(statearr_6785_6810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (10))){
var inst_6721 = (state_6760[(8)]);
var inst_6737 = (state_6760[(2)]);
var inst_6738 = (inst_6721 + (1));
var inst_6721__$1 = inst_6738;
var state_6760__$1 = (function (){var statearr_6786 = state_6760;
(statearr_6786[(14)] = inst_6737);

(statearr_6786[(8)] = inst_6721__$1);

return statearr_6786;
})();
var statearr_6787_6811 = state_6760__$1;
(statearr_6787_6811[(2)] = null);

(statearr_6787_6811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6761 === (8))){
var inst_6742 = (state_6760[(2)]);
var state_6760__$1 = state_6760;
var statearr_6788_6812 = state_6760__$1;
(statearr_6788_6812[(2)] = inst_6742);

(statearr_6788_6812[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_6789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6789[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_6789[(1)] = (1));

return statearr_6789;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_6760){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6790){var ex__5405__auto__ = e6790;
var statearr_6791_6813 = state_6760;
(statearr_6791_6813[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6760[(4)]))){
var statearr_6792_6814 = state_6760;
(statearr_6792_6814[(1)] = cljs.core.first.call(null,(state_6760[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6815 = state_6760;
state_6760 = G__6815;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_6760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_6760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6793 = f__5476__auto__.call(null);
(statearr_6793[(6)] = c__5475__auto___6795);

return statearr_6793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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
var G__6818 = arguments.length;
switch (G__6818) {
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
var c__5475__auto___6873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6850){
var state_val_6851 = (state_6850[(1)]);
if((state_val_6851 === (7))){
var inst_6830 = (state_6850[(7)]);
var inst_6829 = (state_6850[(8)]);
var inst_6829__$1 = (state_6850[(2)]);
var inst_6830__$1 = cljs.core.nth.call(null,inst_6829__$1,(0),null);
var inst_6831 = cljs.core.nth.call(null,inst_6829__$1,(1),null);
var inst_6832 = (inst_6830__$1 == null);
var state_6850__$1 = (function (){var statearr_6852 = state_6850;
(statearr_6852[(9)] = inst_6831);

(statearr_6852[(7)] = inst_6830__$1);

(statearr_6852[(8)] = inst_6829__$1);

return statearr_6852;
})();
if(cljs.core.truth_(inst_6832)){
var statearr_6853_6874 = state_6850__$1;
(statearr_6853_6874[(1)] = (8));

} else {
var statearr_6854_6875 = state_6850__$1;
(statearr_6854_6875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (1))){
var inst_6819 = cljs.core.vec.call(null,chs);
var inst_6820 = inst_6819;
var state_6850__$1 = (function (){var statearr_6855 = state_6850;
(statearr_6855[(10)] = inst_6820);

return statearr_6855;
})();
var statearr_6856_6876 = state_6850__$1;
(statearr_6856_6876[(2)] = null);

(statearr_6856_6876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (4))){
var inst_6820 = (state_6850[(10)]);
var state_6850__$1 = state_6850;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6850__$1,(7),inst_6820);
} else {
if((state_val_6851 === (6))){
var inst_6846 = (state_6850[(2)]);
var state_6850__$1 = state_6850;
var statearr_6857_6877 = state_6850__$1;
(statearr_6857_6877[(2)] = inst_6846);

(statearr_6857_6877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (3))){
var inst_6848 = (state_6850[(2)]);
var state_6850__$1 = state_6850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6850__$1,inst_6848);
} else {
if((state_val_6851 === (2))){
var inst_6820 = (state_6850[(10)]);
var inst_6822 = cljs.core.count.call(null,inst_6820);
var inst_6823 = (inst_6822 > (0));
var state_6850__$1 = state_6850;
if(cljs.core.truth_(inst_6823)){
var statearr_6859_6878 = state_6850__$1;
(statearr_6859_6878[(1)] = (4));

} else {
var statearr_6860_6879 = state_6850__$1;
(statearr_6860_6879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (11))){
var inst_6820 = (state_6850[(10)]);
var inst_6839 = (state_6850[(2)]);
var tmp6858 = inst_6820;
var inst_6820__$1 = tmp6858;
var state_6850__$1 = (function (){var statearr_6861 = state_6850;
(statearr_6861[(10)] = inst_6820__$1);

(statearr_6861[(11)] = inst_6839);

return statearr_6861;
})();
var statearr_6862_6880 = state_6850__$1;
(statearr_6862_6880[(2)] = null);

(statearr_6862_6880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (9))){
var inst_6830 = (state_6850[(7)]);
var state_6850__$1 = state_6850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6850__$1,(11),out,inst_6830);
} else {
if((state_val_6851 === (5))){
var inst_6844 = cljs.core.async.close_BANG_.call(null,out);
var state_6850__$1 = state_6850;
var statearr_6863_6881 = state_6850__$1;
(statearr_6863_6881[(2)] = inst_6844);

(statearr_6863_6881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (10))){
var inst_6842 = (state_6850[(2)]);
var state_6850__$1 = state_6850;
var statearr_6864_6882 = state_6850__$1;
(statearr_6864_6882[(2)] = inst_6842);

(statearr_6864_6882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6851 === (8))){
var inst_6820 = (state_6850[(10)]);
var inst_6831 = (state_6850[(9)]);
var inst_6830 = (state_6850[(7)]);
var inst_6829 = (state_6850[(8)]);
var inst_6834 = (function (){var cs = inst_6820;
var vec__6825 = inst_6829;
var v = inst_6830;
var c = inst_6831;
return (function (p1__6816_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__6816_SHARP_);
});
})();
var inst_6835 = cljs.core.filterv.call(null,inst_6834,inst_6820);
var inst_6820__$1 = inst_6835;
var state_6850__$1 = (function (){var statearr_6865 = state_6850;
(statearr_6865[(10)] = inst_6820__$1);

return statearr_6865;
})();
var statearr_6866_6883 = state_6850__$1;
(statearr_6866_6883[(2)] = null);

(statearr_6866_6883[(1)] = (2));


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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_6867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6867[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_6867[(1)] = (1));

return statearr_6867;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_6850){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6868){var ex__5405__auto__ = e6868;
var statearr_6869_6884 = state_6850;
(statearr_6869_6884[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6850[(4)]))){
var statearr_6870_6885 = state_6850;
(statearr_6870_6885[(1)] = cljs.core.first.call(null,(state_6850[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6886 = state_6850;
state_6850 = G__6886;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_6850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_6850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6871 = f__5476__auto__.call(null);
(statearr_6871[(6)] = c__5475__auto___6873);

return statearr_6871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
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
var G__6888 = arguments.length;
switch (G__6888) {
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
var c__5475__auto___6934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6912){
var state_val_6913 = (state_6912[(1)]);
if((state_val_6913 === (7))){
var inst_6894 = (state_6912[(7)]);
var inst_6894__$1 = (state_6912[(2)]);
var inst_6895 = (inst_6894__$1 == null);
var inst_6896 = cljs.core.not.call(null,inst_6895);
var state_6912__$1 = (function (){var statearr_6914 = state_6912;
(statearr_6914[(7)] = inst_6894__$1);

return statearr_6914;
})();
if(inst_6896){
var statearr_6915_6935 = state_6912__$1;
(statearr_6915_6935[(1)] = (8));

} else {
var statearr_6916_6936 = state_6912__$1;
(statearr_6916_6936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (1))){
var inst_6889 = (0);
var state_6912__$1 = (function (){var statearr_6917 = state_6912;
(statearr_6917[(8)] = inst_6889);

return statearr_6917;
})();
var statearr_6918_6937 = state_6912__$1;
(statearr_6918_6937[(2)] = null);

(statearr_6918_6937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (4))){
var state_6912__$1 = state_6912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6912__$1,(7),ch);
} else {
if((state_val_6913 === (6))){
var inst_6907 = (state_6912[(2)]);
var state_6912__$1 = state_6912;
var statearr_6919_6938 = state_6912__$1;
(statearr_6919_6938[(2)] = inst_6907);

(statearr_6919_6938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (3))){
var inst_6909 = (state_6912[(2)]);
var inst_6910 = cljs.core.async.close_BANG_.call(null,out);
var state_6912__$1 = (function (){var statearr_6920 = state_6912;
(statearr_6920[(9)] = inst_6909);

return statearr_6920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6912__$1,inst_6910);
} else {
if((state_val_6913 === (2))){
var inst_6889 = (state_6912[(8)]);
var inst_6891 = (inst_6889 < n);
var state_6912__$1 = state_6912;
if(cljs.core.truth_(inst_6891)){
var statearr_6921_6939 = state_6912__$1;
(statearr_6921_6939[(1)] = (4));

} else {
var statearr_6922_6940 = state_6912__$1;
(statearr_6922_6940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (11))){
var inst_6889 = (state_6912[(8)]);
var inst_6899 = (state_6912[(2)]);
var inst_6900 = (inst_6889 + (1));
var inst_6889__$1 = inst_6900;
var state_6912__$1 = (function (){var statearr_6923 = state_6912;
(statearr_6923[(8)] = inst_6889__$1);

(statearr_6923[(10)] = inst_6899);

return statearr_6923;
})();
var statearr_6924_6941 = state_6912__$1;
(statearr_6924_6941[(2)] = null);

(statearr_6924_6941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (9))){
var state_6912__$1 = state_6912;
var statearr_6925_6942 = state_6912__$1;
(statearr_6925_6942[(2)] = null);

(statearr_6925_6942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (5))){
var state_6912__$1 = state_6912;
var statearr_6926_6943 = state_6912__$1;
(statearr_6926_6943[(2)] = null);

(statearr_6926_6943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (10))){
var inst_6904 = (state_6912[(2)]);
var state_6912__$1 = state_6912;
var statearr_6927_6944 = state_6912__$1;
(statearr_6927_6944[(2)] = inst_6904);

(statearr_6927_6944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6913 === (8))){
var inst_6894 = (state_6912[(7)]);
var state_6912__$1 = state_6912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6912__$1,(11),out,inst_6894);
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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_6928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6928[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_6928[(1)] = (1));

return statearr_6928;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_6912){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6929){var ex__5405__auto__ = e6929;
var statearr_6930_6945 = state_6912;
(statearr_6930_6945[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6912[(4)]))){
var statearr_6931_6946 = state_6912;
(statearr_6931_6946[(1)] = cljs.core.first.call(null,(state_6912[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6947 = state_6912;
state_6912 = G__6947;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_6912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_6912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_6932 = f__5476__auto__.call(null);
(statearr_6932[(6)] = c__5475__auto___6934);

return statearr_6932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6949 = (function (f,ch,meta6950){
this.f = f;
this.ch = ch;
this.meta6950 = meta6950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6951,meta6950__$1){
var self__ = this;
var _6951__$1 = this;
return (new cljs.core.async.t_cljs$core$async6949(self__.f,self__.ch,meta6950__$1));
}));

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6951){
var self__ = this;
var _6951__$1 = this;
return self__.meta6950;
}));

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6952 = (function (f,ch,meta6950,_,fn1,meta6953){
this.f = f;
this.ch = ch;
this.meta6950 = meta6950;
this._ = _;
this.fn1 = fn1;
this.meta6953 = meta6953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6954,meta6953__$1){
var self__ = this;
var _6954__$1 = this;
return (new cljs.core.async.t_cljs$core$async6952(self__.f,self__.ch,self__.meta6950,self__._,self__.fn1,meta6953__$1));
}));

(cljs.core.async.t_cljs$core$async6952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6954){
var self__ = this;
var _6954__$1 = this;
return self__.meta6953;
}));

(cljs.core.async.t_cljs$core$async6952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async6952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async6952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__6948_SHARP_){
return f1.call(null,(((p1__6948_SHARP_ == null))?null:self__.f.call(null,p1__6948_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async6952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6950","meta6950",-722254133,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async6949","cljs.core.async/t_cljs$core$async6949",1164419153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta6953","meta6953",1591195958,null)], null);
}));

(cljs.core.async.t_cljs$core$async6952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6952");

(cljs.core.async.t_cljs$core$async6952.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6952.
 */
cljs.core.async.__GT_t_cljs$core$async6952 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6952(f__$1,ch__$1,meta6950__$1,___$2,fn1__$1,meta6953){
return (new cljs.core.async.t_cljs$core$async6952(f__$1,ch__$1,meta6950__$1,___$2,fn1__$1,meta6953));
});

}

return (new cljs.core.async.t_cljs$core$async6952(self__.f,self__.ch,self__.meta6950,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async6949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6950","meta6950",-722254133,null)], null);
}));

(cljs.core.async.t_cljs$core$async6949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6949");

(cljs.core.async.t_cljs$core$async6949.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6949.
 */
cljs.core.async.__GT_t_cljs$core$async6949 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6949(f__$1,ch__$1,meta6950){
return (new cljs.core.async.t_cljs$core$async6949(f__$1,ch__$1,meta6950));
});

}

return (new cljs.core.async.t_cljs$core$async6949(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6955 = (function (f,ch,meta6956){
this.f = f;
this.ch = ch;
this.meta6956 = meta6956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6957,meta6956__$1){
var self__ = this;
var _6957__$1 = this;
return (new cljs.core.async.t_cljs$core$async6955(self__.f,self__.ch,meta6956__$1));
}));

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6957){
var self__ = this;
var _6957__$1 = this;
return self__.meta6956;
}));

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async6955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6956","meta6956",21839310,null)], null);
}));

(cljs.core.async.t_cljs$core$async6955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6955");

(cljs.core.async.t_cljs$core$async6955.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6955.
 */
cljs.core.async.__GT_t_cljs$core$async6955 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6955(f__$1,ch__$1,meta6956){
return (new cljs.core.async.t_cljs$core$async6955(f__$1,ch__$1,meta6956));
});

}

return (new cljs.core.async.t_cljs$core$async6955(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6958 = (function (p,ch,meta6959){
this.p = p;
this.ch = ch;
this.meta6959 = meta6959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6960,meta6959__$1){
var self__ = this;
var _6960__$1 = this;
return (new cljs.core.async.t_cljs$core$async6958(self__.p,self__.ch,meta6959__$1));
}));

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6960){
var self__ = this;
var _6960__$1 = this;
return self__.meta6959;
}));

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async6958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta6959","meta6959",-197886727,null)], null);
}));

(cljs.core.async.t_cljs$core$async6958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6958");

(cljs.core.async.t_cljs$core$async6958.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async6958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6958.
 */
cljs.core.async.__GT_t_cljs$core$async6958 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6958(p__$1,ch__$1,meta6959){
return (new cljs.core.async.t_cljs$core$async6958(p__$1,ch__$1,meta6959));
});

}

return (new cljs.core.async.t_cljs$core$async6958(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__6962 = arguments.length;
switch (G__6962) {
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
var c__5475__auto___7003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_6983){
var state_val_6984 = (state_6983[(1)]);
if((state_val_6984 === (7))){
var inst_6979 = (state_6983[(2)]);
var state_6983__$1 = state_6983;
var statearr_6985_7004 = state_6983__$1;
(statearr_6985_7004[(2)] = inst_6979);

(statearr_6985_7004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (1))){
var state_6983__$1 = state_6983;
var statearr_6986_7005 = state_6983__$1;
(statearr_6986_7005[(2)] = null);

(statearr_6986_7005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (4))){
var inst_6965 = (state_6983[(7)]);
var inst_6965__$1 = (state_6983[(2)]);
var inst_6966 = (inst_6965__$1 == null);
var state_6983__$1 = (function (){var statearr_6987 = state_6983;
(statearr_6987[(7)] = inst_6965__$1);

return statearr_6987;
})();
if(cljs.core.truth_(inst_6966)){
var statearr_6988_7006 = state_6983__$1;
(statearr_6988_7006[(1)] = (5));

} else {
var statearr_6989_7007 = state_6983__$1;
(statearr_6989_7007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (6))){
var inst_6965 = (state_6983[(7)]);
var inst_6970 = p.call(null,inst_6965);
var state_6983__$1 = state_6983;
if(cljs.core.truth_(inst_6970)){
var statearr_6990_7008 = state_6983__$1;
(statearr_6990_7008[(1)] = (8));

} else {
var statearr_6991_7009 = state_6983__$1;
(statearr_6991_7009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (3))){
var inst_6981 = (state_6983[(2)]);
var state_6983__$1 = state_6983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6983__$1,inst_6981);
} else {
if((state_val_6984 === (2))){
var state_6983__$1 = state_6983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6983__$1,(4),ch);
} else {
if((state_val_6984 === (11))){
var inst_6973 = (state_6983[(2)]);
var state_6983__$1 = state_6983;
var statearr_6992_7010 = state_6983__$1;
(statearr_6992_7010[(2)] = inst_6973);

(statearr_6992_7010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (9))){
var state_6983__$1 = state_6983;
var statearr_6993_7011 = state_6983__$1;
(statearr_6993_7011[(2)] = null);

(statearr_6993_7011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (5))){
var inst_6968 = cljs.core.async.close_BANG_.call(null,out);
var state_6983__$1 = state_6983;
var statearr_6994_7012 = state_6983__$1;
(statearr_6994_7012[(2)] = inst_6968);

(statearr_6994_7012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (10))){
var inst_6976 = (state_6983[(2)]);
var state_6983__$1 = (function (){var statearr_6995 = state_6983;
(statearr_6995[(8)] = inst_6976);

return statearr_6995;
})();
var statearr_6996_7013 = state_6983__$1;
(statearr_6996_7013[(2)] = null);

(statearr_6996_7013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (8))){
var inst_6965 = (state_6983[(7)]);
var state_6983__$1 = state_6983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6983__$1,(11),out,inst_6965);
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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_6997 = [null,null,null,null,null,null,null,null,null];
(statearr_6997[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_6997[(1)] = (1));

return statearr_6997;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_6983){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_6983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e6998){var ex__5405__auto__ = e6998;
var statearr_6999_7014 = state_6983;
(statearr_6999_7014[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_6983[(4)]))){
var statearr_7000_7015 = state_6983;
(statearr_7000_7015[(1)] = cljs.core.first.call(null,(state_6983[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7016 = state_6983;
state_6983 = G__7016;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_6983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_6983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_7001 = f__5476__auto__.call(null);
(statearr_7001[(6)] = c__5475__auto___7003);

return statearr_7001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__7018 = arguments.length;
switch (G__7018) {
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
var c__5475__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_7081){
var state_val_7082 = (state_7081[(1)]);
if((state_val_7082 === (7))){
var inst_7077 = (state_7081[(2)]);
var state_7081__$1 = state_7081;
var statearr_7083_7122 = state_7081__$1;
(statearr_7083_7122[(2)] = inst_7077);

(statearr_7083_7122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (20))){
var inst_7047 = (state_7081[(7)]);
var inst_7058 = (state_7081[(2)]);
var inst_7059 = cljs.core.next.call(null,inst_7047);
var inst_7033 = inst_7059;
var inst_7034 = null;
var inst_7035 = (0);
var inst_7036 = (0);
var state_7081__$1 = (function (){var statearr_7084 = state_7081;
(statearr_7084[(8)] = inst_7034);

(statearr_7084[(9)] = inst_7033);

(statearr_7084[(10)] = inst_7035);

(statearr_7084[(11)] = inst_7036);

(statearr_7084[(12)] = inst_7058);

return statearr_7084;
})();
var statearr_7085_7123 = state_7081__$1;
(statearr_7085_7123[(2)] = null);

(statearr_7085_7123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (1))){
var state_7081__$1 = state_7081;
var statearr_7086_7124 = state_7081__$1;
(statearr_7086_7124[(2)] = null);

(statearr_7086_7124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (4))){
var inst_7022 = (state_7081[(13)]);
var inst_7022__$1 = (state_7081[(2)]);
var inst_7023 = (inst_7022__$1 == null);
var state_7081__$1 = (function (){var statearr_7087 = state_7081;
(statearr_7087[(13)] = inst_7022__$1);

return statearr_7087;
})();
if(cljs.core.truth_(inst_7023)){
var statearr_7088_7125 = state_7081__$1;
(statearr_7088_7125[(1)] = (5));

} else {
var statearr_7089_7126 = state_7081__$1;
(statearr_7089_7126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (15))){
var state_7081__$1 = state_7081;
var statearr_7093_7127 = state_7081__$1;
(statearr_7093_7127[(2)] = null);

(statearr_7093_7127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (21))){
var state_7081__$1 = state_7081;
var statearr_7094_7128 = state_7081__$1;
(statearr_7094_7128[(2)] = null);

(statearr_7094_7128[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (13))){
var inst_7034 = (state_7081[(8)]);
var inst_7033 = (state_7081[(9)]);
var inst_7035 = (state_7081[(10)]);
var inst_7036 = (state_7081[(11)]);
var inst_7043 = (state_7081[(2)]);
var inst_7044 = (inst_7036 + (1));
var tmp7090 = inst_7034;
var tmp7091 = inst_7033;
var tmp7092 = inst_7035;
var inst_7033__$1 = tmp7091;
var inst_7034__$1 = tmp7090;
var inst_7035__$1 = tmp7092;
var inst_7036__$1 = inst_7044;
var state_7081__$1 = (function (){var statearr_7095 = state_7081;
(statearr_7095[(8)] = inst_7034__$1);

(statearr_7095[(9)] = inst_7033__$1);

(statearr_7095[(10)] = inst_7035__$1);

(statearr_7095[(14)] = inst_7043);

(statearr_7095[(11)] = inst_7036__$1);

return statearr_7095;
})();
var statearr_7096_7129 = state_7081__$1;
(statearr_7096_7129[(2)] = null);

(statearr_7096_7129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (22))){
var state_7081__$1 = state_7081;
var statearr_7097_7130 = state_7081__$1;
(statearr_7097_7130[(2)] = null);

(statearr_7097_7130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (6))){
var inst_7022 = (state_7081[(13)]);
var inst_7031 = f.call(null,inst_7022);
var inst_7032 = cljs.core.seq.call(null,inst_7031);
var inst_7033 = inst_7032;
var inst_7034 = null;
var inst_7035 = (0);
var inst_7036 = (0);
var state_7081__$1 = (function (){var statearr_7098 = state_7081;
(statearr_7098[(8)] = inst_7034);

(statearr_7098[(9)] = inst_7033);

(statearr_7098[(10)] = inst_7035);

(statearr_7098[(11)] = inst_7036);

return statearr_7098;
})();
var statearr_7099_7131 = state_7081__$1;
(statearr_7099_7131[(2)] = null);

(statearr_7099_7131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (17))){
var inst_7047 = (state_7081[(7)]);
var inst_7051 = cljs.core.chunk_first.call(null,inst_7047);
var inst_7052 = cljs.core.chunk_rest.call(null,inst_7047);
var inst_7053 = cljs.core.count.call(null,inst_7051);
var inst_7033 = inst_7052;
var inst_7034 = inst_7051;
var inst_7035 = inst_7053;
var inst_7036 = (0);
var state_7081__$1 = (function (){var statearr_7100 = state_7081;
(statearr_7100[(8)] = inst_7034);

(statearr_7100[(9)] = inst_7033);

(statearr_7100[(10)] = inst_7035);

(statearr_7100[(11)] = inst_7036);

return statearr_7100;
})();
var statearr_7101_7132 = state_7081__$1;
(statearr_7101_7132[(2)] = null);

(statearr_7101_7132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (3))){
var inst_7079 = (state_7081[(2)]);
var state_7081__$1 = state_7081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7081__$1,inst_7079);
} else {
if((state_val_7082 === (12))){
var inst_7067 = (state_7081[(2)]);
var state_7081__$1 = state_7081;
var statearr_7102_7133 = state_7081__$1;
(statearr_7102_7133[(2)] = inst_7067);

(statearr_7102_7133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (2))){
var state_7081__$1 = state_7081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7081__$1,(4),in$);
} else {
if((state_val_7082 === (23))){
var inst_7075 = (state_7081[(2)]);
var state_7081__$1 = state_7081;
var statearr_7103_7134 = state_7081__$1;
(statearr_7103_7134[(2)] = inst_7075);

(statearr_7103_7134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (19))){
var inst_7062 = (state_7081[(2)]);
var state_7081__$1 = state_7081;
var statearr_7104_7135 = state_7081__$1;
(statearr_7104_7135[(2)] = inst_7062);

(statearr_7104_7135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (11))){
var inst_7033 = (state_7081[(9)]);
var inst_7047 = (state_7081[(7)]);
var inst_7047__$1 = cljs.core.seq.call(null,inst_7033);
var state_7081__$1 = (function (){var statearr_7105 = state_7081;
(statearr_7105[(7)] = inst_7047__$1);

return statearr_7105;
})();
if(inst_7047__$1){
var statearr_7106_7136 = state_7081__$1;
(statearr_7106_7136[(1)] = (14));

} else {
var statearr_7107_7137 = state_7081__$1;
(statearr_7107_7137[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (9))){
var inst_7069 = (state_7081[(2)]);
var inst_7070 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_7081__$1 = (function (){var statearr_7108 = state_7081;
(statearr_7108[(15)] = inst_7069);

return statearr_7108;
})();
if(cljs.core.truth_(inst_7070)){
var statearr_7109_7138 = state_7081__$1;
(statearr_7109_7138[(1)] = (21));

} else {
var statearr_7110_7139 = state_7081__$1;
(statearr_7110_7139[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (5))){
var inst_7025 = cljs.core.async.close_BANG_.call(null,out);
var state_7081__$1 = state_7081;
var statearr_7111_7140 = state_7081__$1;
(statearr_7111_7140[(2)] = inst_7025);

(statearr_7111_7140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (14))){
var inst_7047 = (state_7081[(7)]);
var inst_7049 = cljs.core.chunked_seq_QMARK_.call(null,inst_7047);
var state_7081__$1 = state_7081;
if(inst_7049){
var statearr_7112_7141 = state_7081__$1;
(statearr_7112_7141[(1)] = (17));

} else {
var statearr_7113_7142 = state_7081__$1;
(statearr_7113_7142[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (16))){
var inst_7065 = (state_7081[(2)]);
var state_7081__$1 = state_7081;
var statearr_7114_7143 = state_7081__$1;
(statearr_7114_7143[(2)] = inst_7065);

(statearr_7114_7143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7082 === (10))){
var inst_7034 = (state_7081[(8)]);
var inst_7036 = (state_7081[(11)]);
var inst_7041 = cljs.core._nth.call(null,inst_7034,inst_7036);
var state_7081__$1 = state_7081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7081__$1,(13),out,inst_7041);
} else {
if((state_val_7082 === (18))){
var inst_7047 = (state_7081[(7)]);
var inst_7056 = cljs.core.first.call(null,inst_7047);
var state_7081__$1 = state_7081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7081__$1,(20),out,inst_7056);
} else {
if((state_val_7082 === (8))){
var inst_7035 = (state_7081[(10)]);
var inst_7036 = (state_7081[(11)]);
var inst_7038 = (inst_7036 < inst_7035);
var inst_7039 = inst_7038;
var state_7081__$1 = state_7081;
if(cljs.core.truth_(inst_7039)){
var statearr_7115_7144 = state_7081__$1;
(statearr_7115_7144[(1)] = (10));

} else {
var statearr_7116_7145 = state_7081__$1;
(statearr_7116_7145[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__5402__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__5402__auto____0 = (function (){
var statearr_7117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7117[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__5402__auto__);

(statearr_7117[(1)] = (1));

return statearr_7117;
});
var cljs$core$async$mapcat_STAR__$_state_machine__5402__auto____1 = (function (state_7081){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_7081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e7118){var ex__5405__auto__ = e7118;
var statearr_7119_7146 = state_7081;
(statearr_7119_7146[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_7081[(4)]))){
var statearr_7120_7147 = state_7081;
(statearr_7120_7147[(1)] = cljs.core.first.call(null,(state_7081[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7148 = state_7081;
state_7081 = G__7148;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__5402__auto__ = function(state_7081){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__5402__auto____1.call(this,state_7081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__5402__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__5402__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_7121 = f__5476__auto__.call(null);
(statearr_7121[(6)] = c__5475__auto__);

return statearr_7121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));

return c__5475__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__7150 = arguments.length;
switch (G__7150) {
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
var G__7153 = arguments.length;
switch (G__7153) {
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
var G__7156 = arguments.length;
switch (G__7156) {
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
var c__5475__auto___7204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_7180){
var state_val_7181 = (state_7180[(1)]);
if((state_val_7181 === (7))){
var inst_7175 = (state_7180[(2)]);
var state_7180__$1 = state_7180;
var statearr_7182_7205 = state_7180__$1;
(statearr_7182_7205[(2)] = inst_7175);

(statearr_7182_7205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (1))){
var inst_7157 = null;
var state_7180__$1 = (function (){var statearr_7183 = state_7180;
(statearr_7183[(7)] = inst_7157);

return statearr_7183;
})();
var statearr_7184_7206 = state_7180__$1;
(statearr_7184_7206[(2)] = null);

(statearr_7184_7206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (4))){
var inst_7160 = (state_7180[(8)]);
var inst_7160__$1 = (state_7180[(2)]);
var inst_7161 = (inst_7160__$1 == null);
var inst_7162 = cljs.core.not.call(null,inst_7161);
var state_7180__$1 = (function (){var statearr_7185 = state_7180;
(statearr_7185[(8)] = inst_7160__$1);

return statearr_7185;
})();
if(inst_7162){
var statearr_7186_7207 = state_7180__$1;
(statearr_7186_7207[(1)] = (5));

} else {
var statearr_7187_7208 = state_7180__$1;
(statearr_7187_7208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (6))){
var state_7180__$1 = state_7180;
var statearr_7188_7209 = state_7180__$1;
(statearr_7188_7209[(2)] = null);

(statearr_7188_7209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (3))){
var inst_7177 = (state_7180[(2)]);
var inst_7178 = cljs.core.async.close_BANG_.call(null,out);
var state_7180__$1 = (function (){var statearr_7189 = state_7180;
(statearr_7189[(9)] = inst_7177);

return statearr_7189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7180__$1,inst_7178);
} else {
if((state_val_7181 === (2))){
var state_7180__$1 = state_7180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7180__$1,(4),ch);
} else {
if((state_val_7181 === (11))){
var inst_7160 = (state_7180[(8)]);
var inst_7169 = (state_7180[(2)]);
var inst_7157 = inst_7160;
var state_7180__$1 = (function (){var statearr_7190 = state_7180;
(statearr_7190[(7)] = inst_7157);

(statearr_7190[(10)] = inst_7169);

return statearr_7190;
})();
var statearr_7191_7210 = state_7180__$1;
(statearr_7191_7210[(2)] = null);

(statearr_7191_7210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (9))){
var inst_7160 = (state_7180[(8)]);
var state_7180__$1 = state_7180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7180__$1,(11),out,inst_7160);
} else {
if((state_val_7181 === (5))){
var inst_7157 = (state_7180[(7)]);
var inst_7160 = (state_7180[(8)]);
var inst_7164 = cljs.core._EQ_.call(null,inst_7160,inst_7157);
var state_7180__$1 = state_7180;
if(inst_7164){
var statearr_7193_7211 = state_7180__$1;
(statearr_7193_7211[(1)] = (8));

} else {
var statearr_7194_7212 = state_7180__$1;
(statearr_7194_7212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (10))){
var inst_7172 = (state_7180[(2)]);
var state_7180__$1 = state_7180;
var statearr_7195_7213 = state_7180__$1;
(statearr_7195_7213[(2)] = inst_7172);

(statearr_7195_7213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7181 === (8))){
var inst_7157 = (state_7180[(7)]);
var tmp7192 = inst_7157;
var inst_7157__$1 = tmp7192;
var state_7180__$1 = (function (){var statearr_7196 = state_7180;
(statearr_7196[(7)] = inst_7157__$1);

return statearr_7196;
})();
var statearr_7197_7214 = state_7180__$1;
(statearr_7197_7214[(2)] = null);

(statearr_7197_7214[(1)] = (2));


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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_7198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7198[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_7198[(1)] = (1));

return statearr_7198;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_7180){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_7180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e7199){var ex__5405__auto__ = e7199;
var statearr_7200_7215 = state_7180;
(statearr_7200_7215[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_7180[(4)]))){
var statearr_7201_7216 = state_7180;
(statearr_7201_7216[(1)] = cljs.core.first.call(null,(state_7180[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7217 = state_7180;
state_7180 = G__7217;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_7180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_7180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_7202 = f__5476__auto__.call(null);
(statearr_7202[(6)] = c__5475__auto___7204);

return statearr_7202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__7219 = arguments.length;
switch (G__7219) {
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
var c__5475__auto___7286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_7257){
var state_val_7258 = (state_7257[(1)]);
if((state_val_7258 === (7))){
var inst_7253 = (state_7257[(2)]);
var state_7257__$1 = state_7257;
var statearr_7259_7287 = state_7257__$1;
(statearr_7259_7287[(2)] = inst_7253);

(statearr_7259_7287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (1))){
var inst_7220 = (new Array(n));
var inst_7221 = inst_7220;
var inst_7222 = (0);
var state_7257__$1 = (function (){var statearr_7260 = state_7257;
(statearr_7260[(7)] = inst_7221);

(statearr_7260[(8)] = inst_7222);

return statearr_7260;
})();
var statearr_7261_7288 = state_7257__$1;
(statearr_7261_7288[(2)] = null);

(statearr_7261_7288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (4))){
var inst_7225 = (state_7257[(9)]);
var inst_7225__$1 = (state_7257[(2)]);
var inst_7226 = (inst_7225__$1 == null);
var inst_7227 = cljs.core.not.call(null,inst_7226);
var state_7257__$1 = (function (){var statearr_7262 = state_7257;
(statearr_7262[(9)] = inst_7225__$1);

return statearr_7262;
})();
if(inst_7227){
var statearr_7263_7289 = state_7257__$1;
(statearr_7263_7289[(1)] = (5));

} else {
var statearr_7264_7290 = state_7257__$1;
(statearr_7264_7290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (15))){
var inst_7247 = (state_7257[(2)]);
var state_7257__$1 = state_7257;
var statearr_7265_7291 = state_7257__$1;
(statearr_7265_7291[(2)] = inst_7247);

(statearr_7265_7291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (13))){
var state_7257__$1 = state_7257;
var statearr_7266_7292 = state_7257__$1;
(statearr_7266_7292[(2)] = null);

(statearr_7266_7292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (6))){
var inst_7222 = (state_7257[(8)]);
var inst_7243 = (inst_7222 > (0));
var state_7257__$1 = state_7257;
if(cljs.core.truth_(inst_7243)){
var statearr_7267_7293 = state_7257__$1;
(statearr_7267_7293[(1)] = (12));

} else {
var statearr_7268_7294 = state_7257__$1;
(statearr_7268_7294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (3))){
var inst_7255 = (state_7257[(2)]);
var state_7257__$1 = state_7257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7257__$1,inst_7255);
} else {
if((state_val_7258 === (12))){
var inst_7221 = (state_7257[(7)]);
var inst_7245 = cljs.core.vec.call(null,inst_7221);
var state_7257__$1 = state_7257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7257__$1,(15),out,inst_7245);
} else {
if((state_val_7258 === (2))){
var state_7257__$1 = state_7257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7257__$1,(4),ch);
} else {
if((state_val_7258 === (11))){
var inst_7237 = (state_7257[(2)]);
var inst_7238 = (new Array(n));
var inst_7221 = inst_7238;
var inst_7222 = (0);
var state_7257__$1 = (function (){var statearr_7269 = state_7257;
(statearr_7269[(7)] = inst_7221);

(statearr_7269[(10)] = inst_7237);

(statearr_7269[(8)] = inst_7222);

return statearr_7269;
})();
var statearr_7270_7295 = state_7257__$1;
(statearr_7270_7295[(2)] = null);

(statearr_7270_7295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (9))){
var inst_7221 = (state_7257[(7)]);
var inst_7235 = cljs.core.vec.call(null,inst_7221);
var state_7257__$1 = state_7257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7257__$1,(11),out,inst_7235);
} else {
if((state_val_7258 === (5))){
var inst_7230 = (state_7257[(11)]);
var inst_7221 = (state_7257[(7)]);
var inst_7222 = (state_7257[(8)]);
var inst_7225 = (state_7257[(9)]);
var inst_7229 = (inst_7221[inst_7222] = inst_7225);
var inst_7230__$1 = (inst_7222 + (1));
var inst_7231 = (inst_7230__$1 < n);
var state_7257__$1 = (function (){var statearr_7271 = state_7257;
(statearr_7271[(11)] = inst_7230__$1);

(statearr_7271[(12)] = inst_7229);

return statearr_7271;
})();
if(cljs.core.truth_(inst_7231)){
var statearr_7272_7296 = state_7257__$1;
(statearr_7272_7296[(1)] = (8));

} else {
var statearr_7273_7297 = state_7257__$1;
(statearr_7273_7297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (14))){
var inst_7250 = (state_7257[(2)]);
var inst_7251 = cljs.core.async.close_BANG_.call(null,out);
var state_7257__$1 = (function (){var statearr_7275 = state_7257;
(statearr_7275[(13)] = inst_7250);

return statearr_7275;
})();
var statearr_7276_7298 = state_7257__$1;
(statearr_7276_7298[(2)] = inst_7251);

(statearr_7276_7298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (10))){
var inst_7241 = (state_7257[(2)]);
var state_7257__$1 = state_7257;
var statearr_7277_7299 = state_7257__$1;
(statearr_7277_7299[(2)] = inst_7241);

(statearr_7277_7299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7258 === (8))){
var inst_7230 = (state_7257[(11)]);
var inst_7221 = (state_7257[(7)]);
var tmp7274 = inst_7221;
var inst_7221__$1 = tmp7274;
var inst_7222 = inst_7230;
var state_7257__$1 = (function (){var statearr_7278 = state_7257;
(statearr_7278[(7)] = inst_7221__$1);

(statearr_7278[(8)] = inst_7222);

return statearr_7278;
})();
var statearr_7279_7300 = state_7257__$1;
(statearr_7279_7300[(2)] = null);

(statearr_7279_7300[(1)] = (2));


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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_7280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7280[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_7280[(1)] = (1));

return statearr_7280;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_7257){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_7257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e7281){var ex__5405__auto__ = e7281;
var statearr_7282_7301 = state_7257;
(statearr_7282_7301[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_7257[(4)]))){
var statearr_7283_7302 = state_7257;
(statearr_7283_7302[(1)] = cljs.core.first.call(null,(state_7257[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7303 = state_7257;
state_7257 = G__7303;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_7257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_7257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_7284 = f__5476__auto__.call(null);
(statearr_7284[(6)] = c__5475__auto___7286);

return statearr_7284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__7305 = arguments.length;
switch (G__7305) {
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
var c__5475__auto___7383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__5476__auto__ = (function (){var switch__5401__auto__ = (function (state_7350){
var state_val_7351 = (state_7350[(1)]);
if((state_val_7351 === (7))){
var inst_7346 = (state_7350[(2)]);
var state_7350__$1 = state_7350;
var statearr_7352_7384 = state_7350__$1;
(statearr_7352_7384[(2)] = inst_7346);

(statearr_7352_7384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (1))){
var inst_7306 = [];
var inst_7307 = inst_7306;
var inst_7308 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_7350__$1 = (function (){var statearr_7353 = state_7350;
(statearr_7353[(7)] = inst_7307);

(statearr_7353[(8)] = inst_7308);

return statearr_7353;
})();
var statearr_7354_7385 = state_7350__$1;
(statearr_7354_7385[(2)] = null);

(statearr_7354_7385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (4))){
var inst_7311 = (state_7350[(9)]);
var inst_7311__$1 = (state_7350[(2)]);
var inst_7312 = (inst_7311__$1 == null);
var inst_7313 = cljs.core.not.call(null,inst_7312);
var state_7350__$1 = (function (){var statearr_7355 = state_7350;
(statearr_7355[(9)] = inst_7311__$1);

return statearr_7355;
})();
if(inst_7313){
var statearr_7356_7386 = state_7350__$1;
(statearr_7356_7386[(1)] = (5));

} else {
var statearr_7357_7387 = state_7350__$1;
(statearr_7357_7387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (15))){
var inst_7307 = (state_7350[(7)]);
var inst_7338 = cljs.core.vec.call(null,inst_7307);
var state_7350__$1 = state_7350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7350__$1,(18),out,inst_7338);
} else {
if((state_val_7351 === (13))){
var inst_7333 = (state_7350[(2)]);
var state_7350__$1 = state_7350;
var statearr_7358_7388 = state_7350__$1;
(statearr_7358_7388[(2)] = inst_7333);

(statearr_7358_7388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (6))){
var inst_7307 = (state_7350[(7)]);
var inst_7335 = inst_7307.length;
var inst_7336 = (inst_7335 > (0));
var state_7350__$1 = state_7350;
if(cljs.core.truth_(inst_7336)){
var statearr_7359_7389 = state_7350__$1;
(statearr_7359_7389[(1)] = (15));

} else {
var statearr_7360_7390 = state_7350__$1;
(statearr_7360_7390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (17))){
var inst_7343 = (state_7350[(2)]);
var inst_7344 = cljs.core.async.close_BANG_.call(null,out);
var state_7350__$1 = (function (){var statearr_7361 = state_7350;
(statearr_7361[(10)] = inst_7343);

return statearr_7361;
})();
var statearr_7362_7391 = state_7350__$1;
(statearr_7362_7391[(2)] = inst_7344);

(statearr_7362_7391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (3))){
var inst_7348 = (state_7350[(2)]);
var state_7350__$1 = state_7350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7350__$1,inst_7348);
} else {
if((state_val_7351 === (12))){
var inst_7307 = (state_7350[(7)]);
var inst_7326 = cljs.core.vec.call(null,inst_7307);
var state_7350__$1 = state_7350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7350__$1,(14),out,inst_7326);
} else {
if((state_val_7351 === (2))){
var state_7350__$1 = state_7350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7350__$1,(4),ch);
} else {
if((state_val_7351 === (11))){
var inst_7311 = (state_7350[(9)]);
var inst_7307 = (state_7350[(7)]);
var inst_7315 = (state_7350[(11)]);
var inst_7323 = inst_7307.push(inst_7311);
var tmp7363 = inst_7307;
var inst_7307__$1 = tmp7363;
var inst_7308 = inst_7315;
var state_7350__$1 = (function (){var statearr_7364 = state_7350;
(statearr_7364[(12)] = inst_7323);

(statearr_7364[(7)] = inst_7307__$1);

(statearr_7364[(8)] = inst_7308);

return statearr_7364;
})();
var statearr_7365_7392 = state_7350__$1;
(statearr_7365_7392[(2)] = null);

(statearr_7365_7392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (9))){
var inst_7308 = (state_7350[(8)]);
var inst_7319 = cljs.core.keyword_identical_QMARK_.call(null,inst_7308,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_7350__$1 = state_7350;
var statearr_7366_7393 = state_7350__$1;
(statearr_7366_7393[(2)] = inst_7319);

(statearr_7366_7393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (5))){
var inst_7311 = (state_7350[(9)]);
var inst_7308 = (state_7350[(8)]);
var inst_7315 = (state_7350[(11)]);
var inst_7316 = (state_7350[(13)]);
var inst_7315__$1 = f.call(null,inst_7311);
var inst_7316__$1 = cljs.core._EQ_.call(null,inst_7315__$1,inst_7308);
var state_7350__$1 = (function (){var statearr_7367 = state_7350;
(statearr_7367[(11)] = inst_7315__$1);

(statearr_7367[(13)] = inst_7316__$1);

return statearr_7367;
})();
if(inst_7316__$1){
var statearr_7368_7394 = state_7350__$1;
(statearr_7368_7394[(1)] = (8));

} else {
var statearr_7369_7395 = state_7350__$1;
(statearr_7369_7395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (14))){
var inst_7311 = (state_7350[(9)]);
var inst_7315 = (state_7350[(11)]);
var inst_7328 = (state_7350[(2)]);
var inst_7329 = [];
var inst_7330 = inst_7329.push(inst_7311);
var inst_7307 = inst_7329;
var inst_7308 = inst_7315;
var state_7350__$1 = (function (){var statearr_7370 = state_7350;
(statearr_7370[(7)] = inst_7307);

(statearr_7370[(8)] = inst_7308);

(statearr_7370[(14)] = inst_7330);

(statearr_7370[(15)] = inst_7328);

return statearr_7370;
})();
var statearr_7371_7396 = state_7350__$1;
(statearr_7371_7396[(2)] = null);

(statearr_7371_7396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (16))){
var state_7350__$1 = state_7350;
var statearr_7372_7397 = state_7350__$1;
(statearr_7372_7397[(2)] = null);

(statearr_7372_7397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (10))){
var inst_7321 = (state_7350[(2)]);
var state_7350__$1 = state_7350;
if(cljs.core.truth_(inst_7321)){
var statearr_7373_7398 = state_7350__$1;
(statearr_7373_7398[(1)] = (11));

} else {
var statearr_7374_7399 = state_7350__$1;
(statearr_7374_7399[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (18))){
var inst_7340 = (state_7350[(2)]);
var state_7350__$1 = state_7350;
var statearr_7375_7400 = state_7350__$1;
(statearr_7375_7400[(2)] = inst_7340);

(statearr_7375_7400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7351 === (8))){
var inst_7316 = (state_7350[(13)]);
var state_7350__$1 = state_7350;
var statearr_7376_7401 = state_7350__$1;
(statearr_7376_7401[(2)] = inst_7316);

(statearr_7376_7401[(1)] = (10));


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
var cljs$core$async$state_machine__5402__auto__ = null;
var cljs$core$async$state_machine__5402__auto____0 = (function (){
var statearr_7377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7377[(0)] = cljs$core$async$state_machine__5402__auto__);

(statearr_7377[(1)] = (1));

return statearr_7377;
});
var cljs$core$async$state_machine__5402__auto____1 = (function (state_7350){
while(true){
var ret_value__5403__auto__ = (function (){try{while(true){
var result__5404__auto__ = switch__5401__auto__.call(null,state_7350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5404__auto__;
}
break;
}
}catch (e7378){var ex__5405__auto__ = e7378;
var statearr_7379_7402 = state_7350;
(statearr_7379_7402[(2)] = ex__5405__auto__);


if(cljs.core.seq.call(null,(state_7350[(4)]))){
var statearr_7380_7403 = state_7350;
(statearr_7380_7403[(1)] = cljs.core.first.call(null,(state_7350[(4)])));

} else {
throw ex__5405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7404 = state_7350;
state_7350 = G__7404;
continue;
} else {
return ret_value__5403__auto__;
}
break;
}
});
cljs$core$async$state_machine__5402__auto__ = function(state_7350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5402__auto____1.call(this,state_7350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5402__auto____0;
cljs$core$async$state_machine__5402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5402__auto____1;
return cljs$core$async$state_machine__5402__auto__;
})()
})();
var state__5477__auto__ = (function (){var statearr_7381 = f__5476__auto__.call(null);
(statearr_7381[(6)] = c__5475__auto___7383);

return statearr_7381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5477__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
