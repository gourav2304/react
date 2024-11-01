import React,{useMemo, useState} from 'react'

function Counter() {
const [counterOne, setCounterOne] = useState(0)
const [counterTwo, setCounterTwo] = useState(0)

const incrementOne = ()=>{
    setCounterOne(counterOne +1)
}
const incrementTwo = ()=> {
    setCounterTwo(counterTwo + 1)
}
const isEven = useMemo(()=>{
    let i=0 
    while(i<2000000000)i++
    return counterOne % 2 === 0
},[counterOne])
  return (
    <div>
        <div>
        <button onClick={incrementOne}>counter - {counterOne}</button>
        <span> {isEven ? "Even" : "Odd"}</span>
        </div>
        <button onClick={incrementTwo}>counter - {counterTwo}</button>
    </div>
  )
}

export default Counter