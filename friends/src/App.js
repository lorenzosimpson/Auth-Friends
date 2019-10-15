import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

// Import components
import NavBar from './components/NavBar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/protected' component={FriendsList}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
