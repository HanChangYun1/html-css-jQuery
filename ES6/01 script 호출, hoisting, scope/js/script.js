// document.addEventListener('DOMContentLoaded', function(){})
// window.addEventListener("load", function () {});
document.querySelector(".ex1 button").addEventListener("click", function () {
  var a = 1;
  if (a === 1) {
    a = 2;
  }
  alert(a);
});
document.querySelector(".ex2 button").addEventListener("click", () => {
  let a = 1;
  if (a === 1) {
    a = 2;
  }
  alert(a);
});
