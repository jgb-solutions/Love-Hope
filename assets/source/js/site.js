// jQuery to collapse the navbar on scroll
function collapseNavbar() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
}

$(window).scroll(collapseNavbar);

$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
	$('.navbar-toggle:visible').click();
	}
});

// $(function() {
// 	$('#counter').countdownCube({
// 		target: new Date( 'May 17, 2017 10:00:00' ),
// 		cubeSize: 100
// 	});

// 	texts = $('.countdownCubeTitleDiv');
// 	texts.eq(0).parent().hide();
// 	texts.eq(1).text('Mois');
// 	texts.eq(2).text('Jours');
// 	texts.eq(3).text('Heures');
// 	texts.eq(4).text('Min.');
// 	texts.eq(5).text('Sec.');
// });

$(function(){

	var note = $('#note'),
		ts = new Date(2017, 5, 24, 10, 0, 0),
		newYear = true;

	console.log((new Date()) > ts, ts);

	// if((new Date()) > ts){
	// 	// The new year is here! Count towards something else.
	// 	// Notice the *1000 at the end - time must be in milliseconds
	// 	ts = (new Date()).getTime() + 10*24*60*60*1000;
	// 	newYear = false;
	// }

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += days + " jour" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " heure" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " segonde" + ( seconds==1 ? '':'s' ) + " <br />";

			// if(newYear){
			// 	message += "left until the new year!";
			// }
			// else {
			// 	message += "left to 10 days from now!";
			// }

			note.html(message);
		}
	});

	// Warn the cancellation of the event on the web page
	// $('#cancel-modal').modal('show');
});