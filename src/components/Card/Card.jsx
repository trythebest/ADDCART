import React, { useState, useEffect } from 'react';
import "./Card.css";

const Card = ({item,addCard}) => {
  
 
  return (
    <div className='container '>
          <div className='d-card'>
            <div className='card-head'>
              <img src={item.image} alt='Image' className='h-48'></img>
            </div>
            <div className='card-content'>
              <p>{item.title}</p>
              <p style={{ fontWeight: "700" }}> Price : ₹ {Math.round(item.price)}</p>
              <button onClick={()=>addCard(item)}>ADD</button>
            </div>
          </div>
    </div>


  );
};

export default Card;