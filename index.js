import menuData from "./data";

// grab elements

// EVENT LISTENERS //
////////////////////
document.addEventListener("click", function (e) {
  let orderInfo = [];
  if (e.target.dataset.id) {
    getOrderInfo(e.target.dataset.id);
  }
});

// FUNCTIONS //
//////////////

let orderList = [];
// add the item to the order
function getOrderInfo(itemId) {
  // show the order menu when there's a click on a button to add
  // an item
  const orderMenu = document.getElementById("menu-order");
  orderMenu.style.display = "block";
  console.log(itemId);
  menuData.forEach(function (item) {
    if (itemId == item.id) {
      orderList.push(item);
    }
    return orderList;
  });

  //getOrderHtml(orderList);
  getOrderHtml(orderList);
}

function getOrderHtml(orderList) {
  let orderHtml = ``;

  orderList.forEach(function (order) {
    orderHtml += `
        <div class="order-menu">
          <div class="order">
            <h3>Hello/h3>
          </div>
        </div>
    `;
  });
  return orderHtml;
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
                    <button id="add_item" class="btn--add" data-id="${item.id}">+</button>
                    </div>
                </div>


        `;
  });
  return menuHtml;
}

// Render the boilerplate
function render() {
  document.getElementById("menu").innerHTML = getMenuHtml();
}

function renderOrder() {
  document.getElementById("render-order").innerHTML = getOrderHtml();
}
render();
