import React from "react"
import { useEffect } from "react";
import {Link} from "react-router-dom"
function AllProducts(){

    const [data,setData]=React.useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/products`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setData(data)
        })
    },[])

    return (
        <div style={{width:"100%",display:"grid",marginTop:"50px", textAlign:"center", justifyContent:"center"}}>
        <table border={"2px"}>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>More</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((product)=>(
                            <tr key ={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to ={`/products/${product.id}`}>More Details</Link>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default AllProducts;