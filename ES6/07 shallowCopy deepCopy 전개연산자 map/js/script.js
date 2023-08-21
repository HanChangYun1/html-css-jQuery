{
  let arr = [];
  for (i = 1; i <= 10; i++) {
    arr.push(i);
  }
  document.querySelector(".ex1 .even").addEventListener("click", (e) => {
    let evens = arr.filter((v) => {
      return v % 2 === 0;
    });
    document.querySelector(".ex1 .result").innerHTML = "";
    evens.forEach((e) => {
      document.querySelector(".ex1 .result").append(`${e},`);
    });
  });
  document.querySelector(".ex1 .odd").addEventListener("click", (e) => {
    let evens = arr.filter((v) => {
      return v % 2 !== 0;
    });
    document.querySelector(".ex1 .result").innerHTML = "";
    evens.forEach((e) => {
      document.querySelector(".ex1 .result").append(`${e},`);
    });
  });
}

{
  document.querySelector(".ex2 .asc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex2 input").value.split(",");
    arr.sort((a, b) => {
      return a - b;
    });
    document.querySelector(".ex2 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex2 .result").append(`${v},`);
    });
  });
  document.querySelector(".ex2 .desc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex2 input").value.split(",");
    arr.sort((a, b) => {
      return b - a;
    });
    document.querySelector(".ex2 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex2 .result").append(`${v},`);
    });
  });
}

{
  let fnsortArr = (arr, n1, n2) => {
    arr.sort((a, b) => {
      if (a > b) return n1;
      else if (a < b) return n2;
      else return 0;
    });
  };
  document.querySelector(".ex3 .asc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex3 input").value.split("");
    fnsortArr(arr, 1, -1);

    document.querySelector(".ex3 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex3 .result").append(`${v},`);
    });
  });
  document.querySelector(".ex3 .desc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex3 input").value.split("");
    fnsortArr(arr, -1, 1);

    document.querySelector(".ex3 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex3 .result").append(`${v},`);
    });
  });
}

{
  let n = 1;
  let arr = [];
  let fnOutput = (arr) => {
    document.querySelector(".ex4 .result").innerHTML = "";
    arr.forEach((v) => {
      let { id, name, age, gender } = v;
      document.querySelector(".ex4 .result").insertAdjacentHTML(
        "beforeend",
        `
        <li>
          이름 : ${name}, 나이 : ${age}, 성별 : ${gender}
          <button value='${id}' type="button">버튼</button>
        </li>
      `
      );
      document
        .querySelector(".ex4 .result li:last-child button")
        .addEventListener("click", (e) => {
          arr = arr.filter((v) => v.id !== parseInt(e.target.value));
          fnOutput(arr);
        });
    });
  };

  document.querySelector(".ex4").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  document.querySelector(".ex4 .add").addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector('.ex4 input[type="text"]').value;
    let age = parseInt(
      document.querySelector('.ex4 input[type="number"]').value
    );
    let gender = document.querySelector(".ex4 input:checked").value;
    let obj = { id: n, name, age, gender };
    arr.push(obj);
    n++;

    document.querySelector('.ex4 input[type="text"]').focus();
    document.querySelector(".ex4").reset();
    fnOutput(arr);
  });
  document.querySelector(".ex4 .name").addEventListener("click", (e) => {
    let nameArr = arr.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });
    fnOutput(nameArr);
  });
  document.querySelector(".ex4 .age").addEventListener("click", (e) => {
    let ageArr = arr.sort((a, b) => {
      if (a.age > b.age) return -1;
      else if (a.age < b.age) return 1;
      else return 0;
    });
    fnOutput(ageArr);
  });
  document.querySelector(".ex4 .man").addEventListener("click", (e) => {
    let arr2 = arr.filter((v) => v.gender === "남");
    fnOutput(arr2);
  });
  document.querySelector(".ex4 .woman").addEventListener("click", (e) => {
    let arr2 = arr.filter((v) => v.gender === "여");
    fnOutput(arr2);
  });

  document.querySelector(".ex4 .search").addEventListener("input", (e) => {
    let arrCopy = arr.filter((v) => v.name.includes(e.target.value));
    if (arrCopy.length !== 0) fnOutput(arrCopy);
    else
      document.querySelector(".ex4 .result").innerText =
        "검색결과가 존재하지 않는다";
  });
}

{
  //ex5
  let n = 1;
  let arr = [];

  let fnOutput = (arr) => {
    document.querySelector(".ex5 .result").innerHTML = "";
    arr.forEach((v) => {
      let { id, name, date, time } = v;
      document.querySelector(".ex5 .result").insertAdjacentHTML(
        "beforeend",
        `
        <li>
          일정 : ${name}, 날짜 : ${date}, 시간 : ${time}
          <button value='${id}' type='button'>삭제</button>
        </li>
      `
      );
      document
        .querySelector(".ex5 .result li:last-child button")
        .addEventListener("click", (e) => {
          arr = arr.filter((v) => v.id !== parseInt(e.target.value));
        });
    });
  };

  document.querySelector(".ex5").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  document.querySelector(".ex5 .add").addEventListener("click", (e) => {
    let name = document.querySelector('.ex5 input[type="text"]').value;
    let date = document.querySelector('.ex5 input[type="date"]').value;
    let time = document.querySelector('.ex5 input[type="time"]').value;
    console.log(date, time);
    let obj = { id: n, name, date, time };
    arr.push(obj);
    n++;

    document.querySelector('.ex5 input[type="text"]').focus();
    document.querySelector(".ex5").reset();
    fnOutput(arr);
  });

  document.querySelector(".ex5 .name").addEventListener("click", (e) => {
    let nameArr = arr.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });
    fnOutput(nameArr);
  });
  document.querySelector(".ex5 .date").addEventListener("click", (e) => {
    let dateArr = arr.sort((a, b) => {
      if (a.date > b.date) return -1;
      else if (a.date < b.date) return 1;
      else return 0;
    });
    fnOutput(dateArr);
  });
  document.querySelector(".ex5 .search").addEventListener("input", (e) => {
    let arrCopy = arr.filter((v) => v.name.includes(e.target.value));
    if (arrCopy.length !== 0) fnOutput(arrCopy);
    else
      document.querySelector(".ex5 .result").innerHTML =
        "검색 결과가 존재하지않습니다";
  });
}
