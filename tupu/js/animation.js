(function() {	
	var timer = setInterval(function() {
		var active = $(".animate-list img.active"),
			next;
		if (active.hasClass("pic3")) {
			next = $(".animate-list .pic1");
		} else {
			next = active.next()
		}
		
		active.fadeOut(2000).removeClass("active");
		next.fadeIn(2000).addClass("active");	
	}, 6000);
	
})(jQuery);