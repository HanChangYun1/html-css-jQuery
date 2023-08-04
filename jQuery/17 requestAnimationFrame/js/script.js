$(function () {
  var x = 0;

  var move = function () {
    x += 1;
    $(".ex1 .box").css({ left: x });

    requestAnimationFrame(function () {
      move();
    });
  };
  move();
});
$(function () {
  var rafId;
  var isMotionStart = true;

  var fnScrollMotion = function () {
    if (!isMotionStart) return;
    isMotionStart = false;
    rafId = requestAnimationFrame(function () {
      console.log("고비용 모션");
      isMotionStart = true;
    });
  };

  fnScrollMotion();

  $(window)
    .scroll(function () {
      fnScrollMotion();
    })
    .resize(function () {
      fnScrollMotion();
    });
});
