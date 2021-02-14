import React, {useEffect}  from 'react'
import './CSS/css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import ShopByCategory from './components/ShopByCategory'
import Login from './components/Login'
import Checkout from './components/Checkout'
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';


function App() {

  const [{user}, dispatch] = useStateValue()

useEffect(() => {
 
  const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    if(authUser){
            // LOGIN
        dispatch({
          type:'SET_USER',
          user : authUser,
        })

    }
    else{
      dispatch({
        type:'SET_USER',
        user:null,
      })

    }
    
  })

  return()=>{
    // ANY CLEAN UP OPERATION GOES HERE
    unsubscribe();
  }
      
  
}, [])

console.log(user)
  return (
    <Router>
      <div className="App">
      <Switch>


      {/* Cart */}
      <Route path='/checkout'>
        <Header/>
        <Checkout/>
      </Route>

      {/* SHOP BY CATEGORY */}
      <Route path='/shopBycategory'>
        <Header/>
        <ShopByCategory/>
      </Route>

      {/* LOGIN */}
      <Route path='/login'>
        <Login/>
      </Route>

        {/* HOMEPAGE */}
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
