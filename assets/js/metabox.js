( function( $ ) {
	"use strict";

	$( function() {

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

		// Preserve saved metadata choices when changing styles. For sliders without
		// a saved choice, the dropdown follows the selected layout's legacy default.
		var metaSelect = $( '#butterbean-control-oceanwp_ps_meta_display select' );
		var hasSavedMeta = typeof opsMetaAdmin !== 'undefined' && opsMetaAdmin.hasSavedChoice;
		var metaChosenInEditor = false;

		metaSelect.on( 'change', function () {
			metaChosenInEditor = true;
		} );

		styleTwo.on( 'change', function () {
			if ( ! hasSavedMeta && ! metaChosenInEditor ) {
				metaSelect.val( styleTwo.val() === 'one' ? 'date_author' : 'none' );
			}
		} );

	} );

} ) ( jQuery );