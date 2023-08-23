{
  document.querySelector(".ex1 button").addEventListener("click", async (e) => {
    /* let memberArr;
    fetch("./data.json")
      .then((res) => res.json())
      .then((res) => {
        memberArr = res.memberArr;
        console.log(memberArr);
      }); */

    let result = await fetch("./data.json");
    let data = await result.json();
    let memberArr = data.memberArr;
    memberArr.forEach((v) => {
      let { name, age, gender } = v;
      document.querySelector(".ex1 .result").insertAdjacentHTML(
        "beforeend",
        `
        <p>이름:${name}, 나이:${age}, 성별:${gender}</p>
      `
      );
    });
  });
}
