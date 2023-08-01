$(function () {
  $(".ex1 button").click(function () {
    throw "에러내용";
  });
  var a;
  $(".ex2 button").click(function () {
    try {
      alert(a);
    } catch {
      alert("a변수는 존재하지 않아요");
    }
  });

  $(".ex3 button").click(function () {
    var num1 = $(".ex3 .num1").val();
    var num2 = $(".ex3 .num2").val();
    var oper = $(".ex3 select").val();
    var str = num1 + oper + num2;
    try {
      var fn = new Function(`return ${str}`);
      var result = fn();
    } catch {
      result = "잘못된 연산자 선택";
    }

    $(".ex3 .result").text(result);
  });
});
$(function () {
  var str = "";
  $(".calc .btns .s").click(function () {
    str += $(this).val();
    $(".calc .output").text(str);
  });
  $(".c").click(function () {
    str = "";
    $(".output").text(str);
  });
  $(".del").click(function () {
    str = str.slice(0, -1);
    $(".output").text(str);
  });
  $(".result").click(function () {
    try {
      var fn = new Function(`return ${str}`);
      var result = fn();
      $(".output").text(result);
      str = "";
    } catch {
      result = "계산식이 잘못됨";
      $(".output").text(result);
    }
  });
});
