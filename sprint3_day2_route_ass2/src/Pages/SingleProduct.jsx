import React from "react"
import { useParams } from "react-router-dom"

function SingleProduct(){

    const {id}=useParams();
    const [data,setData]=React.useState({})

    React.useEffect(()=>{
       return fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[id])

    return (
        <div>
            <img src={data.image} alt=""/>
            <h3>{data.title}</h3>
            <h4>Price: ${data.price}</h4>
            <button>Add to Cart</button>
            <p>{data.description}</p>
        </div>
    )


}
export default SingleProduct