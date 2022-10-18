import React, { useState } from "react"

const getData=(text)=>{
    return fetch (`${process.env.REACT_APP_URL}${text}`)
    .then((res)=>{
        return res.json();
    })
}

function FetchData(){

    const [data,setData]=useState([])
    const [text,setText]=useState("")

    const handleFetch=async()=>{
        let result=await getData(text)
        setData(result.meals)
    }

    console.log(data)
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={handleFetch}>Search Food</button>

            {data.map((item)=>(
                <div key={item.idMeal}>
                    <img src={item.strMealThumb}  alt="img"/>
                    <h3>{item.strMeal}</h3>
                    <p>{item.strCategory}</p>
                </div>
            ))}
        
        
        </div>
    )
}
export default FetchData;