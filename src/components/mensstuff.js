import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import Sidenav from "./sidenav";
import CartContext from "../context/cart/CartContext";



function Mensstuff(product) {

    const { addToCart} = useContext(CartContext);

    const [data, setData] = useState("")

    useEffect(() => {
        setData(data)
    }, [data])

    
    const getData = () => {

        axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then((res) => {
            setData(res.data)
        })

    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="flex w-[100%]">
            <div className="w-[30%]"><Sidenav /></div>
            

            {
                data && data.map(data => {
                    return (
                        <div className="mt-10 w-[70%]  "  key={data.id} data={product} >


                            <div className=" flex  " >
                                <div className="w-full max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:text-black dark:border-gray-700">
                                    <div className="w-auto h-[50vh]" >
                                        <img className="p-8 rounded-t-lg " src={data.image} alt="/none" />
                                    </div>
                                    <div className="px-5 pb-5 "  >
                                        <div className="h-[10vh]">

                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{data.title}</h5>
                                            
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-black">{data.price}$</span>
                                            
                                                <button href="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=> addToCart(data)}>Add to cart</button>
                                            
                                                {/* <div className="flex" >

                                                    <div className="text-white text-2xl w-[10vh] mx-auto "><button className="m-2" >+</button><button className="m-2" >-</button></div>
                                                    <div><button className="text-white text-xl mt-4"><AiFillDelete /></button></div>
                                                </div> */}
                                            

                                            
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                })
            }



        </div>
    )
}

export default Mensstuff;