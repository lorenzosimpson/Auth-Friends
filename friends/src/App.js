import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import NavBar from './components/NavBar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
