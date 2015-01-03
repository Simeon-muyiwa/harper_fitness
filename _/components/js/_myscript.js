$(function () {

	// highlight the current nav

	$("#home a:contains('Home')").parent().addClass('active');
	$("#about a:contains('About')").parent().addClass('active');
	$("#personaltraining a:contains('Personal Training')").parent().addClass('active');
	$("#pilates a:contains('Pilates')").parent().addClass('active');
	$("#yoga a:contains('Yoga')").parent().addClass('active');

	//Testimonials Slider 2
	$('.testimonials-slider-2 .flexslider').flexslider({
	 
	    controlNav:false,
	    directionNav: false, 
	    animation: "slide",
	});

	

  });// jQuery is loaded

