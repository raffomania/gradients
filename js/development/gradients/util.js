// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('gradients.util');
goog.require('cljs.core');
gradients.util.screen_res = (function gradients$util$screen_res(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(window["screen"]["availWidth"]),(window["screen"]["availHeight"])], null);
});
gradients.util.random_neg = (function gradients$util$random_neg(max){
return (cljs.core.rand.call(null,max) - (max / (2)));
});
gradients.util.lerp = (function gradients$util$lerp(val,a,b){
return ((val * b) - a);
});
gradients.util.sqr = (function gradients$util$sqr(val){
return (val * val);
});
gradients.util.mixmul = (function gradients$util$mixmul(orig,param,factor){
return ((orig * ((1) - param)) + ((orig * factor) * param));
});
gradients.util.rescale = (function gradients$util$rescale(value,old_min,old_max,new_min,new_max){

var old_spread = (old_max - old_min);
var new_spread = (new_max - new_min);
return (((value - old_min) * (new_spread / old_spread)) + new_min);
});

//# sourceMappingURL=util.js.map
