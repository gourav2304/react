import React from 'react'
import './App.css';
// import ComponentC from './reactHooks/componentC'
import ComponentE from './reactHooks/ComponentE';
import HookReduce from './reactHooks/HookReduce';
import CounterTwo from './reactHooks/CounterTwo';
import CounterThree from './reactHooks/CounterThree';
import DataFetchingOne from './reactHooks/DataFetchingOne';
import DataFetchingTwo from './reactHooks/DataFetchingTwo';


export const userContext = React.createContext()
export const channelContext = React.createContext()
export const countContext = React.createContext()
function App1() {
    
  return (
    <div className='App'>
      <DataFetchingTwo/>
      {/* <DataFetchingOne/> */}
        {/* <CounterThree/> */}
        {/* <CounterTwo/> */}
        {/* <HookReduce/> */}
        {/* <userContext.Provider value={'Gourav'}>
            <channelContext.Provider value={"Developer"}>
            <ComponentE/>
            </channelContext.Provider>
        </userContext.Provider> */}
    </div>
  )
}

export default App1