import { useState } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import Header from './components/Header/Header';
import ProductCard from './components/Card/ProductCard';

function App() {
  
    const [cart, setCart] = useState([]);


 
  return (
    <div className='app-cnt'>
      <Header  cart={cart} setCart={setCart}/>
      <ProductCard  cart={cart}  setCart={setCart}/>
    </div>

  )
}

export default App
