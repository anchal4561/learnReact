import React, { useEffect } from "react"
import {Link} from "react-router-dom"
const getData=(url)=>{

    //reres.in
    return fetch(url).then((res)=>res.json())

}
function Users(){
    //get list of users
    const [data,setData]=React.useState({});
    //on component load i want to get list of users
    //render on ui
    useEffect(()=>{
        getData(`https://reqres.in/api/users?page=2`).then((res)=>{
            setData(res)
        })
    },[])
return (
<>

<h1>Users</h1>
<ul>
{
    data &&
     data?.data &&
      data?.data.map((user)=>(
      <li key={user.id}>
        <Link to ={`/users/${user.id}`}>
            {user.first_name}
        </Link>
        </li>
        ))
}
</ul>
</>)
}
export default Users;