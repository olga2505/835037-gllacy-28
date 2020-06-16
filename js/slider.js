var body = document.querySelector(".page-body");

var input1 = document.querySelector(".slider-input-1");
var input2 = document.querySelector(".slider-input-2");
var input3 = document.querySelector(".slider-input-3");

var slide1 = document.querySelector(".slide-slides-1");
var slide2 = document.querySelector(".slide-slides-2");
var slide3 = document.querySelector(".slide-slides-3");

var checkSlider = function() {
  if (input1.checked == true) {
    body.classList.add("page-body--green");
    body.classList.remove("page-body--gray");
    body.classList.remove("page-body--brown");

    slide1.classList.add("modal-show__slider");
    slide2.classList.remove("modal-show__slider");
    slide3.classList.remove("modal-show__slider");
  }

  if (input2.checked == true) {
    body.classList.remove("page-body--green");
    body.classList.add("page-body--gray");
    body.classList.remove("page-body--brown");

    slide1.classList.remove("modal-show__slider");
    slide2.classList.add("modal-show__slider");
    slide3.classList.remove("modal-show__slider");
  }

  if (input3.checked == true) {
    body.classList.remove("page-body--green");
    body.classList.remove("page-body--gray");
    body.classList.add("page-body--brown");

    slide1.classList.remove("modal-show__slider");
    slide2.classList.remove("modal-show__slider");
    slide3.classList.add("modal-show__slider");
  }
}
