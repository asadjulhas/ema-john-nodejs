import React from 'react';
import './Cart.css'
import Delete_icon from '../../images/delete.png';

const Cart = (props) => {
const cart = props?.cart;
const clearCart = props?.clearCart;
  let quantity = 0;
  let totalPrice = 0;
  let totalShipping = 0;
  for(const product of cart){
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  const taxAmmount = parseFloat((totalPrice * 0.1).toFixed(2));
  const grandTotal = (totalPrice + totalShipping + taxAmmount).toFixed(2);
  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      {props.cartAlert}
      <div className="order_details">
      Selected Items: {quantity} <br />
      Total Price: ${totalPrice} <br />
      Total Shipping Charge: ${totalShipping} <br />
      Tax: ${taxAmmount}<br />
      <h4>Grand Total: ${grandTotal}</h4>
      
      {cart.length > 0 ? <button onClick={clearCart} className='clear_btn'>Clear Cart <img src={Delete_icon} alt="" /></button> : ''}
      {cart.length > 0 ? props.children: ''}
      </div>
    </div>
  );
};

export default Cart;