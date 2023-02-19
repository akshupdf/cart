import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import Sidenav from "./sidenav";
import CartContext from "../context/cart/CartContext";



function Womensstuff(product) {

    const { addToCart } = useContext(CartContext);


    const [data, setData] = useState("")

    useEffect(() => {
        setData(data)
    }, [data])

    const getData = () => {

        axios.get("https://fakestoreapi.com/products/category/women's%20clothing").then((res) => {
            setData(res.data)
        })

    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="flex w-[100%]">
            <div className="w-[20%]"><Sidenav /></div>

            <section className="flex overflow-scroll">

            {
                data && data.map((data) => {
                    return (
                        <div className="mt-10 w-[80%]  flex" key={data.id}>



                            <div className="w-[40vh]  p-2 m-4 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">

                                <img className="rounded-t-lg w-[40vh] h-[50vh]" src={data.image} alt="" />

                                <div className="px-5 pb-5 ">
                                    <div className="h-[10vh]">
                                   
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{data.title}</h5>
                                        </div>

                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-black">{data.price}$</span>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(data)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                })
            }
            </section>



        </div>
    )
}

export default Womensstuff;