!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=C.appId,a.verifyAppId=C.appId,a.verifySignType="sha1",a.verifyTimestamp=C.timestamp+"",a.verifyNonceStr=C.nonceStr,a.verifySignature=C.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",C.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var e,f,c=a,d=p[c];return d&&(c=d),e="ok",b&&(f=b.indexOf(":"),e=b.substring(f+1),"confirm"==e&&(e="ok"),"failed"==e&&(e="fail"),-1!=e.indexOf("failed_")&&(e=e.substring(7)),-1!=e.indexOf("fail_")&&(e=e.substring(5)),e=e.replace(/_/g," "),e=e.toLowerCase(),("access denied"==e||"no permission to execute"==e)&&(e="permission denied"),"config"==c&&"function not exist"==e&&(e="ok"),""==e&&(e="fail")),b=c+":"+e}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!C.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){if(!(u||v||C.debug||"6.0.2">z||B.systemType<0)){var b=new Image;B.appId=C.appId,B.initTime=A.initEndTime-A.initStartTime,B.preVerifyTime=A.preVerifyEndTime-A.preVerifyStartTime,F.getNetworkType({isInnerInvoke:!0,success:function(a){B.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+B.version+"&o="+B.isPreVerifyOk+"&s="+B.systemType+"&c="+B.clientVersion+"&a="+B.appId+"&n="+B.networkType+"&i="+B.initTime+"&p="+B.preVerifyTime+"&u="+B.url;b.src=c}})}}function l(){return(new Date).getTime()}function m(b){w&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){F.invoke||(F.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},F.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase(),u=!(!t.match("mac")&&!t.match("win")),v=-1!=s.indexOf("wxdebugger"),w=-1!=s.indexOf("micromessenger"),x=-1!=s.indexOf("android"),y=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),z=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),A={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},B={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:y?1:x?2:-1,clientVersion:z,url:encodeURIComponent(location.href)},C={},D={_completes:[]},E={state:0,data:{}},m(function(){A.initEndTime=l()}),F={config:function(a){C=a,j("config",a);var b=C.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(C.jsApiList)},function(){D._complete=function(a){A.preVerifyEndTime=l(),E.state=1,E.data=a},D.success=function(){B.isPreVerifyOk=0},D.fail=function(a){D._fail?D._fail(a):E.state=-1};var a=D._completes;return a.push(function(){k()}),D.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();D._completes=[]},D}()),A.preVerifyStartTime=l();else{for(E.state=1,a=D._completes,d=0,e=a.length;e>d;++d)a[d]();D._completes=[]}}),C.beta&&n()},ready:function(a){0!=E.state?a():(D._completes.push(a),!w&&C.debug&&a())},error:function(a){"6.0.2">z||(-1==E.state?a(E.data):D._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(x){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(x){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;y&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0,ext_info:a.extInfo},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:C.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=F),F});

