(function(window,doc){
    var Navigator = (function(){
        var localStorage = window.localStorage,frame;
        /**
         * iframe Ԫ��
         *
         * @property {Element} frame
         */
        frame = null;
        /**
         * ����iframe,������iOS��UIWebViewû��JS API
         *
         * @method getFrame
         * @return {Element} iframe
         */
        function getFrame(){
            var _frame = document.createElement("iframe");
            _frame.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
            _frame.setAttribute("height","0px");
            _frame.setAttribute("width","0px");
            _frame.setAttribute("frameborder","0");
            document.documentElement.appendChild(_frame);
            return _frame;
        }
        /**
         * ɾ��iframe
         *
         * @method removeFrame
         * @param {Element} frame ִ�еķ���
         */
        function removeFrame(frame){
            frame && frame.parentNode.removeChild(frame);
        }
        /**
         * ִ����ͻ��˽�����Э��
         *
         * @method protocol
         * @param {String} command ִ�е�Э�鼰����
         * @param {boolean} single iOSʱ�Ƿ���ʹ�ö�����iframe,Ĭ��false
         * @param {boolean} noframe iOSʱ�Ƿ�ͨ��iframe,Ĭ��false
         */
        function protocol(command,single,noframe){
            var _frame,timer;
            //��ͨ��iframe
            if(noframe){window.location.href = command;return;}
            //ͨ��iframe
            if(single){
                _frame = getFrame();
                _frame.setAttribute("src", command);
                timer = setTimeout(function(){
                    removeFrame(_frame);
                },30000);
                _frame.onload = _frame.onreadystatechange = function(){
                    clearTimeout(timer);
                    removeFrame(_frame);
                };
            }else{
                frame = frame || getFrame();
                frame.setAttribute("src", command);
            }
        }
        /**
         * ��localStorage��ȡһ��ֵ
         *
         * @method getLocalValue
         * @param {String} id item id
         * @return {String} value
         */
        function getLocalValue(id){
            if(localStorage){
                return localStorage[id];
            }else{
                return null;
            }
        }
        /**
         * ����һ��localStorage��ֵ
         *
         * @method setLocalValue
         * @param {String} id item id
         * @param {String} val value
         */
        function setLocalValue(id,val){
            if(localStorage){
                localStorage.setItem(id,val);
            }
        }
        return {
            localStorage: localStorage,
            setLocalValue: setLocalValue,
            getLocalValue: getLocalValue,
            protocol: protocol
        }
    })();//end Object Navigator

    /**
     * window.location.search
     * window.location.hash
     */
    var localParam = function(search,hash){
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
    function MetaHandler(){
        var me = this;
        var meta = {},_els;

        function getContentStore(name){
            name = name.replace('-','_');
            var content = meta[name].seriation,store = {};
            for(var i=0;i<content.length;i++){
                if(content[i].length<1){
                    content[i] = null;
                    delete content[i];
                    content.length--;
                }else{
                    var ct = content[i].split('='),
                        pp = ct[0].replace('-','_');
                    if(pp){
                        store[pp] = ct[1];
                    }
                }
            }
            return store;
        }
        this.setContent = function(name,value){
            name = name.replace('-','_');
            meta[name].content = value;
            meta[name].el.content = value;
            return me;
        }
        this.getContent = function(name){
            name = name.replace('-','_');
            return meta[name] && meta[name].content;
        }
        function updateContent(name){
            meta[name].content = meta[name].seriation.join(',');
            me.setContent(name,meta[name].content);
            return me;
        }
        this.removeContentProperty = function(name,property){
            var name = name.replace('-','_'),
                _property = property.replace('-','_');
            if(meta[name]){
                if(meta[name].store[_property]!=null){
                    for(var i = 0;i<meta[name].seriation.length;i++){
                        if(meta[name].seriation[i].indexOf(property+'=')!=-1){
                            meta[name].seriation[i] = null;
                            delete meta[name].seriation[i];
                            break;
                        }
                    }
                }
                updateContent(name);
            }
            return me;
        }
        this.getContentProperty = function(name,property){
            name = name.replace('-','_');
            property = property.replace('-','_');
            return meta[name] && meta[name].store[property];
        }
        this.setContentProperty = function(name,property,value){
            var name = name.replace('-','_'),
                _property = property.replace('-','_'),
                pv = property+'='+value;
            if(meta[name]){
                if(meta[name].store[_property]!=null){
                    meta[name].store[_property] = value;
                    for(var i = 0;i<meta[name].seriation.length;i++){
                        if(meta[name].seriation[i].indexOf(property+'=')!=-1){
                            meta[name].seriation[i] = pv;
                            break;
                        }
                    }
                }else{
                    meta[name].store[_property] = value;
                    meta[name].seriation.push(pv);
                }
                updateContent(name);
            }
            return me;
        }
        this.fixViewportWidth = function(width){
            width = width || me.getContentProperty('viewport','width');
            if(width != 'device-width'){
                var iw = window.innerWidth || width,
                    ow = window.outerHeight || iw,
                    sw = window.screen.width || iw,
                    saw = window.screen.availWidth || iw,
                    ih = window.innerHeight || width,
                    oh = window.outerHeight || ih,
                    ish = window.screen.height || ih,
                    sah = window.screen.availHeight || ih,
                    w = Math.min(iw,ow,sw,saw,ih,oh,ish,sah),
                    ratio = w/width,
                    dpr = window.devicePixelRatio,
                    ratio = Math.min(ratio,dpr);
                var isAndroid=navigator.userAgent.match(/android/ig),
                    isIos=navigator.userAgent.match(/iphone|ipod|ipad/ig);
                if(isAndroid){
                    me.removeContentProperty('viewport','user-scalable');
                    if(ratio<1){
                        me.setContentProperty('viewport','initial-scale',ratio);
                        //me.setContentProperty('viewport','minimum-scale',ratio);
                        me.setContentProperty('viewport','maximum-scale',ratio);
                    }
                }else if(isIos && !isAndroid){
                    me.setContentProperty('viewport','user-scalable','no');
                }
            }
        }
        /**
         * ��ʼ��
         * _els
         * meta = {name:{content:String,seriation:Array,store:{property:String},...},...}
         * @method init
         */
        function init(){
            _els = document.getElementsByTagName('meta');
            for(var i=0;i<_els.length;i++){
                var name = _els[i].name;
                if(name){
                    name = name.replace('-','_');
                    meta[name] = {};
                    meta[name].el = _els[i];
                    meta[name].content = _els[i].content;
                    meta[name].seriation = meta[name].content.split(',');
                    meta[name].store = getContentStore(name);
                }
            }

            return me;
        }
        init();
        this.fixViewportWidth(640);
    }//end MetaHandler
    var HashHandler = (function(){
        var lc = window.location;
        function getByURL(url){
            var hash;
            url && url.replace(new RegExp('#(.*)', 'g'),function($1,$2){
                hash = $2;
            });
            return hash;
        }
        function get(){
            return getByURL(lc.hash);
        }
        function set(hash){
            lc.hash = hash;
        }
        return {
            get: get,
            set: set,
            getByURL: getByURL
        }
    })();
    function Subject(subject){
        this._subject = subject;
        this.observers = [];
    }
    Subject.prototype = {
        /**
         * @param {Function}|{Boject} observer
         */
        register: function(observer){
            if(!observer){
                throw new Error('An observer can not be undefined!');
            }else if(typeof observer === 'object' && typeof observer.update !== 'function'){
                throw {
                    name: 'Error',
                    method: 'Subject.register',
                    message: 'An observer object can not register without an update method!'
                }
            }
            this.unregister(observer);//��ֹ�ظ�ע��
            this.observers.push(observer);
            return this;
        },
        /**
         * @param {Function}|{Boject} observer
         */
        unregister: function(observer){
            this.observers = this.observers.filter(function(obsv){
                if(obsv !== observer){
                    return obsv;
                }
            });
            return this;
        },
        notify: function(){
            var args = [].slice.call(arguments);
            this.observers.forEach(function(obsv){
                if(typeof obsv === 'function'){
                    obsv.apply(obsv, args);
                }else{
                    obsv.update.apply(obsv, args);
                }
            });
            return this;
        }
    }
    function Pubsub(Subject){
        var topics = {};
        function subscribe(topic,observer){
            var subject;
            for(var key in topics){
                if(key === topic){
                    subject = topics[key];
                    break;
                }
            }
            if(!subject){
                subject = new Subject();
                addTopic(topic,subject);
            }
            subject.register(observer);
            return this;
        }
        function unsubscribe(topic){
            removeTopic(topic);
            return this;
        }
        function publish(topic){
            var args = [].slice.call(arguments);
            topics[topic] && topics[topic].notify.apply(topics[topic],args.slice(1));
            return this;
        }
        function addTopic(topic,subject){
            topics[topic] = subject;
        }
        function removeTopic(topic){
            delete topics[topic];
        }
        function getTopics(){
            var _topics = [];
            for(var key in topics){
                (typeof key === 'string') && _topics.push(key);
            }
            return _topics;
        }
        this.getTopics = getTopics;
        this.subscribe = subscribe;
        this.unsubscribe = unsubscribe;
        this.publish = publish;
    }
    function RESTFul(Pubsub,HashHandler){
        window.addEventListener('hashchange', locationHashChanged, false);

        var _RESTFul = this,
            UN_SUB_NAME = '__UN_SUBSCRIBED_ACTION',
            INIT_HASH_STR = formatHash(HashHandler.get()),
            emptyFn = function(){},
            _isFroward = true,
            actionsHistory = [INIT_HASH_STR];
        var changedCallback = emptyFn;

        //����ê�㣬���ҳ���Զ�����������
        var _st = document.createElement('style'),
            _div = document.createElement('div');
        _st.innerText = '.RESTFul-anchor{position: fixed; top: 0; left: 0;}';
        _div.className = 'RESTFul-anchor';
        document.body.appendChild(_st);
        document.body.appendChild(_div);

        function formatHash(hash){
            if(hash){
                //hash���ܴ�searchֵ
                hash = hash.replace(/\?.*/g,'');
            }
            return hash;
        }
        function locationHashChanged(e){
            e && e.preventDefault();
            var args = arguments[0] || {},
                hash;
            hash = {
                curHash: formatHash(HashHandler.get()),
                newHash: formatHash(HashHandler.getByURL(args.newURL)),
                oldHash: formatHash(HashHandler.getByURL(args.oldURL))
            }
            //console.log(hash);
            setLastAction(hash.curHash);
            changedCallback(hash.curHash,hash);
            dispatch(hash);
            hash.curHash && addAnchor(hash.curHash);
            return false;
        }
        function dispatch(hash){
            var topics = Pubsub.getTopics(),
                published = false;
            if(hash.curHash!==undefined){
                for(var i=0;i<topics.length;i++){
                    var key = topics[i];
                    if(key!==UN_SUB_NAME){
                        hash.curHash.replace(new RegExp(key+'(.*)','g'),function($1,$2){
                            if($1){
                                published = true;
                                Pubsub.publish(key,$2,key,hash);
                            }
                        });
                    }
                }
            }
            if(!published){
                Pubsub.publish(UN_SUB_NAME,hash.curHash,hash.curHash,hash);
            }
        }
        /**
         * ���������ⱻ����֮ǰ����ҳ���״μ���֮��
         * ��ʼ��һ����Դhash��ͬ����δ�����ĵ�����
         * ������Ȼ��ת��Դhash
         * �˷��������Ǳ�Ҫ��
         * @param {String} action
         * @param {Function} done
         */
        function initWith(action,done){
            if(INIT_HASH_STR && INIT_HASH_STR!==action){
                changedCallback = function(curHash){
                    if(curHash===INIT_HASH_STR){
                        changedCallback = emptyFn;
                        setTimeout(function(){
                            done.call(_RESTFul,Pubsub);
                        });
                    }else if(curHash===action){
                        forward(INIT_HASH_STR);
                    }
                };
                forward(action);
            }else{
                done.call(_RESTFul,Pubsub);
            }
        }
        /**
         * ǿ��ˢ��
         * ����������hash�仯����£�ǿ��ִ����������һ��
         */
        function run(){
            locationHashChanged();
            return Pubsub;
        }
        /**
         * ��������û�б�ע�������
         * @param {Object} observer
         */
        function onUnsubscribed(observer){
            Pubsub.subscribe(UN_SUB_NAME,observer);
            return Pubsub;
        }
        /**
         * ��hash����仯ʱ����,���������ж��ĵ����ⴥ��
         */
        function onChanged(callback){
            if(typeof callback==='function'){
                changedCallback = callback;
            }
            return Pubsub;
        }
        /**
         * ��ת��һ��ָ��������
         * @param {Object} action
         */
        function forward(action){
            _isFroward = true;
            if(action===null){
                window.history.forward();
            }else if(typeof action==='number'){
                if(action == -1){
                    _isFroward = false;
                }
                window.history.go(action);
            }else if(typeof action==='string'){
                HashHandler.set(action);
            }
            return Pubsub;
        }

        /**
         * ������һ����
         */
        function back(){
            var ac = getLastAction() || -1;
            //������������ʷ������ʷ
            if(window.history.length>1){
                ac = -1;
            }
            forward(ac);
            return Pubsub;
        }
        function setLastAction(action){
            var ac = actionsHistory.pop();
            if(ac!==undefined && ac!==action){
                actionsHistory.push(ac);
            }
            actionsHistory.push(action);
        }
        function getLastAction(){
            //pop��������Ϊ���һ���ǵ�ǰ��
            actionsHistory.pop();
            return actionsHistory.pop();
        }
        function setFirstAction(action){
            var ac = actionsHistory.shift();
            if(ac!==undefined && ac!==action){
                actionsHistory.unshift(ac);
            }
            actionsHistory.unshift(action);
        }
        function getFirstAction(){
            return actionsHistory.shift();
        }
        function isFroward(){
            return _isFroward;
        }
        function addAnchor(id){
            var _d = document.createElement('div'),__d;
            _d.id = id;
            _div.appendChild(_d);
            __d = document.getElementById(id);
            if(__d &&  __d!==_d){
                _div.removeChild(_d);
            }
        }
        Pubsub.initHash = INIT_HASH_STR;
        Pubsub.initWith = initWith;
        Pubsub.run = run;
        Pubsub.forward = forward;
        Pubsub.back = back;
        Pubsub.isFroward = isFroward;
        Pubsub.onUnsubscribed = onUnsubscribed;
        Pubsub.onChanged = onChanged;
        return Pubsub;
    }
    function newsApp(protocol){
        var emptyFn = function(){},
            isNewsApp = (/NewsApp/ig).test(navigator.userAgent),
            Callbacks,Protocols;
        Callbacks = {
            afterEncrypt: emptyFn,
            afterShare: emptyFn,
            afterComment: emptyFn,
            afterUserinfo: emptyFn,
            afterLogin: emptyFn,
            afterDevice: emptyFn,
            afterUploadImage: emptyFn
        }
        Protocols = {
            share: 'share://',
            comment: 'comment://',
            updateprofile: 'updateprofile://',
            encrypt: 'encrypt://',
            pushview: 'pushview://{TYPE}',
            userinfo: 'userinfo://',
            login: 'login://',
            device: 'device://'
        }

        protocol = protocol || emptyFn;

        function afterCallback(rs,callback){
            callback = callback || emptyFn;
            callback(rs);
            callback = emptyFn;
        }
        window.__newsapp_share_done = function(rs){
            afterCallback(rs,Callbacks.afterShare);
        }
        window.__newsapp_comment_done = function(rs){
            afterCallback(rs,Callbacks.afterShare);
        }
        window.__newsapp_encrypt_done = function(rs){
            afterCallback(rs,Callbacks.afterEncrypt);
        }
        window.__newsapp_userinfo_done = function(rs){
            afterCallback(rs,Callbacks.afterUserinfo);
        }
        window.__newsapp_login_done = function(rs){
            afterCallback(rs,Callbacks.afterLogin);
        }
        window.__newsapp_device_done = function(rs){
            afterCallback(rs,Callbacks.afterDevice);
        }
        //�����û�����
        function updateProfile(){
            protocol(Protocols.updateprofile,true);
        }
        /**
         * ��¼
         * @param {Function} callback �ɹ��ص�
         */
        function login(callback){
            Callbacks.afterLogin = callback;
            protocol(Protocols.login,true);
        }
        /**
         * ��ȡ�û���Ϣ
         * @param {Function} callback �ɹ��ص�
         */
        function userInfo(callback){
            Callbacks.afterUserinfo = callback;
            protocol(Protocols.userinfo,true);
        }
        /**
         * ��ȡ�豸��Ϣ
         * @param {Function} callback �ɹ��ص�
         */
        function device(callback){
            Callbacks.afterDevice = callback;
            protocol(Protocols.device,true);
        }
        /**
         * ����
         * @param {Function} callback �ɹ��ص�
         */
        function share(callback){
            Callbacks.afterShare = callback;
            protocol(Protocols.share,true);
        }
        /**
         * ����
         * @param {Function} callback �ɹ��ص�
         */
        function comment(callback){
            Callbacks.afterComment = callback;
            protocol(Protocols.comment,true);
        }
        /**
         * �򿪿ͻ�����ͼ
         * @param {String} type feedback,font,personalcenter,skin,font
         */
        function pushView(type){
            protocol(Protocols.pushview.replace('{TYPE}',type),true);
        }
        /**
         * ����
         * @param {String} data ��������
         * @param {Function} callback �ɹ��ص�
         */
        function encrypt(data,callback){
            Callbacks.afterEncrypt = callback;
            if(window.extra && window.extra.__newsapp_encrypt){
                afterCallback( window.extra.__newsapp_encrypt(data),Callbacks.afterEncrypt );
            }else{
                protocol(Protocols.encrypt+encodeURI(data),true);
            }
        }
        return {
            isNewsApp: isNewsApp,
            login: login,
            userInfo: userInfo,
            device: device,
            share: share,
            comment: comment,
            encrypt: encrypt,
            updateProfile: updateProfile,
            pushView: pushView
        }
    }//end newsApp
    function NTESApp(){
        if (!window.location.origin){
            window.location.origin = window.location.protocol
                + "//" + window.location.hostname
                + (window.location.port ? ':' + window.location.port: '');
        }
        return {
            localParam: localParam,
            Navigator: Navigator,
            MetaHandler: new MetaHandler,
            Subject: Subject,
            localStorage: window.localStorage,
            localHost: window.location.origin,
            newsApp: new newsApp(Navigator.protocol),
            RESTFul: RESTFul(new Pubsub(Subject),HashHandler)
        }
    }
    window.NTESApp = new NTESApp();
})(window,document);
(function($) {
    var newsApp = window.NTESApp.newsApp,
        isNewsapp = newsApp.isNewsApp,
        user = window.ns_Tie.user,
        isLogined = user.logined;
    try {//ָ������
        document.domain = "163.com";
    } catch(err) {
    }
    $(".wn-wrapper").css("height", $(window).height());
    $(".wn-modal-wrapper, .wn-modal-tips, .wn-login-modal").css("height", $(window).height());
    var list = $(".wn-nickname-list");

    /**
     * ���һ���
     */
    var isSwipe = false;
    $(".wn-wrapper").swipeLeft(function(e) {
        var orginalLeft = parseInt(list.css("margin-left")),
            active = $(".wn-wrapper li.active"),
            next = active.next();
        var newLeft = orginalLeft - 464 + "px";
        if (!isSwipe && !active.hasClass("last-item")){
            isSwipe = true;
            list.animate({"margin-left": newLeft}, 100, function() {

                active.removeClass("active");
                next.addClass("active");
                isSwipe = false;
            });
        }
    }).swipeRight(function(e) {
        var orginalLeft = parseInt(list.css("margin-left")),
            active = $(".wn-wrapper li.active"),
            prev = active.prev(),
            newLeft = orginalLeft + 464 + "px";
        if (!isSwipe && !active.hasClass("first-item")){
            isSwipe = true;
            list.animate({"margin-left": newLeft}, 100, function() {
                active.removeClass("active");
                prev.addClass("active");
                isSwipe = false;
            });
        }
    });

    $(".wn-btn-red").on("click", function(e) {
        e.preventDefault();

        if (isNewsapp) {

            newsApp.userInfo(function(rs){
                if(rs){
                    if (!isLogined) {
                        var name = rs.name,
                            reg = /(@sina.163.com|@tencent.163.com)/g;
                        if(reg.test(name)){
                            showTipsModal();
                        } else {
                            showLoginForm();
                            $(".login-form .userid").val(rs.name);
                        }
                    } else {
                        submitApplyForm();
                    }
                } else {
                    newsApp.login(function() {
                        if (!isLogined) {
                            newsApp.userInfo(function(rs){
                                var name = rs.name,
                                    reg = /(@sina.163.com|@tencent.163.com)/g;
                                if(rs && name){
                                    if(reg.test(name)){
                                        showTipsModal();
                                    } else {
                                        showLoginForm();
                                        $(".login-form .userid").val(rs.name);
                                    }
                                }
                            });
                        } else {
                            submitApplyForm();
                        }
                    });
                }
            });
        } else {
            if (!isLogined) {
                showLoginForm();
            } else {
                submitApplyForm();
            }
        }
    });
    //��ֹbody���»���
    $("body").on('touchmove',function(e){
        e.preventDefault();
    });
    /**
     * ��ʾ�ƺ���Ϣ����
     */
    function showModal() {
        $("#wn_form").submit();
        var str = '���ѻ�á�' + $(".wn-wrapper li.active img").attr("alt") + '���ԡ��ƺţ�����������ڸ�����Ϊ���İ�������ź������ˣ�';
        $(".wn-modal-wrapper .wn-modal-main p").html(str);
        $(".wn-modal-wrapper").show();
    }
    function showLoginForm() {
        $(".wn-login-modal").show();
    }
    function showTipsModal() {
        $(".wn-modal-tips").show();
    }
    $(".wn-modal-mask").on("click", function() {
        $(this).parent().hide();
    });
    $(".wn-modal-wrapper .wn-btn-green").on("click", function() {
        if(isNewsapp){
            newsApp.share();
            $(".wn-modal-wrapper").hide();
        } else {
            redirectToDownload();
        }
    });
    $(".wn-modal-tips .wn-btn-green").on("click",function() {
        $(".wn-modal-tips").hide();
        showLoginForm();
    });
    function redirectToDownload(link){
        link = link || window.location.href;
        redirectToPage('http://3g.163.com/ntes/special/00340BF8/newsappdowncommon.html#url=newsapp://web/'+link);
    }
    function redirectToPage(link){
        window.location = link;
    }
    $(".wn-login-modal .wn-modal-mask").on("click", function() {
        $(".wn-login-modal").hide();
    });
    $(".login-form .wn-btn-green").on("click", function(e) {
        e.preventDefault();
        if (verifyForm()) {
            $(".login-form").submit();
        }
    });
    var applyError = {
        '-1' : 'ͨ��֤��֤ʧ��',
        '-2' : '�ƺ�idΪ�ջ򲻴���',
        '-3' : 'etimeΪ�ջ򲻺Ϸ�',
        '-4' : '������Ȩ��',
        '0' : 'ʧ��'
    };

    /**
     * �ύ��������
     */
    function submitApplyForm() {
        $.post('http://tie.163.com/reply/applyTitle.jsp', {
            titleid: Zepto(".wn-nickname-list .active").attr("data-value"),
            "etime": "2014-07-15"
        }, function(data){
            if (data){
                if (data.code == 1) {
                    showModal();
                } else {
                    alert(applyError[data.code]);
                }
            }
        });
    }

    /**
     * ����IFrame
     * @return Element iframe
     * @method createFrame
     */
    var listenFrame = true;
    function createFrame() {
        var iframe, id = 'login_util_frame', count = 0;
        iframe = toElement('<iframe src="javascript:void(0);" name="' + id + '" />');
        iframe.setAttribute('id', id);
        iframe.setAttribute('border', 'no');
        iframe.style.display = 'none';
        iframe.onload = iframe.onreadystatechange = function() {
            if (!listenFrame) {
                return;
            }//�����¼�У�Ե�¼
            if ((!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {

                if (count || this.contentWindow.location.search) {
                    verifyLogin(getSearches(this.contentWindow.location.search));
                }
                count++;
            }
        };
        return iframe;
    }
    function create() {
        document.body.appendChild(createFrame());
        $(".login-form").attr("target", "login_util_frame");
    }
    var toElement = (function() {
        var div = document.createElement('div');
        return function(html) {//�հ�,�����ٴδ���div
            div.innerHTML = html;
            var element = div.firstChild;
            div.removeChild(element);
            return element;
        };
    })();

    function verifyForm() {
        var nf = $(".login-form .userid"),
            name = nf.val(),
            pf = $(".login-form .password"),
            pass = pf.val();
        if (name.length == 0) {
            showError("�������û���");
            nf.focus();
            return false;
        } else if (pass.length == 0) {
            showError("����������");
            pf.focus();
            return false;
        }
        return true;
    }
    function loginSuccess(data) {
        isLogined = true;
        $(".login-tips").html("��¼�ɹ���");

        setTimeout(function() {
            $(".wn-login-modal").hide();
            setTimeout(function() {
               submitApplyForm();
            }, 10)
        }, 50);

    }

    function loginFailed(data) {
        isLogined = false;
        showError( data && data.errorMsg);

        if(!data){
            return;
        }

        switch(parseInt(data.errorType)){
            case 420:
                setTimeout(function(){
                    $(".login-form .userid").focus();
                }, 1000);
                break;
            case 428:
                window.open(data.url ? [unescape(data.url), "url=" + location.href].join("&") : "http://reg.163.com/redirect.jsp", "_self");
                break;
            case 460:
                setTimeout(function(){
                    $(".login-form .password").focus();
                }, 1000);
                break;
            default:
                break;
        }
    }
    /**
     * ��ȡURL�е���������
     * @param String href
     * @method getSearches
     */
    function getSearches(href) {
        href = href || window.location.search;
        var str = href.substring(1), slist = str.split('&'), data = {};
        for (var i = 0; i < slist.length; i++) {
            var d = slist[i].split('=');
            d[0] && (data[d[0]] = d[1] || null);
        }
        return data;
    }
    var errorMsg = {
        412 : '���ԵĴ����Ѿ�̫��,���һ��ʱ������',
        414 : '���IP��¼ʧ�ܴ�����,���Ժ�����',
        415 : '������¼��������Ѿ�̫��,����������',
        416 : '���IP�����¼����Ƶ�������Ժ�����',
        417 : '���IP�����¼�����࣬����������',
        418 : '������¼������,����������',
        419 : '��ĵ�¼��������Ƶ�������Ժ�����',
        420 : '�û������',
        422 : '�ʺű������������ٵ�¼',
        424 : '�����ŷ����ѵ��ڣ��������',
        425 : '�����ʺŲ����ڼ�����Ч������',
        426 : '�����ʺŲ����Ѿ����˼�����Ч����',
        427 : '��ʱ���ѳ���5������Ч��',
        428 : '��Ҫ�����м�����ҳ��',
        460 : '���벻��ȷ',
        500 : 'ϵͳ��æ�������Ժ�����',
        503 : 'ϵͳά���������Ժ�����',
        1000: '��������Ч���û���'
    };


    /**
     * ���������Ϣ
     * @param msg
     */
    function showError(msg) {
        $(".login-tips").html(msg);
    }

    /**
     * У���¼״̬
     */
    function verifyLogin() {
        if (verifyCookie && verifyCookie()) {
            for (var fn in success) {
                if ( typeof success[fn] === 'function') {
                    success[fn].call(this, arguments[0]);
                }
            }
        } else {
            for (var fn in failed) {
                if ( typeof failed[fn] === 'function') {
                    arguments[0] && (arguments[0].errorMsg = errorMsg[errorMsg[arguments[0].errorType] ? arguments[0].errorType : 1000])/* && console.log(arguments[0].errorType)*/;
                    failed[fn].call(this, arguments[0]);
                }
            }
        }
    }

    function verifyCookie() {
        var S_INFO = NTES.cookie.get('S_INFO'), P_INFO = NTES.cookie.get('P_INFO');
        return (S_INFO && (P_INFO[2] != '2'));
    }
    //У��Cookie�ķ���ʵ��
    var success = {},
        failed = {};
    success.userProduct = function(data) {
        loginSuccess(data);
    };
    failed.userProduct = function(data) {
        loginFailed(data);
    };
    create();

})(Zepto);