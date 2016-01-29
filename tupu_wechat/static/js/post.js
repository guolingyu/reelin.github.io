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
    var post_uuid = $('#postUUId').val();
    var post_id;
    var post;

    var template = $('<div class="tp-wrapper">\
        <section class="tp-user clearfix">\
            <img src="https://dn-tupu-dev.qbox.me/img/avatar_default.png" width="90"/>\
            <div class="tp-user-info">\
                <p class="tp-user-name"></p>\
                <p class="tp-time"></p>\
            </div>\
        </section>\
        <section class="tp-photo-info">\
            <div class="photo-wrapper">\
                <img src="" style="display: none;">\
                <span class="tp-liked-animation"></span>\
                <span class="tp-heart-left tp-heart"></span>\
                <span class="tp-heart-right tp-heart"></span>\
            </div>\
            <p class="tp-photo-desc"></p>\
            <div class="tp-photo-like">\
                <a class="js-tp-like tp-icon tp-icon-like" href=""></a>\
                <p class="tp-like-num"><span class="js-like-num">0</span> 赞</p>\
            </div>\
            <div class="tp-photo-album">\
                <p>所在相册<span class="js-album-name">「」</span></p>\
            </div>\
            <footer>\
                <a class="tp-download-btn" href=""><span class="tp-icon tp-logo"></span>安装<strong>图扑APP</strong>&nbsp;&nbsp;&nbsp;轻松收集好照片</a>\
                <p>最好用的微信群相册，聚会、旅行、活动照片收集利器</p>\
            </footer>\
        </section>\
    </div>\
     <div class="modal clearfix">\
        <a class="modal-close tp-icon tp-close-black" href="#"></a>\
        <div class="modal-main">\
            <img class="pic" src="" />\
            <span class="tp-liked-animation"></span>\
            <span class="tp-heart-left tp-heart"></span>\
            <span class="tp-heart-right tp-heart"></span>\
            <div class="tp-photo-like">\
                <p class="js-tp-desc"></p>\
                <div class="clearfix">\
                    <a class="js-tp-like tp-icon tp-like-black tp-right" href=""></a>\
                    <p class="tp-like-num"><span class="js-like-num"></span> 赞</p>\
                </div>\
            </div>\
        </div>\
    </div>');

    $('body').append(template);
   
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: $('#appId').val(), // 必填，公众号的唯一标识
        timestamp: $('#timestamp').val(), // 必填，生成签名的时间戳
        nonceStr: $('#nonceStr').val(), // 必填，生成签名的随机串
        signature: $('#signature').val(),// 必填，签名，见附录1
        jsApiList: ['hideMenuItems','onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function(){
        wx.hideMenuItems({
            menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:faceboo', 'menuItem:share:QZone', 'menuItem:copyUr', 'menuItem:openWithQQBrowser', 'menuItem:exposeArticle','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:share:email','menuItem:setFont'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
    });

    $.ajaxSetup({
        headers: {'Authorization': auth}
    });
    getPost();

    $('body').on('click', '.tp-wrapper .js-tp-like', function(e) {
        var that = $(this),
            likeNum = $('.js-like-num');
        e.preventDefault();

        if (that.hasClass('tp-icon-liked')) {
            
            $('.modal .js-tp-like').removeClass('tp-liked-black');
            that.removeClass('tp-icon-liked');
            $('.tp-heart').addClass('broken');
            likeNum.html(parseInt(likeNum.html())-1);
            deleteLike();   
            setTimeout(function() {
                $('.tp-heart').removeClass('broken');
            }, 700);    
            post.liked = false;
            post.likes_count = post.likes_count - 1;
        } else {
            $('.modal .js-tp-like').addClass('tp-liked-black').removeClass('animate');
            that.addClass('tp-icon-liked').removeClass('animate'); 
            
            likeNum.html(parseInt(likeNum.html())+1);
            addLike();
            $('.tp-liked-animation').addClass('animation');
            setTimeout(function() {
                $('.tp-liked-animation').removeClass('animation');
            }, 700);
            post.liked = true;
            post.likes_count = post.likes_count + 1;
        }
    });

    var thisPic;
    var tempPost;
    $('body').on('click', '.photo-wrapper', function(e) {
        e.preventDefault();
        thisPic = $(this);
        tempPost = $(this).data('post');
        $('#tp-album-thumb a.active').removeClass('active');
        $(this).addClass('active');
        modal();
        
    });
    

    function getPost() {
        var url = 'https://api.tupu.im/api/v1/shares/photo/';
        $.get(url, {'post_uuid': post_uuid}, function(data) {
            if (data.post.id) {
                var photo = data.post.photo;
                post = data.post;
                post_id = data.post.id;
                $('.js-album-name').html('「' + data.post.groups[0].name + '」');
                $('.tp-user-name').html(data.post.user.nickname);
                $('.tp-time').html(timeHandler(data.post.created));
                if (data.post.user.headimgurl) {
                    $('.tp-user img').attr('src', data.post.user.headimgurl);
                }
                displayImage(photo);
                if (photo.caption.length) {
                    $('.tp-photo-desc').html(photo.caption);
                } else {
                    $('.tp-photo-desc').hide();
                }
                $('.js-like-num').html(data.post.likes_count);
                if (data.post.liked) {
                    $('.tp-wrapper .js-tp-like').addClass('tp-icon-liked');
                } else {
                    $('.tp-wrapper .js-tp-like').addClass('animate');
                }

                wx.onMenuShareTimeline({
                    title: '请给' + data.post.user.nickname + '的照片点赞：在相册「' + data.post.groups[0].name + '」看到好照片', // 分享标题
                    link: window.location.href, // 分享链接
                    imgUrl: photo.url , // 分享图标
                    success: function () { 
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: '请给' + data.post.user.nickname + '的照片点赞', // 分享标题
                    desc: '在相册「' + data.post.groups[0].name + '」看到好照片', // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: photo.url , // 分享图标
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
        })
    }

    function addLike() {
        var url = 'https://api.tupu.im/api/v1/posts/' + post_id + '/likes/';
        $.post(url);
    }
    function deleteLike() {
        var postId = post.id;
        var url = 'https://api.tupu.im/api/v1/posts/' + post_id + '/likes/';
        $.ajax({
            url: url,
            type: 'DELETE'
        });
    }

    /**
     * 1. 当原始图片宽度 > 手机分辨率宽度W时，原始图片等比缩小为展示图片，展示图片宽度W1=W。
     1.1 缩小后的展示图片最小高度H(min)=W/5，即缩小到这个高度时，展示图片 宽度W1还是大于W，则不再缩小图片，而是截取图片中间部分展示（宽度为W），此时的展示尺寸是W*H(min)。（即最小有效展示尺寸）
     2.1 当原始图片宽度 <手机分辨率宽度W时，原始图片居中展示，背景显示灰色占位图（#CCCCCC）,如下图。点击整个占位图区域，都可以弹出显示图片。
     2.2 当原始图片宽度 <手机分辨率宽度W，原始图片高度 <展示图片最小高度H(min)=W/5，原始图片直接居中展示，背景显示灰色（#CCCCCC）最小占位图, 占位图尺寸是W*H(min)，如下图。点击整个占位图区域，都可以弹出显示图片。
     */
    function displayImage(photo) {
        var img = $('.tp-photo-info img'),
            width = photo.width,
            height = photo.height,
            w_stand = 640,
            h_min = 640/5,
            h_new,
            w_new,
            top;
        if (width <= w_stand) {
            if (height >= h_min) {
                img.width(width);
            } else {
                img.width(width);
                top = (h_min - height)/2;
                img.css('padding-top', top);
            }
        } else {
            w_new = h_min * width / height;
            h_new = height * w_stand / width;
            if ((w_new > w_stand)) {
                img.height(h_min);
            } else {
                img.height(h_new);
            }
        }
        $('.tp-photo-info img').attr('src', photo.url).show();
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
    var nav = navigator,
        params = localParam(),
        isIDevice = (/iphone|ipod/gi).test(nav.platform),
        isIDeviceIpad = (/ipad/gi).test(nav.platform),
        isAndroid = (/Android/gi).test(nav.userAgent);
    if (isAndroid) {
        $('.tp-download-btn').attr('href', 'http://www.pgyer.com/fOOb');
    } else {
        $('.tp-download-btn').attr('href', 'http://www.pgyer.com/CZlP');
    }


    /**
     * 先判断是横图还是竖图，横图按照浏览器宽，竖图按照浏览器高
     * 如果原始尺寸小于浏览器高度与宽度，直接显示原始尺寸，无须放大。
     */
    function modal() {
        var modal = $('.modal');

        var photo = post.photo;
        var url = photo.url;
        var img_width = photo.width;
        var img_height = photo.height;

        var img = $('.modal-main img.pic');

        var win_width = 640,
            win_height = $(window).height();

        var margin_top,
            height_new,
            width_new,
            margin_left;
        var album_list = $('#tp-album-thumb a');
        var active = $('#tp-album-thumb a.active');
        var index = album_list.index(active)+1;

        $('.modal, .modal-main').height(win_height);
        img.attr('src', url);
        $('.js-like-num').html(post.likes_count);


        if (post.liked) {
            $('.tp-wrapper .js-tp-like').addClass('tp-liked-black');
            $('.modal .js-tp-like').addClass('tp-liked-black');
        } else {
            $('.modal .js-tp-like').removeClass('tp-liked-black').addClass('animate');
            $('.tp-wrapper .js-tp-like').removeClass('tp-icon-liked').addClass('animate');
            setTimeout(function() {
                $('.js-tp-like').removeClass('animate');
            }, 700);
        }

        if (photo.caption.length ) {
            if (photo.caption.length > 17) {
                $('.js-tp-desc').html(photo.caption.substr(0,17) + '...');
            } else {
                $('.js-tp-desc').html(photo.caption);
            }
        } 

        $('.tp-user-name').html(post.user.nickname);
        $('.tp-time').html(timeHandler(post.created));
        if (post.user.headimgurl) {
            $('.tp-user img').attr('src', post.user.headimgurl);
        }

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
            'margin-left': margin_left
        });

        modal.show();

    }

    var hammerElement = new Hammer($('.modal')[0]);
    hammerElement.add(new Hammer.Pinch());

    hammerElement.on('pinch', function(e) {
        
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
    });

    function closeModal() {
        var modalClose = new Hammer($('.modal-close')[0]);
        modalClose.on('tap', function(e) {
            e.preventDefault();
           $('html,body').css({
                'height': 'auto',
                'overflow': 'auto'
            });
            $('.modal').hide();
        });
    }

    function modalLike() {
        var modalLike = new Hammer($('.modal .js-tp-like')[0]);
        modalLike.on('tap', function(e) {
            var that = $('.modal .js-tp-like'),
                likeNum = $('.js-like-num');
                
            e.preventDefault();

            if (that.hasClass('tp-liked-black')) {
                
                that.removeClass('tp-liked-black');
                $('.tp-wrapper .js-tp-like').removeClass('tp-icon-liked');
                $('.tp-heart').addClass('broken');
                likeNum.html(parseInt(likeNum.html())-1);
                deleteLike();   
                setTimeout(function() {
                    $('.tp-heart').removeClass('broken');
                }, 700);    
                post.liked = false;
                post.likes_count = post.likes_count - 1;
            } else {
                that.addClass('tp-liked-black');
                $('.tp-wrapper .js-tp-like').addClass('tp-icon-liked'); 
                
                likeNum.html(parseInt(likeNum.html())+1);
                addLike();
                $('.tp-liked-animation').addClass('animation');
                setTimeout(function() {
                    $('.tp-liked-animation').removeClass('animation');
                }, 700);
                post.liked = true;
                post.likes_count = post.likes_count + 1;
            }
        });
    }
    closeModal();
    modalLike();


})(jQuery);