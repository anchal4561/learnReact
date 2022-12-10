import {useRouter} from "next/router"
import { useEffect, useState } from "react"

function UserInfo({data}){
  return <h3>Child Component {data}</h3>
}
export default function Laptop({user}){
  const {query}=useRouter()
  //const [user,setUser]=useState({})

    // useEffect({


    // },[])

    return (
      <div>
        <h1>User info page</h1>
        <UserInfo data={"hello"}/>
        <div>
          <div>Name:{user.name}</div>

         <div>Email:{user.email}</div> 
        
          <div>
          Username:{user.username}
          </div>
         
        </div>
        </div>
    )
  }

  //called before rendering this page (getServerSideProps)
  export const getServerSideProps=async(context)=>{
    const {id}=context.query;
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((x)=>  x.json())
      return{
        props:{
          user:res,
        }
      }
  }