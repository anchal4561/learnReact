import React, { useEffect } from "react"
import {Link,useSearchParams, useNavigate} from "react-router-dom"


const getData=(url)=>{

    //reres.in
    return fetch(url).then((res)=>res.json())

}

const getCurrentPageFromUrl=(value)=>
{
    value=Number(value);
    if(value<1)
{
    value=1;
}    
return value;
}
function Users(){
    const [data,setData]=React.useState({});
    const navigate=useNavigate();
    const [searchParams,setSearchParams] =useSearchParams();    
    const initialPage=getCurrentPageFromUrl(searchParams.get("page"))
    const [page ,setPage]=React.useState(initialPage)
    const [text,setText]=React.useState("")

    //get list of users
    //on component load i want to get list of users
    //render on ui
    useEffect(()=>{
        getData(`https://reqres.in/api/users?page=${page}`).then((res)=>{
            setData(res)
        })
    },[page])

    useEffect(()=>{
        //can we send multiple params
        
        //add in link as params
        setSearchParams({page,text})
    },[page,text])
    console.log(page)
    // const isAuth=true;
    
return (
<>

<h1>Users</h1>
{/* //using navigatehook button */}
<button onClick={()=>navigate("/")}>
    Go to Home Page using navigate hook
</button>
{/* //using link */}
<Link to ="/">
<button>Go to home page using link</button>
</Link>
<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
<div>
{
    data &&
     data?.data &&
      data?.data.map((user)=>(
      <div key={user.id}
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <img src={user.avatar} alt="prof"/>
        <Link to ={`/users/${user.id}`}>
            More Details
        </Link>
        </div>
        ))
    
}
<button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
<button>{page}</button>
<button disabled={page>=2} onClick={()=>setPage(page+1)}>NEXT</button>
</div>
</>)
}
export default Users;