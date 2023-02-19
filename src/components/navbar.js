import { Link } from "react-router-dom";

import {AiOutlineShoppingCart} from 'react-icons/ai'
import Popup from 'reactjs-popup';
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import { Cart } from "./cart";
import { FiSearch } from 'react-icons/fi'


function Nav () {

    const [search, setSearch] = useState('')
    
    const url = `https://www.google.com/search?q=${search}`
            
    const Searchdata = () => {
     
      window.open(url)
      
      }
    const { cartItems } = useContext(CartContext);

    return(
        <div className="w-[100%] flex">
            <div className="w-[60%]">
            <ul className="flex cursor-pointer">
                <li className="p-2"><Link to="/">Home</Link></li>
                <li className="p-2"><Link to="/product">Products</Link></li>
                
                <li className="p-2"><Link to="/login">Login</Link></li>
            </ul>

            </div>
            <div className="flex mt-2 ml-40">
            <input  value={search}
          onChange={event => setSearch(event.target.value)} type="search" className="bg-transparent  relative flex-auto min-w-0 block w-full px-3  text-base font-normal text-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
            <button className=' text-xl border-zinc-200 border-2 w-10 p-2 rounded-2xl' onClick={Searchdata}><FiSearch /></button>
     
            </div>
            <div className="w-[20vh] h-auto mx-auto mt-2">
               
            <Popup trigger={<button className="border-2 border-black rounded-lg absolute p-2 text-2xl text-white bg-black " ><AiOutlineShoppingCart /></button>
} position="left top">
    <div><Cart /></div>
  </Popup>
            
                   {cartItems.length > 0 && (
            <div className="relative border-2 border-black w-12  ml-[3vh] rounded-full  mt-6 pl-3 bg-white"><span>{cartItems.length}</span>
            <div>{cartItems.title}</div>
            </div>
          )}
            
</div>
            
            
        </div>
    )
}

export default Nav;