import React, { useState } from 'react'
import count from './count'
import Title from './Title'
import Button from './Button'

function Parentcomponent() {
    const [age,setAge] = useState(25)
    const [salary, setSalary]= useState(50000)

const incrementAge = ()=>{
    setAge(age +1)
}
const incrementSalary = ()=>{
    setSalary(salary+1000)
}
  return (
    <div>
        <count text="Age" count= {age}/>
        <button handleClick={incrementAge}>Increment age</button>
        <count text="salary" count ={salary}/>
        <button handleClick={incrementSalary}>Increment salary</button>
    </div>
  )
}

export default Parentcomponent