// JavaScript Document
$(document).ready(function() {
	// Redirect to appropriate SFS environment (DEV, QA, UAT or PROD)
	$('.sfsLink').click(function() {
				var hrefVal = $(this).attr('href');
				var goToURL = baseURL + hrefVal;
				window.location = goToURL;
				return false;
	});
	// Redirect to appropriate school.afford environment (WEBDEV2007, WEBQA, WEBSTAGE or PROD)
	$('.affSchlLink').click(function() {
				var hrefVal = $(this).attr('href');
				var goToURL = affBaseURL + hrefVal;
				window.location = goToURL;
				return false;
	});	
});