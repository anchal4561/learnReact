
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, decrement, increment } from './redux/actions';
import { useState } from 'react';

function App() {
  const [value,setValue] =useState("")
   //useselector read only cant update directly so
  const {count,todos}=useSelector((store)=>store)
  
  //for update ,dispacth action
  const dispatch=useDispatch();
  return (
    <div className="App">
      <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())} >DEC</button>
      <button onClick={()=>dispatch(increment())} >INC</button>
      </div>
      <div>
        {todos.map((todo,index) => (
          <div key={index} >{todo}</div>
        ))}

        <div>
        <input onChange={({target})=>setValue(target.value)}/>
      <button onClick={()=>{
        dispatch(addTodo(value));
        }} >ADD</button>
        </div>
      
      {/* <button onClick={()=>{
        dispatch(increment(value));
       }}
        >INC by Value</button> */}
      </div>
      </div>

  );
}

export default App;
