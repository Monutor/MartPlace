$(function () {


  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true,
    normalFill: "#ffc000",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>'
  });

  $(".page__item-rate").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true,
    normalFill: "#ffc000",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>'
  });


  $('.box-slider').slick({
    prevArrow: '<button class="prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    responsive: [{
      breakpoint: 581,
      settings: {
        arrows: false,
      }
    }]
  });

  if ($('.release-products__items').length) {
    var mixer = mixitup('.release-products__items');
  }



  $('.follow__items').slick({
    prevArrow: '<button class="prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      {
      breakpoint: 803,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
      }
    },
  ]
  });

  $('.button').click(function () {
    $('.filter__box').fadeToggle();
  });

  $('.categiries__inner-title').click(function () {
    $('.categiries__inner-list').slideToggle(800);
  });

  $('.filter__inner-title').click(function () {
    $('.filter__inner-list').slideToggle(800);
  });

  $('.buttons__filter').click(function () {
    $('.filter__box').slideToggle(800);
  });

  $('.pricing-range__inner-title').click(function () {
    $('.form').slideToggle(800);
  });

  $('.user__name').click(function () {
    $('.user__menu').slideToggle(800);
  });

  $('.lnr-envelope').click(function () {
    $('.envelope__menu').slideToggle(800);
  });

  $('.lnr-alarm').click(function () {
    $('.alarm__menu').slideToggle(800);
  });

  $('.lnr-cart').click(function () {
    $('.cart__menu').slideToggle(800);
  });

  $('.home__menu').click(function () {
    $('.menu__dropdown-home').slideToggle(800);
  });

  $('.wordpress__menu').click(function () {
    $('.menu__dropdown-wordpress').slideToggle(800);
  });

  $('.page__menu').click(function () {
    $('.page__menu-inner').fadeToggle(500);
  });

  $('.menu__btn').click(function () {
    $('.menu').fadeToggle(500);
  });

  $('.home__title').click(function () {
    $('.home__list').slideToggle(800);
  });

  $('.dashboard__title').click(function () {
    $('.dashboard__list').slideToggle(800);
  });

  $('.other-page__title').click(function () {
    $('.other-page__list').slideToggle(800);
  });

  $('.header__profie-icon').click(function () {
    $('.header__info').slideToggle(200);
  });






  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: '$'
  });
});