
import './App.css';
import {useEffect,useState} from "react"
import axios from "axios"
function App() {
  const [data,setData]=useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/products")
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  }, [])


  return (
    <div className="App" style={{textAlign:"center"}}>

{data.map((item)=><div  style={{width:"40%",textAlign:"center",marginLeft:"25%",border:"2px solid grey" ,marginTop:"20px"}}key={item.id}>
  <h2>Name: {item.name}</h2>
  <p>Description:  {item.description}</p>
  <p>Price:  {item.price}</p>
  </div>
  
)}
    </div>
  );
}

export default App;
