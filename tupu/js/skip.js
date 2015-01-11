(function() {
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
        isAndroid = (/Android/gi).test(nav.userAgent),
        isWeixin = (/MicroMessenger/ig).test(nav.userAgent),
        isQQ = (/QQ/ig).test(nav.userAgent),
        autoopen = params.search['autoopen']||params.hash['autoopen'],
        isappinstalled = params.search['isappinstalled'],
        appinstall = params.search['appinstall'],
        qqLink = 'http://reelin.github.io/tupu/qq.html',
        wxLink = 'http://reelin.github.io/tupu/weixin.html',
        iDownload = 'itms-apps://itunes.apple.com/us/app/tu-pu-yong-zhao-pian-chuang/id915233164?ls=1&amp;mt=8',
        openAppLink = 'newsapp://',
        skipAppLink = 'newsapp://web/http://c.m.163.com/CreditMarket/default.html',
        iframe = document.getElemaentById('ifr');

    if( (isIDevice || isIDeviceIpad) && !isAndroid){
        openAppLink = openAppLink || 'newsapp://';
    }else if(isAndroid){
        openAppLink = 'http://tupu.im/';
    }
    if(isappinstalled!==undefined){
        wxLink += '?isappinstalled='+isappinstalled+'&openurl='+openAppLink;
        qqLink += '?isappinstalled='+isappinstalled+'&openurl='+openAppLink;
    }else if(appinstall!==undefined){
        wxLink += '?appinstall='+appinstall+'&openurl='+openAppLink;
        qqLink += '?appinstall='+appinstall+'&openurl='+openAppLink;
    }else{
        wxLink += '?openurl='+openAppLink;
        qqLink += '?openurl='+openAppLink;
    }

    function download(){
        //  if(isAndroid){
        window.location = 'http://tupu.im/';
//            }else{
//                window.location = iDownload;
//            }
    }
    /*
     * iOS点击打开:
     1.如果是微信就去引导图页面
     2.如果不是微信就走安装就打开不安装就去app store
     3.如果微信用户按引导图从浏览器打开就能走通第2条

     android点击打开:
     1.如果是微信就在打开的时候同时跳转到有图的引导页
     2.如果不是微信就同时跳转到公公共下载页
     3.如果微信用户按引导图从浏览器打开就能走通第2条
     */
    function open(){
        if(isWeixin){
            window.location = wxLink;
        }else if((isIDevice || isIDeviceIpad) && !isAndroid){
            if(isQQ) {
                window.location = qqLink;
            } else {
                window.location = openAppLink;
                setTimeout(function(){
                    window.location = iDownload;
                }, 50);
            }
        } else {
            iframe.src = openAppLink;
            download();
        }
    }
    function skip() {
        if(isWeixin){
            window.location = wxLink;
        }else if(isQQ) {
            window.location = qqLink;
        }else if((isIDevice || isIDeviceIpad) && !isAndroid){
            window.location = skipAppLink;
            setTimeout(function(){
                window.location = iDownload;
            }, 50);
        } else {
            iframe.src = skipAppLink;
            download();
        }
    }
    $(".install-small, .footer .install").on("click", function(e) {
        e.preventDefault();
        open();
    });
    $(".modal .install").on("click", function(e) {
        e.preventDefault();
        skip();
    });
    //自动打开
    if(autoopen==1){
        open();
    }
})();