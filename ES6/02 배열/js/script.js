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
      let num = Math.floor(Math.random() * 10);
      e.value = num;
    });
  };
  fnSetNum();

  let sum = 0;
  document.querySelector(".ex6 button").addEventListener("click", () => {
    document.querySelectorAll(".ex6 input").forEach((e) => {
      sum += parseInt(e.value);
    });
    document.querySelector(".ex6 .result").innerHTML = `결과 : ${sum}`;
  });
}
