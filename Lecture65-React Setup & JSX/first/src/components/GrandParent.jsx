import React from 'react'
import Parent from './Parent'

function GrandParent() {
    const name="suraj"
  return (
    <div>
         i am {name}
        <Parent name={name}/>
    </div>
    
  )
}

export default GrandParent