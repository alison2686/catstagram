// Exercise 2: Set It Up
    // write a class component
    // make it a ul with a class name of Header
    // make four li: Catstagram, Home, About, Profile
    // put class name of Logo on the li element with GDInsta
    // export default the component!

// Exercise 6: Routing
    // import Link from react-router-dom
    // use the Link component to link to each route with a 'to' property
    // check that your links work!

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <ul className="Header">
                <li className="Logo">Catstagram</li>
                <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    )
};

export default Header;