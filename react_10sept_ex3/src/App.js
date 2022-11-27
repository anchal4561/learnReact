import logo from './logo.svg';
import './App.css';
import {useRef} from "react"
function App() {

  let ref=useRef(null);
  const handleAdd=()=>{
    ref.current.focus();
    console.log(ref.current.value)
  } 
  return (
    <div className="App">
      <input type="text" placeholder='add something' ref={ref}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
