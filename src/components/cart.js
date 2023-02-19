
import {  useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./Cartitem";



export function Cart () {

    const {cartItems} = useContext(CartContext);

    return (
        <>
      
        <div className='w-[60vh] h-[60vh] border-2 border-black bg-white text-black overflow-auto'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
            ></i>
          </div>
          <div className=''>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className=''>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
                {
                    cartItems.reduce((amount, item) => item.price + amount, 0)
                }
              
                
                
            </div>
          </div>
        </div>
     
    </>
    )

   
}

