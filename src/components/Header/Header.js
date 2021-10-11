import React from 'react';
import { Link } from 'react-router-dom';
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
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/review">Order Review</Link></li>
                        <li><Link to="/inventory">Manage inventory</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;