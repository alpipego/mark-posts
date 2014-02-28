(function ( $ ) {
	"use strict";

	$(function () {

		// Place your administration-specific JavaScript here
		if($('.mark-posts-post-color').length > 0) {
			$('.mark-posts-post-color').each(function(index) {
				// color the whole row
				// $(this).parent().parent().find('th.check-column').css('background-color', $(this).data('color') );
			});
		}

	});

  // convert rgb to hex
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  // modify hex for background usage
  function convertHex(hex,opacity){
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);
    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
  }

  // highlight each row
	$('.mark-posts-marker').each(function() {
  	var hex = rgb2hex($(this).css('backgroundColor'));
  	$(this).parent().parent().find('th, td').css('background-color', convertHex(hex,25));
	});


	// live preview of new markers
	$('.js-add-markers').keyup(function(e) { // use keyup instead of keypress for latest char
		var markers = [];
		var make_markers = $(this).val().split(","); // separate marker by comma
		$(make_markers).each(function(e) { // push each new marker to array
			markers.push('<span class="new-marker">'+make_markers[e]+'</span>');
		});

		$('.js-new-markers-intro').show();
		$('.js-new-markers').html(markers.join(' ')); // preview new markers

	});


}(jQuery));