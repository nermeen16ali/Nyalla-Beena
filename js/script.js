$('.slick-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  autoplaySpeed:1500,
  rtl: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.special-slick-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  autoplaySpeed:1500,
  rtl: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
});
$('.warning-slick-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  autoplaySpeed:1500,
  rtl: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
});
$('.completed-slick-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  autoplaySpeed:1500,
  rtl: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
});
$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll:2,
  autoplay: true,
  rtl: true,
  autoplaySpeed:1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  rtl: true,
  autoplaySpeed:1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
$(".heartbtn").on("click", function() {
  $(this).toggleClass("on");
});
$(".freq-btn").click(function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  var targetedItems = $(this).data('target');
  if(targetedItems === 'all'){
     $(".accordion-item").show();
   } else{
      $(".accordion-item").hide();
      $("."+targetedItems).show();
  }
})