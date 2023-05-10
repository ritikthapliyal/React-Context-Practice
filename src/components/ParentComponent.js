import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  return (
    <div className='parent'>
        <p>This is Parent Component</p>
        <ChildComponent/>
    </div>
  )
}

export default ParentComponent