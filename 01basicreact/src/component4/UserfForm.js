import React, {useState} from 'react'
import UserInput from '../Hook/UserInput'

function UserfForm() {
    
    const [firstName, bindFirstName, resetFirstName] = UserInput('')
    const [lastName, bindLastName, resetLastName] = UserInput('')
    const submitHandler  = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
            <lable>First Name</lable>
            <input 
                {...bindFirstName}
                type="text" 
            />
            </div>
            <div>
            <lable>Last Name</lable>
            <input 
               {...bindLastName} 
                type="text" 
            />
            
            </div>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default UserfForm