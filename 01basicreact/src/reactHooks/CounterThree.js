import React, { useReducer} from "react";

const initialState = 0
const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state+ 1
        case 'decrement':
            return state- 1
        case 'reset':
            return initialState
            break;
        default:
            return state
            break;
    }
}
 
 function CounterThree() {
 const [count, dispatch] = useReducer(reducer,initialState)
 const [counterTwo, dispatchTwo] = useReducer(reducer,initialState)
   return (
     <div>
        <div>Count - {count}</div>
        <div>Count - {counterTwo}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('increment')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>dispatchTwo('increment')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>Reset</button>
     </div>
   )
 }
 
 export default CounterThree