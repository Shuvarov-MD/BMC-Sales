$(document).ready(function () {
  //initialize swiper when document ready
  var heroSwiper = new Swiper ('.hero__swiper-container', {
    navigation: {
      nextEl: '.hero__swiper-button-next',
      prevEl: '.hero__swiper-button-prev',
    },
  });

  var serviceSwiper = new Swiper('.services__swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.services__swiper-button-next',
      prevEl: '.services__swiper-button-prev',
    },
  });

  var recommendedSwiper = new Swiper('.recommended__swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.recommended__swiper-button-next',
      prevEl: '.recommended__swiper-button-prev',
    },
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loopedSlides: 5, //looped slides should be the same
    thumbs: {
      swiper: galleryThumbs,
    },
  });
});