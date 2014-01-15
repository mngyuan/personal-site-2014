$( document ).ready(function() {
	$(window).scroll(parallaxScroll);
});

function parallaxScroll() {
	var dist = $(window).scrollTop();
	$('#logo-bg').css('background-position', '50% ' + (0-(dist*1.5))+'px');
	$('.fade').css('top', (0-(dist*0.5))+'px');
}