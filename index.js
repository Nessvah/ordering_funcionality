import menuData from "./data";

// grab elements
const orderContainer = document.getElementById("menu-order");
const modal = document.getElementById("modal");
const confirmOrder = document.getElementById("confirmation");

// EVENT LISTENERS //
////////////////////
document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    handleRemoveClick(e.target.dataset.remove);
  } else if (e.target.id === "btn-confirm") {
    modal.classList.remove("hidden");
  } else if (e.target.id === "btn-pay") {
    modal.classList.add("hidden");
    orderContainer.style.display = "none";
    e.preventDefault();
    confirmOrder.classList.remove("hidden");
  }
});

// FUNCTIONS //
//////////////

// function trim(str) {
//   return str.replace(/^\s+|\s+$/g, "");
// }

function validateFormFields() {
  let name = document.getElementById("name");
  let cardNumber = document.getElementById("card-number");
  let ccv = document.getElementById("ccv");

  if (name.value == "") {
    return false;
  } else if (cardNumber.value == "") {
    return false;
  } else if (ccv.value == "") {
    return false;
  } else {
    return true;
  }
}

function handleAddClick(itemId) {
  confirmOrder.classList.add("hidden");
  // Iterate over the menu data and use the id saved in itemId to identify  the item obj
  // filter only returns true values
  menuData.forEach(function (item) {
    if (item.id == itemId) {
      item.quantity++;
      renderOrder();
    }
  });
}

// function to remove items from order once clicked
function handleRemoveClick(itemId) {
  menuData.forEach(function (item) {
    if (item.id == itemId) {
      if (item.quantity > 0) {
        item.quantity--;
        renderOrder();
      }
    }
  });
}

// go through the menu array and get the html boilerplate to render later
function getMenuHtml() {
  let menuHtml = ``;

  menuData.forEach(function (item) {
    menuHtml += `
               <div class="menu--item">
                  <div class="menu--info">
                   <div >
                        <span class="menu--emoji">${item.img}</span>
                    </div>
                    <div>
                        <h2>${item.name}</h2>
                        <p><span class="item__ingredients">${item.ingredients}</span> </p>
                        <h3>$${item.price}</h3>
                   </div>
                  </div>
                   <div class="item__add" id="${item.id}">
                    <button id="add_item" class="btn--add" data-add="${item.id}">+</button>
                    </div>
                </div>
        `;
  });
  return menuHtml;
}

// render order conditionally
function getOrderHtml() {
  let orderHtml = "";
  let totalAmount = 0;

  let menuOrder = menuData.filter(function (item) {
    return item.quantity > 0;
  });

  menuOrder.forEach(function (item) {
    totalAmount += item.quantity * item.price;
    orderHtml += `
            <div class="order--container">

               <div class="order--info" id="${item.id}">
                    <h3 id="ordered--item" class="item-name">${item.name} x${
      item.quantity
    }</h3>
                    <button class="btn btn--remove" id="remove-item" data-remove="${
                      item.id
                    }">Remove</button>
                </div>
                <h3 class="order--price">$${item.price * item.quantity}</h3>
              </div>
            `;
  });

  orderHtml += `
  <div class="confirm--container">
    <div class="order--details">
      <div><h3>Total price:</h3></div>
      <div><h3>$${totalAmount}</h3></div>
    </div>

    <button class="btn btn--green" id="btn-confirm">Complete order</button>
  </div>
  `;

  return orderHtml;
}

function renderOrder() {
  // only render if there's some item with at least one quantity
  const foundItem = menuData.find((item) => item.quantity > 0);

  if (!foundItem) {
    orderContainer.style.display = "none";
  } else {
    orderContainer.style.display = "block";
    document.getElementById("render-order").innerHTML = getOrderHtml();
  }
}

// Render the boilerplate
function renderMenu() {
  document.getElementById("menu").innerHTML = getMenuHtml();
}

renderMenu();
