import React from 'react'
import { useStateValue } from '../StateProvider'


function Product({id,title,rating,price,img}) {

  const [{cart},dispatch] = useStateValue()


const addToCart=()=>{

  dispatch({
    type:'ADD_TO_CART',
    item:{
      id:id,
      title:title,
      price:price,
      rating:rating,
      img:img,
    },
  });

  console.log("addToCart")
}

  return (
    <div className='category product'>
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
      <img src={img} alt=''/>

      <button onClick={addToCart}>Add to Cart</button>
      
    </div>
  )
}

export default Product
