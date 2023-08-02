$(function () {
  var fnScrollMotion = function () {
    var scry = $(window).scrollTop();
    var winh = $(window).height();
    var ex1h = $(".ex1").height();
    var offtEx1 = $(".ex1").offset().top;
    if (scry >= offtEx1 - winh * 0.4 + ex1h * 0.5) {
      $(".ex1").addClass("active");
    } else {
      $(".ex1").removeClass("active");
    }
  };

  fnScrollMotion();

  $(window).scroll(function () {
    fnScrollMotion();
  });
  $(window).resize(function () {
    fnScrollMotion();
  });
});
