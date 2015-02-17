(function() {
    var winWidth = $(window).width(),
        winHeight = $(window).height(),
        rightMargin = (winWidth - 1031)/2,
        wrapperHeight = winHeight > 780 ? winHeight : 780,
        icon = $(".j-icon");

    // 初始状态

    $(".wrapper").css({
        width: winWidth,
        height: wrapperHeight
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
            animation1(true);
        }, 1200);
     });
    var isAnimating = false,
        canEnding = false,
        canMove = false;
    var t = 0; 	// 计数
    var j = 0;  // 计数
    var k = 0;
    $("body").on('mousewheel', function(event, delta, deltaX, deltaY) {
        if (deltaY < 0) {
            j = 0;
            if (canMove) {
                if (t > 5) {
                    switch (animationCount) {
                        case 2:
                            canMove = false;
                            isAnimating = true;
                            animation2(true);
                            break;
                        case 3:
                            canMove = false;
                            isAnimating = true;
                            animation3(true);
                            break;
                        case 4:
                            canMove = false;
                            isAnimating = true;
                            animation4(true);
                            break;
                        case 5:
                            canMove = false;
                            isAnimating = true;
                            animation5(true);
                            break;
                        case 6:
                            canMove = false;
                            isAnimating = true;
                            animation6(true);
                            break;
                        default :
                            break;
                    }
                    t = 0;
                } else {
                    t++;
                }
            } else if (!isAnimating ) {

                j = 0;
                if (k > 0) {
                    var count = animationCount- 1,
                        wrapperName = ".main-content-" + count,
                        font = $(wrapperName).find(".j-font");
                    if (count != 1 && $(font[0]).css("display") == "none" && !canEnding) {
                        isAnimating = true;
                        showFont(font);
                    }
                    k = 0;
                } else {
                    k++;
                }
            }

        } else {
            if (canMove) {
                t = 0;
                k = 0;
                if (j > 5) {
                    switch (animationCount) {
                        case 3:
                            canMove = false;
                            isAnimating = true;
                            animation2(false);
                            break;
                        case 4:
                            canMove = false;
                            isAnimating = true;
                            animation3(false);
                            break;
                        case 5:
                            canMove = false;
                            isAnimating = true;
                            animation4(false);
                            break;
                        case 6:
                            canMove = false;
                            isAnimating = true;
                            animation5(false);
                            break;
                        case 7:
                            canMove = false;
                            isAnimating = true;
                            animation6(false);
                            break;
                        default :
                            break;
                    }
                    j = 0;
                } else {
                    j++;
                }
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
                    isAnimating = false;
                });
                break;
            case 2:
                $(element[0]).fadeIn(1000,function() {
                    setTimeout(function() {
                        $(element[1]).fadeIn(1000,function() {
                            canMove = true;
                            isAnimating = false;
                        });
                    }, 500);
                });
                break;
            case 5:
                canMove = false;
                isAnimating = true;
                $(element[0]).fadeIn(1000,function() {
                    setTimeout(function() {
                        $(element[0]).fadeOut(1000, function() {
                            $(element[1]).fadeIn(1000,function() {
                                setTimeout(function() {
                                    $(element[1]).fadeOut(1000, function() {
                                        $(element[2]).fadeIn(1000,function() {
                                            setTimeout(function() {
                                                $(element[2]).fadeOut(1000, function() {
                                                    $(element[3]).fadeIn(1000,function() {
                                                        setTimeout(function() {
                                                            $(element[3]).fadeOut(1000, function(){
                                                                $(element[4]).fadeIn(1000,function() {
                                                                    setTimeout(function() {
                                                                        canMove = true;
                                                                        $(element[4]).fadeOut(1000, function() {
                                                                            dropAnimate($("#end"), 5000, function() {
                                                                                canMove = true;
                                                                                isAnimating = false;
                                                                            });
                                                                        });
                                                                    }, 1700);
                                                                });
                                                            });

                                                        }, 1700);
                                                    });
                                                });

                                            }, 1700);
                                        });
                                    });

                                }, 1700);
                            });
                        });

                    }, 1700);
                });
                break;
        }
    }
    function animation1(isDown) {
        var wrapper = $(".main-content-1");
        if (isDown) {
            wrapper.fadeIn(800,function() {
                animation1CallBack(wrapper, isDown);
            });
        }

    }
    function animation1CallBack(wrapper, isDown) {
        animationStart(wrapper, $("#rainbowBridge"), function() {
            var airship = $("#airship"),
                airLeft = airship.width() + winHeight;
            if (!isDown)  {
                isAnimating = false;
                canMove = true;
                --animationCount;
                wrapper.find(".j-font").hide();
            } else {
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
            }
        });
    }
    function animation2(isDown) {
        var wrapper = $(".main-content-2");
        if (isDown) {
            slideWrapper($(".main-content-1"), wrapper, isDown, function() {
                animation2CallBack(wrapper, isDown);
            });
        } else {
            slideWrapper(wrapper, $(".main-content-1"), isDown, function() {
                animation1CallBack(wrapper);
            });
        }
    }
    function animation2CallBack(wrapper, isDown) {
        animationStart(wrapper, $("#arch"), function() {
            if (isDown)  {
                slowMoveAnimation(wrapper.find(".boat"), {
                    left: 122
                });
                slowMoveAnimation(wrapper.find(".cloud"), {
                    left: 497,
                    top: -44
                });
                animationCount ++;
            } else {
                canMove = true;
                --animationCount;
                wrapper.find(".j-font").hide();
            }
            isAnimating = false;
//            console.log("animation2", animationCount);
        });
    }
    function animation3(isDown) {
        var wrapper = $(".main-content-3");
        if (isDown) {
            slideWrapper($(".main-content-2"), wrapper, isDown, function() {
                animation3CallBack(wrapper, isDown);
            });
        } else {
            slideWrapper(wrapper, $(".main-content-2"), isDown, function() {
                animation2CallBack(wrapper, isDown);
            });
        }
    }
    function animation3CallBack(wrapper, isDown) {
        animationStart(wrapper, $("#jian"), function() {
            if (isDown)  {
                slowMoveAnimation(wrapper.find(".truck"), {
                    top: 428,
                    left: 479
                });
                slowMoveAnimation(wrapper.find(".cloud"), {
                    top: -105
                });
            }

        });
        setTimeout(function() {
            animationStart(wrapper, $("#tooth"), function() {
                if (isDown)  {
                    animationCount ++;
                } else {
                    canMove = true;
                    --animationCount;
                    wrapper.find(".j-font").hide();
                }
//                console.log("animation3", animationCount);
                isAnimating = false;
            });
        }, 100);
    }
    function animation4(isDown) {
        var wrapper = $(".main-content-4");
        if (isDown) {
            slideWrapper($(".main-content-3"), wrapper, isDown, function() {
                animation4CallBack(wrapper, isDown);
            });
        } else {
            slideWrapper(wrapper, $(".main-content-3"), isDown, function() {
                animation3CallBack(wrapper, isDown);
            });
        }
    }
    function animation4CallBack(wrapper, isDown) {
        animationStart(wrapper, $("#carousel"), function() {
            if (isDown) {
                slowMoveAnimation(wrapper.find(".balloon"), {
                    left: 772
                });
                slowMoveAnimation(wrapper.find(".cloud"), {
                    top: -43
                });
            }
        });
        setTimeout(function() {
            animationStart(wrapper, $("#wheel"));
        }, 100);
        setTimeout(function() {
            animationStart(wrapper, $("#adventure"), function() {
                if (isDown)  {
                    animationCount ++;
                } else {
                    canMove = true;
                    --animationCount;
                    wrapper.find(".j-font").hide();
                }
                isAnimating = false;
//                console.log("animation4", animationCount);
            });
        }, 200);
    }
    function animation5(isDown) {
        var wrapper = $(".main-content-5");
        if (isDown) {
            slideWrapper($(".main-content-4"), wrapper, isDown, function() {
                animation5CallBack(wrapper, isDown);
            });
        } else {
            slideWrapper(wrapper, $(".main-content-4"), isDown, function() {
                animation4CallBack(wrapper, isDown);
            });
        }
    }
    function animation5CallBack(wrapper, isDown) {
        animationStart(wrapper, $("#dada"), function() {
            if (isDown) {
                slowMoveAnimation(wrapper.find(".cloud"), {
                    top: -40
                });
            }
        });
        setTimeout(function() {
            animationStart(wrapper, $("#bang"));
        }, 100);
        setTimeout(function() {
            animationStart(wrapper, $("#sugus"), function() {
                if (isDown)  {
                    animationCount ++;
                } else {
                    canMove = true;
                    --animationCount;
                    wrapper.find(".j-font").hide();
                    $("#people, #end").stop().hide();
                    $("#people").css("top", -winHeight - 400);
                    $("#end").css("top", winHeight + 400);
                }
                isAnimating = false;
//                console.log("animation5", animationCount);
            });
        }, 200);
    }
    function animation6(isDown) {
        var wrapper = $(".main-content-6");
        if (isDown) {
            slideWrapper($(".main-content-5"), wrapper, isDown, function() {
                animation6CallBack(wrapper, isDown);
            });
        } else {
            slideWrapper(wrapper, $(".main-content-5"), isDown, function() {
                animation5CallBack(wrapper, isDown);
            });
        }
    }
    function animation6CallBack(wrapper, isDown) {
        animationStart(wrapper, $("#consult"), function() {
            if (isDown)  {
                dropAnimate($("#people"));
                slowMoveAnimation(wrapper.find(".cloud"), {
                    left: 200
                });
                slowMoveAnimation(wrapper.find(".rainbow"), {
                    left: 385
                });
                animationCount ++;
            } else {
//                canMove = true;
                --animationCount;
                wrapper.find(".j-font").hide();
            }
            isAnimating = false;
        });
    }
    function slideWrapper(prevElement, element, isDown, callback) {
        var top = element.attr("data-value");
        if (isDown) {
            prevElement.animate({top: -winHeight}, 1000, function() {
                prevElement.hide();

            });
        } else {
            prevElement.animate({top: winHeight}, 1000, function() {
                prevElement.hide();

            });
        }
        setTimeout(function() {
            element.css("visibility", "visible").show().animate({top: top}, 1000, callback);
        },300)

    }
    /**
     * 运行动画
     * @param wrapper 外层元素
     * @param element 弹起元素
     */
    function animationStart(wrapper, element, callback) {
        upspringAnimation(element, callback);
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
    function dropAnimate(element, time, callback) {
        var top = element.attr("data-value")
        time ? time : 700;
        element.css("display", "block").animate({
            top: top
        }, time, callback);
    }



})();