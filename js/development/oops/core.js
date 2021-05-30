// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__8596 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__8596)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__8596)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__8596)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8596)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__8597 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__8597)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__8597)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__8597)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8597)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8605 = arguments.length;
var i__4830__auto___8606 = (0);
while(true){
if((i__4830__auto___8606 < len__4829__auto___8605)){
args__4835__auto__.push((arguments[i__4830__auto___8606]));

var G__8607 = (i__4830__auto___8606 + (1));
i__4830__auto___8606 = G__8607;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__8600){
var vec__8601 = p__8600;
var info = cljs.core.nth.call(null,vec__8601,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__8604_8608 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__8604_8608)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__8604_8608)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__8604_8608)){
} else {
if(cljs.core._EQ_.call(null,null,G__8604_8608)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8604_8608)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq8598){
var G__8599 = cljs.core.first.call(null,seq8598);
var seq8598__$1 = cljs.core.next.call(null,seq8598);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8599,seq8598__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.boolean_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__4221__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && ((!(goog.object.containsKey(obj,key))))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__4221__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_8609 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_8609);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_8610 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_8610,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__4221__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_8612 = oops.config.get_child_factory.call(null);
var child_factory_8612__$1 = (function (){var G__8613 = child_factory_8612;
var G__8613__$1 = (((G__8613 instanceof cljs.core.Keyword))?G__8613.fqn:null);
switch (G__8613__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_8612;

}
})();

var child_obj_8611 = child_factory_8612__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_8611);
} else {
}

return child_obj_8611;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_8617 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_8617);

return selector_path_8617;
} else {
var selector_path_8618 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_8618);

