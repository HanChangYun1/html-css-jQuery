window.qs = (query) => {
  return document.querySelector(query);
};
window.qsa = (query) => {
  return document.querySelectorAll(query);
};

{
  //ex1
  let arr = localStorage.getItem("arrStorage")
    ? JSON.parse(localStorage.getItem("arrStorage"))
    : [];

  let print = () => {
    qs(".ex1 .result").innerHtml = "";
    arr.forEach((v) => {
      qs(".ex1 .result").insertAdjacentHTML(
        "beforeend",
        `
        <p>${v}</p>
      `
      );
    });
  };

  qs(".ex1").addEventListener("submit", (e) => {
    e.preventDefault();
    arr.push(qs(".ex1 input").value);

    let arrToJson = JSON.stringify(arr);
    localStorage.setItem("arrStorage", arrToJson);

    print();
  });
}

{
  //ex2
  let arr = localStorage.getItem("todoArrLocal")
    ? JSON.parse(localStorage.getItem("todoArrLocal"))
    : [];
  let copyArr = [...arr];
  const fnPrint = (arr) => {
    qs(".ex2 .result").innerHTML = "";

    if (copyArr.length === 0) {
      qs(".ex2 .result").innerText = "등록된 일정이 없어요.";
      return;
    }
    copyArr.forEach((v) => {
      let { id, title, date, time } = v;
      qs(".ex2 .result").insertAdjacentHTML(
        "beforeend",
        `
        <p>
          일정명 : ${title} <br>
          일정 : ${date} <br>
          시간 : ${time} 
          <button value=${id}>삭제</button>
        </p>
        <hr>
      `
      );
      qs(".ex2 .result p:last-of-type button").addEventListener(
        "click",
        (e) => {
          arr = arr.filter((v) => v.id !== parseInt(e.target.value));
          copyArr = [...arr];
          localStorage.setItem("todoArrLocal", JSON.stringify(arr));
          fnPrint(copyArr);
        }
      );
    });
  };

  const fnSortArr = (key) => {
    copyArr.sort((a, b) => {
      if (a[key] > b[key]) return -1;
      else if (a[key] < b[key]) return 1;
      else return 0;
    });
  };
  const fnChange = () => {
    qs(".ex2 select").addEventListener("change", (e) => {
      if (e.target.value === "latest") {
      } else if (e.target.value === "reverse") {
        copyArr.reverse();
      } else {
        fnSortArr(e.target.value);
      }

      fnPrint(copyArr);
    });
  };

  fnPrint(arr);

  qs(".ex2 form").addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Date.now();
    let title = qs(".ex2 .title").value;
    let date = qs(".ex2 .date").value;
    let time = qs(".ex2 .time").value;
    let Obj = { id, title, date, time };
    arr.unshift(Obj);
    copyArr = [...arr];

    localStorage.setItem("todoArrLocal", JSON.stringify(arr));
    fnPrint(copyArr);
  });

  qs(".ex2 .search").addEventListener("input", (e) => {
    copyArr = arr.filter((v) => v.title.includes(e.target.value));
    fnPrint(copyArr);
    fnChange();
  });
  fnChange();
}

{
  //ex3

  if (localStorage.getItem("popup-hide")) {
    qs(".ex3").style.display = "none";
    let nowSec = Date.now() / 1000;
    let hideSec = parseInt(localStorage.getItem("popup-hide")) / 1000;
    if (hideSec + 24 * 60 * 60 < nowSec) {
      qs(".ex3").style.display = "block";
      localStorage.removeItem("popup-hide");
    }
  } else qs(".ex3").style.display = "block";

  qs(".ex3 button").addEventListener("click", (e) => {
    qs(".ex3").style.display = "none";
    if (qs(".ex3 input[type=checkbox]").checked) {
      localStorage.setItem("popup-hide", Date.now());
    }
  });
}
