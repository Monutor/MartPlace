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
  });

  if ($('.release-products__items').length) {
    var mixer = mixitup('.release-products__items');
  }



  $('.follow__items').slick({
    prevArrow: '<button class="prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    slidesToShow: 3,
    variableWidth: true,
  });

  $('.button').click(function () {
    $('.filter__box').fadeToggle();
  });

  $('.categiries__inner-title').click(function() {
    $('.categiries__inner-list').slideToggle(800);
  })

  $('.filter__inner-title').click(function() {
    $('.filter__inner-list').slideToggle(800);
  })

  $('.pricing-range__inner-title').click(function() {
    $('.form').slideToggle(800);
  })

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: '$'
  });
});