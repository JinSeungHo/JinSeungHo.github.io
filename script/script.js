$(document).ready(function () {

  // 메인메뉴

  $('header nav .main-menu>li').mouseover(function () {
    $(this).find('.sub-menu').stop().slideDown(500);
  }).mouseout(function () {
    $(this).find('.sub-menu').stop().slideUp(500);
  });

  // 슬라이드

  var index = 0;
  var count = $('.slide a').length;
  setInterval(function () {

    if (index < count - 1) {
      index++;
    } else {
      index = 0;
    }

    var position = index * (-350) + "px";

    $('.slideimg').animate({
      top: position
    }, 400);

  }, 3000);

  // tab

  $('.container .notice-gelary h3').click(function () {

    $('.container .notice-gelary h3,.container .notice-gelary ul').removeClass('on');
    $(this).addClass('on');
    $(this).next('ul').addClass('on');
  });






});