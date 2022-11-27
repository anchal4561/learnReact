import { useState,useEffect } from "react";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";


const getData=(args={})=>{
  const {
  page=1
  }=args;
 return  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`).then(res=>res.json())
}


function Countries() { 

  const [loading,setLoading]=useState(false)
  const [todos,setTodos]=useState([]);
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState(0)
  useEffect(()=>{
      handleGetTodos();   
  },[page])

  const handleGetTodos=()=>{
      setLoading(true)
      return getData({page})
      .then(res=>{
          setLoading(false)
          console.log(res.data)
          console.log(res.totalPages)
          setTodos(res.data)
          setTotal(res.totalPages)
      })
      .catch(err=>{
          setLoading(false)
      })
  }

  

  if(loading){
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {todos.map((item)=>(
          <CountriesCard
          key={item.id}
          country={item.country}
          population={item.population}
          />
        ))
        }
      </div>
      <div>
        {/* Pagination */}
        <Pagination total={total} current={page}
             onChange={(value)=>setPage(value)}/>
          </div>
    </div>
  );
}

export default Countries;
