/*
* 图片缩放与布局算法：
 1. 基准高度H1＝总宽度W的一半（600/2）＝300px
 2. 参考宽度W1＝基准高度H1的4/3（300x4/3）＝400px（取整数时直接舍掉小数点后的数值，不进行四舍五入）
 5. 让每张图片等比缩小到基准高度H1（300）

 6. 将缩小后的图片放进一行内排列（图片边距与间距S=20），排列宽度为W2
 7. 当W2<W1（400），继续增加图片，直到W2>=W1，不再增加
 8. 此时，整行内图片等比调整，使得整行宽度W2＝W，即以下3种情况（注意：调整时图片边距与间距S=20不变，只有图片进行等比缩放）：
     8.1 如果W2>W（600），整行缩小到W2＝W
     8.2 如果W1<W2<W，整行放大到W2＝W
     8.3 如果W2=W，则无需调整
* */
(function($) {

    var h_stand = 300;
    var w_stand = 400;
    var w_win = 600;
    var w2 = 0;
    var imagesArray = ['../test/1.jpg', '../test/2.jpg', '../images/test/3.jpg','../images/test/4.jpg', '../images/test/5.jpg', '../images/test/6.jpg', '../images/test/7.jpg', '../images/test/8.jpg'];
    var tempHtml = $('<img src="" class="js-album-item">');

    function loadImage(imagesArray) {
        var len = imagesArray.length;

        for( var i = 0; i < len; i++) {
            insertImage(imagesArray[i], i, len);
        }
    }

    /* 插入图片 */
    function insertImage(image, index, len) {
        var $img = $('<img src="" class="js-album-item">').attr('src', image).height(h_stand);
        $('#hidden-wrapper').append($img);
        $('#hidden-wrapper img')[index].onload = function() {
            console.log($(this).attr('src'), w2);
            if (w2 < w_stand) {
                if (w2 == 0) {
                    $('#tp-album-thumb').append($('<div class="tp-photo-wrapper"></div>').append($(this)));
                } else {
                    $('.tp-photo-wrapper').last().append($(this));
                }
                w2 = w2 + $(this).width();

            } else {
                handleImage();
                w2 = 0;
                $('#tp-album-thumb').append($('<div class="tp-photo-wrapper"></div>').append($(this)));
                w2 = w2 + $(this).width();
                if ($('.tp-photo-wrapper img').length == len) {
                    handleImage();
                }
            }
        };
    }

    /* 处理整行图片 */
    function handleImage() {
        var $imageWrapper = $('.tp-photo-wrapper').last(),
            h_deta = h_stand * w_win / $imageWrapper.width(),
            images = $imageWrapper.find('img');
        if (w2 != w_win) {
            /* w2/w_stand = h_stand/deta_h */
            images.height(h_deta);
            var w_wrapper = $('.tp-photo-wrapper').last().width(),
                w_deta = Math.abs(w_win + (images.length-1) * 20 - w_wrapper) / images.length;
            if (w_wrapper < w_win) {
                images.each(function() {
                    $(this).width($(this).width() + w_deta);
                })

            } else if (w_wrapper > w_win) {
                images.each(function() {
                    $(this).width($(this).width() - w_deta);
                })
            }
        }
    }

    loadImage(imagesArray);

})(Zepto);

