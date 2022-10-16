import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const setCartItem =async (obj)=>{
   let res = await fetch('http://localhost:3000/cartItem',{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-type":"application/json"
      }
   });
}

function SingleProduct() {
  // const [cartData, setCartData] = useState([])
  const {id} = useParams();
  const [data,setData]= useState({})

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>(
      setData(data)
    ))
  },[id])

 const handleAddToCart=()=>{
    setCartItem(data)
 }

  return (
    <div>
      <img src={data.image} alt="" />
      <h3>{data.title}</h3>
      <h4>Price : ${data.price}</h4>
      {/* <p>{data.rating.rate}</p> */}
      <button onClick={handleAddToCart}>Add to cart</button>
      <p>{data.description}</p>
    </div>
  );
}

export default SingleProduct