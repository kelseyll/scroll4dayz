$(function() {

    // On page load, scroll down 1px to prevent video frame displacement
     $("html,body").scrollTop(1);

    // Initialize variables
    var frameNumber = 0,
    playbackConst = 500,
    setHeight = document.getElementById("set-height"),
    vid = document.getElementById('v0');

    // Dynamically set the page height according to video length
    vid.addEventListener('loadedmetadata', function() {
        setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    // Initialize scrollPlay
    function scollPlay(){
        var frameNumber  = window.pageYOffset/playbackConst;
        vid.currentTime  = frameNumber;
        window.requestAnimationFrame(scollPlay);
    }
    window.requestAnimationFrame(scollPlay);

    // Scroll to top at bottom of DOM
    $(window).on('scroll', function() {
        scrollPosition = $(window).scrollTop();
        var domheight = $(window).height();
        var viewportheight = $(".background").height();
        var topofpageheight = domheight - viewportheight - 1;
        if (scrollPosition >= topofpageheight) {
            $('html, body').animate({scrollTop: '0px'}, 0);
        }

        // Scroll to bottom at top of DOM
        else if (scrollPosition <= 0) {
            $('html, body').animate({scrollTop: topofpageheight}, 0);
        }
    });
});
