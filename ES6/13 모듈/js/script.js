import { fnQs, a } from "./module1.js";
import b from "./module2.js";

fnQs;

fnQs(".btn1").addEventListener("click", (e) => {
  console.log(b);
});
