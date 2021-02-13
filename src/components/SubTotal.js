import React from 'react'
import { useStateValue } from '../StateProvider'

function SubTotal() {

  const [{cart},dispatch] = useStateValue()

  return (
    <div className='subTotal'>
      your subTotal
    </div>
  )
}

export default SubTotal
  