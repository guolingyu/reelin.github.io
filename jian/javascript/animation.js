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
    $(".no-move").hide();

    var winHeight = parseInt($(window).height()),
        conTop = (winHeight - 768)/ 2,
        iconTop = conTop > 200 ? "-" + conTop : -400;
    if(conTop > 0) {
        $(".container").css("marginTop", conTop);
    }

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
        }, 1500);
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
                duration: 700,
                complete: function() {
                    carousel.animate({
                        height: carHeight,
                        top: 160
                    }, 300, function() {
                        wheelAnimation();
                    });
                }
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
                height: wheelHeight*1.1,
                top: -130
            }, {
                duration: 700,
                complete: function() {
                    wheel.animate({
                        height: wheelHeight,
                        top: -103
                    }, 300, function() {
                        adventureAnimation();
                    });
                }
            });
        });
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
                duration: 700,
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
        }, 1700);
        wheelShakeHandler = setInterval(function() {
            wheelShake();
        }, 1700);
        adventureShakeHandler = setInterval(function() {
            adventureShake()
        }, 1700);
    }
    function carouselShake() {
        carousel.animate({
            width: parseInt(carWidth) + 4,
            height: parseInt(carHeight)+ 4,
            top: 155
        }, {
            easing: "linear",
            duration: 1200,
            complete: function() {
                carousel.animate({
                    width: carWidth,
                    height: carHeight,
                    top: 160
                },300, "linear");
            }
        });
    }

    function wheelShake() {
        wheel.animate({
            width: wheelWidth + 4,
            height: wheelHeight + 4,
            top: -110
        }, {
            easing: "linear",
            duration: 1200,
            complete: function() {
                wheel.animate({
                    width: wheelWidth,
                    height: wheelHeight,
                    top: -103
                }, 300, "linear");
            }
        });
    }
    function adventureShake() {
        adventure.animate({
            width: advWidth + 4,
            height: advHeight + 4,
            top: -20
        }, {
            easing: "linear",
            duration: 1200,
            complete: function() {
                adventure.animate({
                    width: advWidth,
                    height: advHeight,
                    top: -15
                }, 300, "linear");
            }
        });
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
        $(".rainbow").fadeIn(900);
    });
    wheel.on("click", function() {
        clearInterval(wheelShakeHandler);
        $(".rainbow").fadeIn(900);
    });
    adventure.on("click", function() {
        clearInterval(adventureShakeHandler);
        $(".jian").fadeIn(900);
    });
})();