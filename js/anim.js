$(document).ready(function() {
    // $('.toggle').click(function() {
    //     $(this).css('display', 'none');
    //     console.log('audio should trigger once toggle sound disappears');
    //     console.log('guitar should be colorful and animation wiggle');
    // });
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

    // $('#microphone1').click(function() {
    //     $(this).attr("src", "img/mic_anim.gif")
    //     console.log('audio should trigger once toggle sound disappears');
    //     console.log('guitar should be colorful and animation wiggle');
    // });

});
