$(function () {
  var random = function () {
    var rsp = ["scissor", "rock", "paper"];
    var randomRsp = rsp[Math.floor(Math.random() * rsp.length)];
    return randomRsp;
  };
  var rsp = function (x, y) {
    var result;
    if (x === y) {
      result = "무승부입니다";
    } else {
      if (x === "scissor") {
        if (y === "rock") {
          result = "졌습니다.";
        } else {
          result = "이겼습니다.";
        }
      } else if (x === "rock") {
        if (y === "paper") {
          result = "졌습니다.";
        } else {
          result = "이겼습니다.";
        }
      } else {
        if (y === "scissor") {
          result = "졌습니다.";
        } else {
          result = "이겼습니다.";
        }
      }
    }
    return result;
  };

  $(".ex1").submit(function (e) {
    e.preventDefault();
    var x = $(".ex1 input[type=radio]:checked").attr("id");
    var y = random();

    var result = rsp(x, y);
    $(".ex1 .result").html(`유저:${x}, 컴퓨터:${y}, 결과: ${result}`);
  });
});

$(function () {
  var fnSetNum = function (x) {
    var num1 = Math.floor(Math.random() * 10);
    $(`.ex2 .q${x} .num1`).val(num1);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex2 .q${x} .num2`).val(num2);
  };

  fnSetNum(1);
  fnSetNum(2);
  fnSetNum(3);

  var fnCheckNum = function (x) {
    var num1 = parseInt($(`.ex2 .q${x} .num1`).val());
    var num2 = parseInt($(`.ex2 .q${x} .num2`).val());
    var userNum = parseInt($(`.ex2 .q${x} .usernum`).val());
    if (num1 + num2 === userNum) {
      return true;
    } else {
      return false;
    }
  };

  $(".ex2 ").submit(function (e) {
    e.preventDefault();
    var result;
    var n1 = fnCheckNum(1);
    var n2 = fnCheckNum(2);
    var n3 = fnCheckNum(3);
    if (n1 && n2 && n3) {
      result = "모두 정답입니다!";
    } else {
      result = "아쉽습니다..";
    }
    $(".ex2 .result").html(result);
  });
});
