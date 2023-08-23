let firstColor = localStorage.getItem("color");
document.documentElement.setAttribute("class", firstColor);

console.log(document.querySelector(`.${firstColor}`));
document.querySelector(`body .${firstColor}`).checked = true;

document.querySelectorAll("body p:first-of-type input").forEach((v) => {
  v.addEventListener("change", (e) => {
    let color = e.target.value;
    localStorage.removeItem("color");
    localStorage.setItem("color", color);
    if (localStorage.getItem("color") === "dark") {
      document.documentElement.setAttribute("class", "dark");
    } else {
      document.documentElement.setAttribute("class", "blue");
    }
  });
});
