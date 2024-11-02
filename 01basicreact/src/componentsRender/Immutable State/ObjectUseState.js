import React,{useState} from 'react'

const initState = {
    fName: 'Bruce',
    lName: 'Wayne'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = ()=> {
        // person.fName ='Clark',
        // person.lName = 'Kent'
        // setName(person)

    const newPerson = {...person}
    newPerson.fName = 'Clark';
    newPerson.lName = 'Kent';
    setPerson(newPerson);
}
  return (
    <div>
        <button onClick={changeName}>change Name</button>
    </div>
  )
}
