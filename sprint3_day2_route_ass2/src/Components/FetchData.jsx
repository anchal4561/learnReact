import React from "react"
import {Link} from "react-router-dom"

const getData=(category)=>{
    return fetch(`https://fakestoreapi.com/products/${category}`).then((res)=>
        res.json())
}


function FetchData({category}){
const[data,setData]=React.useState([])

const handleData=async (category)=>{
    try{
        let result=await getData(category)
        setData(result);
    
    }
    catch(err){
        console.log(err)
    }
}

React.useEffect(()=>{
    handleData(category)
},[])

console.log(data);
return (
    <div>
        {
            data.map((item)=>(
                <Link to={`/products/${item.id}`} key ={item.id}>
                    <div>
                        <img src={item.image} alt=""/>
                        <h3>{item.title}</h3>
                        <h4>{item.price}</h4>
                        <p>{item.rating.rate}</p>
                    </div>
                </Link>
            ))
        }
    </div>
)
}
export default FetchData;