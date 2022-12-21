import React from 'react'
import useStopWatch from '../hooks/useStopwatch'

const Stopwatch = () => {
    const {time,start,pause,reset}=useStopWatch(0)
  return (
    <div>
    <h1>Stopwatch:{time}</h1>
    <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
    </div>
  )
}

export default Stopwatch