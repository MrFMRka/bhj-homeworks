"use strict"
const arrRotators = Array.from(document.querySelectorAll(".rotator__case"));
const timer = 1000;
let activeNumberRotator = 0;

let timerId = setTimeout(function sliderRotator() {
    if (activeNumberRotator < (arrRotators.length - 1)) {
        arrRotators[activeNumberRotator].classList.remove("rotator__case_active");
        ++activeNumberRotator;
        arrRotators[activeNumberRotator].classList.add("rotator__case_active");
    } else {
        arrRotators[activeNumberRotator].classList.remove("rotator__case_active");
        activeNumberRotator = 0;
        arrRotators[activeNumberRotator].classList.add("rotator__case_active");
    }
    timerId = setTimeout(sliderRotator, timer);
}, timer);