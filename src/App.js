import logo from './logo.svg';
import './CSS/css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header'


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>

        {/* HOMEPAGE */}
        <Route path='/'>
        <Header/>
        </Route>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
