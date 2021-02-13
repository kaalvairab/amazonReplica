import React from 'react'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({id,title,price,rating,img}) {

  const [{cart}, dispatch] = useStateValue()

  const removeFromCart=()=>{

    dispatch({
      type:'REMOVE_FROM_CART',
      item:{
        id:id
      },
    });
  

  }

  return (
    <div className='checkoutProduct'>

      <img src={img} alt=''/>

      <div>
        <div className='title'>{title}</div>

        <div className='rating'>
          {Array(rating)
          .fill()
          .map((_)=>(
            <p>⭐</p>
          ))}
        </div>

        <div className='price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <button onClick={removeFromCart}>Remove</button>

      </div>
              
    </div>
  )
}

export default CheckoutProduct
