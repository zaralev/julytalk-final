$(document).ready(function() {
    // ALL SOUND/COLOR/ANIM
    var sndPlaying = false;
    var audioPlayerObj = document.getElementById("audioplayer");
    $('.microphone1, .guitar-change').click(function() {
        // alert("this is working");
        if (sndPlaying == false) {
            $('.microphone1').attr("src", "img/mic_anim.gif");
            $('.guitar-change').attr("src", "img/guitarcolor.png");
            $('.guitar1').addClass("wiggle");
            $('.guitar2').addClass("wiggle2");
            audioPlayerObj.play();
            sndPlaying = true;
        } else {
            $('.microphone1').attr("src", "img/mic.png");
            $('.guitar-change').attr("src", "img/guitar.png");
            $('.guitar1').removeClass("wiggle");
            $('.guitar2').removeClass("wiggle2");
            audioPlayerObj.pause();
            sndPlaying = false;
        }

    });

    // LOCATION COLOR
    $('.locator, .place').mouseover(function() {
        $(".location-icon").attr('src', 'img/locationred.png');
        $(".webster-hall").css('color', '#f00');
        $(".webster-hall").css('text-decoration', 'underline');
    });
    $('.locator, .place').mouseout(function() {
        $(".location-icon").attr('src', 'img/location.png');
        $(".webster-hall").css('color', '#000');
        $(".webster-hall").css('text-decoration', 'none');
    });

    // WEBSITE AND TWITTER HOVER
    $('.website').mouseover(function() {
        $(this).addClass("button-wiggle");
    });
    $('.website').mouseout(function() {
        $(this).removeClass("button-wiggle");
    });

    $('.twitter').mouseover(function() {
        $(this).addClass("button-wiggle");
    });
    $('.twitter').mouseout(function() {
        $(this).removeClass("button-wiggle");
    });

});
