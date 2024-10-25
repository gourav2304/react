import React, { useState } from 'react'

function HookCountertwo() {
    const intialCount= 0;
    const [count , setCount] = useState(0)

    const increment5=()=>{
        for( let i =0; i<5; i++){
           setCount( prevcount=> prevcount +1)
        }
    }

  return (
    <div>
        count: {count}
        <button onClick={()=>setCount(intialCount)}>Reset</button>
        <button onClick={()=>setCount(prevcount=> prevcount +1 )}>Increment</button>
        <button onClick={()=>setCount(prevcount=> prevcount -1)}>Decrement</button>
        <button onClick={(increment5)}>Increment 5</button>
    </div>
  )
}

export default HookCountertwo
