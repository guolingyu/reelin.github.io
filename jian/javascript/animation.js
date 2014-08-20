(function() {
    var carousel = $("#carousel"),
        carWidth = carousel.width(),
        carHeight = carousel.height(),
        wheel = $("#wheel"),
        wheelWidth = wheel.width(),
        wheelHeight = wheel.height(),
        adventure = $("#adventure"),
        advWidth = adventure.width(),
        advHeight = adventure.height();
    $(".main-building").css("visibility", "hidden");
    carouselAnimation();
    function carouselAnimation() {
        carousel.animate({
            height: 0,
            top: 400
        }, 10, function() {
            carousel.css("visibility", "visible");
            carousel.animate({
                width: carWidth*1.2,
                height: carHeight*1.2,
                top: 100
            }, 800, function() {
                carousel.animate({
                    width: carWidth,
                    height: carHeight,
                    top: 160
                }, 300, function() {
                    wheelAnimation();
                });

            });
        });
    }

    function wheelAnimation() {
        wheel.animate({
            height: 0,
            top: 200
        }, 10, function() {
            wheel.css("visibility", "visible");
            wheel.animate({
                width: wheelWidth*1.2,
                height: wheelHeight*1.2,
                top: -170
            }, {
                duration: 800,
                complete: function() {
                    wheel.animate({
                        width: wheelWidth,
                        height: wheelHeight,
                        top: -103
                    }, 300, function() {
                        adventureAnimation();
                    });
                }
            });
        });
    }
    function adventureAnimation() {
        adventure.animate({
            height: 0,
            top: 345
        }, 10, function() {
            adventure.css("visibility", "visible");
            adventure.animate({
                width: advWidth*1.2,
                height: advHeight*1.2,
                top: -90
            }, {
                duration: 800,
                complete: function() {
                    adventure.animate({
                        width: advWidth,
                        height: advHeight,
                        top: -15
                    }, 300);
                }
            });
        });
    }
})();