// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('thi.ng.math.noise');
goog.require('cljs.core');
goog.require('thi.ng.typedarrays.core');
goog.require('thi.ng.math.core');
thi.ng.math.noise.P = thi.ng.typedarrays.core.uint8.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.repeat.call(null,(2),cljs.core.PersistentVector.fromArray([(151),(160),(137),(91),(90),(15),(131),(13),(201),(95),(96),(53),(194),(233),(7),(225),(140),(36),(103),(30),(69),(142),(8),(99),(37),(240),(21),(10),(23),(190),(6),(148),(247),(120),(234),(75),(0),(26),(197),(62),(94),(252),(219),(203),(117),(35),(11),(32),(57),(177),(33),(88),(237),(149),(56),(87),(174),(20),(125),(136),(171),(168),(68),(175),(74),(165),(71),(134),(139),(48),(27),(166),(77),(146),(158),(231),(83),(111),(229),(122),(60),(211),(133),(230),(220),(105),(92),(41),(55),(46),(245),(40),(244),(102),(143),(54),(65),(25),(63),(161),(1),(216),(80),(73),(209),(76),(132),(187),(208),(89),(18),(169),(200),(196),(135),(130),(116),(188),(159),(86),(164),(100),(109),(198),(173),(186),(3),(64),(52),(217),(226),(250),(124),(123),(5),(202),(38),(147),(118),(126),(255),(82),(85),(212),(207),(206),(59),(227),(47),(16),(58),(17),(182),(189),(28),(42),(223),(183),(170),(213),(119),(248),(152),(2),(44),(154),(163),(70),(221),(153),(101),(155),(167),(43),(172),(9),(129),(22),(39),(253),(19),(98),(108),(110),(79),(113),(224),(232),(178),(185),(112),(104),(218),(246),(97),(228),(251),(34),(242),(193),(238),(210),(144),(12),(191),(179),(162),(241),(81),(51),(145),(235),(249),(14),(239),(107),(49),(192),(214),(31),(181),(199),(106),(157),(184),(84),(204),(176),(115),(121),(50),(45),(127),(4),(150),(254),(138),(236),(205),(93),(222),(114),(67),(29),(24),(72),(243),(141),(128),(195),(78),(66),(215),(61),(156),(180)], true))));
thi.ng.math.noise.G = thi.ng.typedarrays.core.float32.call(null,cljs.core.PersistentVector.fromArray([1.0,1.0,0.0,0.0,-1.0,1.0,0.0,0.0,1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,1.0,0.0,1.0,0.0,-1.0,0.0,1.0,0.0,1.0,0.0,-1.0,0.0,-1.0,0.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,1.0,0.0,0.0,1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,1.0,1.0,0.0,0.0,-1.0,1.0,0.0,0.0,0.0,-1.0,1.0,0.0,0.0,-1.0,-1.0,0.0], true));
thi.ng.math.noise.smooth = (function thi$ng$math$noise$smooth(t){
return (t * (t * (t * ((t * ((t * 6.0) - 15.0)) + 10.0))));
});
thi.ng.math.noise.gradient1 = (function thi$ng$math$noise$gradient1(i,x){
return (x * (thi.ng.math.noise.G[(((thi.ng.math.noise.P[i]) & (15)) << (2))]));
});
thi.ng.math.noise.gradient2 = (function thi$ng$math$noise$gradient2(i,j,x,y){
var idx = (((thi.ng.math.noise.P[(i + (thi.ng.math.noise.P[j]))]) & (15)) << (2));
return ((x * (thi.ng.math.noise.G[idx])) + (y * (thi.ng.math.noise.G[(idx + (1))])));
});
thi.ng.math.noise.gradient3 = (function thi$ng$math$noise$gradient3(i,j,k,x,y,z){
var idx = (((thi.ng.math.noise.P[(i + (thi.ng.math.noise.P[(j + (thi.ng.math.noise.P[k]))]))]) & (15)) << (2));
return (((x * (thi.ng.math.noise.G[idx])) + (y * (thi.ng.math.noise.G[(idx + (1))]))) + (z * (thi.ng.math.noise.G[(idx + (2))])));
});
thi.ng.math.noise.noise1 = (function thi$ng$math$noise$noise1(x){
var xf = thi.ng.math.core.floor.call(null,x);
var f = (x - xf);
var ix = (xf & (255));
return ((function (){var a__2428__auto__ = thi.ng.math.noise.gradient1.call(null,ix,f);
return (((thi.ng.math.noise.gradient1.call(null,(ix + (1)),(f - (1))) - a__2428__auto__) * thi.ng.math.noise.smooth.call(null,f)) + a__2428__auto__);
})() * 2.0);
});
thi.ng.math.noise.noise2 = (function thi$ng$math$noise$noise2(x,y){
var pfx = thi.ng.math.core.floor.call(null,x);
var pfy = thi.ng.math.core.floor.call(null,y);
var fpx = (x - pfx);
var fpy = (y - pfy);
var ipx = (pfx & (255));
var ipy = (pfy & (255));
var ipx_SINGLEQUOTE_ = (ipx + (1));
var ipy_SINGLEQUOTE_ = (ipy + (1));
var fpx_SINGLEQUOTE_ = (fpx - (1));
var fpy_SINGLEQUOTE_ = (fpy - (1));
var u__2429__auto__ = thi.ng.math.noise.smooth.call(null,fpx);
var a__2430__auto__ = (function (){var a__2428__auto__ = thi.ng.math.noise.gradient2.call(null,ipx,ipy,fpx,fpy);
return (((thi.ng.math.noise.gradient2.call(null,ipx_SINGLEQUOTE_,ipy,fpx_SINGLEQUOTE_,fpy) - a__2428__auto__) * u__2429__auto__) + a__2428__auto__);
})();
return ((((function (){var a__2428__auto__ = thi.ng.math.noise.gradient2.call(null,ipx,ipy_SINGLEQUOTE_,fpx,fpy_SINGLEQUOTE_);
return (((thi.ng.math.noise.gradient2.call(null,ipx_SINGLEQUOTE_,ipy_SINGLEQUOTE_,fpx_SINGLEQUOTE_,fpy_SINGLEQUOTE_) - a__2428__auto__) * u__2429__auto__) + a__2428__auto__);
})() - a__2430__auto__) * thi.ng.math.noise.smooth.call(null,fpy)) + a__2430__auto__);
});
thi.ng.math.noise.noise3 = (function thi$ng$math$noise$noise3(x,y,z){
var pfx = thi.ng.math.core.floor.call(null,x);
var pfy = thi.ng.math.core.floor.call(null,y);
var pfz = thi.ng.math.core.floor.call(null,z);
var fpx = (x - pfx);
var fpy = (y - pfy);
var fpz = (z - pfz);
var ipx = (pfx & (255));
var ipy = (pfy & (255));
var ipz = (pfz & (255));
var ipx_SINGLEQUOTE_ = (ipx + (1));
var ipy_SINGLEQUOTE_ = (ipy + (1));
var ipz_SINGLEQUOTE_ = (ipz + (1));
var fpx_SINGLEQUOTE_ = (fpx - (1));
var fpy_SINGLEQUOTE_ = (fpy - (1));
var fpz_SINGLEQUOTE_ = (fpz - (1));
var t = thi.ng.math.noise.smooth.call(null,fpx);
var t2 = thi.ng.math.noise.smooth.call(null,fpy);
var u__2431__auto__ = t;
var v__2432__auto__ = t2;
var a__2433__auto__ = (function (){var u__2429__auto__ = u__2431__auto__;
var a__2430__auto__ = (function (){var a__2428__auto__ = thi.ng.math.noise.gradient3.call(null,ipx,ipy,ipz,fpx,fpy,fpz);
return (((thi.ng.math.noise.gradient3.call(null,ipx_SINGLEQUOTE_,ipy,ipz,fpx_SINGLEQUOTE_,fpy,fpz) - a__2428__auto__) * u__2429__auto__) + a__2428__auto__);
})();
return ((((function (){var a__2428__auto__ = thi.ng.math.noise.gradient3.call(null,ipx,ipy_SINGLEQUOTE_,ipz,fpx,fpy_SINGLEQUOTE_,fpz);
return (((thi.ng.math.noise.gradient3.call(null,ipx_SINGLEQUOTE_,ipy_SINGLEQUOTE_,ipz,fpx_SINGLEQUOTE_,fpy_SINGLEQUOTE_,fpz) - a__2428__auto__) * u__2429__auto__) + a__2428__auto__);
})() - a__2430__auto__) * v__2432__auto__) + a__2430__auto__);
})();
return ((((function (){var u__2429__auto__ = u__2431__auto__;
var a__2430__auto__ = (function (){var a__2428__auto__ = thi.ng.math.noise.gradient3.call(null,ipx,ipy,ipz_SINGLEQUOTE_,fpx,fpy,fpz_SINGLEQUOTE_);
return (((thi.ng.math.noise.gradient3.call(null,ipx_SINGLEQUOTE_,ipy,ipz_SINGLEQUOTE_,fpx_SINGLEQUOTE_,fpy,fpz_SINGLEQUOTE_) - a__2428__auto__) * u__2429__auto__) + a__2428__auto__);
})();
return ((((function (){var a__2428__auto__ = thi.ng.math.noise.gradient3.call(null,ipx,ipy_SINGLEQUOTE_,ipz_SINGLEQUOTE_,fpx,fpy_SINGLEQUOTE_,fpz_SINGLEQUOTE_);
return (((thi.ng.math.noise.gradient3.call(null,ipx_SINGLEQUOTE_,ipy_SINGLEQUOTE_,ipz_SINGLEQUOTE_,fpx_SINGLEQUOTE_,fpy_SINGLEQUOTE_,fpz_SINGLEQUOTE_) - a__2428__auto__) * u__2429__auto__) + a__2428__auto__);
})() - a__2430__auto__) * v__2432__auto__) + a__2430__auto__);
})() - a__2433__auto__) * thi.ng.math.noise.smooth.call(null,fpz)) + a__2433__auto__);
});

//# sourceMappingURL=noise.js.map
