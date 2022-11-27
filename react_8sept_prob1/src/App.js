
import './App.css';
import {useEffect,useState} from "react"

function App() {
  const [count,setCount]=useState(0);
  console.log("before")
  useEffect(()=>{
    document.title=`Clicked ${count} times`
  })

  console.log("after")

  return (
    <div className="App">
     <h1>count: {count}</h1>
     <button onClick={()=>setCount(count+1)}>INC</button>
    </div>
  );
}

export default App;
