
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
    
    $('.customers-wrap').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
//      centerMode: true,
//      centerPadding: '60px',
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
});