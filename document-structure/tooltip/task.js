const a = document.getElementsByClassName("has-tooltip");
for (let i = 0; i < a.length; i++) {
  let div = document.createElement("div");
  a[i].after(div);
  div.classList.add("tooltip");
  div.textContent = a[i].title;
  let position = a[i].getBoundingClientRect();
  div.style.marginLeft = `${position.left}px`;
}

const divs = document.getElementsByClassName("tooltip");
for (let i = 0; i < a.length; i++) {
  a[i].onclick = function(e) {
    e.preventDefault();
    (divs[i].style.display === "block")?
    divs[i].style.display = "none":    
    divs[i].style.display = "block";
  }
}