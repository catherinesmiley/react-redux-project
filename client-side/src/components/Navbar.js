import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li><NavLink
                    to="/"
                    exact
                >Home</NavLink></li>
                <br />
                <li><NavLink 
                    to="/categories"
                    exact
                >All Categories</NavLink></li>
                <br />
                <li><NavLink
                    to="/categories/new"
                    exact
                >Create New Category</NavLink></li>
                <br />
                <br />
            </ul>
        </div>
    );
};

export default Navbar;