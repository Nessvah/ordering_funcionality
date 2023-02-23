import menuData from './data';

// grab elements


// go through the menu array and get the html boilerplate to render later
function getMenuHtml(){
    let menuHtml = ``;

    menuData.forEach(function(item){
        menuHtml += `
               <div class="menu-item">
                    <div class="item__img">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div>
                        <h2>${item.name}</h2>
                        <p><span class="item__ingredients">${item.ingredients}</span> </p>
                    </div>
                    <p>$ ${item.price}</p>
                </div>
                <div class="item__add" id="${item.id}">
                    <button class="btn--add"><img src="Images/add_btn.svg" class="icon" alt=""></button>
                </div>
        `
    });
    return menuHtml;
}

// Render the boilerplate
function render(){
    document.getElementById('menu').innerHTML = getMenuHtml();
}

render();