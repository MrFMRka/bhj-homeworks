"use strict"

const timer = setInterval(function(){
    const outTimer = document.getElementById("timer");
    outTimer.textContent = Number(outTimer.textContent) - 1;
    if (Number(outTimer.textContent) === 0){
        alert (`Вы победили в конкурсе!`)
        clearInterval(timer);
    }
},1000);