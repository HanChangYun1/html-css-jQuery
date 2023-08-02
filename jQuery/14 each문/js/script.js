$(function () {
  $(".ex1 button").click(function () {
    $(".ex1 div").each(function () {
      var bg = $(this).attr("data-a");
      $(this).css({ background: bg });
    });
  });

  var fn = function (button) {
    var n = button.val();
    $(`.ex2 .group${n} .box`).each(function () {
      var bg = $(this).attr("data-a");
      $(this).css({ background: bg });
    });
  };

  $(".ex2 button").click(function () {
    fn($(this));
  });

  $(function () {
    $(".ex3 button").click(function () {
      $(".ex3 button").css({ color: "black" });
      $(this)
        .parent()
        .children("button")
        .each(function () {
          var bg = $(this).val();
          $(this).css({ color: bg });
        });
    });
  });

  $(function () {
    $(".ex4 .num").each(function () {
      var a = Math.floor(Math.random() * 10);
      $(this).val(a);
    });
    //특정이벤트는 bind로 해줘야한다.
    $(".ex4 .input").bind("input", function () {
      var num = 0;
      $(".ex4 .num").each(function () {
        num += parseInt($(this).val());
      });
      var user = parseInt($(this).val());
      var result = num === user ? "정답" : "오답";
      $(".ex4 .result").html(result);
    });
  });

  $(function () {
    $(".ex5 button:nth-of-type(1)").click(function () {
      $(".ex5 .num").each(function () {
        var a = Math.floor(Math.random() * 10);
        $(this).val(a);
      });
    });

    $(".ex5 button:nth-of-type(2)").click(function () {
      var num = 0;
      $(".ex5 input").each(function () {
        num += parseInt($(this).val());
      });
      $(".ex5 .result").html(num);
    });
  });

  $(function () {
    $(".ex6 .q").each(function () {
      $(this).html(`
          <input class = 'num1' value="${Math.floor(
            Math.random() * 10
          )}" readonly> + 
          <input class = 'num2' value="${Math.floor(
            Math.random() * 10
          )}" readonly> =
          <input class = 'num3'>
      `);
    });

    $(".ex6 button").click(function () {
      var n = 0;
      $(".ex6 .q").each(function () {
        var num1 = parseInt($(this).children(".num1").val());
        var num2 = parseInt($(this).children(".num2").val());
        var num3 = parseInt($(this).children(".num3").val());
        num3 === num1 + num2 ? ++n : "";
      });
      $(".ex6 .result").html(n);
    });
  });
  $(function () {
    $(".ex7 .p").each(function () {
      $(this).html(`
      <button>버튼</button>
      <button>버튼</button>
      <button>버튼</button>
      <button>버튼</button>
      <button>버튼</button>
      `);
    });

    $(".ex7 button").click(function () {
      $(this).siblings("button").css({ color: "black" });
      $(this).css({ color: "red" });
    });
  });

  $(function () {
    $(".ex8 button").click(function () {
      console.log($(".ex8 input:checked").val());
      if ($(".ex8 input:checked").val() === "정답") {
        $(".ex8 .result").text("정답");
      } else {
        $(".ex8 .result").text("오답");
      }
    });
  });

  $(function () {
    $(".ex9 button").click(function () {
      var n = 0;
      $(".ex9 .q").each(function () {
        if ($(this).children("input:checked").val() === "정답") {
          n++;
          $(this).css({ background: "green" });
        } else {
          $(this).css({ background: "red" });
        }
      });
      $(".ex9 .result").text(n);
    });
  });

  $(function () {
    $(".ex10 button").click(function () {
      var result = "";
      $(".ex10 input:checked").each(function () {
        result += $(this).val() + ",";
      });
      $(".ex10 .result").html(result);
    });
  });

  $(function () {
    $(".ex11 button").click(function () {
      var point = 0;
      $(".ex11 .q").each(function () {
        var checkcnt = 0;
        $(this)
          .children("input:checked")
          .each(function () {
            if ($(this).val() === "정답") {
              checkcnt++;
            } else {
              checkcnt--;
            }
          });

        var totalcnt = parseInt($(this).attr("data-cnt"));
        console.log(totalcnt);
        if (checkcnt === totalcnt) {
          point++;
        }
      });

      $(".ex11 .result").text(point);
    });
  });
  $(function () {
    $(".ex12 button").click(function () {
      $(".ex12 .q").each(function () {
        var str = "";
        $(this)
          .children("input:checked")
          .each(function () {
            str += $(this).val() + ",";
          });

        $(this).children(".result").text(str);
      });
    });
  });
  $(function () {
    $(".ex13 > div").mouseenter(function () {
      $(this)
        .children("div")
        .each(function () {
          var bg = $(this).text();
          $(this).css({ background: bg });
        });
    });
    $(".ex13 > div").mouseleave(function () {
      $(this)
        .children("div")
        .each(function () {
          var bg = $(this).text();
          $(this).css({ background: "none" });
        });
    });
  });
});
