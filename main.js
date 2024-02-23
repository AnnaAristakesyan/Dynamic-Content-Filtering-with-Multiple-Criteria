const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"]},
    { id: 2, name: "Eco-friendly paper cup", category: "Home", price: 10, tags: ["new", "sale", "eco-friendly"]},
    { id: 3, name: "Paper plate", category: "Home", price: 11, tags: ["new"]},
    { id: 4, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"]},
    { id: 5, name: "HP Notebook", category: "Electronics", price: 2000, tags: ["new"]},
    { id: 6, name: "Smart Watch", category: "Electronics", price: 500, tags: ["sale"]},
    { id: 7, name: "Shoes", category: "Apparel", price: 30, tags: ["new", "sale", "eco-friendly"]},
    { id: 8, name: "Glasses", category: "Apparel", price: 25, tags: ["sale"]},
    { id: 9, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"]},
];

let catergoryForSelect= "All";
let tagsForSelect = [];

function printProducts(){
    let productContainer = document.querySelector('.products');
    productContainer.textContent = ``;

    let filterd = products.filter((elem) => {
        let categFilter = catergoryForSelect === "All" || elem.category === catergoryForSelect;

        let tagFilter = tagsForSelect.every(item => elem.tags.includes(item));
        return categFilter && tagFilter;
    });
    if(filterd.length == 0){
        productContainer.appendChild(document.createElement('div')).textContent = `Nothing found`;
    }else{
        filterd.forEach((elem) =>{
            productContainer.appendChild(document.createElement('div')).textContent = `${elem.name} - ${elem.price}$`;
        });
    }
}
function getAllCategory(products){
    return ['All', ...new Set(products.map(elem => elem.category))];
}

function changeCategoryDropDown(categories){
    let catDropDown = document.getElementById('select');
    catDropDown.textContent = ``;
    categories.forEach((elem) => {
        let option = document.createElement('option');
        option.text = elem;
        catDropDown.appendChild(option);
    });
    catDropDown.value = 'All';
}

let allCategories = getAllCategory(products);
changeCategoryDropDown(allCategories);

function changeChackbox(){
    catergoryForSelect = document.getElementById('select').value;
    tagsForSelect = [];
    if(document.getElementById('newT').checked) tagsForSelect.push('new');
    if(document.getElementById('saleT').checked) tagsForSelect.push('sale');
    if(document.getElementById('eco-fT').checked) tagsForSelect.push('eco-friendly');
    printProducts();
}

document.querySelector("#select").addEventListener('change', changeChackbox);
document.querySelectorAll('input[type=checkbox]').forEach((elem) => {elem.addEventListener('change', changeChackbox);
});

printProducts();
  