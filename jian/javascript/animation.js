(function() {
    var winWidth = $(window).width(),
        winHeight = $(window).height(),
        rightMargin = (winWidth - 1031)/2,
        icon = $(".j-icon");

    // 初始状态
    $(".wrapper").css({
        width: winWidth,
        height: 780
    });
    $(".main-content").css("top", winHeight+400);
    $(".main-content-1").css("top", "66px");
    $("#people").css("top", -winHeight - 400);
    $("#end").css("top", winHeight + 400);
    $("#airship").css("right", -(rightMargin+675));
    /**
     * 动画开始
     */
    var animationCount = 2;
    $(window).load(function() {
        setTimeout(function() {
            animation1();
        }, 1200);
     });
    var isAnimating = false,
        canEnding = false,
        canMove = false;
    $(window).on('mousewheel', function(event, delta, deltaX, deltaY) {
        var offsetY = event.offsetY;
        console.log(deltaY, offsetY, winHeight *.2, isAnimating, animationCount, canMove);
        if (deltaY < 0) {
            if (offsetY > (winHeight*.2) && canMove) {
                console.log(animationCount);
                switch (animationCount) {
                    case 1:
                        isAnimating = true;
                        canMove = false;
                        animation1();
                        break;
                    case 2:
                        canMove = false;
                        isAnimating = true;
                        animation2();
                        break;
                    case 3:
                        canMove = false;
                        isAnimating = true;
                        animation3();
                        break;
                    case 4:
                        canMove = false;
                        isAnimating = true;
                        animation4();
                        break;
                    case 5:
                        canMove = false;
                        isAnimating = true;
                        animation5();
                        break;
                    case 6:
                        canMove = false;
                        isAnimating = true;
                        animation6();
                        break;
                    default :
                        canMove = false;
                        isAnimating = true;
                        break;
                }
            } else if (offsetY > (winHeight*.1) ) {
                if (!isAnimating) {
                    var count = animationCount- 1,
                        wrapperName = ".main-content-" + count,
                        font = $(wrapperName).find(".j-font");
                    if (count != 1 && $(font[0]).css("display") == "none" && !canEnding) {
                        console.log("animationCount-1  ",animationCount-1);
                        showFont(font);
                    }
                }
//                else if (canEnding) {
//                    canEnding = false;
//                    dropAnimate($("#end"), 5000);
//                }
            }

        }
    });
    /**
     * 显示文字介绍
     * @param element
     */
    function showFont(element) {
        var len = element.length;
        switch (len) {
            case 1:
                element.fadeIn(1000,function() {
                    canMove = true;
                });
                break;
            case 2:
                $(element[0]).fadeIn(1000,function() {
                    setTimeout(function() {
                        $(element[1]).fadeIn(1000,function() {
                            canMove = true;
                        });
                    }, 500);
                });
                break;
            case 5:
                $(element[0]).fadeIn(1000,function() {
                    setTimeout(function() {
                        $(element[0]).fadeOut(1000);
                        $(element[1]).fadeIn(1000,function() {
                            setTimeout(function() {
                                $(element[1]).fadeOut(1000);
                                $(element[2]).fadeIn(1000,function() {
                                    setTimeout(function() {
                                        $(element[2]).fadeOut(1000);
                                        $(element[3]).fadeIn(1000,function() {
                                            setTimeout(function() {
                                                $(element[3]).fadeOut(1000);
                                                $(element[4]).fadeIn(1000,function() {
                                                    canMove = true;
                                                    $(element[4]).fadeOut(1000, function() {
                                                        dropAnimate($("#end"), 5000);
                                                    });
                                                });
                                            }, 1700);
                                        });
                                    }, 1700);
                                });
                            }, 1700);
                        });
                    }, 1700);
                });
                break;
        }
    }
    function animation1() {
        var wrapper = $(".main-content-1");
        wrapper.fadeIn(800,function() {
            animationStart(wrapper, $("#rainbowBridge"), function() {
                var airship = $("#airship"),
                    airLeft = airship.width() + winHeight;
                slowMoveAnimation(airship, {
                    right: airLeft
                }, function() {
                    isAnimating = false;
                    canMove = true;
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
                console.log("animation2", animationCount);
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

            });
            setTimeout(function() {
                animationStart(wrapper, $("#tooth"), function() {
                    animationCount ++;
                    console.log("animation3", animationCount);
                    isAnimating = false;
                });
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
            });
            setTimeout(function() {
                animationStart(wrapper, $("#wheel"));
            }, 100);
            setTimeout(function() {
                animationStart(wrapper, $("#adventure"), function() {

                    animationCount ++;
                    isAnimating = false;
                    console.log("animation4", animationCount);
                });
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
            });
            setTimeout(function() {
                animationStart(wrapper, $("#bang"));
            }, 100);
            setTimeout(function() {
                animationStart(wrapper, $("#sugus"), function() {

                    animationCount ++;
                    isAnimating = false;
                    console.log("animation5", animationCount);
                });
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
    function dropAnimate(element, time) {
        var top = element.attr("data-value")
        time ? time : 700;
        element.css("display", "block").animate({
            top: top
        }, time);
    }


})();