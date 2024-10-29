import React, {useReducer} from 'react'

const intialState =0;
const  reducer = (state, action)=>{
    switch (action) {
        case 'increment':
            return state +1 
            break;
        case 'decrement':
            return state - 1 
            break;
        case 'reset':
            return intialState 
            break;
    
        default:
            return state
            break;
    }
}

function HookReduce() {
    const [count , dispatch] = useReducer(reducer,intialState)
  return (
    <div>
        <div>count - {count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default HookReduce