"use strict"

const holes = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let hole of holes) {
  hole.onclick = function () {
    hole.classList.contains("hole_has-mole") ? dead.textContent++ : lost.textContent++;
    if (dead.textContent >= 10) {
      alert("Победа");
      dead.textContent = 0;
      lost.textContent = 0;
    } else if (lost.textContent >= 5) {
      alert("Вы проиграли!");
      dead.textContent = 0;
      lost.textContent = 0;
    };
  };
};