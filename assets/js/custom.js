
$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows:true,
  prevArrow:'<i class="a-left control-c prev slick-prev fas fa-chevron-left"></i>',
  nextArrow:'<i class="a-right control-c next slick-next fas fa-chevron-right"></i>'
});
$('.teams-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    edgeFriction:2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/images/arrow-back-outline.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../assets/images/arrow-forward-outline.svg'>"
  });

  $('.testimonials-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    speed:400,
    arrows:false,
    pauseOnHover: true,
    responsive: [
      {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ],
  });
  $('.partner-slide').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed: 0,
    dots: false,
    speed: 4000,
    arrows:false,
    responsive:[
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll:2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll:2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
        }
      }
    ]
  });
  $(document).ready(function() {
    $("a.grid-link").fancybox({
        'loop':true,
    })
});
$(function() {
  'use strict';

// Back to top smooth scroll

$('a.nav-link').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
  }, 1000, 'easeInOutExpo');
  event.preventDefault();
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('.scroll-up').fadeIn();
  } else {
      $('.scroll-up').fadeOut();
  }
});
});
// $('a.nav-link').bind('click', function(event) {
//   var $anchor = $(this);
//   $('html, body').stop().animate({
//       scrollTop: $($anchor.attr('href')).offset().top
//   }, 1000, 'easeInOutExpo');
//   event.preventDefault();
// });

/* Video Lightbox - Magnific Popup */
$('.popup-youtube').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: true,
  fixedContentPos: false,
  mainClass: 'my-mfp-slide-bottom',
  iframe: {
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: function(url) {        
                  var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                  if ( !m || !m[1] ) return null;
                  return m[1];
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
          vimeo: {
              index: 'vimeo.com/', 
              id: function(url) {        
                  var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                  if ( !m || !m[5] ) return null;
                  return m[5];
              },
              src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          }
      }
  }
});

$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");
  var headerMainfixed =$(".header-main");
  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });
  $(window).scroll(function() {
    if($(document).scrollTop() > 35) {
      headerMainfixed.addClass('fixed-top');
    }
    else if($(document).scrollTop() < 35) {
      headerMainfixed.removeClass('fixed-top');
    }
  });
  
  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


// demo slick slide dots
$('.dost-demo--list').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

$(document).ready(function(){
  var video = $(".video-demo");
  
  video.get(0).play();
  var video = $("#video2");
  
  video.get(0).play();
})


 // :: Wow Active Code
 if ($window.width() > 767) {
  new WOW().init();
}

// :: Accordian Active Code
(function () {
  var dd = $('dd');
  dd.filter(':nth-child(n+3)').hide();
  $('dl').on('click', 'dt', function () {
      $(this).next().slideDown(500).siblings('dd').slideUp(500);
  })
})();