// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('gradients.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gradients.params');
goog.require('cljs.core.async');
goog.require('gradients.state');
goog.require('clojure.string');
goog.require('thi.ng.color.core');
gradients.view.event_val = (function gradients$view$event_val(event){
return event.target.value;
});
gradients.view.float_val = (function gradients$view$float_val(string){
return parseFloat(string);
});
gradients.view.color_val = (function gradients$view$color_val(string){
return thi.ng.color.core.css.call(null,string);
});
gradients.view.set_param = (function gradients$view$set_param(state,key,extraction_fn){
return (function (p1__8731_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),key], null),extraction_fn.call(null,gradients.view.event_val.call(null,p1__8731_SHARP_)));
});
});
gradients.view.input_float = (function gradients$view$input_float(state,key){
var val = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),key], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),cljs.core.get_in.call(null,gradients.params.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"min","min",444991522)], null)),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.get_in.call(null,gradients.params.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get_in.call(null,gradients.params.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"step","step",1288888124)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),gradients.view.set_param.call(null,state,key,gradients.view.float_val)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(val.toFixed((2))),/\.0+$/,"")], null)], null);
});
gradients.view.input_color = (function gradients$view$input_color(state,key){
var val = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),key], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"color",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,val)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),gradients.view.set_param.call(null,state,key,gradients.view.color_val)], null)], null)], null);
});
gradients.view.unknown_input = (function gradients$view$unknown_input(state,key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"unknown parameter type"], null);
});
gradients.view.input_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),gradients.view.input_float,new cljs.core.Keyword(null,"color","color",1011675173),gradients.view.input_color], null);
gradients.view.input = (function gradients$view$input(state,key){
var type = cljs.core.get_in.call(null,gradients.params.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"type","type",1174270348)], null));
return cljs.core.get.call(null,gradients.view.input_fns,type,gradients.view.unknown_input).call(null,state,key);
});
gradients.view.command = (function gradients$view$command(key){
return cljs.core.async.put_BANG_.call(null,gradients.state.commands,key);
});
gradients.view.view = (function gradients$view$view(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,(function (p1__8732_SHARP_){
return cljs.core.identity.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gradients.view.input,state,p1__8732_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__8732_SHARP_], null)));
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return gradients.view.command.call(null,new cljs.core.Keyword(null,"save","save",1850079149));
})], null),"download"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,state,gradients.state.randomize);
})], null),"randomize"], null)], null);
});
gradients.view.mount = (function gradients$view$mount(state){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gradients.view.view,state], null),document.querySelector(".controls"));
});

//# sourceMappingURL=view.js.map
