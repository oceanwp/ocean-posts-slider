var $j = jQuery.noConflict();

$j( document ).on( 'ready', function() {
	"use strict";
	// Carousel
	postsSliderCarousel();
} );

/* ==============================================
CAROUSEL
============================================== */
function postsSliderCarousel() {
	"use strict"

	if ( $j( 'body' ).hasClass( 'no-carousel' ) ) {
		return;
	}

	$j( '.oceanwp-post-list' ).each( function() {

		var $this 		= $j( this ),
			$slider 	= $this.find( '> .posts-slider' ),
			$slideshow 	= $slider.data( 'slideshow' ),
			$perSlide 	= $slider.data( 'number' );

		// If RTL
		if ( $j( 'body' ).hasClass( 'rtl' ) ) {
			var rtl = true;
		} else {
			var rtl = false;
		}

		// Slider style
		if ( $this.hasClass( 'one' ) ) {
	        var $items 	= 1,
	        	$scroll = 1,
	        	$small 	= 1,
	        	$medium = 1,
	        	$large 	= 1;
	    } else if ( $this.hasClass( 'two' ) ) {
	        var $items 	= $perSlide,
	        	$scroll = $perSlide,
	        	$small 	= 1,
	        	$medium = 2,
	        	$large 	= $perSlide;
	    }

	    $slider.imagesLoaded( function() {
		    $slider.slick( {
				infinite: true,
				slidesToShow: $items,
				slidesToScroll: $scroll,
				prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
				speed: 500,
				autoplay: true,
				autoplaySpeed: $slideshow,
				rtl: rtl,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: $large,
							slidesToScroll: $large,
						}
					},
					{
						breakpoint: 980,
						settings: {
							slidesToShow: $medium,
							slidesToScroll: $medium,
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: $small,
							slidesToScroll: $small,
						}
					}
				]
			} );
		} );

	} );

}