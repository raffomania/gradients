// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2727 = arguments.length;
var i__4830__auto___2728 = (0);
while(true){
if((i__4830__auto___2728 < len__4829__auto___2727)){
args__4835__auto__.push((arguments[i__4830__auto___2728]));

var G__2729 = (i__4830__auto___2728 + (1));
i__4830__auto___2728 = G__2729;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__2723){
var vec__2724 = p__2723;
var default$ = cljs.core.nth.call(null,vec__2724,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq2720){
var G__2721 = cljs.core.first.call(null,seq2720);
var seq2720__$1 = cljs.core.next.call(null,seq2720);
var G__2722 = cljs.core.first.call(null,seq2720__$1);
var seq2720__$2 = cljs.core.next.call(null,seq2720__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2721,G__2722,seq2720__$2);
}));

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2737 = arguments.length;
var i__4830__auto___2738 = (0);
while(true){
if((i__4830__auto___2738 < len__4829__auto___2737)){
args__4835__auto__.push((arguments[i__4830__auto___2738]));

var G__2739 = (i__4830__auto___2738 + (1));
i__4830__auto___2738 = G__2739;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__2733){
var vec__2734 = p__2733;
var default$ = cljs.core.nth.call(null,vec__2734,(0),null);
return thi.ng.strf.core.parse_int.call(null,x,radix,default$);
}));

(thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq2730){
var G__2731 = cljs.core.first.call(null,seq2730);
var seq2730__$1 = cljs.core.next.call(null,seq2730);
var G__2732 = cljs.core.first.call(null,seq2730__$1);
var seq2730__$2 = cljs.core.next.call(null,seq2730__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2731,G__2732,seq2730__$2);
}));

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2746 = arguments.length;
var i__4830__auto___2747 = (0);
while(true){
if((i__4830__auto___2747 < len__4829__auto___2746)){
args__4835__auto__.push((arguments[i__4830__auto___2747]));

var G__2748 = (i__4830__auto___2747 + (1));
i__4830__auto___2747 = G__2748;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2742){
var vec__2743 = p__2742;
var default$ = cljs.core.nth.call(null,vec__2743,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq2740){
var G__2741 = cljs.core.first.call(null,seq2740);
var seq2740__$1 = cljs.core.next.call(null,seq2740);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2741,seq2740__$1);
}));

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2755 = arguments.length;
var i__4830__auto___2756 = (0);
while(true){
if((i__4830__auto___2756 < len__4829__auto___2755)){
args__4835__auto__.push((arguments[i__4830__auto___2756]));

var G__2757 = (i__4830__auto___2756 + (1));
i__4830__auto___2756 = G__2757;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2751){
var vec__2752 = p__2751;
var default$ = cljs.core.nth.call(null,vec__2752,(0),null);
return thi.ng.strf.core.parse_float.call(null,x,default$);
}));

(thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq2749){
var G__2750 = cljs.core.first.call(null,seq2749);
var seq2749__$1 = cljs.core.next.call(null,seq2749);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2750,seq2749__$1);
}));

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.subs.call(null,fill__$1,(0),(len - l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.pad_right = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.subs.call(null,fill__$1,(0),(len - l))].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.hex = cljs.core.memoize.call(null,(function (len){
var pad = thi.ng.strf.core.pad_left.call(null,len,"0");
return (function (x){
return pad.call(null,(new Number(thi.ng.strf.core.int$.call(null,x))).toString((16)));
});
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2760 = arguments.length;
var i__4830__auto___2761 = (0);
while(true){
if((i__4830__auto___2761 < len__4829__auto___2760)){
args__4835__auto__.push((arguments[i__4830__auto___2761]));

var G__2762 = (i__4830__auto___2761 + (1));
i__4830__auto___2761 = G__2762;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5751__auto__ = cljs.core.first.call(null,fmt__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
if(typeof f === 'string'){
var G__2763 = cljs.core.conj_BANG_.call(null,s,f);
var G__2764 = cljs.core.next.call(null,fmt__$1);
var G__2765 = args__$1;
s = G__2763;
fmt__$1 = G__2764;
args__$1 = G__2765;
continue;
} else {
var G__2766 = cljs.core.conj_BANG_.call(null,s,f.call(null,cljs.core.first.call(null,args__$1)));
var G__2767 = cljs.core.next.call(null,fmt__$1);
var G__2768 = cljs.core.next.call(null,args__$1);
s = G__2766;
fmt__$1 = G__2767;
args__$1 = G__2768;
continue;
}
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.persistent_BANG_.call(null,s));
}
break;
}
}));

(thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq2758){
var G__2759 = cljs.core.first.call(null,seq2758);
var seq2758__$1 = cljs.core.next.call(null,seq2758);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2759,seq2758__$1);
}));

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.call(null,thi.ng.strf.core.pad_left.call(null,(2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),(function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields.call(null,d));
}),new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),(function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
}),new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),(function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
}),new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),(function (d){
var vec__2770 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__2770,(0),null);
var m = cljs.core.nth.call(null,vec__2770,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__2770,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),d__$1,m,y);
}),new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),(function (d){
var vec__2773 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__2773,(0),null);
var m = cljs.core.nth.call(null,vec__2773,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__2773,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),m,d__$1,y);
}),new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),(function (d){
var vec__2776 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__2776,(0),null);
var m = cljs.core.nth.call(null,vec__2776,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__2776,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.call(null,d2,(function (p1__2769_SHARP_){
return cljs.core.mod.call(null,p1__2769_SHARP_,(100));
}))], null),d__$1,m,y);
}),new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),(function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields.call(null,d));
})], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__2780 = arguments.length;
switch (G__2780) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)).call(null,d);
}));

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_.call(null,fmt)){
return fmt.call(null,d);
} else {
return thi.ng.strf.core.date_formatters.call(null,fmt).call(null,d);
}
}));

(thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2);

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left.call(null,(4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
return thi.ng.strf.core.int$.call(null,(cljs.core.rand.call(null) * ((1) << bits)));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
return thi.ng.strf.core.pad_left.call(null,Math.ceil((bits / (4))),"0").call(null,thi.ng.strf.core.rand_bits.call(null,bits).toString((16)));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
return thi.ng.strf.core.format_16bit_hex.call(null,cljs.core.rand_int.call(null,(65536)).toString((16)));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex.call(null))].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape.call(null,thi.ng.strf.core.as_str.call(null,x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=core.js.map
