$(document).ready(function() {
    $('.toggle').click(function() {
        // $("#large-sound").toggleClass('large-sound');
        // $("#medium-sound").toggleClass('medium-sound');
        // $("#small-sound").toggleClass('small-sound');
        // $("#yellow-spark").toggleClass('yellow-spark');
        // $("#blue-spark").toggleClass('blue-spark');
        // $("#pink-spark").toggleClass('pink-spark');
        // alert('toggled');
        $(this).css('display', 'none');
        console.log('audio should trigger once toggle sound disappears');
        console.log('guitar should be colorful and animation wiggle');
    });

});
