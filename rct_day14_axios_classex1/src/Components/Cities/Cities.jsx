import {useState,useEffect} from "react"
import AddCity from "./AddCity"
import {addCity,deleteCity, getCities} from "./api"


function Cities (){

    const [data,setData]=useState([])
    const [page,setPage]=useState(1)

    const fetchCitiesAndUpdate=(page)=>{

        getCities({page , limit:2,sort:"name",order:"asc"})
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
        .finally(()=>console.log("call completed"))
    }


    useEffect(()=>{
        fetchCitiesAndUpdate(page)
    },[page])

    const handleAddCity=(data)=>{
        //post req
        console.log("cities data",data)
        addCity(data).then(()=>{
            fetchCitiesAndUpdate(page)
            alert("city has been added successfully")
        })   
    }
    const handleDelete=(id)=>{
        deleteCity(id).then(()=>fetchCitiesAndUpdate(page))
    }
    return(
        <div>
            <h1>Cities</h1>
            <AddCity onAddCity={handleAddCity}/>
            {
                data.map((item)=>(
                    <div
                    key={item.id}
                    style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        width:"40%",
                        margin:"auto"
                    }}>
                    <div>
                        {item.name}
                    </div>
                    <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                    </div>
             ))
            }
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button  onClick={()=>setPage(page+1)}>Next</button>
        </div>
    )
}
export default Cities;
