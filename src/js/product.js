$(document).ready(function () {
  var serviceSwiper = new Swiper('.services__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.services__swiper-button-next',
      prevEl: '.services__swiper-button-prev',
    },
  });

  var recommendedSwiper = new Swiper('.recommended__swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      400: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      880: {
        slidesPerView: 4,
        spaceBetween: 15
      },
    },
    navigation: {
      nextEl: '.recommended__swiper-button-next',
      prevEl: '.recommended__swiper-button-prev',
    },
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {

      // when window width is >= 480px
      480: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    },
  });

  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loopedSlides: 5, //looped slides should be the same
    thumbs: {
      swiper: galleryThumbs,
    },
  });



  new WOW().init();


  //Меню
  $('.navigation__button').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('navigation__button--active');
    $('.navigation-wrap').toggleClass('navigation-wrap--active');
  });


});