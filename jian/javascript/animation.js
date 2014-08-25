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
        icon = $(".j-icon");

    // 初始状态
    $(".main-building, .j-icon").css("visibility", "hidden");
    $(".no-move").hide();

    var winHeight = parseInt($(window).height()),
        conTop = (winHeight - 768)/ 2,
        iconTop = conTop > 200 ? "-" + conTop : -400;
    if(conTop > 0) {
        $(".container").css("marginTop", conTop);
    }

    /**
     * 初始坠落
     */
    icon.each(function() {
        var that = $(this);
        if (!that.hasClass("no-move")) {
            that.data("top", that.css("top"));
            that.css("top", iconTop);
        }
    });

    // 动画开始
    $(window).load(function() {
        setTimeout(function() {
            $(".wrapper-bg").fadeIn('900', function() {
                dropIcons();
                setTimeout(function() {
                    carouselAnimation();
                }, 500);
            });
            $(".no-move").css("visibility","visible").fadeIn();
        }, 1200);
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
                height: carHeight*1.1,
                top: 130
            }, {
                duration: 550,
                complete: function() {
                    carousel.animate({
                        height: carHeight,
                        top: 160
                    }, 300);
                }
            });
        });
        setTimeout(function() {
            wheelAnimation();
        }, 400);
    }

    function wheelAnimation() {        
        wheel.animate({
            width: wheelWidth,
            height: 0,
            top: 200
        }, 10, function() {
            wheel.css("visibility", "visible");
            wheel.animate({
                height: wheelHeight*1.1,
                top: -130
            }, {
                duration: 550,
                complete: function() {
                    wheel.animate({
                        height: wheelHeight,
                        top: -103
                    }, 300);
                }
            });
        });
        setTimeout(function() {
            adventureAnimation();
        }, 400);
    }
    var carouselShakeHandler = null,
        wheelShakeHandler = null,
        adventureShakeHandler = null;
    function adventureAnimation() {
        adventure.animate({
            width: advWidth,
            height: 0,
            top: 345
        }, 10, function() {
            adventure.css("visibility", "visible");
            adventure.animate({
                height: advHeight*1.1,
                top: -60
            }, {
                duration: 550,
                complete: function() {
                    adventure.animate({
                        height: advHeight,
                        top: -15
                    }, 300, function() {
                        wheelShake();
                        adventureShake()
                        shakeHandler();
                        carouselShake();
                    });
                }
            });
        });
    }
    function shakeHandler() {
        carouselShakeHandler = setInterval(function() {
            carouselShake();
        }, 1100);
        wheelShakeHandler = setInterval(function() {
            wheelShake();
        }, 1100);
        adventureShakeHandler = setInterval(function() {
            adventureShake()
        }, 1100);
    }
    function carouselShake() {
        setTimeout(function() {
            carousel.attr("style", "").attr("src", "images/1-1-small.png");
        }, 500);
        setTimeout(function() {
            carousel.attr("src", "images/1-1.png");
        },600);
    }

    function wheelShake() {
        setTimeout(function() {
            wheel.attr("style", "").attr("src", "images/1-2-small.png");
        }, 500);
        setTimeout(function() {
            wheel.attr("src", "images/1-2.png");
        },600);
    }
    function adventureShake() {
        setTimeout(function() {
            adventure.attr("style", "").attr("src", "images/1-3-small.png");
        }, 500);
        setTimeout(function() {
            adventure.attr("src", "images/1-3.png");
        },600);
    }
    function dropIcons() {
        icon.css("visibility", "visible");
        icon.each(function() {
            var that = $(this),
                top = that.data("top");
            that.animate({
                top: top
            }, 700);
        });
    }
    carousel.on("click", function() {
        clearInterval(carouselShakeHandler);
        clearInterval(wheelShakeHandler);
        $(".rainbow").fadeIn(900);
    });
    wheel.on("click", function() {
        clearInterval(carouselShakeHandler);
        clearInterval(wheelShakeHandler);
        $(".rainbow").fadeIn(900);
    });
    adventure.on("click", function() {
        clearInterval(adventureShakeHandler);
        $(".jian").fadeIn(900);
    });
})();