import React from 'react'
import './App.css';
// import ComponentC from './reactHooks/componentC'
import ComponentE from './reactHooks/ComponentE';
import HookReduce from './reactHooks/HookReduce';
import CounterTwo from './reactHooks/CounterTwo';
import CounterThree from './reactHooks/CounterThree';
import DataFetchingOne from './reactHooks/DataFetchingOne';
import DataFetchingTwo from './reactHooks/DataFetchingTwo';
import Parentcomponent from './component3/Parentcomponent';
import Counter from './component3/counter';
import FocusInput from './component3/FocusInput';
import ClassTimer from './component3/ClassTimer';
import HookTimer from './component3/HookTimer';
import UserfForm from './component4/UserfForm';
import DocTitletwo from './component4/DocTitletwo';


export const userContext = React.createContext()
export const channelContext = React.createContext()
export const countContext = React.createContext()
function App1() {
    
  return (
    <div className='App'>
      <DocTitletwo/>
      {/* <UserfForm/> */}
      {/* <HookTimer/> */}
      {/* <ClassTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <Parentcomponent /> */}
      {/* <DataFetchingTwo/> */}
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