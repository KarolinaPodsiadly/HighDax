			$('.carousel').carousel({
				interval: 7000
	        }) 
	     $(document).ready(function(){

	          $('.count').countTo();

	      });

	        $(document).ready(function() { 

	      $('a[href^="#"]').on('click', function(event) {
	      
	          var target = $( $(this).attr('href') );
	      
	          if( target.length ) {
	              event.preventDefault();
	              $('html, body').animate({
	                  scrollTop: target.offset().top
	              }, 1000);
	          }
	      });

	   });