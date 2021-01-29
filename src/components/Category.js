import React from 'react'

import {Link} from 'react-router-dom'

function Category({title,img,link,linkTxt}) {
  return (
    <div className='category'>
      <h3 className='title'>{title}</h3>

     <Link to={link}>
     <img src={img} alt=''/>
     </Link>
      
      <Link to={link}>
      {linkTxt}
        </Link>

    </div>
  )
}

export default Category
