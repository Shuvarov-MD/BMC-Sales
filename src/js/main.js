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
});