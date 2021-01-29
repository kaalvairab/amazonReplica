import React from 'react'

function Product({id,title,rating,price,img}) {
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

      <button>Add to Cart</button>
      
    </div>
  )
}

export default Product
