
import './App.css';

import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from './components/home';
import Sidenav from './components/sidenav';
import Nav from './components/navbar';

import Mensstuff from './components/mensstuff';
import { Cart} from './components/cart';
import CartItem from './components/Cartitem';
import Womensstuff from './components/womenstuff';
import Product from './components/products';
import Login from './components/login';



function App( {product, cartitems}) {
  
  return (
    <div className="">
       
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/product' element={<Product />}></Route>
        <Route exact path='/cart' element={<Cart cartitems={cartitems}/>}></Route>
        <Route exact path='/login' element={<Login />}></Route>

        <Route exact path='/cartitem' element={<CartItem product={product}/> }></Route>
        <Route exact path='/sidenav' element={<Sidenav />}></Route>
        
        <Route exact path='/mens' element={<Mensstuff />}></Route>
        <Route exact path='/ladies' element={<Womensstuff />}></Route>
      </Routes>
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
