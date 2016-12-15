(function(){
//SIDR
  $(document).ready(function () {
    $('#menu-responsive').sidr({
      timing: 'ease-in-out',
      speed: 500,
      side: 'right'
    });
  });

  $(".jsClose-sidr").click(function(){
    $.sidr('close', 'sidr');
  });
  $(".icon--menuResponsive").click(function(){
    $(this).toggleClass('js-active');
  });
  $( window ).resize(function () {
    $.sidr('close', 'sidr');
  });  
  $('.js-dropdown').click(function(){
    $(this).siblings('ul').slideToggle();
    $(this).toggleClass('glyphicon-plus glyphicon-minus')
    $(this).siblings('a').toggleClass('js-active');
    $(this).toggleClass('js-active');
  });
  $('.menuMobile li:has(span)')
  .mouseover(function() {
    $(this).toggleClass('js-active');
  })
  .mouseout(function() {
    $(this).toggleClass('js-active');
  });
//YEAR
  var currentYear = (new Date).getFullYear();
  $('.js-Year').text(currentYear);

//FLEXSLIDER
  $(window).load(function(){
    $('.slider-main .flexslider').flexslider({
      animation: "slide",
      slideshow: true,
      slideshowSpeed: 5000,
      start: function(slider){
        $('.slider-main .flexslider').removeClass('js-preloader');
        var curSlide = slider.find("a.flex-active");
        var currentSlide = $(curSlide).text().trim();
        $('.flexCurrent').html(currentSlide);
        var totalSlide = $('.slider-main .flexslider .flex-control-nav li').length;
        $('.flexTotal').html(totalSlide);
      },
      after: function(slider){
          var curSlide = slider.find("a.flex-active");
          var currentSlide = $(curSlide).text().trim();
          $('.flexCurrent').html(currentSlide);
      } 
    });
    $('.slider-carousel .flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 67,
      itemMargin: 30,
      slideshowSpeed: 5000,
      start: function(slider){
        $('.slider-carousel .flexslider').removeClass('js-preloader');
      }
    });
  });
//ANIMATION
  var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    } 

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
})();