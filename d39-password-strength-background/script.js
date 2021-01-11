// length of password muliplied by 2 to get images unblury
// add-ons: check for special chars, regex stuff
// USED tailwind in this project.
const bg = document.getElementById("background");
const passw = document.getElementById("password");

passw.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const OGBLURVALUE = 20;
  const blurValue = OGBLURVALUE - length * 2;

  background.style.filter = `blur(${blurValue}px)`;
});
