import React from "react"
import {useParams} from "react-router-dom"
import {useEffect,useState} from "react";
function SingleProduct(){

    const {id}=useParams();
    const [data,setData]=useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
          })
          .catch((error)=>{
             console.log(error)
             setData([])
          });
      }, []);
      return (
        <div>
            <h1>Product - {data.name}</h1>
            <h1>Price= {data.price}</h1>
        </div>
      )

}
export default SingleProduct;