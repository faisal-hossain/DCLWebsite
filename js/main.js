jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#tf-home ').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#tf-home ').css('height',slideHeight);
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


    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
        $container.isotope({
            filter: '* , all',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    Nivo Lightbox 
    ======================================*/
    // Agency Portfolio Popup
    $('#itemsWork a , #itemsWorkTwo a , #itemsWorkThree a , #popup a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

	/***************** Google Map ******************/

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(30.40964, -97.91923),
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

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



