import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">chefZone</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='./'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;