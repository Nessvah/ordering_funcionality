import menuData from "./data";

// grab elements

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
                    <button id="add_item" class="btn--add" data-"${item.id}"><span class="plus">+</span></button>
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

render();
