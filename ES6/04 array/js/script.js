{
  let dayString = "월화수목금";
  let dayArr = dayString.split("");
  let nameString = "이기웅/한창윤/정붕기/주재훈/한창훈";
  let nameArr = nameString.split("/");
  document.querySelector(".ex2 button").addEventListener("click", (e) => {
    e.target.disabled = true;
    for (let i = 0; i < 5; i++) {
      let day = dayArr[0];
      dayArr.shift();
      let ranN = Math.floor(Math.random() * nameArr.length);
      let name = nameArr[ranN];
      nameArr.splice(ranN, 1);
      let li = document.createElement("li");
      li.innerText = `${day}요일 밥사는 사람 ${name}`;
      document.querySelector(".ex2 .result").append(li);
    }
  });
}
{
  let answerArr = ["2", "5", "1"];
  document.querySelector(".ex3 button").addEventListener("click", (e) => {
    let inputArr = document.querySelectorAll(".ex3 input");
    let sum = 0;
    inputArr.forEach((v, i) => {
      if (v.value === answerArr[i]) sum++;
    });
    if (sum === 3) document.querySelector(".ex3 .result").innerText = "성공";
    else document.querySelector(".ex3 .result").innerText = "실패";
  });
}

{
  let nameArr = [];
  document.querySelector(".ex4 .add").addEventListener("click", () => {
    nameArr.push(document.querySelector(".ex4 input").value);
  });

  document.querySelector(".ex4 .print").addEventListener("click", (e) => {
    nameArr.forEach((v, i) => {
      console.log(v);
      let li = document.createElement("li");
      li.innerText = `${v}`;
      document.querySelector(".ex4 .result").append(li);
    });
  });
}
