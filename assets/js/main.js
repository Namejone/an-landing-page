(function ($) {
"use strict";


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<img src="assets/images/arrow-up.svg" alt="arrow-icons">', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});


$("#cont-form").submit(function(e) {
    e.preventDefault();
});
// form=preloader
$("#submit").click(function(){
	$('.loader').addClass('loading');
	$('.loader').delay(4000).queue(function() {
        $(this).removeClass('loading');
    });
});



})(jQuery);


