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

var G__8572 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__8572)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__8572)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__8572)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8572)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__8573 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__8573)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__8573)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__8573)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8573)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4835__auto__ = [];
var len__4829__auto___8581 = arguments.length;
var i__4830__auto___8582 = (0);
while(true){
if((i__4830__auto___8582 < len__4829__auto___8581)){
args__4835__auto__.push((arguments[i__4830__auto___8582]));

var G__8583 = (i__4830__auto___8582 + (1));
i__4830__auto___8582 = G__8583;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__8576){
var vec__8577 = p__8576;
var info = cljs.core.nth.call(null,vec__8577,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__8580_8584 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__8580_8584)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__8580_8584)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__8580_8584)){
} else {
if(cljs.core._EQ_.call(null,null,G__8580_8584)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8580_8584)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq8574){
var G__8575 = cljs.core.first.call(null,seq8574);
var seq8574__$1 = cljs.core.next.call(null,seq8574);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8575,seq8574__$1);
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
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
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
var descriptor_8585 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_8585);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_8586 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_8586,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_8588 = oops.config.get_child_factory.call(null);
var child_factory_8588__$1 = (function (){var G__8589 = child_factory_8588;
var G__8589__$1 = (((G__8589 instanceof cljs.core.Keyword))?G__8589.fqn:null);
switch (G__8589__$1) {
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
return child_factory_8588;

}
})();

var child_obj_8587 = child_factory_8588__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_8587);
} else {
}

return child_obj_8587;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_8593 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_8593);

return selector_path_8593;
} else {
var selector_path_8594 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_8594);

