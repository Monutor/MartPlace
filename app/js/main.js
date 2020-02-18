$(function () {

  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true,
    normalFill: "#fff"
  });

  $('.box-slider').slick({
    prevArrow: '<button class="prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
   });

   var mixer = mixitup('.release-products__items');

   

   $('.follow__items').slick({
    prevArrow: '<button class="prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="next slick-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    slidesToShow: 3,
    variableWidth: true,
   });
});