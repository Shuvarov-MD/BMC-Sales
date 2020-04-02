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
    spaceBetween: 30,
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


  //счетчик
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('countdown', deadline);





});