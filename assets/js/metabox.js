( function( $ ) {
	"use strict";

	$( document ).on( 'ready', function() {

		// Show/hide style two options
		var styleTwo          	= $( '#butterbean-control-oceanwp_ps_style select' ),
			styleTwoVal  		= styleTwo.val(),
			styleTwoSettings   	= $( '#butterbean-control-oceanwp_ps_number_per_slide' );

		styleTwoSettings.hide();

		if ( styleTwoVal === 'two' ) {
			styleTwoSettings.show();
		} else {
			styleTwoSettings.hide();
		}

		styleTwo.change( function () {

			var styleTwoVal = styleTwo.val();

			if ( styleTwoVal === 'two' ) {
				styleTwoSettings.show();
			} else {
				styleTwoSettings.hide();
			}

		} );

		// Show/hide image options
		var imageSize          		= $( '#butterbean-control-oceanwp_ps_size select' ),
			imageSizeVal  			= imageSize.val(),
			imageCustomSettings   	= $( '#butterbean-control-oceanwp_ps_img_width, #butterbean-control-oceanwp_ps_img_height' );

		imageCustomSettings.hide();

		if ( imageSizeVal === 'custom' ) {
			imageCustomSettings.show();
		} else {
			imageCustomSettings.hide();
		}

		imageSize.change( function () {

			var imageSizeVal = imageSize.val();

			if ( imageSizeVal === 'custom' ) {
				imageCustomSettings.show();
			} else {
				imageCustomSettings.hide();
			}

		} );

	} );

} ) ( jQuery );