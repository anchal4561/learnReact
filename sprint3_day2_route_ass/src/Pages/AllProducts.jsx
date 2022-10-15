import React, { useState } from "react"
import { useEffect } from "react";
import {Link,useSearchParams} from "react-router-dom"

const getCurrentFromUrl=(value)=>{
    value=Number(value);
    if(typeof value !=="number"|| value<=0){
        value=1;
    }
    if(!value){
        value=1;
    }
    return value
}


function AllProducts(){

    const [data,setData]=React.useState([])
    const [searchParams,setSearchParams]=useSearchParams();
    const initialPage=getCurrentFromUrl(searchParams.get("page"));
    const [page,setPage]=useState(initialPage);
    const [text,setText]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:3000/products?_page=${page}&_limit=2&q=${text}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setData(data)
        })
    },[page,text])

    useEffect(()=>{
        if(!text){
            setSearchParams({page})
        }
        else{
            setSearchParams({page,text})
        }
    },[page,text])

    return (
        <div style={{width:"100%",display:"grid",marginTop:"50px", textAlign:"center", justifyContent:"center"}}>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
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
            <button disabled={page===1} onClick={() => setPage(page - 1)}>Prev</button>
            <button>{page}</button>
            <button onClick={() => setPage(page+1)}>Next</button>
        </div>
    )

}

export default AllProducts;