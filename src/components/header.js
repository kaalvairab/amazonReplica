import React from 'react'

import {Link} from 'react-router-dom'

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';





function Header() {


  


  return (
    <header className='header'>

      <div className='header__1'>

        <Link to='/' className='header__logo'><img src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"/></Link>
        
        <div className='header__location'>
          Deliver to
          <Link path='#!'> <RoomOutlinedIcon/> Nepal</Link>

        </div>

        <div className='header__1__searchBar'>
        <select id="departments">
          <option value="all" selected>All Departments</option>
          <option value="arts">Arts & Crafts</option>
          <option value="">Books</option>
          <option value="">Computer</option>
        </select>
          <input/>
          <button><SearchOutlinedIcon/></button>
        </div>

        <div className="header__1__language">
        <select id="departments">
          <option value="" selected>ENG</option>
          <option value="">IND</option>
          <option value="">NEP</option>
          <option value="">CHN</option>
        </select>
         </div>

        <Link className='header__1__options sign__in' to='/login'>
          <span>Hello, Sign In</span>
          <span><b>Account & Lists           
            <ArrowDropDownOutlinedIcon/></b>
          </span>
        </Link>

        <div className="account__options">
            <div>
              <button>Sign In</button>
               <Link to='#!'>New Customer ? Start Here</Link>
            </div>

            <div>
              <ul><b>Your Lists</b>
                <li><a href='#!'>Create a List</a></li> 
                <li><a href='#!'>Find a List or Registry</a></li> 
                <li><a href='#!'>Amazon Smile Charity Lists</a></li> 
              </ul>

              <ul><b>Your Account</b>
                <li><a href='#!'>Account</a></li> 
                <li><a href='#!'>Orders</a></li> 
                <li><a href='#!'>Recommendations</a></li>
                <li><a href='#!'>Browsing History</a></li>  
                <li><a href='#!'>Watchlist</a></li> 
                <li><a href='#!'>Video Purchases & Rentals</a></li> 
                <li><a href='#!'>Kindle Unlimited</a></li> 
                <li><a href='#!'>Content & Devices</a></li> 
              </ul>
            </div>
          </div>

        <Link className='header__1__options' to='#!'>
          <span>Returns</span>
          <span><b>& Orders</b>
          </span>
        </Link>

        <Link className='header__1__options' to='/checkout'>
          <span><b>0</b></span>
          <span><ShoppingCartOutlinedIcon/></span>
      
        </Link>

        
      </div>

      <div className='header__2'>
        <ul>
          <li><a href='#!'>All</a></li>
          <li><a href='#!'>Today's Deal</a></li>
          <li><a href='#!'>Customer Service</a></li>
          <li><a href='#!'>Gift Cards</a></li>
          <li><a href='#!'>Sell</a></li>
        </ul>
      </div>

    </header>
  )
}

export default Header
