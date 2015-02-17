(function($) {
	
	var UA = navigator.userAgent,
		isAndroid = / android|adr/gi.test(UA),
		isIos = /iphone|ipod/gi.test(UA),
		animateList = $(".animate-list"),
		html = '<img class="pic1 active pic" src="/static/images/waphome/wap1.png" alt="图扑"/><img class="pic2 pic pic-font" src="/static/images/waphome/wap2.png" alt="图扑"/><img class="pic3 pic" src="/static/images/waphome/wap3.png" alt="图扑"/><img class="pic4 pic pic-font" src="/static/images/waphome/wap4.png" alt="图扑"/><img class="pic5 pic" src="/static/images/waphome/wap5.png" alt="图扑"/><img class="pic6 pic pic-font" src="/static/images/waphome/wap6.png" alt="图扑"/><img class="pic7 pic" src="/static/images/waphome/wap7.png" alt="图扑"/><img class="pic8 pic pic-font" src="/static/images/waphome/wap8.png" alt="图扑"/><img class="pic9 pic" src="/static/images/waphome/wap9.png" alt="图扑"/>';		
	if (isAndroid || isIos) {
		animateList.html(html);
		var timer = setInterval(function() {
			var active = $(".animate-list img.active"),
				last = $(".animate-list img").last(),
				next;
			if (active.index() == last.index()) {
				next = $(".animate-list .pic1");
			} else {
				next = active.next()
			}
			
		    active.fadeOut(2000, function() {
		    	next.fadeIn(2000).addClass("active");
		    }).removeClass("active");
			
			
		}, 5000);
	} else {
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
	}
	
})(jQuery);