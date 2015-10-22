(function($) {

    var qiniu = {},
        key = 'js-dev-key';

    var h_stand = 300;
    var w_stand = 400;
    var w_win = 600;
    var w2 = 0;

    var page = 1;



//    $.ajaxSetup({
//        headers: {'Authorization': 'Basic '+ $.base64_encode('anonymous:js-dev-key')}
//    });
//    $.post('http://121.201.58.29:5000/api/v1/auth/email/register/',{'email': '117361827@qq.com', 'password': 'rl110110'}, function(data){
//        $.ajaxSetup({
//            headers: {'Authorization': 'Basic '+ $.base64_encode(data.user.uuid+':'+key)}
//        });
//        uploadImage();
//    });
    $.ajaxSetup({
        headers: {'Authorization': 'Basic '+ $.base64_encode('anonymous:'+key)}
    });
    $.post('http://121.201.58.29:5000/api/v1/auth/email/login/',{'email': '117361827@qq.com', 'password': 'rl110110'}, function(data){
        if (data.user) {
            $.ajaxSetup({
                headers: {'Authorization': 'Basic '+ $.base64_encode(data.user.uuid+':'+key)}
            });
            uploadImage();
            getGroupImages(page);
//            $.ajax({
//                'url': 'http://121.201.58.29:5000/api/v1/groups/6/',
//                'method': 'put'
//            }).success(function(data) {
//                $('.js-group-num').html(data.posts_count);
//                $('.js-member-num').html(data.members_count)
//            });
        }
    });

    function uploadImage() {
        $.get('http://121.201.58.29:5000/api/v1/apps/qiniu/', function(data){
            if (data) {
                qiniu = data;
                var uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',    //上传模式,依次退化
                    browse_button: 'js-upload-image',       //上传选择的点选按钮，**必需**
                    uptoken_url: qiniu['token'],            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                    container: 'container',
                    // downtoken_url: '/downtoken',
                    // Ajax请求downToken的Url，私有空间时使用,JS-SDK将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
                    uptoken : qiniu['token'], //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                    unique_names: false, // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
                    // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
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
                    init: {
                        'FilesAdded': function(up, files) {
                            plupload.each(files, function(file) {
                                // 文件添加进队列后,处理相关的事情
//                                var progress = new FileProgress(file, 'fsUploadProgress');
//                                progress.bindUploadCancel(up);
                            });
                        },
                        'BeforeUpload': function(up, file) {
                            // 每个文件上传前,处理相关的事情
                            window.isloading = false;
                        },
                        'UploadProgress': function(up, file) {
                            // 每个文件上传时,处理相关的事情
                            var progress = new FileProgress(file, 'fsUploadProgress');
                            var chunk_size = plupload.parseSize(this.getOption('chunk_size'));

                            if (!window.isloading) {
                                window.isloading = true;
                                console.log('2');
                                progress.setImage(up, file.name);
                            }

                            progress.setProgress(file.percent + "%", file.speed, chunk_size);
                            progress.bindUploadCancel(up);
                        },
                        'FileUploaded': function(up, file, info) {
                            // 每个文件上传之后，处理相关的事情

                            window.isloading = false;
                            var domain = up.getOption('domain'),
                                res = $.parseJSON(info),
                                sourceLink = domain + res.key;

//                                progress.setComplete(up, info);
                            var imageInfo = Qiniu.imageInfo(res.key);
                            $.post('http://121.201.58.29:5000/api/v1/posts/',{
                                'group_id': '6',
                                'url': sourceLink,
                                'width': imageInfo.width,
                                'height': imageInfo.height,
                                'last': 'true'
                            }, function(data){
                                if (data.post.id) {
                                    $('#tp-album-thumb .tp-photo-wrapper').addClass('delete');
                                    getGroup(page, file.id);
                                }
                            });
                            // 每个文件上传成功后,处理相关的事情
                            // 其中 info 是文件上传成功后，服务端返回的json，形式如
                            // {
                            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                            //    "key": "gogopher.jpg"
                            //  }
                            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                            // var domain = up.getOption('domain');
                            // var res = parseJSON(info);
                            // var sourceLink = domain + res.key; 获取上传成功后的文件的Url
                        },
                        'Error': function(up, err, errTip) {
                            //上传出错时,处理相关的事情
                        },
                        'UploadComplete': function() {
                            console.log('3');
                            //队列文件处理完毕后,处理相关的事情
                        }
//                            'Key': function(up, file) {
//                                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
//                                // 该配置必须要在 unique_names: false , save_key: false 时才生效
//
//                                var key = "";
//                                // do something with key here
//                                return key
//                            }
                    }
                });

            }
        });
    }

    /* 登陆加载相册图片 */
    function getGroup(page, fileId) {
        $.post('http://121.201.58.29:5000/api/v1/auth/email/login/',{'email': '117361827@qq.com', 'password': 'rl110110'}, function(data){
            if (data.user) {
                getGroupImages(page, fileId);

            }
        });

    }

    /* 读取相册图片处理 */
    function getGroupImages(page, fileId) {
        var data = {
            'page': page || 1
        };
        if (page == 1) {w2 = 0;}
        $.get('http://121.201.58.29:5000/api/v1/groups/6/posts/',data, function(data){
            var images_len = data.posts.length,
                $delete = $('#tp-album-thumb .tp-photo-wrapper.delete');
            if (images_len) {
                for (var i = 0; i < images_len; i ++) {
                    if (i == 0) {
                        $('#'+fileId).remove();
                    }
                    insertImage(data.posts[i].photo, i, images_len);
                }
                if ($delete.length) {
                    $delete.remove();
                }
            }
        });
    }



    /* 插入图片 */
    function insertImage(image, index, len) {
        var imgHeight = image.height,
            imgWidth = image.width,
            imgUrl = image.url,
            $imgWrapper = $('<a href="\"' + image.id + ' class="js-album-item"></div>').height(h_stand),
            $img = $('<img src="">').attr('src', imgUrl).height(h_stand);
//        $('#hidden-wrapper').append($img);

        $imgWrapper.append($img);
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

    $('.tp-album-tab .tp-album-number').click(function(e) {
        e.preventDefault();
        $('.tp-album-tab .active').removeClass('active');
        $(this).addClass('active');
        $('.tp-album-photo').show();
        $('.tp-member-wrapper').hide();
    });
    $('.tp-album-tab .tp-album-member').click(function(e) {
        e.preventDefault();
        $('.tp-album-tab .active').removeClass('active');
        $(this).addClass('active');
        $('.tp-album-photo').hide();
        $('.tp-member-wrapper').show();
    });
    $('#js-upload-image').on('click', function(e) {
        e.preventDefault();
        $('html,body').scrollTop(590);
    })





})(jQuery);