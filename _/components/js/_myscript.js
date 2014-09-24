 $(function(){

	// highlight the current nav

	$("#home a:contains('Home')").parent().addClass('active');
	$("#about a:contains('About')").parent().addClass('active');
	$("#blog a:contains('Blog')").parent().addClass('active');
	$("#personaltraining a:contains('Personal Training')").parent().addClass('active');
	$("#yoga a:contains('Yoga')").parent().addClass('active');
	$("#testimonials a:contains('Testimonials')").parent().addClass('active');
}); // jQuery is loaded