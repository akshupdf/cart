
import React, { Suspense , useState} from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
import ModelViewerV2 from "./modelLoader";
import { Link } from "react-router-dom";
// import ModelViewer from "../components/bottles";



function ShowCase3d () {


    const [showDetails, setShowDetails] = useState(false);

//   const handleToggleDetails = () => {
//     setShowDetails(!showDetails);
//   };


    return (
        <div>
         
        <div className="flex">
  
    <div className='w-[80vh] h-[80vh]  shadow-2xl pt-10 rounded-xl italic bg-[#6b7280] mt-10'>
    <Canvas camera={{position : [5,0,10] ,fov: 0.2}}>
  
    <ambientLight intensity={2} />


<directionalLight intensity={2} position={[2.5, 8, 5]} />


      <ModelViewerV2 />
    
<OrbitControls enableZoom={true}  />


</Canvas>
    </div>

    <div className="w-[80vh] h-[80vh]  shadow-2xl p-10 rounded-xl italic  mt-10 ml-20 text-left" >

    <h1 className="text-3xl">Men's Ortho-aw16 E Slipper</h1>
    <p className="bold text-xl">Description</p>
    <ul>
        <li>Sole: Leather</li>
        <li>Closure: Slip On</li>
<li>Fit Type: Regular</li>
<li>Shoe Width: Medium</li>
<li>Breathable leather lining</li>
    </ul>

    <p className="bold text-xl mt-10">Offers :-</p>
    <div className="flex">
        <div className="border-black w-40 h-40 border p-2 m-2 "><h1 className="bold text-xl">Cashback</h1> <p>
Get 5% back with ICICI Bank credit card for Prime members. </p></div>
        <div className="border-black w-40 h-40 border p-2 m-2"><h1 className="bold text-xl">Free Home Delivery</h1> <p>
        The product is eligible for Free delivery. </p></div>
        <div className="border-black w-40 h-40 border p-2 m-2"><h1 className="bold text-xl">Bank Offer</h1> <p>
        10% Instant Discount up to INR 500 on AU Bank Card . </p></div>
        <div className="border-black w-40 h-40 border p-2 m-2"><h1 className="bold text-xl">Partner Offers</h1>
<p>Get GST invoice and save up to 28% .</p> </div>
    </div>

    </div>

    
    </div> </div>)
}

export default ShowCase3d;