$(function () {
  var n = 0;
  $(".ex1 button").click(function () {
    n += 1;
    $(".ex1 .result").text(n);
  });

  var fnCheck = function () {};

  var result = "";
  $(".ex2 button").click(function () {
    var list = "";
    $(".ex2 input:checkbox").each(function (index) {
      if ($(this).is(":checked") == true) {
        list += $(this).val();
      }
    });
    $(".ex2 .result").text(list);
  });

  var fnSetNum = function (x) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex3 .q${x} input:nth-of-type(1)`).val(num1);
    $(`.ex3 .q${x} input:nth-of-type(2)`).val(num2);
  };
  fnSetNum(1);
  fnSetNum(2);
  fnSetNum(3);

  var fnSubmit = function (x) {
    var num1 = parseInt($(`.ex3 .q${x} input:nth-of-type(1)`).val());
    var num2 = parseInt($(`.ex3 .q${x} input:nth-of-type(2)`).val());
    var num3 = parseInt($(`.ex3 .q${x} input:nth-of-type(3)`).val());
    var result = num1 + num2 === num3 ? true : false;
    return result;
  };

  $(".ex3 form").submit(function (e) {
    e.preventDefault();
    fnSubmit(1);
    fnSubmit(2);
    fnSubmit(3);
    var result = fnSubmit(1) && fnSubmit(2) && fnSubmit(3) ? "정답" : "오답";
    $(".ex3 .result").text(result);
  });
});

$(function () {
  var sum = 1;
  var num = 1;
  $(".ex4 .btn1").click(function () {
    sum += num;
    num += 1;
    $(".ex4 .result").text(sum);
  });
  $(".ex4 .btn2").click(function () {
    sum = 1;
    num = 1;
    $(".ex4 .result").text(sum);
  });
});

$(function () {
  var sum = 1;
  $(".ex5 .btn1").click(function () {
    var num = Math.floor(Math.random() * 5);
    sum += num;

    $(".ex5 .result").text(sum);
  });
  $(".ex5 .btn2").click(function () {
    var num = Math.floor(Math.random() * 5);
    sum > num ? (sum -= num) : alert("음수는 불가능합니다.");
    $(".ex5 .result").text(sum);
  });
});
$(function () {
  var num = 1;
  $(".ex6 .btn1").click(function () {
    num++;
    num = num > 5 ? (num = 1) : num;
    $(".ex6 .result").text(sum);
  });
  $(".ex6 .btn2").click(function () {
    num--;
    $(".ex6 .result").text(sum);
  });
});

$(function () {
  var n = 1;

  var carousel = function () {
    $("img").stop().fadeOut();
    $(`.img${n}`).stop().fadeIn();
    $(".btns button").removeClass("active");
    $(`.btn${n}`).addClass("active");
  };

  $(".next").click(function () {
    n++;
    if (n > 5) n = 1;
    carousel();
  });

  $(".prev").click(function () {
    n--;
    if (n < 1) n = 5;
    carousel();
  });
  $(".btns button").click(function () {
    n = parseInt($(this).val());
    carousel();
  });
});

$(function () {
  var x = 1;
  $(".ex7 button").click(function () {
    var n = parseInt($(this).val());
    x += n;
    $(".ex7 .result").text(x);
  });
});
