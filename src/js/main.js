$(document).ready(function () {
  //initialize swiper when document ready
  var heroSwiper = new Swiper ('.hero__swiper-container', {
    navigation: {
      nextEl: '.hero__swiper-button-next',
      prevEl: '.hero__swiper-button-prev',
    },
  })
});