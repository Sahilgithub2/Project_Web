let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Air Jordan 1 Low Pollen ',
        image: 'shoes1.png', 
        price: 100.99
    },
    {
        id: 2,
        name: 'Air Max 2017 Running Shoes',
        image: 'shoes2.png',
        price: 120.99
    },
    {
        id: 3,
        name: 'Phantom GT2 Academy Dynamic Fit MG',
        image: 'shoes3.png',
        price: 150.99
    },
    {
        id: 4,
        name: 'Nike Air Max 90G Essential',
        image: 'shoes4.png',
        price: 133.79
    },
    {
        id: 5,
        name: 'Air Jordan 95 Essential',
        image: 'shoes5.png',
        price: 142.19
    },
    {
        id: 6,
        name: 'Air Max Futura 90 Fit',
        image: 'shoes6.png',
        price: 123.49
    },
    {
        id: 7,
        name:'Air Max Dawn Plus SE',
        image:'shoes7.png',
        price: 160.59
    },
    {
        id: 8,
        name: 'Air Max System 95G',
        image: 'shoes8.png',
        price: 99.99 
        
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
