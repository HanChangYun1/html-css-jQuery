$(function () {
  var fnFloatBanner = function () {
    var scry = $(window).scrollTop();
    var scry1 = $(window).scrollLeft();
    var winh = $(window).height();
    var winw = $(window).width();
    $(".banner1").css({
      top: scry + winh * 0.5 - 100,
      left: scry1 + winw - 110,
    });
    $(".banner2").css({
      top: scry + winh * 0.5 - 100,
      left: scry1 + winw * 0.5 - 110,
    });
    $(".banner3").css({
      top: scry + winh * 0.5 - 100,
      left: scry1 + 10,
    });
  };

  fnFloatBanner();
  $(window).scroll(function () {
    fnFloatBanner();
  });
  $(window).resize(function () {
    fnFloatBanner();
  });
});
