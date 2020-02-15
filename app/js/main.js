$(function () {

  
  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true,
  });

  $('.box-slider').slick({
    prevArrow: '<button class="prev slick-arrow"><img src="images/slider/chevron-left.png" alt=""></button>',
    nextArrow: '<button class="next slick-arrow"><img src="images/slider/chevron-right.png" alt=""></button>',
   });


});