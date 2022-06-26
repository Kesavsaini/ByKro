import React from "react";
import Home from "./Pages/HomePage/Home";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import './App.css'
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login"
import Cart from "./Pages/Cart/Cart";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import { useSelector } from "react-redux";
const App=()=>{
  const user=useSelector(state=>state.user.userInfo)
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home/> :<Navigate to="/login"/>} />
        <Route path='/products/:category' element={<ProductList/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={!user ? <Login/>: <Navigate to="/"/>}/>
        <Route path='/signup' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;