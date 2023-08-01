$(function () {
  $(".ex1 button").click(function () {
    var n = parseInt($(".ex1 input").val());
    if (n === 1) {
      $(".ex1 .result").html(`결과 : ${n}, 맞습니다`);
    } else {
      $(".ex1 .result").html(`결과 : ${n}, 틀렸습니다`);
    }
  });
  $(".ex2 button").click(function () {
    var n = parseInt($(".ex2 input").val());
    if (n === 1) {
      $(".ex2 .result").html(`결과 : ${n}, 맞습니다`);
    } else if (n === 3) {
      $(".ex2 .result").html(`결과 : ${n}, 맞습니다`);
    } else if (n === 9) {
      $(".ex2 .result").html(`결과 : ${n}, 맞습니다`);
    } else {
      $(".ex2 .result").html(`결과 : ${n}, 틀렸습니다`);
    }
  });
  $(".ex3 button").click(function () {
    var n = parseInt($(".ex3 input").val());
    if (n < 5 || n > 10) {
      $(".ex3 .result").html(`결과 : ${n}, 맞습니다`);
    } else {
      $(".ex3 .result").html(`결과 : ${n}, 틀렸습니다`);
    }
  });
  $(".ex4 button").click(function () {
    var n = parseInt($(".ex4 input").val());
    if (n > 5 && n < 11) {
      $(".ex4 .result").html(`결과 : ${n}, 맞습니다`);
    } else {
      $(".ex4 .result").html(`결과 : ${n}, 틀렸습니다`);
    }
  });
  $(".ex5 button").click(function () {
    var price = parseInt($(".ex5 select option:selected").val());
    var cnt = parseInt($(".ex5 input:checked").val());
    var year = parseInt($(".ex5 input[type=number]").val());

    var result = price * cnt;
    if (year < 20 && price === 4000) {
      $(".ex5 .result").html("미성년자이므로 구매가 불가능");
    } else {
      $(".ex5 .result").html(`총 가격 : ${result}`);
    }
  });
  $(".ex6 button").click(function () {
    var num = parseInt($(".ex6 input").val());
    if (num >= 100 && num <= 200) {
      if (num % 2 === 0) {
        $(".ex6 .result").html("정답");
      } else {
        $(".ex6 .result").html("오답");
      }
    } else {
      $(".ex6 .resuslt").html("오답");
    }
  });
  $(".ex7 button").click(function () {
    var age = $(".ex7 input[type=radio]:checked").val();
    var score = parseInt($(".ex7 input[type=number]").val());
    if ((age === "adult" && score >= 80) || (age === "kid" && score >= 60)) {
      $(".ex7 .result").html("결과 : 합격");
    } else {
      $(".ex7 .result").html("결과 : 불합격");
    }
  });
  $(".ex8 button").click(function () {
    var h = parseFloat($(".ex8 .height").val()) / 100;
    var w = parseFloat($(".ex8 .weight").val());
    var result = (w / (h * h)).toFixed(2);
    var g = $(".ex8 input[type=radio]").val();
    if (g === "man") {
      if (result >= 30) {
        $(".ex8 .result").html("당신은 비만입니다");
      } else if (result < 30 && result >= 25) {
        $(".ex8 .result").html("당신은 과체중입니다");
      } else if (result < 25 && result >= 20) {
        $(".ex8 .result").html("당신은 적정체중입니다");
      } else if (result < 20 && result >= 15) {
        $(".ex8 .result").html("당신은 저체중입니다");
      } else {
        $(".ex8 .result").html("당신은 마름입니다");
      }
    } else {
      if (result >= 35) {
        $(".ex8 .result").html("당신은 비만입니다");
      } else if (result < 35 && result >= 30) {
        $(".ex8 .result").html("당신은 과체중입니다");
      } else if (result < 30 && result >= 25) {
        $(".ex8 .result").html("당신은 적정체중입니다");
      } else if (result < 25 && result >= 20) {
        $(".ex8 .result").html("당신은 저체중입니다");
      } else {
        $(".ex8 .result").html("당신은 마름입니다");
      }
    }
  });
});
