(function($) {
    $('body').css('background', '#727171');
    var mainHeight = $('.center .main').height(),
        winHeight = $(window).height() - 158;
    if (mainHeight < winHeight) {
        $('.center .main').height(winHeight);
    }
    $('input').blur(function() {
        if ($(this).attr('name') == 'confirmPassword') {
            verifyPassword($(this), 1);
        } else {
            verifyPassword($(this));
        }
    });
    function verifyPassword(elem, isConfirmPassword) {
        var value = elem.val(),
            len = value.length,
        password = $('input[name="password"]').val();
        if (len < 6 || len > 18 || !(/^[a-zA-Z0-9!@#$%^&*()_+|{}?><\-\]\\[\/]*$/.test(value))) {
            $('.tips .text').html('密码格式错误');
            $('.tips').css('top', $('body').scrollTop()).show();
            setTimeout(function() {
                $('.tips').hide();
            }, 2000);
            elem.focus();
            return false;
        } 
        if (isConfirmPassword && value != password) {
            $('.tips .text').html('密码不一致');
            $('.tips').css('top', $('body').scrollTop()).show();
            setTimeout(function() {
                $('.tips').hide();
            }, 2000);
            elem.focus();
            return false;    
        }
        $('.tips').hide();
        return true;
            
    }
    $('form button').on('click', function(e) {
        e.preventDefault();
        if (verifyPassword($('input[name="password"]')) && verifyPassword($('input[name="confirmPassword"]'), 1)) {
            $('form').submit();
        }    
    });
    $('.center').on('click', '.tips .close', function(e) {
        e.preventDefault();
        $('.tips').hide();
    });
})(jQuery);