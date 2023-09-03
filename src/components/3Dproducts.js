import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import Sidenav from "./sidenav";
import CartContext from "../context/cart/CartContext";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
import ModelViewerV2 from "./modelLoader";
// import ModelViewer from "./shirt";
import { Link } from "react-router-dom";

function ThreeDProducts(product) {
  const { addToCart } = useContext(CartContext);

  const [data, setData] = useState("");

  useEffect(() => {
    setData(data);
  }, [data]);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const gltf = useLoader(GLTFLoader, "./mug.glb");
  const gltf1 = useLoader(GLTFLoader, "./airj.glb");
  const gltf2 = useLoader(GLTFLoader, "./jacket2.glb");
  const modelRef = useRef();

  return (
    <div className="flex w-[100%]">
      {/* <div className="w-[30%]"><Sidenav /></div> */}

      <div className="mt-10 w-[100%]  overflow-auto">
        <div className=" flex  ">
          <div className="w-full max-w-sm p-2 m-4 border border-gray-200 rounded-lg shadow dark:text-black dark:border-gray-700">
            <div className="w-auto h-[50vh]">
              <div className="w-[46vh] h-[40vh]  pt-10 rounded-xl italic bg-gray-600 ">
                <Canvas camera={{ position: [20, 0, 15], fov: 0.5 }}>
                  <ambientLight intensity={2} />

                  <directionalLight intensity={2} position={[2.5, 8, 5]} />

                  <primitive
                    ref={modelRef}
                    object={gltf2.scene}
                    scale={0.1}
                    rotation={[0, Math.PI / 2, 0]}
                  />

                  <OrbitControls enableZoom={true} />
                </Canvas>
              </div>
            </div>
            <div className="px-5 pb-5 ">
              <div className="h-[10vh]">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  White Jacket
                </h5>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-black">
                  30$
                </span>

                <button
                  href=""
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart({category: "men's clothing",
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3KA-0CkxqrpniJpJqP1OCC22hh_9Ul9ftA&usqp=CAU",
    price: 30})}
                >
                  Add to cart
                </button>

                {/* <div className="flex" >

                                                    <div className="text-white text-2xl w-[10vh] mx-auto "><button className="m-2" >+</button><button className="m-2" >-</button></div>
                                                    <div><button className="text-white text-xl mt-4"><AiFillDelete /></button></div>
                                                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:text-black dark:border-gray-700">
            <div className="w-auto h-[50vh]">
              <div className="w-[46vh] h-[40vh]  shadow-2xl pt-10 rounded-xl italic ">
                <Canvas camera={{ position: [10, 0, 5], fov: 20 }}>
                  <ambientLight intensity={2} />

                  <directionalLight intensity={2} position={[2.5, 8, 5]} />

                  <primitive
                    ref={modelRef}
                    object={gltf1.scene}
                    scale={0.1}
                    rotation={[0, Math.PI / 2, 0]}
                  />

                  <OrbitControls enableZoom={true} />
                </Canvas>
              </div>
            </div>
            <div className="px-5 pb-5 ">
              <div className="h-[10vh]">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  Nike Air Force 1 High
                </h5>
              </div>

              <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-red-700 line-through">
                  100$
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-black mr-auto">
                  93$
                </span>

                <button
                  href=""
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart({image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNx4CLYMpXZ9qP9s0BovsntUEhw-snoXT-RQ&usqp=CAU",
    price: 93})}
                >
                  Add to cart
                </button>

                {/* <div className="flex" >

                                                    <div className="text-white text-2xl w-[10vh] mx-auto "><button className="m-2" >+</button><button className="m-2" >-</button></div>
                                                    <div><button className="text-white text-xl mt-4"><AiFillDelete /></button></div>
                                                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:text-black dark:border-gray-700">
            <div className="w-auto h-[50vh]">
              <div className="w-[46vh] h-[40vh]  shadow-2xl pt-10 rounded-xl italic">
                <Canvas camera={{ position: [20, 0, 5], fov: 0.1 }}>
                  <ambientLight intensity={2} />

                  <directionalLight intensity={2} position={[2.5, 8, 5]} />

                  <primitive
                    ref={modelRef}
                    object={gltf.scene}
                    scale={0.1}
                    rotation={[0, Math.PI / 2, 0]}
                  />

                  <OrbitControls enableZoom={true} />
                </Canvas>
              </div>
            </div>
            <div className="px-5 pb-5 ">
              <div className="h-[10vh]">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  Classic Mug
                </h5>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-black">
                  10$
                </span>

                <button
                  href=""
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart({image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXwaDQX41-uahB_3rn6paJzTpRN_Qm0hNEg&usqp=CAU",
    price: 10

                  })}
                >
                  Add to cart
                </button>

                {/* <div className="flex" >

                                                    <div className="text-white text-2xl w-[10vh] mx-auto "><button className="m-2" >+</button><button className="m-2" >-</button></div>
                                                    <div><button className="text-white text-xl mt-4"><AiFillDelete /></button></div>
                                                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:text-black dark:border-gray-700">
            <div className="w-auto h-[50vh]">
              <div className="w-[46vh] h-[40vh]  shadow-2xl pt-10 rounded-xl italic">
                <Canvas camera={{ position: [10, 5, 10], fov: 0.1 }}>
                  <ambientLight intensity={2} />

                  <directionalLight intensity={2} position={[2.5, 8, 5]} />

                  <ModelViewerV2 />

                  <OrbitControls enableZoom={true} />
                </Canvas>
              </div>
            </div>
            <div className="px-5 pb-5 ">
              <div className="h-[10vh]">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  Nice Flip-Flop
                </h5>
              </div>
              <li className="list-none"><Link to="/threed">View Product</Link></li>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-black">
                  15$
                </span>

                <button
                  href=""
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart({image: "https://imagescdn.planetfashion.in/img/app/product/5/590674-5414291.jpg?auto=format",
    price: 15})}
                >
                  Add to cart
                </button>

                {/* <div className="flex" >

                                                    <div className="text-white text-2xl w-[10vh] mx-auto "><button className="m-2" >+</button><button className="m-2" >-</button></div>
                                                    <div><button className="text-white text-xl mt-4"><AiFillDelete /></button></div>
                                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeDProducts;
