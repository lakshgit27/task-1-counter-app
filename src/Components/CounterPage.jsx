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

// S-1- Installation of the react via vite bundler
// S-2- Installation of the tailwind css 
// S-3- Making an component (Counter Page)
// S-4- Importing 2 hooks - useEffect and useState
// S-5- Declaring an state with useEffect hook "counterValue" , setting the initial value of the count to 0
// S-6- Using the useEffec hook , registering the callback function and storing the output in the variable  "counterUpdater"
// S-7- Now, storing the last count in an variable {lastCount} and incrementing the value after every 2 seconds. All these changes are being made inside the set function (setCounterValue).
// S-8 - Now, lastly, using the clearInterval method to stop the settimeout function after  minute or (60000) seconds.
// S-9- displaying the data inside the div in the return statement and importing the page to the parent (App.jsx) file
// Note- the dependency array has been left empty so that on every refresh the counterupdater re-renders

export default CounterPage