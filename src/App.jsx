import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Card from "./components/Card/Card";
import Header from './components/Header/Header';

function App() {
 const [product,setProduct]=useState([]);

 useEffect(()=>{
  fetchData()
 },[]) 
 
 const fetchData = async () => {
    try{
      const res = await fetch("https://fakestoreapi.com/products"); // fetching the data from api
    const jsonData = await res.json();  // convert the readable stream to json format.
    setProduct(jsonData);                        
    }
    catch (error){
       console.log(error);
    }
  }

  


  return (
    <div className='app-cnt'>
      <Header/>
      <div className='grid'>
      {product.map((item,index)=>{
        return(
          <Card key={index} item={item} index={index}/>

        )
      })}
      </div>
      
    </div>
    
  )
}

export default App
