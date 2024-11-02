import React from 'react'
import './App.css';
import { UseState } from './componentsRender/UseState/UseState';
import { UseReducer } from './componentsRender/UseReducer/UseReducer';
import { ObjectUseState } from './componentsRender/Immutable State/ObjectUseState';


function App3() {
  return (
    <div>
        {/* <UseReducer/> */}
        <ObjectUseState/> 
        {/* <UseState/> */}
    </div>
  )
}

export default App3