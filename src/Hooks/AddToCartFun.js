import { cartToLocalStorage } from "../utilities/fakedb";
import useCart from "./useCart";
import UseProducts from "./UseProducts";


const AddToCartFun = (product, cart, setCart) => {
  let newCart = []
   const productExists = cart.find(exProduct => exProduct.id === product._id)
   if(productExists) {
     const rest = cart.filter(p => p.id !== productExists.id);
     productExists.quantity = productExists.quantity + 1;
     newCart = [...rest, productExists]
   } else {
     product.quantity = 1;
     newCart = [...cart, product]
   }
   setCart(newCart);
   cartToLocalStorage(product._id)
 }

 export default AddToCartFun;