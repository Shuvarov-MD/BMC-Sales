$(document).ready(function () {
  //initialize swiper when document ready
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

  //Добавление классов
  $(".catalog__menu-link").click(function(e) {
    e.preventDefault();
    $(".catalog__menu-link").removeClass('catalog__menu-link--active');
    $(this).addClass('catalog__menu-link--active');
  });

  $(".catalog-col__button").click(function(e) {
    e.preventDefault();
    $(".catalog-col__button").removeClass('catalog-col__button--active');
    $(this).addClass('catalog-col__button--active');
  });

  $(".paginations__item").click(function(e) {
    e.preventDefault();
    $(".paginations__item").removeClass('paginations__item--active');
    $(this).addClass('paginations__item--active');
  });


  //Кнопка вперед
  $('.paginations__next').on('click', function () {
		if ($('.paginations__item--active').index() == -1) {
			$('.paginations__item:first-child').addClass('paginations__item--active');
		} else {

			$('.paginations__item--active').next('.paginations__item').addClass('paginations__item--active');
			$('.paginations__item--active').prev('.paginations__item').removeClass('paginations__item--active');
		}

	});




  new WOW().init();

  //Меню
  $('.navigation__button').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('navigation__button--active');
    $('.navigation-wrap').toggleClass('navigation-wrap--active');
  });

  //Кнопка добавить
  $(".card__add, .card__add-img--small").click(function(e) {
    e.preventDefault();
    var $price = $(".bag__value");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
  });

});