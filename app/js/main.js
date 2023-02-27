$(function(){
  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="left arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="right arrow"></button>',
  });


  var mixer = mixitup('.portfolio__content');
});