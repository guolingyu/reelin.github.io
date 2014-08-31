(function() {
    var winWidth = $(window).width(),
        winHeight = $(window).height(),
        rightMargin = (winWidth - 1031) / 2,
        icon = $(".j-icon");

    // 初始状态
    $(".main-content").css("top", winHeight+400);
    $(".main-content-1").css("top", "66px");
    $("#people").css("top", -winHeight - 400);
    $("#end").css("top", winHeight + 400);
    $("#airship").css("right", - (rightMargin + $("#airship").width()));
    /**
     * 动画开始
     */
    var animationCount = 1;
    $(window).load(function() {
        setTimeout(function() {
            animation1();
        }, 1200);
     });
    var isAnimating = false;
    $(window).on('mousewheel', function(event, delta, deltaX, deltaY) {
        var offsetY = event.offsetY;
        console.log(deltaY, offsetY, winHeight *.2, isAnimating, animationCount);
        if (deltaY < 0 && offsetY > (winHeight*.1) && !isAnimating) {
            console.log(animationCount);
            switch (animationCount) {
                case 1:
                    isAnimating = true;
                    animation1();
                    break;
                case 2:
                    isAnimating = true;
                    animation2();
                    break;
                case 3:
                    isAnimating = true;
                    animation3();
                    break;
                case 4:
                    isAnimating = true;
                    animation4();
                    break;
                case 5:
                    isAnimating = true;
                    animation5();
                    break;
                case 6:
                    isAnimating = true;
                    animation6();
                    break;
            }
        }
    });
    function animation1() {
        var wrapper = $(".main-content-1");
        animationStart(wrapper, $("#rainbowBridge"), function() {
            var airship = $("#airship"),
                airLeft = airship.width() + winHeight;
            slowMoveAnimation(airship, {
                right: airLeft
            }, function() {
                animationCount ++;
                isAnimating = false;
            });
            slowMoveAnimation(wrapper.find(".boat-1"), {
                left: 70,
                top: 586
            });
            slowMoveAnimation(wrapper.find(".boat"),{
                left: 890
            });
            slowMoveAnimation(wrapper.find(".cloud"), {
                left: 134,
                top: -51
            });

        });
    }
    function animation2() {
        var wrapper = $(".main-content-2");
        slideWrapper($(".main-content-1"), wrapper, function() {
            animationStart(wrapper, $("#arch"), function() {
                slowMoveAnimation(wrapper.find(".boat"), {
                    left: 122
                });
                slowMoveAnimation(wrapper.find(".cloud"), {
                    left: 497,
                    top: -44
                });
                animationCount ++;
                isAnimating = false;
            });
        });

    }
    function animation3() {
        var wrapper = $(".main-content-3");
        slideWrapper($(".main-content-2"), wrapper, function() {
            animationStart(wrapper, $("#jian"), function() {
                slowMoveAnimation(wrapper.find(".truck"), {
                    top: 428,
                    left: 479
                });
                slowMoveAnimation(wrapper.find(".cloud"), {
                    top: -105
                });
                animationCount ++;
                isAnimating = false;
            });
            setTimeout(function() {
                animationStart(wrapper, $("#tooth"));
            }, 100);
        });

    }
    function animation4() {
        var wrapper = $(".main-content-4");
        slideWrapper($(".main-content-3"), wrapper, function() {
            animationStart(wrapper, $("#carousel"), function() {
                slowMoveAnimation(wrapper.find(".balloon"), {
                    left: 772
                });
                slowMoveAnimation(wrapper.find(".cloud"), {
                    top: -43
                });
                animationCount ++;
                isAnimating = false;
            });
            setTimeout(function() {
                animationStart(wrapper, $("#wheel"));
            }, 100);
            setTimeout(function() {
                animationStart(wrapper, $("#adventure"));
            }, 200);
        });


    }
    function animation5() {
        var wrapper = $(".main-content-5");
        slideWrapper($(".main-content-4"), wrapper, function() {
            animationStart(wrapper, $("#dada"), function() {
                slowMoveAnimation(wrapper.find(".cloud"), {
                    top: -40
                });
                animationCount ++;
                isAnimating = false;
            });
            setTimeout(function() {
                animationStart(wrapper, $("#bang"));
            }, 100);
            setTimeout(function() {
                animationStart(wrapper, $("#sugus"));
            }, 200);
        });


    }
    function animation6() {
        var wrapper = $(".main-content-6");
        slideWrapper($(".main-content-5"), wrapper, function() {
            animationStart(wrapper, $("#consult"), function() {
                dropAnimate($("#people"));
                slowMoveAnimation(wrapper.find(".cloud"), {
                    left: 200
                });
                slowMoveAnimation(wrapper.find(".rainbow"), {
                    left: 385
                });
                animationCount ++;
                isAnimating = false;
            });
        });

//        setTimeout(function() {
//            animationStart(wrapper, $("#bang"));
//        }, 100);
//        setTimeout(function() {
//            animationStart(wrapper, $("#sugus"));
//        }, 200);

    }
    function slideWrapper(prevElement, element, callback) {
        var top = element.attr("data-value");
        prevElement.animate({top: -winHeight}, 1000, function() {
            prevElement.hide();

        });
        setTimeout(function() {
            element.css("visibility", "visible").animate({top: top}, 1000, callback);
        },300)

    }
    /**
     * 运行动画
     * @param wrapper 外层元素
     * @param element 弹起元素
     */
    function animationStart(wrapper, element, callback) {
        upspringAnimation(element, callback);
//        wrapper.find(".j-icon").show('100');
    }

    /**
     * 弹起元素动画
     */
    function upspringAnimation(element, callback) {
        var eleHeight = parseInt(element.attr("height")),
            top = element.attr("data-value"),
            newHeight = eleHeight * 1.1,
            newTop = top - (newHeight-eleHeight);

        element.animate({
            height: newHeight,
            top: newTop
        }, 400, function() {
            element.animate({
                height: eleHeight,
                top: top
            }, 200, callback);
        });
    }

    /**
     * 缓慢移动动画
     * @param element
     * @param obj
     */
    function slowMoveAnimation(element, obj, callback) {
        callback = callback ? callback : function(){};
        element.animate(obj, 10000, 'linear', callback);
    }

    /**
     * 坠落动画
     */
    function dropAnimate(element) {
        var top = element.attr("data-value");
        element.css("display", "block").animate({
            top: top
        }, 700);
    }


})();