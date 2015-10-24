(function($) {

    var postId = '183';
    var key = 'js-dev-key';

    var h_stand = 300;
    var w_stand = 400;
    var w_win = 600;
    var w2 = 0;

    var group_id = '13';

    $.ajaxSetup({
        headers: {'Authorization': 'Basic '+ $.base64_encode('anonymous:'+key)}
    });
    $.post('http://121.201.58.29:80/api/v1/auth/email/login/',{'email': '117361827@qq.com', 'password': 'rl110110'}, function(data){
        if (data.user) {
            $.ajaxSetup({
                headers: {'Authorization': 'Basic '+ $.base64_encode(data.user.uuid+':'+key)}
            });
            getAlbum();
        }
    });

    function getAlbum() {
        var url = 'http://121.201.58.29:80/api/v1/users/self/posts/';
        $.get(url, function(data){
            var images_len = data.posts.length;
            if (images_len) {
                for (var i = 0; i < images_len; i ++) {
                    insertImage(data.posts[i], images_len);
                }
            }
        });
    }


    /* 插入图片 */
    function insertImage(post, len) {
        var image = post.photo,
            imgUrl = image.url;

        var $imgWrapper = $('<a href="\" class="js-album-item"></a>').height(h_stand),
            $img = $('<img src="">').attr('src', imgUrl).height(h_stand);

        $imgWrapper.append($img).data(post);
        if (w2 < w_stand) {
            if (w2 == 0) {
                $('#tp-album-thumb').append($('<div class="tp-photo-wrapper clearfix"></div>').append($imgWrapper));
            } else {
                $('.tp-photo-wrapper').last().append($imgWrapper);
            }
            w2 = w2 + $img.width();

        } else {
            handleImage();
            w2 = 0;
            $('#tp-album-thumb').append($('<div class="tp-photo-wrapper clearfix"></div>').append($imgWrapper));
            w2 = w2 + $img.width();

        }
        if ($('.tp-photo-wrapper img').length == len) {
            handleImage(true);
        }

    }

    /* 处理整行图片 */
    function handleImage(isLast) {
        var $imageWrapper = $('.tp-photo-wrapper').last(),
            images = $imageWrapper.find('img'),
            imageWrapper =  $imageWrapper.find('.js-album-item'),
            w_current = w_win + (images.length-1) * 20,
            h_deta = h_stand * w_current / $imageWrapper.width();

        if (isLast) { return ; }

        if (w2 != w_win) {
            /* w2/w_stand = h_stand/deta_h */
            images.height(h_deta);
            imageWrapper.height(h_deta);
            var w_wrapper = $('.tp-photo-wrapper').last().width(),
                w_deta = Math.abs(w_current - w_wrapper) / images.length;
            if (w_wrapper < w_win) {
                images.each(function() {
                    $(this).width($(this).width() + w_deta);
                    $(this).parent().width($(this).width() + w_deta);
                });

            } else if (w_wrapper > w_win) {
                images.each(function() {
                    $(this).width($(this).width() - w_deta);
                    $(this).parent().width($(this).width() - w_deta);
                })
            }
        }
    }

    /**
     * 先判断是横图还是竖图，横图按照浏览器宽，竖图按照浏览器高
     * 如果原始尺寸小于浏览器高度与宽度，直接显示原始尺寸，无须放大。
     */
    function modal(post) {
        var modal = $('.modal');

        var photo = post.photo;
        var url = photo.url;
        var img_width = photo.width;
        var img_height = photo.height;

        var img = $('.modal-main img');

        var win_width = $(window).width(),
            win_height = $(window).height();

        var margin_top,
            height_new,
            width_new;

        $('.modal, .modal-main').height(win_height);
        img.attr('src', url);
        $('.js-like-num').html(post.likes_count);

        if (post.liked) {
            $('.js-tp-like').addClass('tp-liked-black');
        } else {
            $('.js-tp-like').removeClass('tp-liked-black');
        }

        if (img_height > win_height || img_width > win_width) {
            if (img_width >= img_height) {
                var img_newHeight = img_height * 640 / win_height;

                margin_top = (win_height - img_newHeight)/2;
                width_new = win_width;
                height_new = 'auto';

            } else {
                margin_top = 0;
                width_new = 'auto';
                height_new = win_height;
            }
        } else {
            margin_top = (win_height - img_height)/2;
            height_new = 'auto';
            width_new = 'auto';
        }
        img.css({
            'margin-top': margin_top,
            'width': height_new,
            'height': width_new
        });
        modal.show();

    }

    $('.modal-close').on('click', function(e) {
        e.preventDefault();
        $(this).parent().hide();
    });
    $('.tp-wrapper').on('click', '#tp-album-thumb a', function(e) {
        e.preventDefault();
        modal($(this).data());
    });

    /* 点赞 */
    $('.js-tp-like').on('click', function(e) {
        var that = $(this),
            likeNum = $('.js-like-num');

        e.preventDefault();
        if (that.hasClass('tp-liked-black')) {
            that.removeClass('tp-liked-black');
            $('.tp-heart').addClass('broken');
                $('.tp-heart').removeClass('broken');
                likeNum.html(parseInt(likeNum.html())-1);
                addLike();

        } else {
            that.addClass('tp-liked-black');
            likeNum.html(parseInt(likeNum.html())+1);
            addLike();
        }
    });
    function addLike() {
        var url = '/api/v1/posts/' + postId + '/likes/';
        $.post(url);
    }





})(jQuery);