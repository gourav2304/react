import React , {useReducer}from 'react'
import ComponentA from './reactHooks/ComponentA'

export const CountContext = React.createContext()

const initialState =0;
const  reducer = (state, action)=>{
    switch (action) {
        case 'increment':
            return state +1 
            break;
        case 'decrement':
            return state - 1 
            break;
        case 'reset':
            return initialState 
            break;
    
        default:
            return state
            break;
    }
}


function App2() {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
        Count- {count}
        <ComponentA/>
    </div>
    </CountContext.Provider>
  )
}

export default App2