import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href='#'>Home</a>
                <a href='#'>About us</a>
                <a href='#'>Contact US</a>
            </nav>
            <div>
                social media links
            </div>
        </header>
    )
}

export default Header
