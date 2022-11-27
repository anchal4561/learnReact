import { useState } from "react"

const FetchPost=()=>{
    const [data,setData]=useState([])
    const getPost=async ()=>{
        try{
            let res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
            let fetchedData=await res.json();
            setData(fetchedData)
        }
        catch(err){
            console.log(err);
        }
    }

    console.log(data);
    return (
        <div>
            <button onClick={getPost}>Get Posts</button>
            {data.map((posts)=>(
                <li key ={posts.id}>{posts.title}</li>
            ))}
        </div>
    )
}

export default FetchPost;