
import {useState,useEffect} from "react"

function Timer() {
  const [value,setValue]=useState(5)

  useEffect(()=>{
    // const intervalId=setInterval(()=>{
    // //console.log(value)

    //setInterval return id
    const intervalId=setInterval(()=>{
      console.log(`callback inside set inntrval ${Date.now()}`)
        setValue((prev_val)=>prev_val+1)
      //  if(prev_val===1){
      //   clearInterval(intervalId)
      //   return 0 ;
      // }
      // return prev_val-1;
    },1000)
    // //cleanup function
    const cleanup=()=>{
      console.log("cleaning up")
      clearInterval(intervalId)
    }
    return cleanup;
    // return ()=>{
    //     //whenever component is unmounted these things happen
    //     console.log("componnet is unmounted")
    // }
  },[])
  return (
    <div className="main">
     <header>Countdown Timer:{value}</header>
    </div>
  );
}

export default Timer;
