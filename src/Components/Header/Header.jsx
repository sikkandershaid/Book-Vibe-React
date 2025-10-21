import React from 'react';
import { NavLink, Link } from 'react-router';
import "./Header.css";

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav-wrap'>
                <div className="logo-side">
                    <Link to="/" className="logo-wrap">
                        <img src="/image/BookVibe_logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="link-side">
                    <NavLink className='nav-link' to="/">
                        Home
                    </NavLink>
                    <NavLink className='nav-link' to="/read-list">
                        Read List
                    </NavLink>
                    <NavLink className='nav-link' to="/pages-To-Read">
                        Pages to Read
                    </NavLink>
                </div>

                <div className="btn-side">
                    <button className="btn-primary btn-bg-1">Sign In</button>
                    <button className="btn-primary btn-bg-2">Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;