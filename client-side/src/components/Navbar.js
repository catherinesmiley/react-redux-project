import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
            >Home</NavLink>
            <br />
            <NavLink 
                to="/categories"
                exact
            >All Categories</NavLink>
            <br />
            <NavLink
                to="/categories/new"
                exact
            >Create New Category</NavLink>
            <br />
            <br />
        </div>
    );
};

export default Navbar;