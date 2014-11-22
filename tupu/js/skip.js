function skip(link) {
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
        skipAppLink = link,
        openAppLink = link,
        iframe = jQuery('#ifr');

    if( (isIDevice || isIDeviceIpad) && !isAndroid){
        skipAppLink = skipAppLink || 'tupu://';
    }else if(isAndroid){
        skipAppLink= 'http://tupu.im/';
    }
    alert('isappinstalled'+alert(isappinstalled);)
    alert('appinstalled'+alert(appinstalled);)
    if(isappinstalled!==undefined){
        wxLink += '?isappinstalled='+isappinstalled+'&openurl='+skipAppLink;
        qqLink += '?isappinstalled='+isappinstalled+'&openurl='+skipAppLink;
    }else if(appinstall!==undefined){
        wxLink += '?appinstall='+appinstall+'&openurl='+skipAppLink;
        qqLink += '?appinstall='+appinstall+'&openurl='+skipAppLink;
    }else{
        wxLink += '?openurl='+skipAppLink;
        qqLink += '?openurl='+skipAppLink;
    }
    alert(wxLink);

    function download(){
        window.location = 'http://tupu.im/';
    }
    function open() {
        alert('yo')
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
        download();
    });
    $(".modal .install").on("click", function(e) {
        e.preventDefault();
        open();
    }); 
}
   