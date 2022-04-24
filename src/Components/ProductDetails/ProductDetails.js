import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import Cart from '../Cart/Cart'
import './ProductDetails.css'
import clearCart from '../../utilities/ClearCart';
import ReviewButton from '../../utilities/ReviewButton';
import AddToCartFun from '../../Hooks/AddToCartFun';

const ProductDetails = () => {
  const {id} = useParams();

  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
    .then(res => res.json())
    .then(products => setProduct(products))
  },[]);

 //Product select count
 const [cart, setCart, cartAlert] = useCart();

 // Event Handelar
 const addToCart = (product) => {
  AddToCartFun(product, cart, setCart);
}

  return (
    <div className="single_product_page">
      <div className='single_product'>
    <div className="product_img">
      <img src={products?.img} alt={products?.name} />
    </div>
    <div className="product_details">
      <h4>{products?.name}</h4>
      <h5>Price: ${products?.price}</h5>
      <p>Manufacturer : {products?.seller}, &nbsp; <small>Category: {products?.category}</small> <br />
      <span className="rating">Rating: {products?.ratings} start</span>, &nbsp;<small>Id: {products?._id}</small><br />
      <small>Shipping: ${products?.shipping}</small>, &nbsp;<small>Stock: {products?.stock}</small>
      </p>
    </div>
    <button className='de_add_to_cart' onClick={()=>addToCart(products)}>Add to Cart &nbsp;<FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></button>
 </div>
 <div className="cart_area">
 <Cart clearCart={()=>clearCart(setCart)} cart={cart} cartAlert={cartAlert}>
   <ReviewButton></ReviewButton>
 </Cart>
</div>
    </div>
  );
};

export default ProductDetails;