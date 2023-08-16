{
  document.querySelector(".ex1 button").addEventListener("click", (e) => {
    document.querySelector(".ex1 .result").innerText = "";
    for (let i = 10; i >= 1; i--) {
      document.querySelector(".ex1 .result").append(`${i},`);
    }
  });
}
{
  document.querySelector(".ex2 button").addEventListener("click", (e) => {
    let num1 = parseInt(document.querySelector(".ex2 .num1").value);
    let num2 = parseInt(document.querySelector(".ex2 .num2").value);
    let sum = 0;
    let a, b;
    if (num1 >= num2) {
      b = num1;
      a = num2;
    } else {
      b = num2;
      a = num1;
    }
    console.log(a, b);

    for (let i = a; i <= b; i++) {
      sum += i;
    }
    document.querySelector(".ex2 .result").innerText = sum;
  });
}
