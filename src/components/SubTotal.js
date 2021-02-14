import React from 'react'
import { useStateValue } from '../StateProvider'

import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../reducer'

function SubTotal() {

  const [{cart},dispatch] = useStateValue()

  const checkout=()=>{
    alert('Checkout Not Available')
  }

  return (
    <div className='subtotal'>

      <CurrencyFormat
      renderText={(value)=>(
              <>
              <p>
                SubTotal ({cart.length} items) : <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox"/>
                This order contains Gift !
              </small>
              </>)}

      decimalScale={2}
      value = {getCartTotal(cart)}
      displayType = {'text'}
      thousandSeparator = {true}
      prefix = {'$'}
      />

      <button onClick={checkout}>Checkout</button>
    </div>
  )
}

export default SubTotal
  