import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  // console.log(props.products.name)
  const {_id, name, price, seller, ratings, img} = props.product;
  const detailsNagivate = useNavigate()
  const productDetail = () => {
    detailsNagivate(`/product/${_id}`)
  }
  return (
    <div className='product'>
       <div className="product_img">
         <img src={img} alt={name} />
       </div>
       <div className="product_details">
         <h4>{name}</h4>
         <h5>Price: ${price}</h5>
         <p>Manufacturer : {seller} <br />
         <span className="rating">Rating: {ratings} start</span>
         </p>
         <button onClick={productDetail}>More details</button>
       </div>
       <button onClick={()=>props.setCount(props.product)}>Add to Cart &nbsp;<FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></button>
    </div>
  );
};

export default Product;