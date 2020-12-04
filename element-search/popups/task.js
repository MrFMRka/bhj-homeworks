"use strict"

const modalMain = document.querySelector("#modal_main");
modalMain.classList.add("modal_active");

const modalClose = document.querySelectorAll("div.modal__close");
modalClose[0].onclick = function () {
  modalMain.classList.remove("modal_active");
};

const showSucces = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');
showSucces.onclick = function () {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};

modalClose[1].onclick = function () {
  modalSuccess.classList.remove("modal_active");
};