$(function () {
  var n = 1;
  $(".ex1 button").click(function () {
    clearTimeout(timeoutId);
    var timeoutId = setTimeout(function () {
      $(".ex1 .result").text(++n);
    }, 2000);
  });
});

$(function () {
  $(".ex2 button").click(function () {
    // $(".ex2 .result").slideDown(); //펼치다
    // $('.ex2 .result').slideUp() //접다
    $(".ex2 .result").stop().slideToggle(); //접었다펼침
    $(this).attr("disabled", true);
    setTimeout(function () {
      $(".ex2 button").attr("disabled", false);
    }, 300);
  });
});
$(function () {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  $(".ex3 .num1").val(num1);
  $(".ex3 .num2").val(num2);
  $(".ex3 button").click(function () {
    var num1 = parseInt($(".ex3 .num1").val());
    var num2 = parseInt($(".ex3 .num2").val());
    var num3 = parseInt($(".ex3 .num3").val());
    var result = (num3 = num1 + num2)
      ? $(".ex3").css({ background: "yellowgreen" })
      : $(".ex3").css({ background: "red" });
  });

  $(".ex4 button").click(function () {
    $(".ex4 .box").show();
    setTimeout(function () {
      $(".ex4 .box").css({ background: "red" });
    }, 500);
  });
});
$(function () {
  var n = 1;
  var intervalId;
  $(".ex5 .increase").click(function () {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
      $(".ex5 .result").text(++n);
    }, 1000);
  });
  $(".ex5 .decrease").click(function () {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
      $(".ex5 .result").text(--n);
    }, 1000);
  });
});
$(function () {
  var n = 1;
  var timeoutId;
  var intervalId;

  var fn = function (a) {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    timeoutId = setTimeout(function () {
      intervalId = setInterval(function () {
        $(".ex6 .result").text(a);
      }, 1000);
    }, 4000);
  };
  $(".ex6 .increase").click(function () {
    fn(++n);
  });
  $(".ex6 .decrease").click(function () {
    fn(--n);
  });
});
$(function () {
  var Id;
  var isStart = false;

  var s;
  var fnRestTimer = function (s) {
    clearInterval(Id);
    s = 0.0;
    $(".ex7 input").attr("readonly", false);
    isStart = false;
    $(".ex7 button").hide();
  };

  $(".ex7").submit(function (e) {
    e.preventDefault();
    if (isStart) return false;
    isStart = true;
    $(".ex7 button").show();
    $(".ex7 input").attr("readonly", true);
    s = parseInt($(".ex7 input").val());
    clearInterval(Id);
    Id = setInterval(function () {
      s -= 0.1;
      s = s.toFixed(1);
      if (s <= 0) {
        fnRestTimer();
      }
      $(".ex7 .result").text(s);
    }, 100);
  });

  $(".ex7 .reset").click(function () {
    fnRestTimer();
  });
});
$(function () {
  var n;
  setInterval(function () {
    n = Math.ceil(Math.random() * 5);
    $(".ex8 .img1").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $(".ex8 .img2").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $(".ex8 .img3").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $(".ex8 .img4").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $(".ex8 .img5").attr("src", `./img/img${n}.jpg`);
  }, 500);
});

$(function () {
  var n = 1;
  var timeoutId;
  var intervalId = setInterval(function () {
    n++;
    change();
  }, 2000);

  var autoplay = function () {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      intervalId = setInterval(function () {
        n++;
        change();
      }, 2000);
    }, 58000);
  };

  var change = function () {
    // clearInterval(intervalId); 멈추기 넣으면 문제
    $(".carousel button").attr("disabled", true);
    setTimeout(function () {
      $(".carousel button").attr("disabled", false);
    }, 500);
    if (n > 5) n = 1;
    if (n < 1) n = 5;
    $(`.carousel img`).stop().fadeOut();
    $(`.carousel .img${n}`).stop().fadeIn();
    $(".btns button").removeClass("active");
    $(`.btns .btn${n}`).addClass("active");
  };

  $(".next").click(function () {
    n++;
    change();
    autoplay();
  });
  $(".prev").click(function () {
    n--;
    change();
    autoplay();
  });

  $(".btns button").click(function () {
    n = parseInt($(this).val());
    change();
    autoplay();
  });
});
