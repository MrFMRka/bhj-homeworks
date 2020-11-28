"use strict"

function changeSizes() {
	const clickerCounter = document.getElementById("clicker__counter");
	const cookie = document.getElementById("cookie");
	cookie.width == 200?	cookie.width = 250:	cookie.width = 200;
	if (Number(cookie.textContent) >= 0)
	clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
};
cookie.onclick = changeSizes;