const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach(value => {
	value.addEventListener("click", () => {
		document.querySelector(".tab_active").classList.remove("tab_active");
		document.querySelector(".tab__content_active").classList.remove("tab__content_active");
		value.classList.toggle("tab_active");
		tabsContent[tabs.indexOf(value)].classList.toggle("tab__content_active");
	});
});