import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
const Header = () => {
    return (
        <div>
            <div className='header-img'>
            <img className='logo' src={logo} alt="" />
            </div>
            <div className='navbar'>
                <nav>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/inventory">Manage inventory</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;