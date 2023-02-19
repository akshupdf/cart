
import Sidenav from "./sidenav";

import banner from "../images/mens.jpg"

function Product () {


    
    
    return(

        <div className="flex w-[100%]">
            <div className="w-[30%]"><Sidenav /></div>
            <div className="w-[60%] mt-4"><img src={banner} alt=""></img></div>

        

        </div>
    )
}

export default Product;