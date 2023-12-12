let body = document.getElementById("body");
let color = document.getElementById("color");
let btnChangeColor = document.getElementById("btn");
let hexadicimalColor = "#";
let counterBtn = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
// -----* part one*-------------------------------------------
let arrMakeColor = [0, 1, 2, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function randomColor() {
  return Math.floor(Math.random() * arrMakeColor.length);
}

function generatcolor() {
  hexadicimalColor = "#";
  for (let i = 0; i < 6; i++) {
    hexadicimalColor += arrMakeColor[randomColor()];
  }
  return hexadicimalColor;
}

function setColor() {
  body.style.backgroundColor = generatcolor();
  color.textContent = hexadicimalColor;
}
btnChangeColor.addEventListener("click", function () {
  setColor();
});
window.addEventListener("DOMContentLoaded", function () {
  setColor();
});
// ----*part two-------------------------------------
let number = 0;
function increase() {
  return (number += 1);
}

function decrease() {
  return (number -= 1);
}
function reset() {
  return (number = 0);
}
increaseBtn.addEventListener("click", function () {
  increase();
  counterBtn.innerHTML = number;
  //   number.style.color = "green";
});
decreaseBtn.addEventListener("click", function () {
  decrease();
  counterBtn.innerHTML = number;
});
resetBtn.addEventListener("click", function () {
  reset();
  counterBtn.innerHTML = number;
});
