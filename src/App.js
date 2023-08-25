import Header from "./components/Header";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";


function App() {
  const [cart,setCart]=useState([])
  return (
    <BrowserRouter>
      <Header />
      <Routes className="App">
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
