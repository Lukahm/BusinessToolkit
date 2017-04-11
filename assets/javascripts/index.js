$(document).ready(function(){

	$('.signup-loading').css('visibility', 'hidden');    

  // signup form submit handler
  $( "#signup_newsletter_form" ).submit(function(e) {
      e.preventDefault();
	  	var inputEmail = $('.signup-input').val();
    	var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    	if ($('#signup_newsletter_form .validation').length){	
				$( "#signup_newsletter_form .validation" ).remove();
			}

			if (testEmail.test(inputEmail)) {
			 	$('#signup_newsletter_form .signup-submit')
    			.on('click', function () {
		        $('.signup-loading').css('visibility', 'visible');
		        $('.signup-input').css('border', '1px solid #5dc8dd');
  			  	$('.signup-submit').css({
  			  		'border': 'none',
				  		'background-image': 'url(assets/images/right_arrow_black_button_small.png)'
				  	});
					})
			}
			else{
				$('.signup-loading').css('visibility', 'hidden');
		    $('.signup-input').css('border', '1px solid #FF071A');
		  	$('.signup-submit').css({
		  		'border': '1px solid #FF071A',
		  		'background-image': 'url(assets/images/right_arrow_red_button_small.png)'
		  	});
	  		$(".signup-loading").after("<div class='validation' style='color:#FF071A; display:inline-flex;'>" + inputEmail + " is not a valid email address.</div>");
		}
  });

});