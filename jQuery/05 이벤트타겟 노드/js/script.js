$(function () {
  var fnImg = function (x, n) {
    $(`.ex${n} img`).hide();
    var img = x.attr("class");
    $(`.ex${n} .img${img}`).css({ display: "block" });
    $(`.ex${n} button`).removeClass("active");
    x.addClass("active");
  };
  $(".ex1 button").click(function (e) {
    fnImg($(e.target), 1);
  });
  $(".ex2 button").click(function (e) {
    fnImg($(e.target), 2);
  });
  $(".ex3 button").click(function (e) {
    e.stopPropagation();
    $(this).parent().siblings("div").removeClass("active");
    $(this).parent().addClass("active");
  });
  $(".ex3 div").click(function () {
    $(this).siblings("div").children("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".ex4 button").click(function () {
    $(this).parent().siblings("p").children("button").removeClass("active");
    $(this).toggleClass("active");
  });
});
