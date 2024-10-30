import React from 'react'

function Button() {
    console.log(`Rendering button -`, children);
    
  return (
    <button >onClick={handleClick}
        {children}</button>
  )
}

export default Button