import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Router>
            <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/protected'>Friends</Link>
                </li>
            </ul>
        </nav>
        </Router>
        
    )
}

export default NavBar;