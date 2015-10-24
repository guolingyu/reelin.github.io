(function($) {
    var postId = '183',
        key = 'js-dev-key';

    // 测试登陆用户
    $.ajaxSetup({
        headers: {'Authorization': 'Basic '+ $.base64_encode('anonymous:'+key)}
    });
    $.post('http://121.201.58.29:5000/api/v1/auth/email/login/',{'email': '117361827@qq.com', 'password': 'rl110110'}, function(data){
        if (data.user) {
            $.ajaxSetup({
                headers: {'Authorization': 'Basic '+ $.base64_encode(data.user.uuid+':'+key)}
            });
            getPost();
        }
    });

    $('.tp-wrapper').on('click', '.js-tp-like', function(e) {
        var that = $(this),
            likeNum = $('.js-like-num');
        e.preventDefault();
        if (that.hasClass('tp-icon-liked')) {
            that.removeClass('tp-icon-liked');
            $('.tp-heart').addClass('broken');
            setTimeout(function() {
                $('.tp-heart').removeClass('broken');
//                that.show();
                likeNum.html(parseInt(likeNum.html())-1);
                addLike();
            }, 700);

        } else {
            that.addClass('tp-icon-liked');
            likeNum.html(parseInt(likeNum.html())+1);
            addLike();
        }
    });
    $('.tp-wrapper').on('click', '.js-tp-liked', function(e) {
        var that = $(this);
        e.preventDefault();
        that.removeClass('tp-icon-liked').addClass('tp-icon-like');
    });
    function getPost() {
        var url = '/api/v1/posts/' + postId + '/';
        $.get(url, function(data) {
            if (data.post.id) {
                var photo = data.post.photo;
                displayImage(photo);
                if (photo.caption) {
                    $('.tp-photo-desc').html(photo.caption);
                } else {
                    $('.tp-photo-desc').hide();
                }
                $('.js-like-num').html(data.post.likes_count);
                if (data.post.liked) {
                    $('.js-tp-like').addClass('tp-icon-liked');
                }
            }
        })
    }
    function addLike() {
        var url = '/api/v1/posts/' + postId + '/likes/';
        $.post(url);
    }

    /**
     * 1. 当原始图片宽度 > 手机分辨率宽度W时，原始图片等比缩小为展示图片，展示图片宽度W1=W。
     1.1 缩小后的展示图片最小高度H(min)=W/5，即缩小到这个高度时，展示图片 宽度W1还是大于W，则不再缩小图片，而是截取图片中间部分展示（宽度为W），此时的展示尺寸是W*H(min)。（即最小有效展示尺寸）
     2.1 当原始图片宽度 <手机分辨率宽度W时，原始图片居中展示，背景显示灰色占位图（#CCCCCC）,如下图。点击整个占位图区域，都可以弹出显示图片。
     2.2 当原始图片宽度 <手机分辨率宽度W，原始图片高度 <展示图片最小高度H(min)=W/5，原始图片直接居中展示，背景显示灰色（#CCCCCC）最小占位图, 占位图尺寸是W*H(min)，如下图。点击整个占位图区域，都可以弹出显示图片。
     */
    function displayImage(photo) {
        var img = $('.tp-photo-info img'),
            sw = window.screen.width || window.innerWidth,
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

})(jQuery);