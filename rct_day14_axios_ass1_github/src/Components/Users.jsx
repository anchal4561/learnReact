import React, { useEffect, useState } from "react"
import {getData} from "./api"
import UserCard from "./UserCard"

import Pagination from "./Pagination"

function Users (){
    const [query,setQuery]=useState("")
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [totalItem,setTotalItem]=useState(0)

    const handleSearch=()=>{
        setPage(1)
        getData(query,page).then(
            (res)=>{
                return(
                    setData(res),
                    setTotalItem(res.data.total_count)
                )
            }
        )
    }

    useEffect(()=>{
        handleSearch()
    },[query])

    const handlePageChange=(value)=>{
        setPage(page+value)
        getData(query,page).then(
            (res)=>{
                return (setData(res),setTotalItem(res.data.total_count))
            }
        )

    }
    
    return(
        <div>
            <div>
                <input type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>

            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                marginTop:"40px",
                textAlign:"center"
            }}>
                {
                    data.data?.items.map((elem)=>(
                        <UserCard key={elem.id} user={elem}/>
                        
                    ))
                }

                <h1>Total User:{totalItem}</h1>
                <div>
                    <Pagination pageChange={handlePageChange}
                    currentPage={page}
                    totalItem={totalItem}/>
                </div>


            </div>
        </div>
        
    )

}
export default Users;