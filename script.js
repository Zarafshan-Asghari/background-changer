"use strict";
let body = document.getElementById("body");
let color = document.getElementById("color");
let btn = document.getElementById("btn");
let hexColor = "#";
// ------------------------------------------
let btnCounter = document.getElementById("counter");
let btnIncrease = document.getElementById("increase");
let btnDecrease = document.getElementById("decrease");
let btnReset = document.getElementById("reset");
// -------------------------------------------
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function generateColor() {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    // why []
    hexColor += hex[randomColor()];
  }
  return hexColor;
}
function randomColor() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
  setColor();
});

function setColor() {
  body.style.backgroundColor = generateColor();
  color.innerHTML = hexColor;
}

window.addEventListener("load", function () {
  setColor();
});
// ---------------------------------------------------
let num = 0;
function increase() {
  num += 1;
}
function decrease() {
  num -= 1;
}
function reset() {
  num = 0;
}

btnIncrease.addEventListener("click", function () {
  increase();
  btnCounter.innerHTML = num;
  if (num > 0) number.style.color = "green";
});

btnDecrease.addEventListener("click", function () {
  decrease();
  btnCounter.innerHTML = num;
  if (num < 0) number.style.color = "red";
});

btnReset.addEventListener("click", function () {
  reset();
  btnCounter.innerHTML = num;
});
