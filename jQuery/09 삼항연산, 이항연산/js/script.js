$(function () {
  $(".ex1").submit(function (e) {
    e.preventDefault();
    var num = parseInt($(".ex1 .num").val());
    var result;
    num > 0 ? (result = "정답") : (result = "오답");
    $(".ex1 .result").text(`결과 : ${result}`);
  });
  $(".ex2").submit(function (e) {
    e.preventDefault();
    var num = parseInt($(".ex2 .num").val());
    var result;
    num > 90
      ? (result = "A")
      : num > 80
      ? (result = "B")
      : num > 70
      ? (result = "C")
      : num > 60
      ? (result = "D")
      : (result = "F");
    $(".ex2 .result").text(`결과 : ${result}`);
  });

  $(".ex3").submit(function (e) {
    e.preventDefault();
    var num1 = parseInt($(".ex3 .num1").val());
    var num2 = parseInt($(".ex3 .num2").val());
    var sign = $(".ex3 option:selected").val();
    console.log(sign);
    var result;
    if (num2 === 0 && sign === "/") {
      alert("0으로는 숫자를 나눌 수 없습니다");
      return;
    }
    sign === "+"
      ? (result = num1 + num2)
      : sign === "-"
      ? (result = num1 - num2)
      : sign === "*"
      ? (result = num1 * num2)
      : (result = num1 / num2);
    $(".ex3 .result").text(`결과 : ${result}`);
  });
});

$(function () {
  var fnSetNum = function (x) {
    var num1 = Math.floor(Math.random() * 10);
    $(`.ex4 .q${x} .num1`).val(num1);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex4 .q${x} .num2`).val(num2);
  };
  fnSetNum(1);
  fnSetNum(2);

  var fnCheckResult = function (x) {
    var num1 = parseInt($(`.ex4 .q${x} .num1`).val());
    var num2 = parseInt($(`.ex4 .q${x} .num2`).val());
    var num3 = parseInt($(`.ex4 .q${x} .num3`).val());
    return num1 + num2 === num3 ? true : false;
  };
  $(".ex4").submit(function (e) {
    e.preventDefault();
    var result = fnCheckResult(1) && fnCheckResult(2) ? "정답" : "오답";
    $(".ex4 .result").text(`결과 : ${result}`);
  });
});
$(function () {
  var fnSetNum = function (x) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex5 form:nth-of-type(${x}) input:nth-child(1)`).val(num1);
    $(`.ex5 form:nth-of-type(${x}) input:nth-child(2)`).val(num2);
  };
  fnSetNum(1);
  fnSetNum(2);

  var fnSubmit = function (x) {
    var num1 = parseInt(x.children("input:nth-child(1)").val());
    var num2 = parseInt(x.children("input:nth-child(2)").val());
    var num3 = parseInt(x.children("input:nth-child(3)").val());
    var result = num1 + num2 === num3 ? "정답" : "오답";
    x.children("p").text(`결과 : ${result}`);
  };

  $(".ex5 form").submit(function (e) {
    e.preventDefault();
    fnSubmit($(this));
  });
});
$(function () {
  //이항연산자
  $(".ex6").submit(function (e) {
    e.preventDefault();
    var str = $(".ex6 input").val();
    var result = str && "<button>버튼</button>";
    $(".ex6 .result").html(result);
  });
});