(function($){

    var auth = $('#auth').val();
    var group_uuid = $('#groupUUId').val();
    var api = $('#api').val();

    var template = $('<div class="tp-wrapper champion">\
    <section class="tp-like-user clearfix counting" style="display:none;">\
        <img class="tp-best-like" src=""/>\
        <p class="tp-like-title">谁可赢得最赞？</p>\
        <div class="tp-deadline-time">\
            <p class="tp-tip">距离揭晓还有</p>\
            <p class="js-deadline-time"><span class="day">00</span>:<span class="hour">00</span>:<span class="min">00</span>:<span class="second">00</span></p>\
            <span class="fixed-time day">天</span>\
            <span class="fixed-time hour">时</span>\
            <span class="fixed-time min">分</span>\
            <span class="fixed-time second">秒</span>\
            <p style="line-height:50px;">届时照片获赞总数最高的群友，</br>将会赢得相册</p>\
            <span class="js-album-name" style="line-height:50px;">「」</span>\
            <p style="line-height:50px;">本群最赞。<br>\
                上传分享更多好照片，<br>\
                请更多微信好友点赞，<br>\
                角逐最赞。</p>\
        </div>\
    </section>\
    <section class="tp-like-user clearfix result" style="display:none;">\
        <img class="tp-best-like" src=""/>\
        <p class="tp-like-title">收获<span>173</span>个赞</p>\
        <img class="js-avatar" src="" width="220"/>\
        <div class="tp-like-info">\
            <div class="line"></div>\
            <p class="js-like-user-nick">最长用户名六七八九十一二三四五</p>\
            <div class="line"></div>\
        </div>\
        <div class="tp-like-album">\
            <p>群相册</p>\
            <p class="js-album-name">「最长相册名六七八九十一二三四五六七八九十」</p>\
            <p class="tp-album-deadline-time">截止于<span class="js-album-deadline-time">2015-09-27</span></p>\
        </div>\
    </section>\
    <footer>\
        <a class="tp-download-btn" href="http://a.app.qq.com/o/simple.jsp?pkgname=im.tupu.tupu"><span class="tp-icon tp-logo"></span>安装<strong>图扑APP</strong>&nbsp;&nbsp;&nbsp;轻松收集好照片</a>\
        <p>最好用的微信群相册，聚会、旅行、活动照片收集利器</p>\
    </footer>');

    $('body').append(template);

    $.ajaxSetup({
        headers: {'Authorization': auth}
    });
    $.get(api + 'api/v1/apps/qiniu/', function(data){
        if (data) {
            qiniu = data;
            $('body').find('.tp-best-like').attr('src', qiniu.https_domain +'img/crown_palm_icon.png');
            getChampionship();
        }
    });

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
            menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:faceboo', 'menuItem:share:QZone', 'menuItem:copyUr', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:exposeArticle','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:share:email','menuItem:setFont'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
    });


    /**
     *  读取相册图片处理
     **/
    function getChampionship() {
        var url = api + 'api/v1/shares/championship/';
        $.get(url, {'group_uuid': group_uuid}, function(data){
            if (data && data.championship) {
                var endTime = new Date(data.championship.end_at).getTime();
                var nowTime = new Date().getTime();
                var user = data.championship.winner;
                $('.js-album-name').text('「' + data.championship.group.name + '」');
                if (endTime > nowTime) {
                    countDown(endTime-nowTime);
                    $('.counting').show();
                    wx.onMenuShareTimeline({
                        title: '谁可赢得相册「' + data.championship.group.name + '」最赞？', // 分享标题
                        link: window.location.href, // 分享链接
                        imgUrl: qiniu.https_domain +'img/album_blue_square.png', // 分享图标
                        success: function () { 
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () { 
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wx.onMenuShareAppMessage({
                        title: '谁可赢得最赞？', // 分享标题
                        desc: '相册「' + data.championship.group.name + '」最赞揭晓倒计时', // 分享描述
                        link: window.location.href, // 分享链接
                        imgUrl: qiniu.https_domain +'img/crown_word_square.png', // 分享图标
                        // type: '', // 分享类型,music、video或link，不填默认为link
                        // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () { 
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () { 
                            // 用户取消分享后执行的回调函数
                        }
                    });
                } else {
                    user.headimgurl = user.headimgurl || qiniu.https_domain +'img/avatar_default.png';

                    $('.js-avatar').attr('src', user.headimgurl);
                    $('.js-like-user-nick').text(user.nickname).css({
                        'left': (460-$('.js-like-user-nick').width())/2,
                        'top': $('.js-like-user-nick').height() == 70 ? 0 : 28
                    });
                    
                    $('.tp-like-title span').html(user.championships_count);
                    $('.result').show();
                    wx.onMenuShareTimeline({
                        title: user.nickname + '赢得了相册「' + data.championship.group.name + '」最赞！', // 分享标题
                        link: window.location.href, // 分享链接
                        imgUrl: user.headimgurl, // 分享图标
                        success: function () { 
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () { 
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    wx.onMenuShareAppMessage({
                        title: user.nickname + '赢得了最赞！', // 分享标题
                        desc: '在相册「' + data.championship.group.name + '」中收获了最多赞', // 分享描述
                        link: window.location.href, // 分享链接
                        imgUrl: user.headimgurl, // 分享图标
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

            }
        });
    }

    var temp_day, temp_hour, temp_min, temp_second;
    var timer;

    /**
     * 倒计时
     * @param subTime
     */
    function countDown(subTime) {
        timer = setInterval(function() {
            subTime = subTime - 1000;
            setCountDown(subTime);
        }, 1000);
    }
    function setCountDown(subTime) {
        temp_day = Math.floor(subTime/1000/60/60/24);
        temp_hour = Math.floor(subTime%(1000*60*60*24)/1000/60/60);
        temp_min = Math.floor(subTime%(1000*60*60*24)%(1000*60*60)/1000/60);
        temp_second = Math.floor(subTime%(1000*60*60*24)%(1000*60*60)%(1000*60)/1000);

        $('.js-deadline-time .day').html(toTwoDigit(temp_day));
        $('.js-deadline-time .hour').html(toTwoDigit(temp_hour));
        $('.js-deadline-time .min').html(toTwoDigit(temp_min));
        $('.js-deadline-time .second').html(toTwoDigit(temp_second));
    }

    // 把数字转换成两位数的字符串
    function toTwoDigit(num) { return num < 10 ? "0" + num : num; }


})(jQuery);