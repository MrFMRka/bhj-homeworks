"use strict"

const menuLinks = document.getElementsByClassName("menu__link");

for (let menuLink of menuLinks) {
  const menuSub = menuLink.closest(".menu__item").getElementsByClassName("menu_sub");
  if (menuSub.length !== 0) {
    menuLink.onclick = function menuLinkClick () {
      if (!menuSub[0].classList.contains("menu_active")) {
        const menuSubAll = menuLink.closest('.menu').getElementsByClassName("menu_sub");
        for (let menuSub of menuSubAll) {
          menuSub.classList.remove("menu_active");
        }
      }
      menuSub[0].classList.toggle("menu_active");
      return false;
    }
  }
}