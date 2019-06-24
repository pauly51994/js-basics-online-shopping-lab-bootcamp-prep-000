var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
  }
item = {itemName: item, itemPrice: getRandomInt(100)};
cart.push(item);
return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  let cartString = `In your cart, you have `;
  if (cart.length === 0){return 'Your shopping cart is empty.'}
  if (cart.length === 1){
    cart.forEach(function(itemObj){
      cartString += `${itemObj.itemName} at $${itemObj.itemPrice}.`
    })
  } else {
    for (let i = 0; i < cart.length; i++){
      if (i === cart.length - 1){cartString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`}
      else {
        cartString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      } 
    }
  }
  return cartString;
}

function total() {
  let sum = 0;
  cart.forEach(function(obj){
    sum += obj.itemPrice;
  })
  return sum;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    if ()
    if (cart[i].itemName === item){
      cart.splice(i - 1,1);
      return cart;
    } else {return 'That item is not in your cart.'}
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
