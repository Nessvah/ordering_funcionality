import menuData from "./data";

// grab elements

// EVENT LISTENERS //
////////////////////
document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add);
  }
});

// FUNCTIONS //
//////////////
function handleAddClick(itemId) {
  // Iterate over the menu data and use the id saved in itemId to identify  the item obj
  // filter only returns true values
  menuData.forEach(function (item) {
    if (item.id == itemId) {
      item.quantity++;
      renderOrder();
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
                        <h4>$ ${item.price}</h4>
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

  let menuOrder = menuData.filter(function (item) {
    return item.quantity > 0;
  });

  menuOrder.forEach(function (item) {
    orderHtml += `
            <div class="order--container">

               <div class="order--info" id="${item.id}">
                    <h2 id="ordered--item" class="item-name">${item.name} x${
      item.quantity
    }</h2>
                    <button class="btn btn--remove" data-remove="${
                      item.id
                    }">Remove</button>
                </div>
                <h3 class="order--price">${item.price * item.quantity}€</h3>
              </div>
            `;
  });

  return orderHtml;
}

function renderOrder() {
  document.getElementById("menu-order").style.display = "block";
  document.getElementById("render-order").innerHTML = getOrderHtml();
}

// Render the boilerplate
function renderMenu() {
  document.getElementById("menu").innerHTML = getMenuHtml();
}

renderMenu();
