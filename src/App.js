import logo from './logo.svg';
import './CSS/css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header'
import Home from './components/home'
import ShopByCategory from './components/ShopByCategory'
import Login from './components/Login'


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>


      {/* Cart */}
      <Route path='/checkout'>
        <Header/>
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
