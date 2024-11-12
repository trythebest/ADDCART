import React, { useEffect, useState } from 'react';
import Card from './Card';

const ProductCard = ({cart ,setCart}) => {

  const [product, setProduct] = useState([]);


  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products"); // fetching the data from api
      const jsonData = await res.json();  // convert the readable stream to json format.
      setProduct(jsonData);  //it update the state 
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addCard = (item) => {
    let result= cart.find((e)=> e.id===item.id);

    if(result){
      alert("ITEM ALREADY ADDED");
    }
    else{
      setCart([...cart, item]);
      console.log(cart);
      console.log(item);    

    }
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {product.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            addCard={addCard}
          />

        )
      })}
    </div>
  );
};

export default ProductCard;