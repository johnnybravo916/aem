(function(){
//FULL HEIGHT
  var fullHeight = $(window).height();
  $('.jsFullheight').height(fullHeight);
//FIXED HEADER
  $(window).scroll(function() {   
    var fullHeight = $(window).height();
    var scroll = $(window).scrollTop();
    if(scroll >= fullHeight) {
        $("header").addClass("jsFixed animate");
        $(".jsMenuInner").addClass("jsFixed animate");
    } else {
        $("header").removeClass("jsFixed");
        $(".jsMenuInner").removeClass("jsFixed");
    }
  });

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

//FLEXSLIDER and OWL
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
    animation: 'slide',
    itemWidth: 50,
    itemMargin: 5,
    minItems: 1,
    maxItems: 8,
    animationLoop: false,
    end : function(slider){
		jQuery('.slider-carousel .flexslider .slides li').each(function(){
			slider.addSlide('<li>'+jQuery(this).context.innerHTML+'</li>', slider.count);
			jQuery('.slider-carousel .flexslider .slides').append('<li>'+jQuery(this).context.innerHTML+'</li>');
      });
    }
    });
    $(".owl-carousel").owlCarousel({
      loop:true,
      nav:true,
      responsive:{
        200:{items:6},
        769:{items:6},
        1000:{items:9},
        2000:{items:9}
      }
    });
    if ($(window).width() > 1100){	
      $('.slider-wedo .flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 270,
        itemMargin: 15,
        slideshowSpeed: 5000,
        start: function(slider){
          $('.slider-wedo .flexslider').removeClass('js-preloader');
        }
      });
    } else if ($(window).width() <= 1030){
      $('.slider-wedo .flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 300,
        itemMargin: 15,
        slideshowSpeed: 5000,
        start: function(slider){
          $('.slider-wedo .flexslider').removeClass('js-preloader');
        }
      });
    }	
    $(window).resize(function(){
      if ($(window).width() > 900){	
        $('.slider-wedo .flexslider').flexslider({
          animation: "slide",
          animationLoop: false,
          itemWidth: 280,
          itemMargin: 15,
          slideshowSpeed: 5000,
          start: function(slider){
            $('.slider-wedo .flexslider').removeClass('js-preloader');
          }
        });
      } else if ($(window).width() <= 900){
        $('.slider-wedo .flexslider').flexslider({
          animation: "slide",
          animationLoop: false,
          itemWidth: 300,
          itemMargin: 15,
          slideshowSpeed: 5000,
          start: function(slider){
            $('.slider-wedo .flexslider').removeClass('js-preloader');
          }
        });
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
//CONTACT
  $(document).mouseup(function (e)
  {
    var jsDropdown = $(".js-Dropdown");
    if (!jsDropdown.is(e.target) && jsDropdown.has(e.target).length === 0){
      $(".contactDropdown").hide();
    } else {
      $(".contactDropdown").show();
    }
  });
  $('.contactDropdownOption').click(function(){
    var getOption = $(this).text();
    $('input[name=option_item]').val(getOption);
  });


})();

//FORM VALIDATION
function validate()
{
   if( document.validateForm.name.value == "" )
   {
      $(".contactError").show();
      return false;
   }
   if( document.validateForm.project.value == "" )
   {
      $(".contactError").show();
      return false;
   }
   if( document.validateForm.option_item.value == "" )
   {
      $(".contactError").show();
      return false;
   }
   if( document.validateForm.email.value == "" )
   {
      $(".contactError").show();
      return false;
   }
   return(true);
}

$(function() {
 // console.log($(".sectionBox h4").height());
    $('.sectionBox h4').matchHeight(
      {
          byRow: true,
          property: 'height',
          target:  null,
          remove: false
      }    
    );
});