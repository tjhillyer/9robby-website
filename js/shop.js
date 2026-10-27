console.clear();

let cart = [];
let addToCartButtons = document.querySelectorAll(".product button.add-to-cart");

addToCartButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", true);
    let productContainer = event.target.parentElement;
    let name = productContainer.querySelector(".name").innerText;
    let price = productContainer
      .querySelector(".price")
      .getAttribute("data-price");
    let count = 1;
    addProductToCart(name, Number(price), count);
    renderCart();
    event.target.removeAttribute("disabled");
    console.log(cart);
  });
});

/* ----- Add product to cart ----- */
function addProductToCart(name, price, count) {
  for (let product in cart) {
    if (cart[product].name === name) {
      cart[product].count++;
      saveCart();
      return;
    }
  }
  let product = { name, price, count };
  cart.push(product);
  saveCart();
}

/* ----- Update product quantity in cart ----- */
function updateProductInCart(name, count) {
  for (let product in cart) {
    if (cart[product].name === name) {
      cart[product].count = count;
      if (count === 0) {
        cart.splice(product, 1);
      }
      saveCart();
      return;
    }
  }
}

/* ----- Remove Product from cart ----- */
function removeProductFromCart(name) {
  for (let product in cart) {
    if (cart[product].name === name) {
      cart.splice(product, 1);
    }
  }
  saveCart();
}

function renderCart() {
  let itemsContainer = document.querySelector(".items-container");
  let itemCount = 0;
  let itemTotal = 0;
  let html = ``;

  if (cart.length > 0) {
    cart.forEach(function (product) {
      let name = product.name;
      let price = product.price;
      let count = product.count;
      itemCount += count;
      let subtotal = product.count * product.price;
      subtotal = Number(subtotal.toFixed(2));
      itemTotal += subtotal;
      let productHTML = `
        <ul class="cart-item">
          <li class="item">
            ${name}<br /><br /><button data-name="${name}">Remove</button>
          </li>
          <li class="price" data-price="${price}">$${price}</li>
          <li class="quantity">
            <input type="number" value="${count}" min="1" data-name="${name}"/>
          </li>
          <li class="subtotal" data-subtotal="${subtotal.toFixed(
            2
          )}">$${subtotal.toFixed(2)}</li>
        </ul>
      `;

      html += productHTML;
    });

    itemsContainer.innerHTML = html;

    let quantityInputs = document.querySelectorAll(".cart-item input");
    quantityInputs.forEach(function (input) {
      input.addEventListener("change", function (event) {
        let name = event.target.getAttribute("data-name");
        let count = event.target.value;
        updateProductInCart(name, Number(count));
        renderCart();
      });
    });

    let removeButtons = document.querySelectorAll(".cart-item button");
    removeButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        let name = event.target.getAttribute("data-name");
        removeProductFromCart(name);
        renderCart();
      });
    });
  } else {
    itemsContainer.innerHTML = html;
  }

  let itemCountTarget = document.querySelector(".cart-summary .items-in-cart");
  let itemTotalTarget = document.querySelector(".cart-summary .total-price");

  if (itemCount === 0) {
    itemCountTarget.innerText = "No items in your cart";
    itemTotalTarget.innerText = `$0.00`;
  }
  if (itemCount === 1) {
    itemCountTarget.innerText = "1 item in your cart";
    itemTotalTarget.innerText = `$${itemTotal.toFixed(2)}`;
  } else {
    itemCountTarget.innerText = `${itemCount} items in your cart`;
    itemTotalTarget.innerText = `$${itemTotal.toFixed(2)}`;
  }
}

/* ----- Save cart to localStorage ----- */
function saveCart() {
  localStorage.setItem("watchShopCart", JSON.stringify(cart));
}

/* ----- Load cart from localStorage if it exists ----- */
function loadCart() {
  cart = JSON.parse(localStorage.getItem("watchShopCart"));
}

if (localStorage.getItem("watchShopCart") != null) {
  loadCart();
  renderCart();
}
