// CLear Cart
const clearCart = (setCart) => {
  localStorage.removeItem('shopping-cart')
  setCart([])
}

export default clearCart;