import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../hook/useAuth';
import './header.css';
const Header = () => {
    const {user, logOut} = useAuth();
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
                        {user.email && <li style={{color: "white"}}> Hello {user.displayName}</li>}
                        {
                            user.email ? <li onClick={logOut} style={{color:'white'}}>Log Out</li> : <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;