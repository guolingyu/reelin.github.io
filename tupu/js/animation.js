(function() {	
	var timer = setInterval(function() {
		var active = $(".animate-list img.active"),
			next;
		if (active.hasClass("pic3")) {
			next = $(".animate-list .pic1");
		} else {
			next = active.next()
		}
		
		active.fadeOut(1200).removeClass("active");
		next.fadeIn(1200).addClass("active");	
	}, 5000);
	
})(jQuery);