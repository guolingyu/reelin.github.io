(function($){
	$('.thumb .img-wrapper').hammer().on("swipeleft", function() {
		var that = $(this);
		var imgList = that.find('img');
		var imgListLen = imgList.length;
		var imgWrapper = that.find('div');
		var dis = 580;
		var maxLeft = dis * (imgListLen - 1); 
		var currentPage = that.find('.js-current-page');
		var left = parseInt(imgWrapper.css('margin-left'));

    	if (imgListLen > 1 && left > - maxLeft) {
    		imgWrapper.animate({
    			'margin-left': left - dis
    		}, 500, function() {
    			currentPage.html(parseInt(currentPage.html()) + 1);
    		});
    	}
	}).on('swiperight', function() {
		var that = $(this);
		var imgList = that.find('img');
		var imgListLen = imgList.length;
		var imgWrapper = that.find('div');
		var dis = 580;
		var left = parseInt(imgWrapper.css('margin-left'));
    	var currentPage = that.find('.js-current-page');
		
    	if (imgListLen > 1 && left < 0) {
    		imgWrapper.animate({
    			'margin-left': left + dis
    		}, 500, function() {
    			currentPage.html(parseInt(currentPage.html()) - 1);
    		});
    	} 
    });

})(jQuery);