// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2869 = arguments.length;
var i__4830__auto___2870 = (0);
while(true){
if((i__4830__auto___2870 < len__4829__auto___2869)){
args__4835__auto__.push((arguments[i__4830__auto___2870]));

var G__2871 = (i__4830__auto___2870 + (1));
i__4830__auto___2870 = G__2871;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__2865){
var vec__2866 = p__2865;
var default$ = cljs.core.nth.call(null,vec__2866,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq2862){
var G__2863 = cljs.core.first.call(null,seq2862);
var seq2862__$1 = cljs.core.next.call(null,seq2862);
var G__2864 = cljs.core.first.call(null,seq2862__$1);
var seq2862__$2 = cljs.core.next.call(null,seq2862__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2863,G__2864,seq2862__$2);
}));

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2879 = arguments.length;
var i__4830__auto___2880 = (0);
while(true){
if((i__4830__auto___2880 < len__4829__auto___2879)){
args__4835__auto__.push((arguments[i__4830__auto___2880]));

var G__2881 = (i__4830__auto___2880 + (1));
i__4830__auto___2880 = G__2881;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__2875){
var vec__2876 = p__2875;
var default$ = cljs.core.nth.call(null,vec__2876,(0),null);
return thi.ng.strf.core.parse_int.call(null,x,radix,default$);
}));

(thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq2872){
var G__2873 = cljs.core.first.call(null,seq2872);
var seq2872__$1 = cljs.core.next.call(null,seq2872);
var G__2874 = cljs.core.first.call(null,seq2872__$1);
var seq2872__$2 = cljs.core.next.call(null,seq2872__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2873,G__2874,seq2872__$2);
}));

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2888 = arguments.length;
var i__4830__auto___2889 = (0);
while(true){
if((i__4830__auto___2889 < len__4829__auto___2888)){
args__4835__auto__.push((arguments[i__4830__auto___2889]));

var G__2890 = (i__4830__auto___2889 + (1));
i__4830__auto___2889 = G__2890;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2884){
var vec__2885 = p__2884;
var default$ = cljs.core.nth.call(null,vec__2885,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq2882){
var G__2883 = cljs.core.first.call(null,seq2882);
var seq2882__$1 = cljs.core.next.call(null,seq2882);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2883,seq2882__$1);
}));

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__4835__auto__ = [];
var len__4829__auto___2897 = arguments.length;
var i__4830__auto___2898 = (0);
while(true){
if((i__4830__auto___2898 < len__4829__auto___2897)){
args__4835__auto__.push((arguments[i__4830__auto___2898]));

var G__2899 = (i__4830__auto___2898 + (1));
i__4830__auto___2898 = G__2899;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2893){
var vec__2894 = p__2893;
var default$ = cljs.core.nth.call(null,vec__2894,(0),null);
return thi.ng.strf.core.parse_float.call(null,x,default$);
}));

(thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq2891){
var G__2892 = cljs.core.first.call(null,seq2891);
var seq2891__$1 = cljs.core.next.call(null,seq2891);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2892,seq2891__$1);
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
var len__4829__auto___2902 = arguments.length;
var i__4830__auto___2903 = (0);
while(true){
if((i__4830__auto___2903 < len__4829__auto___2902)){
args__4835__auto__.push((arguments[i__4830__auto___2903]));

var G__2904 = (i__4830__auto___2903 + (1));
i__4830__auto___2903 = G__2904;
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
var G__2905 = cljs.core.conj_BANG_.call(null,s,f);
var G__2906 = cljs.core.next.call(null,fmt__$1);
var G__2907 = args__$1;
s = G__2905;
fmt__$1 = G__2906;
args__$1 = G__2907;
continue;
} else {
var G__2908 = cljs.core.conj_BANG_.call(null,s,f.call(null,cljs.core.first.call(null,args__$1)));
var G__2909 = cljs.core.next.call(null,fmt__$1);
var G__2910 = cljs.core.next.call(null,args__$1);
s = G__2908;
fmt__$1 = G__2909;
args__$1 = G__2910;
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
(thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq2900){
var G__2901 = cljs.core.first.call(null,seq2900);
var seq2900__$1 = cljs.core.next.call(null,seq2900);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2901,seq2900__$1);
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
var vec__2912 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__2912,(0),null);
var m = cljs.core.nth.call(null,vec__2912,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__2912,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),d__$1,m,y);
}),new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),(function (d){
var vec__2915 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__2915,(0),null);
var m = cljs.core.nth.call(null,vec__2915,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__2915,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),m,d__$1,y);
}),new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),(function (d){
var vec__2918 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__2918,(0),null);
var m = cljs.core.nth.call(null,vec__2918,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__2918,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.call(null,d2,(function (p1__2911_SHARP_){
return cljs.core.mod.call(null,p1__2911_SHARP_,(100));
}))], null),d__$1,m,y);
}),new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),(function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields.call(null,d));
})], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__2922 = arguments.length;
switch (G__2922) {
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
