import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const getCartItem = async ()=>{
    try{
        let res = await fetch('http://localhost:3000/cartItem');
        let data = res.json();
        return data
    }
    catch(err){
        console.log("err",err)

    }
  
}

const deleteItem=async(id)=>{
  let res = await fetch(`http://localhost:3000/cartItem/${id}`,{
    method: "Delete",
    headers: {
      "Content-type": "application/json",
    },
  });
  return res
}

function ShoppingCart() {

  const [cartItem,setCartItem] = useState([])

  useEffect(() => {
    getCartItem().then((res) => setCartItem(res));
  }, [cartItem]);

  const handleDelete = (id) => {
    deleteItem(id)
  };

  console.log(cartItem)
  return (
    <div >
      {cartItem.map((item)=>(
      <div key={item.id}>
        <img style={{ width: "300px" }} src={item.image} alt="" />
        <h3>Price : $ {item.price}</h3>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
      </div>
      ))}
    </div>
  );
}

export default ShoppingCart