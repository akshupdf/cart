import { useContext } from "react";
import CartContext from "../context/cart/CartContext";


const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
 
  return (
    <li className='w-[60vh] h-[12vh] flex border-2 border-black'>
      <img src={item.image} alt='' className="w-[10vh] h-[9vh] p-2"/>
      <div className="p-4">
        {item.title} {item.price}$
      </div>
      <button className='m-4 border-2 border-black rounded-lg w-20 h-8' onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;