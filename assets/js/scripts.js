/************************************************************************/
/* JAVASCRIPT PLUGINS
/************************************************************************/
// place any jQuery/helper plugins in here, instead of separate, slower script files.


/************************************************************************/
/* JAVASCRIPT FUNCTIONS
/************************************************************************/

function navMenu(){
	var menu = $('#menu'),
	nav_btn = $('#nav_btn');

	nav_btn.click(function() {
		nav_btn.toggleClass('active');
		nav_btn.find('#nav_icon').toggleClass('open');
		menu.slideToggle('fast');
		return false;
	});
}
/************************************************************************/
/* JAVASCRIPT FUNCTIONS
/************************************************************************/

$(document).ready(function(){
	navMenu();
});