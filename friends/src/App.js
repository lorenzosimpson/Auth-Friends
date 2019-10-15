import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

// Import components
import NavBar from './components/NavBar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/friends' component={FriendsList}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
