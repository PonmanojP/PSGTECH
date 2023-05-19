$(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            autoplay:true,
            autoplaySpeed:3000,
            centerPadding: '40px',
            infinite:true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay:true,
            autoplaySpeed:3000,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            mobileFirst:true,
            infinite:true,
            dots:true
          }
        },
        {
          breakpoint: 992,
          settings: {
            autoplay:true,
            autoplaySpeed:3000,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
            mobileFirst:true,
            infinite:true,
            dots:true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            autoplay:true,
            autoplaySpeed:3000,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
            mobileFirst:true,
            infinite:true,
            dots:true
          }
        },
        {
          breakpoint:1600,
          settings: {
            autoplay:true,
            autoplaySpeed:2000,
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            mobileFirst:true,
            infinite:true,
            dots:true
          }
        }
      ]
    });
    });
