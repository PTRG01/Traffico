"use strict";

///////////////////////////////////////
// FAQ Visibility

///////////////////////////////////////
// Slider
const slides = document.querySelectorAll(".clients__slide");
const btnLeft = document.querySelector(".clients__slider__btn--left");
const btnRight = document.querySelector(".clients__slider__btn--right");
const button = document.querySelector(".clients__slider__btn");

// Functions

let current = 0;
let prev = 2;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? goToSlide(current - 1) : goToSlide(slides.length - 1);

const gotoNext = () => (current < 2 ? goToSlide(current + 1) : goToSlide(0));

const goToSlide = function (slide) {
  current = slide;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == 3) {
    next = 0;
  }

  if (prev == -1) {
    prev = 2;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

// Event handlers
btnRight.addEventListener("click", gotoNext);
btnLeft.addEventListener("click", gotoPrev);
