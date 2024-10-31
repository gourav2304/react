import React, { useState ,useCallback} from 'react'
import count from './count'
import Title from './Title'
import Button from './Button'
import Count from './count'

function Parentcomponent() {
    const [age,setAge] = useState(25)
    const [salary, setSalary]= useState(50000)

const incrementAge = useCallback(()=>{
    setAge(age +1)
},[age])
const incrementSalary = useCallback(()=>{
    setSalary(salary+1000)
},[salary])
  return (
    <div>
        <Title/>
        <Count text="Age" count= {age}/>
        <Count text="salary" count ={salary}/>
        <Button handleClick={incrementAge}>Increment age</Button>
        <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  )
}

export default Parentcomponent