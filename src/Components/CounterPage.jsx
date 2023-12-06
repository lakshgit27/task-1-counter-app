import React from 'react'
import { useEffect,useState } from 'react'

const CounterPage = () => {
    const [counterValue,setCounterValue] = useState(0);

    useEffect(()=>{
        const counterUpdater = setInterval(() => {
        setCounterValue((lastCount)=>lastCount+2)
            }, 2000);
        setTimeout(() => {
            clearInterval(counterUpdater);
            
        }, 60000);
        return ()=>clearInterval(counterUpdater);
        


    },[])
  return (
    <div>
        <h1>Counter:{counterValue} seconds</h1>
    </div>
  )
}

export default CounterPage