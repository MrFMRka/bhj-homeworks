"use strict"

const values = document.getElementsByClassName("dropdown__value");
const lists = document.getElementsByClassName("dropdown__list");
const items = document.getElementsByClassName("dropdown__item");

values[0].addEventListener("click", function() {
    lists[0].className = "dropdown__list dropdown__list_active";
    return false;
});

for (const item of items) {
    item.onclick = function() {
        values[0].textContent = this.textContent;
        lists[0].className = "dropdown__list";
        return false;
    };
}