return selector_path_8618;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_8619 = temp__5757__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_8619);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_8628 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_8628,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_8621 = (function (){var path_8620 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_8620,(0));

return path_8620;
})();
var len_8622 = path_8621.length;
var i_8623 = (0);
var obj_8624 = obj;
while(true){
if((i_8623 < len_8622)){
var mode_8625 = (path_8621[i_8623]);
var key_8626 = (path_8621[(i_8623 + (1))]);
var next_obj_8627 = oops.core.get_key_dynamically.call(null,obj_8624,key_8626,mode_8625);
var G__8629 = mode_8625;
switch (G__8629) {
case (0):
var G__8631 = (i_8623 + (2));
var G__8632 = next_obj_8627;
i_8623 = G__8631;
obj_8624 = G__8632;
continue;

break;
case (1):
if((!((next_obj_8627 == null)))){
var G__8633 = (i_8623 + (2));
var G__8634 = next_obj_8627;
i_8623 = G__8633;
obj_8624 = G__8634;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8627 == null)))){
var G__8635 = (i_8623 + (2));
var G__8636 = next_obj_8627;
i_8623 = G__8635;
obj_8624 = G__8636;
continue;
} else {
var G__8637 = (i_8623 + (2));
var G__8638 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8624,key_8626);
i_8623 = G__8637;
obj_8624 = G__8638;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8629)].join('')));

}
} else {
return obj_8624;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_8664 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_8664,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_8640 = (function (){var path_8639 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_8639,(0));

return path_8639;
})();
var len_8641 = path_8640.length;
if((len_8641 < (4))){
return [obj,(function (){var path_8643 = path_8640;
var len_8644 = path_8643.length;
var i_8645 = (0);
var obj_8646 = obj;
while(true){
if((i_8645 < len_8644)){
var mode_8647 = (path_8643[i_8645]);
var key_8648 = (path_8643[(i_8645 + (1))]);
var next_obj_8649 = oops.core.get_key_dynamically.call(null,obj_8646,key_8648,mode_8647);
var G__8665 = mode_8647;
switch (G__8665) {
case (0):
var G__8669 = (i_8645 + (2));
var G__8670 = next_obj_8649;
i_8645 = G__8669;
obj_8646 = G__8670;
continue;

break;
case (1):
if((!((next_obj_8649 == null)))){
var G__8671 = (i_8645 + (2));
var G__8672 = next_obj_8649;
i_8645 = G__8671;
obj_8646 = G__8672;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8649 == null)))){
var G__8673 = (i_8645 + (2));
var G__8674 = next_obj_8649;
i_8645 = G__8673;
obj_8646 = G__8674;
continue;
} else {
var G__8675 = (i_8645 + (2));
var G__8676 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8646,key_8648);
i_8645 = G__8675;
obj_8646 = G__8676;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8665)].join('')));

}
} else {
return obj_8646;
}
break;
}
})()];
} else {
var target_obj_8642 = (function (){var path_8650 = path_8640.slice((0),(len_8641 - (2)));
var len_8651 = path_8650.length;
var i_8652 = (0);
var obj_8653 = obj;
while(true){
if((i_8652 < len_8651)){
var mode_8654 = (path_8650[i_8652]);
var key_8655 = (path_8650[(i_8652 + (1))]);
var next_obj_8656 = oops.core.get_key_dynamically.call(null,obj_8653,key_8655,mode_8654);
var G__8666 = mode_8654;
switch (G__8666) {
case (0):
var G__8678 = (i_8652 + (2));
var G__8679 = next_obj_8656;
i_8652 = G__8678;
obj_8653 = G__8679;
continue;

break;
case (1):
if((!((next_obj_8656 == null)))){
var G__8680 = (i_8652 + (2));
var G__8681 = next_obj_8656;
i_8652 = G__8680;
obj_8653 = G__8681;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8656 == null)))){
var G__8682 = (i_8652 + (2));
var G__8683 = next_obj_8656;
i_8652 = G__8682;
obj_8653 = G__8683;
continue;
} else {
var G__8684 = (i_8652 + (2));
var G__8685 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8653,key_8655);
i_8652 = G__8684;
obj_8653 = G__8685;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8666)].join('')));

}
} else {
return obj_8653;
}
break;
}
})();
return [target_obj_8642,(function (){var path_8657 = [(path_8640[(len_8641 - (2))]),(path_8640[(len_8641 - (1))])];
var len_8658 = path_8657.length;
var i_8659 = (0);
var obj_8660 = target_obj_8642;
while(true){
if((i_8659 < len_8658)){
var mode_8661 = (path_8657[i_8659]);
var key_8662 = (path_8657[(i_8659 + (1))]);
var next_obj_8663 = oops.core.get_key_dynamically.call(null,obj_8660,key_8662,mode_8661);
var G__8667 = mode_8661;
switch (G__8667) {
case (0):
var G__8687 = (i_8659 + (2));
var G__8688 = next_obj_8663;
i_8659 = G__8687;
obj_8660 = G__8688;
continue;

break;
case (1):
if((!((next_obj_8663 == null)))){
var G__8689 = (i_8659 + (2));
var G__8690 = next_obj_8663;
i_8659 = G__8689;
obj_8660 = G__8690;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8663 == null)))){
var G__8691 = (i_8659 + (2));
var G__8692 = next_obj_8663;
i_8659 = G__8691;
obj_8660 = G__8692;
continue;
} else {
var G__8693 = (i_8659 + (2));
var G__8694 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8660,key_8662);
i_8659 = G__8693;
obj_8660 = G__8694;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8667)].join('')));

}
} else {
return obj_8660;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_8709 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_8709,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_8696 = (function (){var path_8695 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_8695,(1));

return path_8695;
})();
var len_8699 = path_8696.length;
var parent_obj_path_8700 = path_8696.slice((0),(len_8699 - (2)));
var key_8697 = (path_8696[(len_8699 - (1))]);
var mode_8698 = (path_8696[(len_8699 - (2))]);
var parent_obj_8701 = (function (){var path_8702 = parent_obj_path_8700;
var len_8703 = path_8702.length;
var i_8704 = (0);
var obj_8705 = obj;
while(true){
if((i_8704 < len_8703)){
var mode_8706 = (path_8702[i_8704]);
var key_8707 = (path_8702[(i_8704 + (1))]);
var next_obj_8708 = oops.core.get_key_dynamically.call(null,obj_8705,key_8707,mode_8706);
var G__8710 = mode_8706;
switch (G__8710) {
case (0):
var G__8712 = (i_8704 + (2));
var G__8713 = next_obj_8708;
i_8704 = G__8712;
obj_8705 = G__8713;
continue;

break;
case (1):
if((!((next_obj_8708 == null)))){
var G__8714 = (i_8704 + (2));
var G__8715 = next_obj_8708;
i_8704 = G__8714;
obj_8705 = G__8715;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8708 == null)))){
var G__8716 = (i_8704 + (2));
var G__8717 = next_obj_8708;
i_8704 = G__8716;
obj_8705 = G__8717;
continue;
} else {
var G__8718 = (i_8704 + (2));
var G__8719 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8705,key_8707);
i_8704 = G__8718;
obj_8705 = G__8719;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8710)].join('')));

}
} else {
return obj_8705;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_8701,key_8697,val,mode_8698);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
