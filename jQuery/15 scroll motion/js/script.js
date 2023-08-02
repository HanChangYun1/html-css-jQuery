$(function () {
  var fnScrMotion = function () {
    var scry = $(window).scrollTop();
    var winh = $(window).height();
    $(".box1").each(function () {
      var box1Top = $(this).offset().top;
      var box1Height = $(this).innerHeight();
      if (
        scry >= box1Top - winh * 0.7 + box1Height &&
        scry < box1Top - winh * 0.3
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  };

  fnScrMotion();

  $(window).scroll(function () {
    fnScrMotion();
  });
  $(window).resize(function () {
    fnScrMotion();
  });
});
