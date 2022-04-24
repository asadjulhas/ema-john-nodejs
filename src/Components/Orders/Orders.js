import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import UseProducts from '../../Hooks/UseProducts';
import clearCart from '../../utilities/ClearCart';
import { RemoveFromLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import Item from '../Item/Item'
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const [products, setProduct] = UseProducts();
  const getOrders = JSON.parse(localStorage.getItem('shopping-cart'));

//Product select count
  const [cart, setCart, cartAlert] = useCart();

  //remove from cart
  const removeItem = (id) => {
    const newCart = cart.filter(item => item._id !== id);
    setCart(newCart);
    RemoveFromLocalStorage(id)
  }

  const toNagivate = useNavigate();
  return (
    <div className='order_page'>
      <div className="itemproduct">
      {
        cart.length > 0 ? cart.map((item, index) => <Item removeItem={removeItem} key={item._id} item={item}/>) : <h1>No item found</h1>
      }
      </div>
      <div className="cart_area">
       <Cart clearCart={()=>clearCart(setCart)} cart={cart} cartAlert={cartAlert}>
       <button onClick={()=> toNagivate('/shipment')} className='review_order'>Procedd checkout <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon></button>
       </Cart>
      </div>
    </div>
  );
};

export default Orders;