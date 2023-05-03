import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../authProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='bg-gray-200'>
            <div className="navbar container mx-auto ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl text-blue-500">chefZone</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        <NavLink to='./'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                        {
                                user && <span className='text-black'> {user.email} <button onClick={handleLogout}> Log out</button></span>
                            }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;