!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=C.appId,a.verifyAppId=C.appId,a.verifySignType="sha1",a.verifyTimestamp=C.timestamp+"",a.verifyNonceStr=C.nonceStr,a.verifySignature=C.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",C.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var e,f,c=a,d=p[c];return d&&(c=d),e="ok",b&&(f=b.indexOf(":"),e=b.substring(f+1),"confirm"==e&&(e="ok"),"failed"==e&&(e="fail"),-1!=e.indexOf("failed_")&&(e=e.substring(7)),-1!=e.indexOf("fail_")&&(e=e.substring(5)),e=e.replace(/_/g," "),e=e.toLowerCase(),("access denied"==e||"no permission to execute"==e)&&(e="permission denied"),"config"==c&&"function not exist"==e&&(e="ok"),""==e&&(e="fail")),b=c+":"+e}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!C.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){if(!(u||v||C.debug||"6.0.2">z||B.systemType<0)){var b=new Image;B.appId=C.appId,B.initTime=A.initEndTime-A.initStartTime,B.preVerifyTime=A.preVerifyEndTime-A.preVerifyStartTime,F.getNetworkType({isInnerInvoke:!0,success:function(a){B.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;b.src=c}})}}function l(){return(new Date).getTime()}function m(b){w&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){F.invoke||(F.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},F.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase(),u=!(!t.match("mac")&&!t.match("win")),v=-1!=s.indexOf("wxdebugger"),w=-1!=s.indexOf("micromessenger"),x=-1!=s.indexOf("android"),y=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),z=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),A={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:y?1:x?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},C={},D={_completes:[]},E={state:0,data:{}},m(function(){A.initEndTime=l()}),F={config:function(a){C=a,j("config",a);var b=C.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(C.jsApiList)},function(){D._complete=function(a){A.preVerifyEndTime=l(),E.state=1,E.data=a},D.success=function(){B.isPreVerifyOk=0},D.fail=function(a){D._fail?D._fail(a):E.state=-1};var a=D._completes;return a.push(function(){k()}),D.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();D._completes=[]},D}()),A.preVerifyStartTime=l();else{for(E.state=1,a=D._completes,d=0,e=a.length;e>d;++d)a[d]();D._completes=[]}}),C.beta&&n()},ready:function(a){0!=E.state?a():(D._completes.push(a),!w&&C.debug&&a())},error:function(a){"6.0.2">z||(-1==E.state?a(E.data):D._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(x){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(x){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;y&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0,ext_info:a.extInfo},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:C.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=F),F});

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
(function($) {

    var auth = $('#auth').val();
    var group_id = $('#groupId').val();
    var group_name = $('#groupName').val();
    var invitationCode = $('#invitation').val();
    var groupBannerUrl = $('#groupBannerUrl').val();
    var groupBannerWidth = $('#groupBannerWidth').val();
    var groupBannerHeight = $('#groupBannerHeight').val();
    var api = $('#api').val();

    var qiniu = {};
    var uuid = guid();
    var user_uuid = '';

    var h_stand = 300;
    var w_stand = 400;
    var w_win = 600;
    var w2 = 0;

    var page = 1;
    var hasNext = false;
    var tpWrapper = $('.tp-wrapper').html();

    $.ajaxSetup({
        headers: {'Authorization': auth}
    });

    var group_template = $('<div class="tp-wrapper">\
        <section class="tp-store-wrapper clearfix" style="display:none;">\
            <a class="tp-left close tp-icon tp-close" href="javascript:;"></a>\
            <div class="tp-store-info tp-left">\
                <span class="tp-icon tp-store tp-left"></span>\
                <p class="fz26">请按右上角选择“收藏”</p>\
                <p>（在收藏中搜索<span>「图扑」</span>可快速找回）</p>\
            </div>\
            <span class="tp-icon tp-return tp-left"></span>\
        </section>\
        <section class="tp-album-banner">\
            <div class="tp-banner-image">\
                <img src="" />\
                <h2 class="js-album-name">「」</h2>\
            </div>\
        </section>\
        <section class="tp-invitation success" style="display:none;">\
            <div class="tp-invitation-bg"></div>\
            <a class="tp-btn-blue" href="#">确认加入这个群相册</a>\
        </section>\
        <section class="tp-invitation error" style="display:none;">\
            <div class="tp-invitation-bg">\
            <div class="tp-icon tp-tip"></div>\
            <p>邀请已过期，无法加入</p>\
            </div>\
        </section>\
        <div class="tp-album-tab clearfix">\
            <a class="tp-album-btn tp-album-number active" href="javascript:;"><span class="js-group-num"></span> 照片</a>\
            <span class="line"></span>\
            <a class="tp-album-btn tp-album-member" href="javascript:;"><span class="js-member-num"></span> 群友</a>\
        </div>\
        <section class="tp-album-main tp-album-upload clearfix" id="container">\
            <a class="tp-album-btn tp-album-btn-big" id="js-upload-image" href="#"><span class="tp-icon tp-icon-add"></span>添加照片到相册</a>\
        </section>\
        <p class="tp-album-btn tp-album-btn-big tp-upload-btn" href="#" style="display:none;margin: 20px 20px 0 20px;"><span class="tp-icon tp-icon-add"></span>添加照片到相册</p>\
        <section class="tp-album-main tp-album-photo clearfix">\
            <section id="tp-album-thumb" class="clearfix"></section>\
            <div class="loading clearfix" style="display:none;">\
                <span class="square1"></span><span class="square2"></span><span class="square3"></span><span class="square4"></span>\
            </div>\
        </section>\
        <section class="tp-album-main tp-member-wrapper" style="display: none;">\
            <section class="tp-member-thumb clearfix"></section>\
        </section>\
    </div>\
    <footer style="display:none;">\
        <a class="tp-download-btn" href="http://a.app.qq.com/o/simple.jsp?pkgname=im.tupu.tupu"><span class="tp-icon tp-logo"></span>安装<strong>图扑APP</strong>&nbsp;&nbsp;&nbsp;轻松收集好照片</a>\
        <p>最好用的微信群相册，聚会、旅行、活动照片收集利器</p>\
    </footer>\
    <div class="modal clearfix no-confirm">\
        <a class="modal-close tp-icon tp-close-black" href="javascript:;"></a>\
        <div class="modal-main">\
        <section class="tp-user clearfix">\
            <img src="" width="40"/>\
                <p class="tp-user-name tp-left"></p>\
                <p class="tp-time"></p>\
        </section>\
        <div class="img-wrapper tp-left" style="width: 1280px;"><img class="pic tp-left" src="" /></div>\
            <span class="tp-liked-animation"></span>\
            <span class="tp-heart-left tp-heart"></span>\
            <span class="tp-heart-right tp-heart"></span>\
            <div class="tp-photo-like">\
                <p class="js-tp-desc"></p>\
                <div class="clearfix">\
                    <a class="js-tp-like tp-icon tp-like-black tp-right" href="javascript:;"></a>\
                    <a class="js-tp-delete tp-icon tp-delete tp-right" href="javascript:;"></a>\
                    <p class="tp-like-num"><span class="js-like-num"></span> 赞</p>\
                </div>\
            </div>\
        </div>\
        <div class="delete-btn-wrapper">\
            <a class="js-delete" href="javascript:;">删除照片</a>\
            <a class="js-cancel" href="javascript:;">取消</a>\
        </div>\
    </div>\
    <div class="modal clearfix modal-download" style="margin-left:-640px;">\
        <a class="modal-close tp-icon tp-close" href="javascript:;"></a>\
        <div class="modal-bg"></div>\
        <div class="modal-main">\
            <img class="logo" src="">\
            <p class="slogan">图扑，最好用的微信群相册</p>\
            <p class="intro">随时收获新照片</br>即时收到赞消息</p>\
            <a class="btn" href="javascript:;"><span class="tp-icon tp-download-blue"></span>点击安装APP</a>\
            <img class="info" src="">\
        </div>\
    </div>\
    <div class="modal clearfix confirm" style="display:none;">\
        <div class="modal-bg"></div>\
        <div class="confirm-main">\
            <h2>正在上传高清照片，请稍候</h2>\
            <p>安装图扑APP，高速上传批量照片，随时下载高清大图。</p>\
            <div class="btn-wrapper">\
                <a class="confirm-close" href="javascript:;">我知道了</a>\
                <a class="confirm-download" href="">安装APP</a>\
            </div>\
        </div>\
    </div>');

    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: $('#appId').val(), // 必填，公众号的唯一标识
        timestamp: $('#timestamp').val(), // 必填，生成签名的时间戳
        nonceStr: $('#nonceStr').val(), // 必填，生成签名的随机串
        signature: $('#signature').val(),// 必填，签名，见附录1
        jsApiList: ['hideMenuItems','onMenuShareTimeline','onMenuShareAppMessage','chooseImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function(){
        wx.hideMenuItems({
            menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:faceboo', 'menuItem:share:QZone', 'menuItem:copyUr', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:share:email','menuItem:share:appMessage','menuItem:share:timeline'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
      
    });

    /**
     * 获取七牛token等信息，初始上传信息
     */
    $.get(api + 'api/v1/apps/qiniu/', function(data){
        if (data) {
            qiniu = data;
            resetQiniu(data.expires_at/100);
            $('body').find('.modal-main .logo').attr('src', qiniu.https_domain +'img/logo_big.png');
            $('body').find('.modal-main .info').attr('src', qiniu.https_domain +'img/info.png');
            isInvitation();
        }
    });
    
    
    $('body').append(group_template);
    getUserInfo();
    setBanner();   
    $('.js-album-name').html('「' + group_name+ '」');

    var nav = navigator,
        params = localParam(),
        isIDevice = (/iphone|ipod/gi).test(nav.platform),
        isIDeviceIpad = (/ipad/gi).test(nav.platform),
        isAndroid = (/Android/gi).test(nav.userAgent);
    

    function isInvitation() {
        var wrapper = $('.tp-wrapper');
        var footer = $('footer');
        var invi_wrapper = $('.tp-invitation');
        var btn_invitation = invi_wrapper.find('a');
        var win_height = $(window).height();
        var tip_inivitation = invi_wrapper.find('.tp-tip');
        var url = api + 'api/v1/users/self/groups/';
        var top = ($(window).height() - 90)/2;
                
        
        $.ajax({
            url: url,
            method: 'POST', 
            data: {
                'dryrun': 'true',
                'invitation': invitationCode
            },
            success: function(data, responseText, XMLHttpRequest) {
                $('.tp-wrapper').append('<div class="init" style="position: fixed;left: 0;top: 0;width: 640px;height: 100%;"><div class="deleting" style="top:' + top + 'px;position:fixed;"><img src="'+ qiniu.https_domain + 'img/loading_web.png" width="52"/></div></div>');         
            
                if (XMLHttpRequest.status == 200) {
                    if (!data) {                       
                        $('.tp-invitation.success').show();
                        wrapper.height(win_height).css('overflow', 'hidden');

                        invi_wrapper.height(win_height - 340);
                        btn_invitation.css({
                            'margin-top': (win_height - 440)/2
                        });
                        tip_inivitation.css({
                            'margin-top': (win_height - 163 - 340)/2
                        });
                        $('.tp-btn-blue').on('click', function(e) {
                            e.preventDefault();
                            invitation();
                        });    
                    } else {
                        $('body').append(group_template);
                        invitationHander(data);
                    } 
                } 
            },
            error: function(XMLHttpRequest, responseText) {
                var error =  $('.tp-invitation.error'),
                    tips = error.find('p');
                if (XMLHttpRequest.status == 403 || XMLHttpRequest.status == 400) {
                    if (XMLHttpRequest.responseText.indexOf('Invitation expired') != -1) {
                        tips.html('邀请已过期，无法加入');    
                    } else if (XMLHttpRequest.responseText.indexOf('nvalid invitation') != -1) {
                        tips.html('邀请人已退群，无法加入');      
                    } else if (XMLHttpRequest.responseText.indexOf('Group reach member limit') != -1) {
                        tips.html('群相册已满员，无法加入'); 
                    } 
                } else if(XMLHttpRequest.status == 404 ) {
                    tips.html('相册不存在，无法加入');  
                }

                error.css('display','block');                  
                wrapper.height(win_height).css('overflow', 'hidden');

                invi_wrapper.height(win_height - 340);
                btn_invitation.css({
                    'margin-top': (win_height - 440)/2
                });
                tip_inivitation.css({
                    'margin-top': (win_height - 163 - 340)/2
                });
            }
            
        });
    }

    function getUserInfo() {
        var url = api + 'api/v1/users/self/';
        $.get(url, function(data) {
            if (data) {
                user_uuid =  data.user.uuid;
            }
        });
      
    }
   
    /**
     * 邀请页面对应的操作
     */
    function invitationHander(data) {
        var album_user = data.users;
            group_id = data.group.id;      
        $('.tp-wrapper').height('auto').attr('style', '');
        $('.tp-invitation').animate({
            'margin-top': $('.tp-invitation').height()
        }, 1000, function() {
            $(this).css('display','none');
            $('.tp-store-wrapper ').show().on('click', function(e){
                e.preventDefault();
                if (e.offsetX < 300) {
                    $(this).parent().animate({
                        'margin-top': '-95px'
                    }, 1000);
                }
            });
        });
        $('.js-member-num').html(data.group.members_count);
        $('.js-group-num').html(data.group.posts_count);       

        // addUsers(album_user);
        uploadImage();
        getGroupImages(page);  
    }

    function invitation() {
        var url = api + 'api/v1/users/self/groups/';
        $.post(url, {
            'invitation': invitationCode}, function(data) {
            if (data) {                
                invitationHander(data);
            }
        });
    }
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
        }
        return s4() + s4() + s4()  + s4() + s4() + s4() + s4() + s4();
    }


    function setBanner() {
        var width = groupBannerWidth;
        var height = 640 * groupBannerHeight / width;
        var url = groupBannerUrl;
        if (width/groupBannerHeight >= 640/341) {
            $('.tp-banner-image img').attr('src', url).height('100%');
        } else {
            $('.tp-banner-image img').attr('src', url).width('100%');
            if (height > 340) {
                $('.tp-banner-image img').css('top', -(height-340)/2);    
            }
        }
    }

    /**
     * 获取群友
     * @param users
     */
    function addUsers(users) {
        
        var len = users.length;
        for (var i = 0; i < len; i++) {
            var template = $('<div class="tp-member-item">\
            <img src="" alt="" />\
            <p class="tp-member-nick"></p>\
            </div>');
            template.find('img').attr({
                'src': users[i].headimgurl || qiniu.https_domain +'img/avatar_default.png',
                'alt': users[i].nickname
            });
            template.find('.tp-member-nick').html(users[i].nickname);           
            $('.tp-member-thumb').append(template);
        }

    }
    
    var qiniuTimer;
    function resetQiniu(time) {
        qiniuTimer = setInterval(function() {
            $.get(api + 'api/v1/apps/qiniu/', function(data){
                if (data) {
                    qiniu = data;
                }
            });
        }, time);
    }
    function setConfirm(params) {
        var win_height = $(window).height();
        var win_width = $(window).width();
        var title = params.title || '';
        var des = params.des || '';
        var confirm_href = params.href || 'javascript:;';
        var confirm_btn = params.btn || '我知道了';
        var confirm_fuc = params.fuc || null;
        var confirm = $('.confirm .confirm-main');
        $('.confirm').css({
            'height': win_height+2,
            'width': win_width,
            'display': 'block'
        });
        confirm.find('h2').html(title);
        confirm.find('p').html(des);
        confirm.css('top', (win_height-214)/2);
        confirm.find('.confirm-close').attr('href', confirm_href).html(confirm_btn);
        confirm.find('.confirm-download').attr('href', $('.tp-download-btn').attr('href'));
        confirm.find('.confirm-close').on('click', confirm_fuc);
    }
    $('.tp-upload-btn').on('click', function() {
        setConfirm({
            'title': '正在上传高清照片，请稍候',
            'des': '安装图扑APP，高速上传批量照片，随时下载高清大图。',
            'fuc': function() {
                $('.confirm').hide();
            }  
        });    
    });

    function uploadImage() {
        var compressSize = isAndroid ? 1280 : 1440;
                
        var uploader = Qiniu.uploader({
            runtimes: 'html5,flash,html4',    //上传模式,依次退化
            browse_button: 'js-upload-image',       //上传选择的点选按钮，**必需**
            uptoken_url: qiniu['token'],            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
            container: 'container',
            // downtoken_url: '/downtoken',
            // Ajax请求downToken的Url，私有空间时使用,JS-SDK将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
            uptoken : qiniu['token'], //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
            unique_names: false, // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
            save_key: false,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
            domain: qiniu['https_domain'],   //bucket 域名，下载资源时用到，**必需**
            get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
            container: 'container',           //上传区域DOM ID，默认是browser_button的父元素，
            max_file_size: '1000mb',           //最大文件体积限制
            flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
            max_retries: 3,                   //上传失败最大重试次数
            dragdrop: false,                   //开启可拖曳上传
            drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
            chunk_size: '4mb',                //分块上传时，每片的体积
            auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传,
            multi_selection: false,
            resize: {
                // 长宽限制，超过设置尺寸则按比例缩放
                width: compressSize,
                height: compressSize,
                // jpeg 压缩质量，默认 90
                quality: 80
            },
            init: {
                'FilesAdded': function(up, files) {
                    window.isLoading = true;
                    if (isAndroid) {
                        var top = ($(window).height() - 90)/2;
                        $('.tp-wrapper').append('<div class="deleting" style="top:' + top + 'px;position:fixed;"><img src="'+ qiniu.https_domain + 'img/loading_web.png" width="52"/></div>');           
                    }     

                    $('.tp-album-upload').hide();
                    $('.tp-upload-btn').show();
                    $('html,body').scrollTop(440);
                    plupload.each(files, function(file) {
                        // 文件添加进队列后,处理相关的事情
                        var preloader = new mOxie.Image();

                        preloader.onload = function() {
                            $('.tp-photo-wrapper').remove();
                            $('.tp-wrapper .deleting').remove();
                            w2 = 0;
                            page = 1;
                            if (preloader.meta && preloader.meta.tiff && preloader.meta.tiff.Orientation && (preloader.meta.tiff.Orientation == '6' || preloader.meta.tiff.Orientation == '8')) {
                                var a = [{'photo': {'url': preloader.getAsDataURL(),
                                    'width': preloader.height,
                                    'height' : preloader.width
                                }}];    
                            } else {
                                var a = [{'photo': {'url': preloader.getAsDataURL(),
                                    'width': preloader.width,
                                    'height' : preloader.height
                                }}];
                            }
                            group_data = a.concat(group_data);
                            for (var i = 0; i < group_data.length; i ++) {
                                
                                insertImage(group_data[i].photo, group_data.length, (i == group_data.length-1) ? true: false, group_data[i]);
                                if (i == 0) {
                                    $('.js-album-item').append('<div><img class="loading" src="'+ qiniu.https_domain + 'img/loading_web.png" width="52"/></div><span class="loading-bg"></span>');

                                } 
                                $('.js-album-item div').css('left', ($('.js-album-item div').parent().width() - 52)/2); 
                             
                                
                            }

                        };
                        preloader.load( file.getSource() );
                    });
                },
                'BeforeUpload': function(up, file) {
                    // 每个文件上传前,处理相关的事情
                },
                'UploadProgress': function(up, file) {
                    // 每个文件上传时,处理相关的事情
                },
                'FileUploaded': function(up, file, info) {
                    // 每个文件上传之后，处理相关的事情

                    var domain = up.getOption('domain'),
                        res = $.parseJSON(info),
                        sourceLink = domain + res.key;

                    var imageInfo = Qiniu.imageInfo(res.key);
                    var width = imageInfo.width;
                    var height = imageInfo.height;
                    if (imageInfo.orientation == 'Right-top' || imageInfo.orientation == 'Right-bottom') {
                        width = height;
                        height = imageInfo.width;
                    }
                    $.post(api + 'api/v1/posts/',{
                        'group_id': group_id,
                        'url': sourceLink,
                        'width': width,
                        'height': height,
                        'last': 'true'
                    }, function(data){
                        if (data.post.id) {
                            $('#tp-album-thumb .tp-photo-wrapper').addClass('delete');
                            w2 = 0;
                            page = 1;

                            getGroupImages(page, true); 
                        
                            
                        }
                    });
                },
                'Error': function(up, err, errTip) {
                    // 上传出错时,处理相关的事情
                    var progress = new FileProgress(err.file, 'fsUploadProgress');
                    setConfirm({
                        'title': '网络连接超时，请稍后再传',
                        'des': '安装图扑APP，高速上传高清照片，接入Wi-Fi时自动续传。',
                        'btn': '取消上传',
                        'fuc': function() {
                            progress.bindUploadCancel(up); 
                            $('#tp-album-thumb .tp-photo-wrapper').addClass('delete');
                            w2 = 0;
                            page = 1;
                            getGroupImages(page, true);  
                            $('.confirm').hide(); 
                        }  
                    }); 
                    // var progress = new FileProgress(err.file, 'fsUploadProgress');
                    // progress.setError();
                    // progress.setStatus(errTip.replace(/。\(.*?\)/g, ''));
                },
                'UploadComplete': function() {
                    //队列文件处理完毕后,处理相关的事情
                },
                'Key': function(up, file) {
                    // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                    // 该配置必须要在 unique_names: false , save_key: false 时才生效
                    uuid = guid()+'.jpg';
                    var key = uuid;
                    return key;
                }
            }
        });
    }
    var group_data = [];
    var times = 0;
    /* 读取相册图片处理 */
    function getGroupImages(page, isUpload) {
        var data = {
            'page': page || 1,
            'compact': true
        };
        $.get(api + 'api/v1/groups/'+ group_id +'/posts/',data, function(data){

            $('.tp-album-photo div.loading').hide();
            var images_len = data.posts.length;
            var $delete = $('#tp-album-thumb .tp-photo-wrapper'); 

            if (times == 0) {
                var album_user = data.users;       
                $('.js-member-num').html(data.group.members_count);
                $('.js-group-num').html(data.group.posts_count);
                      
                addUsers(album_user);
                wx.onMenuShareTimeline({
                    title: '邀请你加入群相册「' + data.group.name + '」上传高清照片', // 分享标题
                    link: window.location.href, // 分享链接
                    imgUrl: images_len ? data.posts[0].photo.url : qiniu.https_domain + 'img/album_blue_square.png', // 分享图标
                    success: function () { 
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: '邀请你加入群相册「' + data.group.name + '」', // 分享标题
                    desc: '点开就能上传高清照片，收获好照片', // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: images_len ? data.posts[0].photo.url : qiniu.https_domain + 'img/album_blue_square.png', // 分享图标
                    // type: '', // 分享类型,music、video或link，不填默认为link
                    // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () { 
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
            }
            if (images_len) {
                hasNext = data.pagination.has_next;
                group_data = [];
                for (var i = 0; i < images_len; i ++) {
                    group_data.push(data.posts[i]);
                    insertImage(data.posts[i].photo, images_len, (i == images_len-1) ? true: false, data.posts[i]);
                }
                if (isUpload) {
                    $delete.remove();
                    $('.tp-album-upload').show();
                    $('.tp-upload-btn').hide();
                    window.isLoading = false;
                }
            } 
            times ++;

            $('.tp-wrapper .init').remove();
        });
    }


    var temp_height, temp_width;

    /**
     * 根据图片尺寸计算并插入DOM
     * @param image
     * @param len
     * @param isLast
     */
    function insertImage(image, len, isLast, post) {
        var imgHeight = image.height;
        var imgWidth = image.width;
        var imgUrl = image.url;
        var $imgWrapper = $('<a href="\"' + ' class="js-album-item"></a>');
        var $img = $('<img src="">').attr('src', imgUrl);

        temp_height = h_stand;
        temp_width = h_stand * imgWidth / imgHeight;

        $imgWrapper.append($img.width(temp_width).height(temp_height));

        if (w2 < w_stand) {
            if (w2 == 0) {
                $('#tp-album-thumb').append($('<div class="tp-photo-wrapper clearfix"></div>').append($imgWrapper));
            } else {
                $('.tp-photo-wrapper').last().append($imgWrapper);
            }
            w2 = w2 + temp_width;

        } else {
            handleImage();
            w2 = 0;
            $('#tp-album-thumb').append($('<div class="tp-photo-wrapper clearfix"></div>').append($imgWrapper));
            w2 = w2 + temp_width;

        }
        $('.js-album-item').last().data('post', post);
        if (isLast) {
            handleImage();
        }
        

    }

    /**
     * 调整整行图片
     */
    function handleImage() {
        var $imageWrapper = $('.tp-photo-wrapper').last(),
            images = $imageWrapper.find('img'),
            w_current = sum(images) + (images.length-1) * 20,
            h_deta = h_stand * w_win / sum(images);

        if (w_current != w_win) {
            /* w2/w_stand = h_stand/deta_h */
            images.each(function() {
                $(this).css({
                    'width': $(this).width() / $(this).height() * h_deta,
                    'height': h_deta
                });
                $(this).parent().height(h_deta);
            });
            var w_wrapper = $('.tp-photo-wrapper').last().width()-20,
                w_deta = Math.abs(w_wrapper - w_win) / images.length;
            if (w_wrapper < w_win) {
                images.each(function() {
                    $(this).width($(this).width() + w_deta);
                });

            } else if (w_wrapper > w_win) {
                images.each(function() {
                    $(this).width($(this).width() - w_deta);
                });
            }

        }
    }

    function sum(images) {
        var sum = 0;
        var len = images.length;
        for (var i = 0; i < len; i++) {
            sum += $(images[i]).width();
        }
        return sum;
    }

    $('.tp-album-tab .tp-album-number').click(function(e) {
        e.preventDefault();
        $('.tp-album-tab .active').removeClass('active');
        $(this).addClass('active');
        $('.tp-album-photo').show();
        $('.tp-album-upload').show();
        $('.tp-member-wrapper').hide();
    });
    $('.tp-album-tab .tp-album-member').click(function(e) {
        e.preventDefault();
        if (window.isLoading) {
            setConfirm({
                'title': '正在上传高清照片，请稍候',
                'des': '安装图扑APP，高速上传批量照片，随时下载高清大图。',
                'fuc': function() {
                    $('.confirm').hide();
                }  
            }); 
            return ;
        }
        $('.tp-album-tab .active').removeClass('active');
        $(this).addClass('active');
        $('.tp-album-photo').hide();
        $('.tp-album-upload').hide();
        $('.tp-member-wrapper').show();
    });
    
 

    /**
     * 先判断是横图还是竖图，横图按照浏览器宽，竖图按照浏览器高
     * 如果原始尺寸小于浏览器高度与宽度，直接显示原始尺寸，无须放大。
     */
    function modal(post) {
        var modal = $('.no-confirm, .modal-download');

        var photo = post.photo;
        var url = photo.url;
        var win_width = 640;
        var win_height = $(window).height();

        var img = $('.modal-main img.pic');

        
        var album_list = $('#tp-album-thumb a');
        var active = $('#tp-album-thumb a.active');
        var index = album_list.index(active)+1;

        $('.modal, .modal-main').height(win_height+2);
        $('.js-like-num').html(post.likes_count);
        $('.modal-download .btn').css('top', (win_height-72)/2);

        if (post.user.uuid != user_uuid) {
            $('.js-tp-delete').hide();    
        } else {
            $('.js-tp-delete').show(); 
        }
        if (post.liked) {
            $('.js-tp-like').addClass('tp-liked-black');
        } else {
            $('.js-tp-like').removeClass('tp-liked-black').addClass('animate');
            setTimeout(function() {
                $('.js-tp-like').removeClass('animate');
            }, 1000);
        }

        if (photo.caption.length ) {
            if (photo.caption.length > 17) {
                $('.js-tp-desc').html(photo.caption.substr(0,17) + '...');
            } else {
                $('.js-tp-desc').html(photo.caption);
            }
        } else {
            $('.js-tp-desc').html('');   
        }

        $('.tp-user-name').html(post.user.nickname);
        $('.tp-time').html(timeHandler(post.created));
        if (post.user.headimgurl) {
            $('.tp-user img').attr('src', post.user.headimgurl);
        } else {
            $('.tp-user img').attr('src', qiniu.https_domain + 'img/avatar_default.png');
        }

        modalImage(img, post); 
        modal.show();

    }
    function modalImage(img, post) {

        var photo = post.photo;
        var url = photo.url;
        var img_width = photo.width;
        var img_height = photo.height;
        var win_width = 640;
        var win_height = $(window).height();

        var margin_top,
            height_new,
            width_new,
            margin_left;

        img.attr('src', url);
        if (img_height > win_height || img_width > win_width) {
            if (img_width >= img_height) {
                var img_newHeight = img_height * win_width / img_width;

                margin_top = (win_height - img_newHeight)/2;
                width_new = win_width;
                height_new = img_newHeight;
                margin_left = 0;
            } else {
                var img_newWidth = img_width * (win_height) / img_height;
                margin_top = 0;
                width_new = img_newWidth;
                height_new = win_height;
                margin_left = (win_width - img_newWidth)/2;
                
                if (img_newWidth > win_width) {
                    var img_newHeight = img_height * win_width / img_width;

                    margin_top = (win_height - img_newHeight)/2;
                    width_new = win_width;
                    height_new = img_newHeight;
                    margin_left = 0;
                }
            }
        } else {
            margin_top = (win_height - img_height)/2;
            height_new = 'auto';
            width_new = 'auto';
            margin_left = (win_width - img_width)/2;
        }
        img.css({
            'margin-top': margin_top,
            'width': width_new,
            'height': height_new,
            'margin-left': margin_left,
            'margin-right': margin_left
        });
    }

    var modal_template;
    var isSwiping = false;
    
    var hammerModal = new Hammer($('.modal')[0]);
    var hammerModalDownload = new Hammer($('.modal')[1]);
    hammerModal.add(new Hammer.Pinch());

    hammerModalDownload.on('swipeleft', function(e) {
        var modal_element = $('.modal');
        var album_list = $('#tp-album-thumb a');
        var active = $('#tp-album-thumb a.active');
        var index = album_list.index(active);    
        if (index == (album_list.length-1)) {
            return ;
        }
        
        $('.modal').first().animate({'margin-left': '0'});
        $('.modal-download').animate({'margin-left': '-640px'});

    }).on('swiperight', function(e) {
        var modal_element = $('.modal');
        var album_list = $('#tp-album-thumb a');
        var active = $('#tp-album-thumb a.active');
        var index = album_list.index(active);    
        if (index == 0) {
            return ;
        }
 
        $('.modal').first().animate({'margin-left': '0'});
        $('.modal-download').animate({'margin-left': '640px'}); 
    }).on('tap', function(e) {
        e.preventDefault();
        if (e.changedPointers[0].clientX > 540 && e.changedPointers[0].clientY < 80) {
           $('html,body').css({
                'height': 'auto',
                'overflow': 'auto'
            });
            $('.modal').hide(); 

            $('.modal').first().css({'margin-left': '0'});
            $('.modal-download').css({'margin-left': '-640px'});
            $('.delete-btn-wrapper').hide();   
        } else  {
            window.location.href = $('.tp-download-btn').attr('href');    
        }

    });
        

    hammerModal.on('swipeleft', function(e) {
        var modal_element = $('.modal');
        var album_list = $('#tp-album-thumb a');
        var active = $('#tp-album-thumb a.active');
        var index = album_list.index(active);
        if (isSwiping) { return; }
        isSwiping = true;
        if (index < (album_list.length - 1)) {
            var img = $('.modal-main img.pic');
            img.css({
                'transform': '',
                '-webkit-transform': '',
                '-o-transform': '',
                '-moz-transform': ''
            });
            var next = $(album_list[index+1]);
            $('#tp-album-thumb a.active').removeClass('active');
            next.addClass('active');
            $('.modal-main .img-wrapper').append('<img class="pic tp-left" src="" />');
            modalImage($('.modal-main .pic').last(), next.data('post'));
            $('.modal-main .img-wrapper').animate({'margin-left': '-640'}, function() {
                
                setTimeout(function() {
                    $('.modal-main .img-wrapper').css('margin-left', '0');
                    $('.modal-main .pic').first().remove(); 
                    modal(next.data('post'));
                    isSwiping = false; 
                },200);
                
                  
            });
                       
        } else if (index == (album_list.length-1)) {
            $('.modal-download .modal-main').addClass('end');
            $('.modal-download .intro').html('高速上传批量照片</br>随时下载高清大图');
            $('.modal-download').css('margin-left','640px').animate({'margin-left': '0'});
            $('.modal').first().animate({'margin-left': '-640px'});
            isSwiping = false; 
        }

    }).on('swiperight', function(e) {
        if (isSwiping) { return; }
        isSwiping = true;

        var modal_element = $('.modal');
        var album_list = $('#tp-album-thumb a');
        var active = $('#tp-album-thumb a.active');
        var index = album_list.index(active);
        if (index > 0) {
            var img = $('.modal-main img.pic');
            img.css({
                'transform': '',
                '-webkit-transform': '',
                '-o-transform': '',
                '-moz-transform': ''
            });
            var prev = $(album_list[index-1]); 
            $('#tp-album-thumb a.active').removeClass('active');
            prev.addClass('active');   
            $('.modal-main .img-wrapper').prepend('<img class="pic tp-left" src="" />');
            $('.modal-main .img-wrapper').css('margin-left','-640px');
            modalImage($('.img-wrapper .pic').first(), prev.data('post'));
            $('.modal-main .img-wrapper').animate({'margin-left': '0'}, function() {
                modal(prev.data('post'));
                $('.modal-main .pic').last().remove(); 
                isSwiping = false;   
            });
        } else if (index == 0) {
            $('.modal-download .modal-main').removeClass('end');
            $('.modal-download .intro').html('随时收获新照片<br>即时收到赞消息');
            $('.modal').first().animate({'margin-left': '640px'});
            $('.modal-download').css('margin-left','-640px').animate({'margin-left': '0'});
            isSwiping = false; 
        } 

    }).on('pinch', function(e) {
        
        var img = $('.modal-main img.pic');
        var scale = e.scale;
        
        if (img.attr('data-value')) {
            scale = scale * img.attr('data-value');   
        }
        img.css({
            'transform': 'scale(' + scale + ',' + scale+ ')',
            '-webkit-transform': 'scale(' + scale + ',' + scale+ ')',
            '-o-transform': 'scale(' + scale + ',' + scale+ ')',
            '-moz-transform': 'scale(' + scale + ',' + scale+ ')'
        });
    }).on('pinchend', function(e) {
        var img = $('.modal-main img.pic');
        img.attr('data-value', e.scale);  
    }).on('tap', function(e) {
        e.preventDefault();
        if (e.changedPointers[0].clientX > 540 && e.changedPointers[0].clientY < 80) {
            $('html,body').css({
                'height': 'auto',
                'overflow': 'auto'
            });
            $('.modal').hide();  
            $('.modal-main img.pic').attr('style', '');          
            $('.delete-btn-wrapper').hide();   
        }

    });


    function modalLike() {
        var modalLike = new Hammer($('.js-tp-like')[0]);
        modalLike.on('tap', function() {
            var that = $('.js-tp-like'),
                likeNum = $('.js-like-num');

            if (that.hasClass('tp-liked-black')) {
                that.removeClass('tp-liked-black');
                likeNum.html(parseInt(likeNum.html())-1);
                deleteLike($('#tp-album-thumb a.active').data('post'));
                $('.tp-heart').addClass('broken');
                setTimeout(function() {
                    $('.tp-heart').removeClass('broken');
                }, 1000); 
                
                $('#tp-album-thumb a.active').data('post').liked = false;
                $('#tp-album-thumb a.active').data('post').likes_count = $('#tp-album-thumb a.active').data('post').likes_count - 1;
            } else {
                that.addClass('tp-liked-black');
                likeNum.html(parseInt(likeNum.html())+1);
                addLike($('#tp-album-thumb a.active').data('post'));
                $('.tp-liked-animation').addClass('animation');

                setTimeout(function() {
                    $('.tp-liked-animation').removeClass('animation');
                }, 1000);
                $('#tp-album-thumb a.active').data('post').liked = true;
                $('#tp-album-thumb a.active').data('post').likes_count = $('#tp-album-thumb a.active').data('post').likes_count + 1;
            }
        });
    }
    var isDeleting = false;
    function modalDelete() {
        var modalDelete = new Hammer($('.js-tp-delete')[0]);
        var deleteBtn = new Hammer($('.delete-btn-wrapper .js-delete')[0]);
        var cancelBtn = new Hammer($('.delete-btn-wrapper .js-cancel')[0]);
        var top = ($(window).height() - 90)/2;
        modalDelete.on('tap', function() {
            $('.delete-btn-wrapper').show();
        });
        deleteBtn.on('tap', function() {
            if (!isDeleting) {
                isDeleting = true;
                $('.delete-btn-wrapper').hide(); 
                $('.modal .modal-main').append('<div class="deleting" style="top:' + top + 'px;"><img src="'+ qiniu.https_domain+ 'img/loading_web.png" width="52"/></div>');
                deleteImage($('#tp-album-thumb a.active').data('post'));
                
            }
            
        });
        cancelBtn.on('tap', function() {
            $('.delete-btn-wrapper').hide();   
        });
    }

    modalLike();
    modalDelete();

    var thisPic;
    var tempPost;
    $('body').on('click', '#tp-album-thumb a', function(e) {
        e.preventDefault();
        if ($(e.target).hasClass('loading-bg') || $(e.target).hasClass('loading')) {
            setConfirm({
                'title': '正在上传高清照片，请稍候',
                'des': '安装图扑APP，高速上传批量照片，随时下载高清大图。',
                'fuc': function() {
                    $('.confirm').hide();
                }  
            }); 
        } else {
            thisPic = $(this);
            tempPost = $(this).data('post');
            $('#tp-album-thumb a.active').removeClass('active');
            $(this).addClass('active');
            modal($(this).data('post'));
        }
        
    });

     /**
     * 下拉加载
     */
    var isLoading = false;
    $(document).scroll(function(){
        if ( !isLoading && ($(document).height() - ($(document).scrollTop() + $(window).height()) < 200)  ) {
            if (hasNext) {
                isLoading = true;
                $(".loading").show();
                setTimeout(function(){
                    getGroupImages(++page);
                    isLoading = false;
                },3000);
            }
        }


    });

    function addLike(post) {
        var postId = post.id;
        var url = api + 'api/v1/posts/' + postId + '/likes/';
        $.post(url);
    }
    function deleteLike(post) {
        var postId = post.id;
        var url = api + 'api/v1/posts/' + postId + '/likes/';
        $.ajax({
            url: url,
            type: 'DELETE'
        });
    }

    function deleteImage(post) {
        var postId = post.id;
        var url = api + 'api/v1/posts/' + postId + '/';
        $.ajax({
            url: url,
            type: 'DELETE',
            complete: function() {
                $('#tp-album-thumb .tp-photo-wrapper').addClass('delete');
                w2 = 0;
                page = 1;
                getGroupImages(page, true); 
                setTimeout(function() {
                    isDeleting = false;
                    $('html,body').css({
                        'height': 'auto',
                        'overflow': 'auto'
                    });
                    $('.modal .deleting').remove();
                    $('.modal').hide();
                }, 1000);
            }
        });   
    }


    /**
     * 1. 三分钟之内显示刚刚
     * 2. 3－60分钟（不含），几分钟前
     * 3. 60分钟－24小时（不含），几小时前
     * 4. 24小时－昨天0时（含），昨日
     * 5. 昨天0时之前 & 今年内，9月1日
     * 6. 昨天0时之前 & 今年之前，2015-09-01
     * @param createTime
     */
    function timeHandler(createTime) {
        var time_now = new Date().getTime();
        var time = new Date(createTime);
        var time_create = new Date(createTime).getTime();
        var sub_time = time_now - time_create;

        var m = time.getMonth()+1;//获取当前月份的日期
        var d = time.getDate();

        if (isInThreeMin(sub_time)) {
            return '刚刚';
        } else if (isInAnHour(sub_time)) {
            var min = Math.round(sub_time/1000/60);
            return min + '分钟前';
        } else if (isToday(sub_time)) {
            var hour = Math.ceil(sub_time/1000/60/60);
            return hour + '小时前';
        } else if (isYestoday(time_create, sub_time)) {
            return '昨日';
        } else if (isThisYear(time_create)) {
            return m + '月' + d + '日';
        } else {
            return format('yyyy-MM-dd', time);
        }
    }

    function isInThreeMin(subTime) {
        var three_min = 3 * 60 * 1000;
        return subTime <= three_min;
    }
    function isInAnHour(subTime) {
        var three_min = 3 * 60 * 1000;
        var hour_inner = 60 * 60 * 1000;
        return (subTime > three_min) && (subTime < hour_inner);
    }
    function isToday(subTime) {
        var hour_inner = 60 * 60 * 1000;
        var day_inner = 24 * 60 * 60 * 1000;
        return (subTime >= hour_inner) && (subTime <= day_inner);
    }
    function isYestoday(timeCreate, subTime) {
        var day_inner = 24 * 60 * 60 * 1000;
        var time_now = new Date();
        var y = time_now.getFullYear();
        var m = time_now.getMonth()+1;//获取当前月份的日期
        var d = time_now.getDate()-1;
        var time_yestoday = new Date(y,m,d,0,0,0).getTime();
        return (subTime > day_inner) && (timeCreate >= time_yestoday);
    }
    function isThisYear(timeCreate) {
        var time_now = new Date();
        var y = time_now.getFullYear();
        var m = time_now.getMonth()+1;//获取当前月份的日期
        var d = time_now.getDate();
        var time_yestoday = new Date(y,m,d-1,0,0,0).getTime();
        var time_thisYear = new Date(y,1,1,0,0,0).getTime();
        return (timeCreate < time_yestoday) && (timeCreate >= time_thisYear);
    }



    // 临时记录正在转换的日期
    var tempYear, tempMonth, tempDate, tempHour, tempMinute, tempSecond;
    // 把数字转换成两位数的字符串
    function toTwoDigit(num) { return num < 10 ? "0" + num : num; }
    // 格式替换函数
    function getDatePart(part) {
        switch (part) {
            case "yyyy": return tempYear;
            case "yy": return tempYear.toString().slice(-2);
            case "MM": return toTwoDigit(tempMonth);
            case "M": return tempMonth;
            case "dd": return toTwoDigit(tempDate);
            case "d": return tempDate;
            case "HH": return toTwoDigit(tempHour);
            case "H": return tempHour;
            case "hh": return toTwoDigit(tempHour > 12 ? tempHour - 12 : tempHour);
            case "h": return tempHour > 12 ? tempHour - 12 : tempHour;
            case "mm": return toTwoDigit(tempMinute);
            case "m": return tempMinute;
            case "ss": return toTwoDigit(tempSecond);
            case "s": return tempSecond;
            default: return part;
        }
    }
    /**
     * 返回指定格式的日期字符串
     * @param formation  格式
     * @returns {XML|*|string|void}  指定格式的日期字符串
     */
    function format(formation, data) {
        tempYear = data.getFullYear();
        tempMonth = data.getMonth() + 1;
        tempDate = data.getDate();
        tempHour = data.getHours();
        tempMinute = data.getMinutes();
        tempSecond = data.getSeconds();

        return formation.replace(/y+|m+|d+|h+|s+|H+|M+/g, getDatePart);
    }


    function localParam(search,hash){
        search = search || window.location.search;
        hash = hash || window.location.hash;
        var fn = function(str,reg){
            if(str){
                var data = {};
                str.replace(reg,function( $0, $1, $2, $3 ){
                    data[ $1 ] = $3;
                });
                return data;
            }
        }
        return {search: fn(search,new RegExp( "([^?=&]+)(=([^&]*))?", "g" ))||{},hash: fn(hash,new RegExp( "([^#=&]+)(=([^&]*))?", "g" ))||{}};
    }


})(jQuery);