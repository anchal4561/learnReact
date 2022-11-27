
import {useState} from "react"
import Timer from "./Component/Timer"

function App() {
  const [showTimer,setShowTimer]=useState(true)


  return (
    <div className="App">
     <header>{showTimer && <Timer/>}
     <button onClick={()=>setShowTimer(!showTimer)}>
      {showTimer?"Hide Counter":"Show Counter"}
     </button>
     </header>
    </div>
  );
}

export default App;
