(function($){
	var isSwiping = false;
	$('.thumb .img-wrapper').hammer().on("swipeleft", function() {
		var that = $(this);
		var imgList = that.find('img');
		var imgListLen = imgList.length;
		var imgWrapper = that.find('div');
		var dis = 580;
		var maxLeft = dis * (imgListLen - 1); 
		var currentPage = that.find('.js-current-page');
		var left = parseInt(imgWrapper.css('margin-left'));

    	if (!isSwiping && imgListLen > 1 && left > - maxLeft) {
    		isSwiping = true;
    		imgWrapper.animate({
    			'margin-left': left - dis
    		}, 500, function() {
    			isSwiping = false;
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
		
    	if (!isSwiping && imgListLen > 1 && left < 0) {
    		isSwiping = true;
    		imgWrapper.animate({
    			'margin-left': left + dis
    		}, 500, function() {
    			isSwiping = false;
    			currentPage.html(parseInt(currentPage.html()) - 1);
    		});
    	} 
    });

})(jQuery);