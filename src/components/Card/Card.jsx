import React, { useState,useEffect } from 'react';
import "./Card.css";

const Card = ({ item,index }) => {
  const [change, setChange] = useState(true);
  const [cart, setCart] = useState([]);

  const addCard= () => {
    const{id,title,price}=item;
    console.log(item);       
       let newCart = {
        id,
        title,
        price
      }
      console.log(newCart);
      console.log([...cart, newCart])

      setCart([...cart, newCart]);
      console.log(cart);
  }
useEffect(()=>{
  
},[cart])
  const Removecard=()=>{
    return(
      setChange(true)
    )
  }
  return (
    <div className='container'>
      
          <div className='d-card' key={index}>
            <div className='card-head'>
              <img src={item.image} alt='Image'></img>
            </div>
            <div className='card-content'>
              <p>{item.title}</p>
              <p style={{ fontWeight: "700" }}> Price : ₹ {Math.round(item.price)}</p>
              {/* {change ? ( */}
                <button onClick={addCard} key={index}>ADD</button>
                {/* ):(
                <button onClick={Removecard} key={index}>Remove</button>
                )}   */}
            </div>

            
          </div>

        
                           
              

    </div>
  );
};

export default Card;