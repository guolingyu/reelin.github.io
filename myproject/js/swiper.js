(function($){
	$('.thumb .img-wrapper').hammer().on("swipeleft", function() {
		var that = $(this);
		var imgList = $(this).find('img');
		var imgListLen = imgList.length;
		var imgWrapper = $(this).find('div');
		var dis = 580;
		var maxLeft = dis * (imgListLen - 1); 
		var left = parseInt(imgWrapper.css('margin-left'));
    	if (imgListLen > 1 && left < maxLeft) {
    		imgWrapper.animate({
    			'margin-left': left - dis
    		}, 500);
    	}
	}).on('swiperight', function() {
		var that = $(this);
		var imgList = $(this).find('img');
		var imgListLen = imgList.length;
		var imgWrapper = $(this).find('div');
		var dis = 580;
		var maxLeft = dis * (imgListLen - 1); 
		var left = parseInt(imgWrapper.css('margin-left'));
    	var left = parseInt(imgWrapper.css('margin-left'));
    	if (imgListLen > 1 && left > 0) {
    		imgWrapper.animate({
    			'margin-left': left + dis
    		}, 500);
    	} 
    });

})(jQuery);