import logo from './logo.svg';
import './App.css';
import {useEffect, useRef,useState} from "react"
const fixTimeString=(time)=>{
  return time<10? `0${time}`:time;
}

const formatTimerToString=(time)=>{
  const seconds=time%60;
  const minutes=Math.floor(time/60)%60;
  const outputString=`00:${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
  return outputString;
}
///Timer stop start reset using useRef
function App() {


  const [timer,setTimer]=useState(0)
  const ref=useRef(null)//I can access it anywhere 
  //ref.current:{current:null}

  
  if(timer===0){
    clearInterval(ref.current);
    ref.current=null
  }

  useEffect(()=>{
    const cleanup=()=>{
      stopTimer()
    }
    return cleanup;
  },[])


  const startTimer=()=>{
    if(ref.current!=null) return;
    ref.current=setInterval(()=>{
      setTimer((prevtimer)=>prevtimer+1)
    },1000)
  }
  const stopTimer=()=>{
    clearInterval(ref.current);
    ref.current=null;

  }

  
  const resetTimer=()=>{
    //stop timer
    stopTimer();
    //set value baack to zero
    setTimer(0)
  }
  console.log(ref)

  return (
    <div className="App">
     <h1>{formatTimerToString(timer)}</h1>
     <button onClick={startTimer}>Start</button>
     <button onClick={stopTimer}>Stop</button>
    
     <button onClick={resetTimer}>Reset</button></div>
  );
}

export default App;
