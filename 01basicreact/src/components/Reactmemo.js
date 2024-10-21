import React from 'react'

function Reactmemo({name}) {
    console.log('function comp memo****')
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(Reactmemo)