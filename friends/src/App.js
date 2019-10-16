import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

// Import components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <h1>Authenticator Friends</h1>
          <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
            </ul>
        </nav>
        
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
