jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	 $(window).scroll(function(event) {
	 	 Scroll();
	 });

	 $('.navbar-collapse ul li a').on('click', function() {  
	 	$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
	 	return false;
	 });

	// User define function
	 function Scroll() {
	 	var contentTop      =   [];
	 	var contentBottom   =   [];
	 	var winTop      =   $(window).scrollTop();
	 	var rangeTop    =   200;
	 	var rangeBottom =   500;
	 	$('.navbar-collapse').find('.scroll a').each(function(){
	 		contentTop.push( $( $(this).attr('href') ).offset());
	 		contentBottom.push( $( $(this).attr('href') ).offset() + $( $(this).attr('href') ).height() );
	 	})
	 	$.each( contentTop, function(i){
	 		if ( winTop > contentTop[i] - rangeTop ){
	 			$('.navbar-collapse li.scroll')
	 			.removeClass('active')
 			.eq(i).addClass('active');			
	 		}
	 	})
	 };

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();


	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });

	// portfolio filter
		//  $(window).load(function(){'use strict',
		//  	$portfolio_selectors = $('.portfolio-filter >li>a');
		//  	if($portfolio_selectors!='undefined'){
		//  		$portfolio = $('.portfolio-items');
		//  		$portfolio.isotope({
		//  			itemSelector : '.col-sm-3',
		//  			layoutMode : 'fitRows'
		//  		});
				
		//  		$portfolio_selectors.on('click', function(){
		//  			$portfolio_selectors.removeClass('active');
		//  			$(this).addClass('active');
		//  			var selector = $(this).attr('data-filter');
		//  			$portfolio.isotope({ filter: selector });
		//  			return false;
		//  		});
		//  	}
		//  });

		

		//Presets
		var presets = $('.style-chooser ul li');

		$('.style-chooser .toggler').on('click', function(event){
			event.preventDefault();
			$(this).closest('.style-chooser').toggleClass('opened');
		});

		$('.style-chooser ul li a').on('click', function(event){
			event.preventDefault();
			presets.removeClass('active');
			$(this).parent().addClass('active');
			$('#css-preset').removeAttr('href').attr('href', 'css/presets/preset' + $(this).parent().data('preset') + '.css');
		});

		
	
});



