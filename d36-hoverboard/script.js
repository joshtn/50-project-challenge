const container = document.getElementById("container");
const btnGreen = document.getElementById("btn1");
const btnRainbow = document.getElementById("btn2");

const rainbowColor = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const greenColor = ["#2ecc71", "#4cbb17", "#808000", "#addfad"];
let colors = greenColor;

const SQUARES = 500;

btnGreen.addEventListener("click", () => {
  colors = greenColor;
  clearSquares();
  paint();
});

btnRainbow.addEventListener("click", () => {
  colors = rainbowColor;
  clearSquares();
  paint();
});

paint();

function clearSquares() {
  container.innerHTML = "";
}

function paint() {
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
  }
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
