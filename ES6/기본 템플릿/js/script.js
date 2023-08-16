{
  //ex1
  document.querySelector(".ex1").addEventListener("submit", (e) => {
    e.preventDefault();

    let arr = document.querySelector(".ex1 input").value.split("");
    let obj = {
      a: 1,
    };
    arr.forEach((v) => {
      if (obj[v]) {
        obj[v]++;
      } else {
        obj[v] = 1;
      }
    });
    console.log(obj);
  });
}
{
  //ex2
  let arr = [
    { name: "김", age: 24, gender: "남" },
    { name: "이", age: 24, gender: "남" },
    { name: "박", age: 24, gender: "남" },
  ];

  document.querySelector(".ex2 button").addEventListener("click", (e) => {
    document.querySelector(".ex2 .result").innerHTML = "";
    arr.forEach((obj) => {
      // let p = document.createElement("p");
      // p.innerText(`이름:${obj.name}, 나이:${obj.age}, 성별: ${obj.gender}`);
      // document.querySelector(".ex2 .result").append(p);

      // afterbegin:prepend(앞쪽에 끼워넣기)
      // beforeend : append(뒤쪽에 끼워넣기)

      document
        .querySelector(".ex2 .result")
        .insertAdjacentHTML(
          "beforeend",
          `<p>이름: ${obj.name}, 성별 : ${obj.gender}, 나이 : ${obj.age}</p>`
        );
    });
  });
}

{
  //ex3
  let arr = [
    { name: "김", age: 24, gender: "남" },
    { name: "이", age: 24, gender: "남" },
    { name: "박", age: 24, gender: "남" },
  ];

  document.querySelector(".ex3 button").addEventListener("click", (e) => {
    e.target.disabled = true;
    document.querySelector(".ex3 .result").innerHTML = `
    <table>
      <thead>
        <tr>
          <th>
            이름
          </th>
          <th>
            이름
          </th>
          <th>
          나이
          </th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
    `;
    arr.forEach((v) => {
      document.querySelector(".ex3 .result tbody").insertAdjacentHTML(
        "beforeend",
        `
        <tr>
          <td>
            ${v.name}
          </td>
          <td>
            ${v.gender}
          </td>
          <td>
            ${v.age}
          </td>
        </tr>
      `
      );
    });
  });
}

{
  //ex4
  let arr = [
    {
      //문제1번
      question: "4-1번, one에 해당하는 숫자를 고르세요",
      radios: [
        { str: "1", value: "o", name: "radio1" },
        { str: "2", value: "x", name: "radio1" },
        { str: "3", value: "x", name: "radio1" },
      ],
    },
    {
      //문제2번
      question: "4-2번, two에 해당하는 숫자를 고르세요",
      radios: [
        { str: "1", value: "x", name: "radio2" },
        { str: "2", value: "o", name: "radio2" },
        { str: "3", value: "x", name: "radio2" },
      ],
    },
    {
      //문제3번
      question: "4-3번, three에 해당하는 숫자를 고르세요",
      radios: [
        { str: "1", value: "x", name: "radio3" },
        { str: "2", value: "x", name: "radio3" },
        { str: "3", value: "o", name: "radio3" },
      ],
    },
  ];

  arr.forEach((q) => {
    document.querySelector(".ex4 .questions").insertAdjacentHTML(
      "beforeend",
      `
      <div>
        <p>
          ${q.question}
        </p>
        <p class='radios'>
          
        </p>
      </div>
    `
    );
    q.radios.forEach((radio) => {
      document
        .querySelector(".ex4 .questions div:last-child p.radios")
        .insertAdjacentHTML(
          "beforeend",
          `
        <input type='radio' value='${radio.value}' name='${radio.name}'>${radio.str}
      `
        );
    });
  });

  document.querySelector(".ex4 button").addEventListener("click", (e) => {
    let point = 0;

    document.querySelectorAll(".ex4 input:checked").forEach((input) => {
      if (input.value === "o") point++;
    });
    document.querySelector(".ex4 .result").innerText = point;
  });
}
