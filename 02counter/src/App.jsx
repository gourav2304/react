import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter,setCounter] = useState(15)
    // let counter = 15;
    const addValue = ()=>{
      
      console.log("clicked",counter);
      // counter = counter + 1;
      // if(counter < 20){
        setCounter(counter => counter +1 )
        setCounter(counter => counter +1 )
        setCounter(counter => counter +1 )
        setCounter(counter => counter +1 )
      // }else{
        // addValue == stop;
      // }
      
     }
    const removeValue = ()=>{
      // if(counter  > 1){
      //    setCounter(counter -1 )
      // }else{
        // addValue == stop;
      // } 
      setCounter(counter -1 )
      // }else{
      //   addValue == stop;
      // }
    }
    return (
      <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value{counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer: {counter}</p>
      </>
    )
}

export default App