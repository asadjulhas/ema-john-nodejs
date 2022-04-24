import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';


const useCart = (products) => {
    //Product select count
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const storeCards = getStoredCart();
      const saveCart = []
      const keys = Object.keys(storeCards)
      fetch('http://localhost:5000/cartproduct', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(keys)
      })
      .then(res => res.json())
      .then(products => {
        for (const storeCard in storeCards) {
        const cartProducts = products.find(product => product._id === storeCard);
        if(cartProducts) {
          const quantity = storeCards[storeCard];
          cartProducts.quantity = quantity;
          saveCart.push(cartProducts)
        }
      }
      setCart(saveCart)
      })
    },[products])
    let cartAlert;

    if(cart.length === 0) {
      cartAlert = <p>Please add at least one items</p>
    } else if (cart.length === 1) {
      cartAlert = <p>Please add more ...</p>
    } else {
      cartAlert = <p>Thanks for adding items</p>
    }
    return [cart, setCart, cartAlert]
  };

export default useCart;