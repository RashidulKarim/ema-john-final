import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/aboutUs">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;