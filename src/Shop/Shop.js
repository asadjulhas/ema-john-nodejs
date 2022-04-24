
import React, { useEffect, useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Product from '../Components/Product/Product';
import AddToCartFun from '../Hooks/AddToCartFun';
import useCart from '../Hooks/useCart';
import clearCart from '../utilities/ClearCart';
import ReviewButton from '../utilities/ReviewButton';
import './Shop.css'

const Shop = () => {
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageItems, setPageitems] = useState(10);
  const [products, setProduct] = useState([]);
  
  // Load product
  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${pageNumber}&size=${pageItems}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[pageNumber, pageItems])


  //Product select count
  const [cart, setCart, cartAlert] = useCart();

  // Event Handelar
  const addToCart = (product) => {
    AddToCartFun(product, cart, setCart);
  }

  // Search Handelar
  const [srProduct, setSrProduct] = useState([]);
  const [searchText, setSearchText] = useState('');
const searchProduct = (event) => {
  setSearchText(event.target.value.toLowerCase());
}

// Get product ammount
useEffect(() => {
  fetch('http://localhost:5000/productcount')
  .then(res => res.json())
  .then(count => {
    const pages = Math.ceil(count.count / parseInt(pageItems));
    setPageCount(pages)
  })
},[pageItems])


// Search product
/* useEffect(() => {
   fetch(`http://localhost:5000/product?page=${pageNumber}&size=${pageItems}`)
   .then(res => res.json())
   .then(data => {
    const findSearch = data.filter(p => p.name.toLowerCase().includes(searchText));
    setSrProduct(findSearch)
   })
},[searchText]) */

  return (
    <div className='shop'>
      <div className="products_area">
      <input onChange={searchProduct} style={{marginTop: '20px', padding: '5px 8px'}} type="text" placeholder='Search product' />
      <div className="products">
        {products.map(product => <Product key={product._id} setCount={addToCart} product={product}></Product>)}
      </div>
      
      <div className="pagination">
          {
            [...Array(pageCount).keys()].map(number => <button key={number} className={
              pageNumber === number ? 'selected' : ''
            } onClick={()=>setPageNumber(number)}>{number+1}</button>)
          }
          <select onClick={e => setPageitems(e.target.value)}>
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      <div className="cart_area">
       <Cart clearCart={()=>clearCart(setCart)} cart={cart} cartAlert={cartAlert}>
      <ReviewButton></ReviewButton>
       </Cart>
      </div>
    </div>
  );
};

export default Shop; 