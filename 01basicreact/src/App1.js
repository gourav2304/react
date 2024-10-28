import React from 'react'
import './App.css';
// import ComponentC from './reactHooks/componentC'
import ComponentE from './reactHooks/ComponentE';
import HookReduce from './reactHooks/HookReduce';


export const userContext = React.createContext()
export const channelContext = React.createContext()
function App1() {
  return (
    <div className='App'>
        <HookReduce/>
        {/* <userContext.Provider value={'Gourav'}>
            <channelContext.Provider value={"Developer"}>
            <ComponentE/>
            </channelContext.Provider>
        </userContext.Provider> */}
    </div>
  )
}

export default App1