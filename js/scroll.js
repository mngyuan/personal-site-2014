$( document ).ready(function() {
	$(".fancybox").fancybox({'maxHeight':450});

	$(window).scroll(function() {
		var dist = $(window).scrollTop();
		parallaxScroll(dist);
		updateNav(dist);
	});

	$('#abouta').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 600);
	});

	$('#projecta').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 600);
	});

	$('#designa').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $("#design").offset().top
		}, 600);
	});

});

function parallaxScroll(dist) {
	$('#logo-bg').css('background-position', '50% ' + (0-(dist*0.75))+'px');
}

function updateNav(dist, navtop, abouttop, projecttop, designtop, contacttop) {
	var navtop = $('#navspace').offset().top;
	var abouttop = $('#about').offset().top;
	var projecttop = $('#projects').offset().top;
	var designtop = $('#design').offset().top;
	var contacttop = $('#contact').offset().top;

	if (dist > navtop) {
		var navoh = $('nav').addClass('sticky').outerHeight();
		$('#navspace').height(navoh);
	} else if (dist < navtop) {
		$('nav').removeClass('sticky');
		$('#navspace').height(0);
	}

	var stickyHeight = $('nav').outerHeight();
	console.log(stickyHeight);

	if ((dist + stickyHeight) > contacttop) {
		$('nav a').removeClass('active');
		$('#contacta').addClass('active');
	} else if ((dist + stickyHeight) > designtop) {
		$('nav a').removeClass('active');
		$('#designa').addClass('active');
	} else if ((dist + stickyHeight) > projecttop) {
		$('nav a').removeClass('active');
		$('#projecta').addClass('active');
	} else if ((dist + stickyHeight) > abouttop) {
		$('nav a').removeClass('active');
		$('#abouta').addClass('active');
	} else if ((dist + stickyHeight) < abouttop) {
		$('nav a').removeClass('active');
	}
}
