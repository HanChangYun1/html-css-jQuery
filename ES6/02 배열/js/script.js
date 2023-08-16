const arr = [1, 2, 3, 4, 5, 6, 7];
document.querySelector(".ex1 button").addEventListener("click", () => {
  arr.forEach((val, idx) => {
    document.querySelector(".ex1 .result").append(arr[idx]);
  });
});

{
  /* ex2 */
  const btnArr = document.querySelectorAll(".ex2 button");
  btnArr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelector(
        ".ex2 .result"
      ).innerHTML = `결과 : ${e.target.value}`;
    });
  });
  // document.querySelector(".ex2 button").addEventListener("click", (e) => {
  //   alert(e.target.value);
  // });
}
{
  /* ex3 */
  document.querySelector(".ex3 button").addEventListener("click", () => {
    document.querySelectorAll(".ex3 div").forEach((div) => {
      div.style.backgroundColor = "red";
    });
  });
}
{
  // ex4
  document.querySelectorAll(".ex4 div").forEach((div) => {
    div.addEventListener("click", () => {
      document.querySelectorAll(".ex4 div").forEach((div) => {
        div.classList.toggle("active");
      });
    });
  });
}
{
  //ex5
  document.querySelector(".ex5 button").addEventListener("click", () => {
    document.querySelectorAll(".ex5 div").forEach((div) => {
      div.style.background = div.getAttribute("data-bg");
    });
  });
}
{
  //ex6
  let fnSetNum = function () {
    document.querySelectorAll(".ex6 input").forEach((e) => {
      e.readOnly = true;
      e.value = Math.floor(Math.random() * 10);
    });
  };
  fnSetNum();

  document.querySelector(".ex6 button").addEventListener("click", () => {
    document.querySelectorAll(".ex6 .numbers").forEach((num) => {
      let sum = 0;
      num.querySelectorAll(".ex6 .numbers input").forEach((e) => {
        sum += parseInt(e.value);
      });
      num.querySelector(".ex6 .result").innerHTML = `결과 : ${sum}`;
    });
  });
}
{
  //ex7
  document.getElementById("id1").style.background = "red";
  Array.from(document.getElementsByTagName("a")).forEach((el) => {
    el.style.textDecoration = "none";
  });
  Array.from(document.getElementsByClassName("a")).forEach((el) => {
    el.style.color = "red";
  });
}
{
  // ex8
  document.querySelector(".ex8 button").addEventListener("click", (e) => {
    document.querySelectorAll(".ex8 .category").forEach((c) => {
      let str = " "; //문자열초기화
      c.querySelectorAll("input:checked").forEach((ch) => {
        str += ch.value;
      });
      c.querySelector(".ex8 .result").innerHTML = str;
    });
  });
}

{
  //ex9
  document.querySelectorAll(".ex9 button").forEach((b) => {
    b.addEventListener("click", (e) => {
      Array.from(e.target.parentElement.children).forEach((el) => {
        el.style.color = "#000";
      });
      e.target.style.color = "red";
    });
  });
}
{
  //ex10
  document.querySelectorAll(".ex10 input").forEach((input) => {
    input.addEventListener("input", (e) => {
      let str = e.target.value;
      let digit = parseInt(e.target.getAttribute("data-digit"));
      if (str.length >= digit && e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      }
    });
  });
}
{
  //ex11
  document.querySelectorAll(".ex11 button").forEach((btn) => {
    btn.addEventListener("click", (el) => {
      // let arr = Array.from(el.target.parentElement.children);
      // let arr2 = arr.filter((x) => x !== el.target);
      // arr2.forEach((e) => {
      //   e.classList.remove("active");
      // });
      // el.target.classList.toggle("active");
      document.querySelectorAll(".ex11 button").forEach((button) => {
        if (button !== el.target) {
          button.classList.remove("active");
        }
      });
      el.target.classList.toggle("active");
    });
  });
}
