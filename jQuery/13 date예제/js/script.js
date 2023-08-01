window.arr = ["일", "월", "화", "수", "목", "금", "토"];

$(function () {
  var printDate = function () {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var apm = hour < 12 ? "am" : "pm";
    hour = hour >= 13 ? hour - 12 : hour;
    var min = now.getMinutes();
    var sec = now.getSeconds();
    $(".ex1 .result").html(
      `${year}년 ${month}월 ${date}일 ${arr[day]}요일 <br> ${apm} ${hour}시 ${min}분 ${sec}초`
    );
  };
  printDate();
  setInterval(function () {
    printDate();
  }, 1000);

  $(".ex2 button").click(function () {
    var year = $(".ex2 .btn1").val();
    var month = $(".ex2 .btn2").val();
    var date = $(".ex2 .btn3").val();
    var day = new Date(`20${year},${month},${date}`).getDay();
    $(".ex2 .result").html(`${arr[day]}요일`);
  });

  $(".ex3 input").change(function () {
    var date = $(this).val();
    var day = new Date(date).getDay();
    $(".ex3 .result").html(`${arr[day]}요일`);
  });
  $(".ex4 input").change(function () {
    var inputDate = $(this).val();
    var date = new Date(inputDate);
    var differSec = date.getTime() / 1000;
    $(".ex4 .result").html(`${differSec}초`);
  });
});
$(function () {
  var now = new Date();
  var date = new Date(now);
  var differDay = parseInt(date.getTime() / (1000 * 60 * 60 * 24));
  var differHour = parseInt(
    (date.getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var differMin = parseInt(
    ((date.getTime() % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60)
  );
  var differSec = parseInt(
    (((date.getTime() % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) %
      (1000 * 60)) /
      1000
  );
  $(".ex5 .result").html(
    `${differDay}일 ${differHour}시간 ${differMin}분 ${differSec}초`
  );

  $(".ex6 .button").click(function () {});
});
$(function () {
  var fnClock = function () {
    var now = new Date();
    var hour = now.getHours();
    $(".hour").css({ transform: `rotate(${hour * 6}deg)` });
    var min = now.getMinutes();
    $(".min").css({ transform: `rotate(${min * 6}deg)` });
    var sec = now.getSeconds();
    $(".sec").css({ transform: `rotate(${sec * 6}deg)` });
  };

  setInterval(function () {
    fnClock();
  }, 1000);
});
