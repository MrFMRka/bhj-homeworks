const controlsLeft = document.getElementsByClassName("product__quantity-control_dec");
const controlsRight = document.getElementsByClassName("product__quantity-control_inc");
const value = document.getElementsByClassName("product__quantity-value");

for (let i = 0; i < controlsLeft.length; i++) {
    controlsLeft[i].onclick = function() {
        if (value[i].textContent < 2) {
            return;
            
        }
        value[i].textContent -= 1
    }
}

for (let i = 0; i < controlsRight.length; i++) {
    controlsRight[i].onclick = function() {
        let numberQuantity = Number(value[i].textContent);
        value[i].textContent = numberQuantity + 1;
    }
}

const product__add = document.getElementsByClassName("product__add");
for (let i = 0; i < product__add.length; i++) {
    product__add[i].onclick = function() {
        const cart__products = document.querySelector(".cart__products");
        const cartThing = document.createElement("div");
        const allCartThing = document.querySelectorAll(".cart__product");
        for (let j = 0; j < allCartThing.length; j++) {
            if (allCartThing[j].dataset.id === document.querySelectorAll(".product")[i].dataset.id) {
                document.querySelectorAll(".cart__product-count")[i].textContent = Number(document.querySelectorAll(".cart__product-count")[i].textContent) + Number(value[i].textContent);
                return;
            }
        }
        cartThing.className = "cart__product";
        cartThing.dataset.id = document.querySelectorAll(".product")[i].dataset.id;
        cartThing.innerHTML = 
        `<img class="cart__product-image" src="${document.querySelectorAll(".product__image")[i].src}">
        <div class="cart__product-count">${value[i].textContent}</div>`;
        cart__products.insertAdjacentElement("beforeend", cartThing);
    }
}