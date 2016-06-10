
$(document).ready(function(){
    
	$('#touch-menu').click(function(){
		$(this).toggleClass('open');
	});
    
    var touch = $('#touch-menu');
    var menu = $('.menu');
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    
    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 845 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});