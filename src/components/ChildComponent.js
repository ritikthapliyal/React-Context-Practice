import React from 'react'
import { useContext } from 'react'
import NumberContext from '../context/numberContext'

function ChildComponent() {

  const number = useContext(NumberContext)

  return (
    <div className='child'>
       <p>This is Child Component</p>
       <p>The number is {number}</p>
    </div>
  )
}

export default ChildComponent