return selector_path_8594;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_8595 = temp__5757__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_8595);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_8604 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_8604,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_8597 = (function (){var path_8596 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_8596,(0));

return path_8596;
})();
var len_8598 = path_8597.length;
var i_8599 = (0);
var obj_8600 = obj;
while(true){
if((i_8599 < len_8598)){
var mode_8601 = (path_8597[i_8599]);
var key_8602 = (path_8597[(i_8599 + (1))]);
var next_obj_8603 = oops.core.get_key_dynamically.call(null,obj_8600,key_8602,mode_8601);
var G__8605 = mode_8601;
switch (G__8605) {
case (0):
var G__8607 = (i_8599 + (2));
var G__8608 = next_obj_8603;
i_8599 = G__8607;
obj_8600 = G__8608;
continue;

break;
case (1):
if((!((next_obj_8603 == null)))){
var G__8609 = (i_8599 + (2));
var G__8610 = next_obj_8603;
i_8599 = G__8609;
obj_8600 = G__8610;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8603 == null)))){
var G__8611 = (i_8599 + (2));
var G__8612 = next_obj_8603;
i_8599 = G__8611;
obj_8600 = G__8612;
continue;
} else {
var G__8613 = (i_8599 + (2));
var G__8614 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8600,key_8602);
i_8599 = G__8613;
obj_8600 = G__8614;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8605)].join('')));

}
} else {
return obj_8600;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_8640 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_8640,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_8616 = (function (){var path_8615 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_8615,(0));

return path_8615;
})();
var len_8617 = path_8616.length;
if((len_8617 < (4))){
return [obj,(function (){var path_8619 = path_8616;
var len_8620 = path_8619.length;
var i_8621 = (0);
var obj_8622 = obj;
while(true){
if((i_8621 < len_8620)){
var mode_8623 = (path_8619[i_8621]);
var key_8624 = (path_8619[(i_8621 + (1))]);
var next_obj_8625 = oops.core.get_key_dynamically.call(null,obj_8622,key_8624,mode_8623);
var G__8641 = mode_8623;
switch (G__8641) {
case (0):
var G__8645 = (i_8621 + (2));
var G__8646 = next_obj_8625;
i_8621 = G__8645;
obj_8622 = G__8646;
continue;

break;
case (1):
if((!((next_obj_8625 == null)))){
var G__8647 = (i_8621 + (2));
var G__8648 = next_obj_8625;
i_8621 = G__8647;
obj_8622 = G__8648;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8625 == null)))){
var G__8649 = (i_8621 + (2));
var G__8650 = next_obj_8625;
i_8621 = G__8649;
obj_8622 = G__8650;
continue;
} else {
var G__8651 = (i_8621 + (2));
var G__8652 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8622,key_8624);
i_8621 = G__8651;
obj_8622 = G__8652;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8641)].join('')));

}
} else {
return obj_8622;
}
break;
}
})()];
} else {
var target_obj_8618 = (function (){var path_8626 = path_8616.slice((0),(len_8617 - (2)));
var len_8627 = path_8626.length;
var i_8628 = (0);
var obj_8629 = obj;
while(true){
if((i_8628 < len_8627)){
var mode_8630 = (path_8626[i_8628]);
var key_8631 = (path_8626[(i_8628 + (1))]);
var next_obj_8632 = oops.core.get_key_dynamically.call(null,obj_8629,key_8631,mode_8630);
var G__8642 = mode_8630;
switch (G__8642) {
case (0):
var G__8654 = (i_8628 + (2));
var G__8655 = next_obj_8632;
i_8628 = G__8654;
obj_8629 = G__8655;
continue;

break;
case (1):
if((!((next_obj_8632 == null)))){
var G__8656 = (i_8628 + (2));
var G__8657 = next_obj_8632;
i_8628 = G__8656;
obj_8629 = G__8657;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8632 == null)))){
var G__8658 = (i_8628 + (2));
var G__8659 = next_obj_8632;
i_8628 = G__8658;
obj_8629 = G__8659;
continue;
} else {
var G__8660 = (i_8628 + (2));
var G__8661 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8629,key_8631);
i_8628 = G__8660;
obj_8629 = G__8661;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8642)].join('')));

}
} else {
return obj_8629;
}
break;
}
})();
return [target_obj_8618,(function (){var path_8633 = [(path_8616[(len_8617 - (2))]),(path_8616[(len_8617 - (1))])];
var len_8634 = path_8633.length;
var i_8635 = (0);
var obj_8636 = target_obj_8618;
while(true){
if((i_8635 < len_8634)){
var mode_8637 = (path_8633[i_8635]);
var key_8638 = (path_8633[(i_8635 + (1))]);
var next_obj_8639 = oops.core.get_key_dynamically.call(null,obj_8636,key_8638,mode_8637);
var G__8643 = mode_8637;
switch (G__8643) {
case (0):
var G__8663 = (i_8635 + (2));
var G__8664 = next_obj_8639;
i_8635 = G__8663;
obj_8636 = G__8664;
continue;

break;
case (1):
if((!((next_obj_8639 == null)))){
var G__8665 = (i_8635 + (2));
var G__8666 = next_obj_8639;
i_8635 = G__8665;
obj_8636 = G__8666;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8639 == null)))){
var G__8667 = (i_8635 + (2));
var G__8668 = next_obj_8639;
i_8635 = G__8667;
obj_8636 = G__8668;
continue;
} else {
var G__8669 = (i_8635 + (2));
var G__8670 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8636,key_8638);
i_8635 = G__8669;
obj_8636 = G__8670;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8643)].join('')));

}
} else {
return obj_8636;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_8685 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_8685,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_8672 = (function (){var path_8671 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_8671,(1));

return path_8671;
})();
var len_8675 = path_8672.length;
var parent_obj_path_8676 = path_8672.slice((0),(len_8675 - (2)));
var key_8673 = (path_8672[(len_8675 - (1))]);
var mode_8674 = (path_8672[(len_8675 - (2))]);
var parent_obj_8677 = (function (){var path_8678 = parent_obj_path_8676;
var len_8679 = path_8678.length;
var i_8680 = (0);
var obj_8681 = obj;
while(true){
if((i_8680 < len_8679)){
var mode_8682 = (path_8678[i_8680]);
var key_8683 = (path_8678[(i_8680 + (1))]);
var next_obj_8684 = oops.core.get_key_dynamically.call(null,obj_8681,key_8683,mode_8682);
var G__8686 = mode_8682;
switch (G__8686) {
case (0):
var G__8688 = (i_8680 + (2));
var G__8689 = next_obj_8684;
i_8680 = G__8688;
obj_8681 = G__8689;
continue;

break;
case (1):
if((!((next_obj_8684 == null)))){
var G__8690 = (i_8680 + (2));
var G__8691 = next_obj_8684;
i_8680 = G__8690;
obj_8681 = G__8691;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_8684 == null)))){
var G__8692 = (i_8680 + (2));
var G__8693 = next_obj_8684;
i_8680 = G__8692;
obj_8681 = G__8693;
continue;
} else {
var G__8694 = (i_8680 + (2));
var G__8695 = oops.core.punch_key_dynamically_BANG_.call(null,obj_8681,key_8683);
i_8680 = G__8694;
obj_8681 = G__8695;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8686)].join('')));

}
} else {
return obj_8681;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_8677,key_8673,val,mode_8674);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
