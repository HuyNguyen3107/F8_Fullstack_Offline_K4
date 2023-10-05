"use strict";

const h1 = document.querySelector("h1");
const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");

let time = +counter.innerText;
let check = false;
let timeCheck = 60;

const countDown = () => {
  --timeCheck;
  if (timeCheck === 0) {
    --time;
    counter.innerText = time;
    timeCheck = 60;
  }
  if (time === 0) {
    h1.innerText = `Chúc mừng anh Quân (Dev mới của F8 && Bằng GIỎI Bách Khoa đã lấy được LINK nhé!)`;
    btn.innerText = `Géc Gô`;
    btn.style.cursor = "pointer";
    check = true;
    btn.removeAttribute("disabled");
  }
  if (time > 0) {
    window.requestAnimationFrame(countDown);
  }
};

btn.addEventListener("click", () => {
  if (check) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});

window.requestAnimationFrame(countDown);
