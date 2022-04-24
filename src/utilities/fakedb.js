const cartToLocalStorage= (id) => {
  let shoppingCart;
// Get Shopping cart
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart) {
  shoppingCart = JSON.parse(storedCart)
} else {
  shoppingCart = {}
}

  // Add Quantity
   const quantity = shoppingCart[id]
   if(quantity) {
     const newQuantity = quantity + 1;
     shoppingCart[id] = newQuantity;
   } else {
    shoppingCart[id] = 1;
   }
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
// Remove from cart
const RemoveFromLocalStorage= (id) => {
   const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
   delete shoppingCart[id];
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
  let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

export {cartToLocalStorage, RemoveFromLocalStorage, getStoredCart}