(function() {	
	var timer = setInterval(function() {
		var active = $(".animate-list img.active"),
			next;
		if (active.hasClass("pic3")) {
			next = $(".animate-list .pic1");
		} else {
			next = active.next()
		}
		
		active.fadeOut(800, function() {
			active.removeClass("active");
			next.fadeIn(800).addClass("active");
		});	
	}, 4000);
	
})(jQuery);