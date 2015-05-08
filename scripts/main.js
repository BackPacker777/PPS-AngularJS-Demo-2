/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED:
 *   PROJECT:
 *   TODO: Everything!
 */

"use strict";

function runSlides() {
	$('#slides > div:gt(0)').hide();

	setInterval(function() {
		$('#slides > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slides');
	},  4000);
	//https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
}

$(document).ready(function() {
	runSlides();
});
