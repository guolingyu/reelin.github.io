(function() {	
	
	var UA = navigator.userAgent,
		isAndroid = / android|adr/gi.test(UA),
		isIos = /iphone|ipod/gi.test(UA),
		animateList = $(".animate-list"),
		html = '<img class="pic1 active pic" src="images/webhome/wap1.png" alt="图扑"/><img class="pic2 pic" src="images/webhome/wap2.png" alt="图扑"/><img class="pic3 pic" src="images/webhome/wap3.png" alt="图扑"/><img class="pic4 pic" src="images/webhome/wap4.png" alt="图扑"/><img class="pic5 pic" src="images/webhome/wap5.png" alt="图扑"/><img class="pic6 pic" src="images/webhome/wap6.png" alt="图扑"/><img class="pic7 pic" src="images/webhome/wap7.png" alt="图扑"/><img class="pic8 pic" src="images/webhome/wap8.png" alt="图扑"/><img class="pic9 pic" src="images/webhome/wap9.png" alt="图扑"/>';		
	if (isAndroid || isIos) {
		animateList.html(html);
	}
		// 动画效果
	var timer = setInterval(function() {
		var active = $(".animate-list img.active"),
			last = $(".animate-list img").last(),
			next;
		if (active.index() == last.index()) {
			next = $(".animate-list .pic1");
		} else {
			next = active.next()
		}
		
		active.fadeOut(2000).removeClass("active");
		next.fadeIn(2000).addClass("active");	
	}, 6000);
})(jQuery);