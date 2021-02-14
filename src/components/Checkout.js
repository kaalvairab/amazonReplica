import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

function Checkout() {

  const [{cart},dispatch] = useStateValue();

  return (
    <div>
      {/* CONDITIONAL */}
 {cart?.length===0 ? (
   <div>
   <h2>Your Basket is Empty !</h2>
   <Link to='/shopByCategory'><h4>Click Here to Add items now !</h4></Link>
 </div>
 ):
<div>
 <h2>Your Shopping Basket :</h2>

 {/* LIST OF ITEMS for CHECKOUT*/}
 <div className='checkout'>
    <div className='items'>
    {cart.map(item=>(
      <CheckoutProduct
      id={item.id}
      title={item.title}
      img={item.img}
      price={item.price}
      rating={item.rating}
      />
    ))}
    </div>

 <SubTotal/>
 </div>
</div>}
    </div>
  )
}

export default Checkout
