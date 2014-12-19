 $(document).ready(function(){
 	// jplayer
	var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
        {
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
        }, {
            cssSelectorAncestor: "#cp_container_1",
            swfPath: "js/jplayer",
            wmode: "window",
            keyEnabled: true,
            muted: false
        });

	// 事件处理
    $('.modal').height($(window).height());

    $('.f-btn.share').on('click', function(e) {
        e.preventDefault();
        $('.modal').show();
    });

    $('.wrapper').on('click', '.modal .modal-close', function(e) {
        e.preventDefault();
        $('.modal').hide();
    });

    $('.theme').on('click', function(e) {
        e.preventDefault();
        var that = $(this),
            wrapper = $('.wrapper');
            
        $('.theme.hover').removeClass('hover');
        that.addClass('hover');
        if (that.hasClass('theme-btn-1')) {
            wrapper.removeClass('theme-2').addClass('theme-1');
            $('input[name="theme"]').val('1');
        } else {
            wrapper.removeClass('theme-1').addClass('theme-2');
            $('input[name="theme"]').val('2');
        } 
    });

   $('#music').on("click", function(e) {
        e.preventDefault();
        playAudio(currentId);
    });

    $('.music').on('click', function(e) {
        var that = $(this),
            index = that.index('.music') + 1;

        $('.music.hover').removeClass('hover');
        that.addClass('hover');
        $('input[name="bg_track"]').val(index);
        playAudio('audiofile' + index);
    });

    // 背景音乐
    var currentFile = "",
        currentId = "";
    function playAudio(musicId) {
        if (window.HTMLAudioElement) {
            try {
                var oAudio = document.getElementById('audio');
                var audioURL = document.getElementById(musicId); 

                if (audioURL.value !== currentFile) {
                    oAudio.src = audioURL.value;
                    currentFile = audioURL.value; 
                    currentId = musicId;                      
                } 
                if (oAudio.paused) {
                    oAudio.play();
                    $('#music i').addClass('icon-volume-up').removeClass('icon-volume-down');
                }
                else {
                    oAudio.pause();
                    $('#music i').removeClass('icon-volume-up').addClass('icon-volume-down');
                }
            }
            catch (e) {
                 if(window.console && console.error("Error:" + e));
            }
        }
    }
    playAudio('audiofile1');

});