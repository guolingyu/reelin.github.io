(function($){
	var hammerModal = new Hammer($('.thumb .img-wrapper')[0]);

	var imgList = $('.thumb .img-wrapper img');
	var imgListLen = imgList.length;
	var imgWrapper = $('.thumb .img-wrapper div');
	var dis = 580;
	var maxLeft = dis * (imgListLen - 1);

    hammerModal.add(new Hammer.Swipe());      

    hammerModal.on('swipeleft', function(e) {
    	var left = parseInt(imgWrapper.css('margin-left'));
    	if (imgListLen > 1 && left < maxLeft) {
    		imgWrapper.animate({
    			'margin-left': left - dis
    		}, 500);
    	}
    }).on('swiperight', function(e) {
    	var left = parseInt(imgWrapper.css('margin-left'));
    	if (imgListLen > 1 && left > 0) {
    		imgWrapper.animate({
    			'margin-left': left + dis
    		}, 500);
    	} 
    });
})(jQuery);