import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Search from './Search'

// STYLES
import './styles/nav.scss';

export default function Nav() {
    return (
        <div className="nav-container">
            <Link to="/"><h1>Instant Messenger</h1> </Link>
            <Search />
            <div className="navlink-container">
                <NavLink to="/chat/main">Chat</NavLink>
            </div>
        </div>
    )
}
