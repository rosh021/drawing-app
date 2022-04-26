const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const textBtn = document.getElementById("text");
const colorElm = document.getElementById("color");
const clearElm = document.getElementById("clear");

let size = 10;

let isPressed = false;

let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

textBtn.innerText = size;

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

incBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  textBtn.innerText = size;
});

decBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  textBtn.innerText = size;
});

clearElm.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorElm.addEventListener("change", (e) => {
  color = e.target.value;
});
