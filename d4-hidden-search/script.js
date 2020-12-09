const search1 = document.querySelectorAll(".search")[0];
const btn1 = document.querySelectorAll(".btn")[0];
const input1 = document.querySelectorAll(".input")[0];

const search2 = document.querySelectorAll(".search")[1];
const btn2 = document.querySelectorAll(".btn")[1];
const input2 = document.querySelectorAll(".input")[1];

/*
 * try n make toggles with fun facts
 * make the animation go downwards?
 * need to clean up code by doing some sort of forEach loop!!!!!!!!!!
 */

btn1.addEventListener("click", () => {
  search1.classList.toggle("active");
  input1.focus;
});

btn2.addEventListener("click", () => {
  search2.classList.toggle("active");
  input2.focus;
});
