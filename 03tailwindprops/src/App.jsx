import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Mycard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'  >Tailwind testing </h1>
     <Card username="Gourav" btnClick="click me"/>
     <Card username="Dream girl"/>
    </>
    
  )
}

export default App
