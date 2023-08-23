{
  //ex1
  const fnSetTimeout = () => {
    return new Promise((resolve, reject) => {
      let sec = Math.ceil(Math.random() * 6) * 1000;
      setTimeout(() => {
        if (sec <= 3000) {
          console.log(sec);
          resolve("성공");
        } else {
          console.log(sec);
          reject("실패");
        }
      }, sec);
    });
  };
  const fnPrint = (result) => {
    document.querySelector(".ex1 .result").innerText = result;
  };

  document.querySelector(".ex1 .btn1").addEventListener("click", (e) => {
    console.log("클릭시작");
    fnSetTimeout()
      .then((res) => {
        fnPrint(res);
      })
      .catch((err) => {
        alert("실패!");
      });
  });

  document.querySelector(".ex1 .btn2").addEventListener("click", async (e) => {
    console.log("클릭시작");
    try {
      let res = await fnSetTimeout();
      fnPrint(res);
    } catch (err) {
      alert(err);
    }
  });
}

{
  const 밀농사 = (재료) => {
    return new Promise((resolve, reject) => {
      let sec = Math.ceil(Math.random() * 3) * 1000;
      setTimeout(() => {
        if (sec <= 2000) {
          console.log(`${재료}를 받아서 밀농사 성공`);
          resolve("밀");
        } else {
          console.log("농사 실패");
          reject("밀농사 실패");
        }
      }, sec);
    });
  };
  const 밀가루생산 = (재료) => {
    return new Promise((resolve, reject) => {
      let sec = Math.ceil(Math.random() * 3) * 1000;
      setTimeout(() => {
        if (sec <= 2000) {
          console.log(`${재료}를 받아서 밀가루생산 성공`);
          resolve("밀가루");
        } else {
          reject("밀가루생산 실패");
        }
      }, sec);
    });
  };
  const 빵생산 = (재료) => {
    return new Promise((resolve, reject) => {
      let sec = Math.ceil(Math.random() * 3) * 1000;
      setTimeout(() => {
        if (sec <= 2000) {
          console.log(`${재료}를 받아서 빵생산 성공`);
          resolve("빵");
        } else {
          reject("빵생산 실패");
        }
      }, sec);
    });
  };
  const 결과출력 = (결과) => {
    document.querySelector(".ex2 .result").innerText = 결과;
  };

  document.querySelector(".ex2 .btn1").addEventListener("click", (e) => {
    밀농사("씨앗")
      .then((res) => {
        return 밀가루생산(res);
      })
      .then((res) => {
        return 빵생산(res);
      })
      .then((res) => {
        결과출력(res);
      })
      .catch((err) => {
        결과출력(err);
      });
  }); //btn1
  document.querySelector(".ex2 .btn2").addEventListener("click", async (e) => {
    try {
      let 밀 = await 밀농사("씨앗");
      let 밀가루 = await 밀가루생산(밀);
      let 빵 = await 빵생산(밀가루);
      결과출력(빵);
    } catch (err) {
      결과출력(err);
    }
  }); //btn2
} //ex2
