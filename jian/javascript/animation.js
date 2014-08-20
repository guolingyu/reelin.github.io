(function() {
    var carousel = $("#carousel"),
        carWidth = carousel.width(),
        carHeight = carousel.height(),
        wheel = $("#wheel"),
        wheelWidth = wheel.width(),
        wheelHeight = wheel.height(),
        adventure = $("#adventure"),
        advWidth = adventure.width(),
        advHeight = adventure.height(),
        icon = $(".j-icon"),
        iconTopList = [];

    // 初始状态
    $(".main-building, .j-icon").css("visibility", "hidden");
    icon.each(function() {
        var that = $(this);
        that.data("top", that.css("top"));
        that.css("top", "-200px");
    });

    // µ÷ÓÃ¶¯»­º¯Êý
    $(window).load(function() {
        $(".wrapper-bg").fadeIn('800', function() {
            dropIcons();

            setTimeout(function() {
                carouselAnimation();
            }, 500);
        });
        
     });

    /**
     * 
     */
    function carouselAnimation() {
        carousel.animate({
            width: carWidth,
            height: 0,
            top: 400
        }, 10, function() {
            carousel.css("visibility", "visible");
            carousel.animate({
                height: carHeight,
                top: 160
            }, 450, function() {
                wheelAnimation();
            });
        });
    }

    function wheelAnimation() {        
        wheel.animate({
            width: wheelWidth,
            height: 0,
            top: 200
        }, 10, function() {
            wheel.css("visibility", "visible");
            wheel.animate({
                height: wheelHeight,
                top: -103
            }, 400, function() {
                adventureAnimation();
            });
        });
    }
    function adventureAnimation() {
        adventure.animate({
            width: advWidth,
            height: 0,
            top: 345
        }, 10, function() {
            adventure.css("visibility", "visible");
            adventure.animate({
                height: advHeight,
                top: -15
            }, 350);
        });
    }
    function dropIcons() {
        icon.css("visibility", "visible");
        icon.each(function() {
            var that = $(this),
                top = that.data("top");
            that.animate({
                top: top
            }, 500);
        });
    }
    var carouselTimeHandler = null,

    function shake() {

    }
})();