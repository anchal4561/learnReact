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

function getUrl(url,sort,orderBy,filterBy){
    if(sort && orderBy && filterBy){
        url=`${url}&_sort=${sort}&_order=${orderBy}&_category=${filterBy}`
    }
    else if(sort && orderBy){
        url=`${url}&_sort=${sort}&_order=${orderBy}`
    }
    else if(filterBy){
        url=`${url}&_category=${filterBy}`

    }
    return url
}

function AllProducts(){

    const [data,setData]=React.useState([])
    const [searchParams,setSearchParams]=useSearchParams();
    const initialPage=getCurrentFromUrl(searchParams.get("page"));
    const [page,setPage]=useState(initialPage);
    const [text,setText]=useState('')
   
   ///sorting
   const sort="price"
   const [orderBy,setOrderBy]=React.useState("")
    const [filterBy,setFilterBy]=React.useState("")
   //filter

   
    useEffect(()=>{
        
        let apiUrl=getUrl(
            `http://localhost:3000/products?_page=${page}&_limit=2&q=${text}`,
            sort,
            orderBy,
            filterBy
        )
        fetch(apiUrl)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setData(data)
        })
    },[page,text,orderBy,filterBy])

    useEffect(()=>{
        let paramsObj={page}
        if(!orderBy){
            paramsObj.orderBy=orderBy
        }
        if(filterBy){
            paramsObj.filterBy=filterBy
        }
        setSearchParams(paramsObj)
        if(!text){
            setSearchParams({page})
        }
        else{
            setSearchParams({page,text})
        }
    },[page,text,orderBy,filterBy])

    return (
        
        <div style={{width:"100%",display:"grid",marginTop:"50px", textAlign:"center", justifyContent:"center"}}>
            <button onClick={()=>setOrderBy("asc")}>order by price-asc</button>
            <button onClick={()=>setOrderBy("desc")}>order by price-desc</button>
            <button onClick={()=>setOrderBy("")}>order by price-reset</button>
            
             <button onClick={()=>setFilterBy("Shirt")}>Filter by Shirt</button>
             <button onClick={()=>setFilterBy("Watch")}>Filter by Watch</button>
             <button onClick={()=>setFilterBy("Pants")}>Filter by Pants</button>
             <button onClick={()=>setFilterBy("")}>Reset Filter</button>

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