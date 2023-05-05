import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../authProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
    

    return (
        <div className='bg-gray-300 sticky top-0 z-10'>
            <div className="navbar container mx-auto lg:p-5 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case lg:text-4xl text-blue-600 font-bold">Food Station</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl space-x-3  lg:space-x-6 items-center">
                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-black font-semibold')}  to='./'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-black font-semibold')} to='/blog'>Blog</NavLink>
                      {
                        user ? <div>{
                            user && <span className='text-white flex items-center gap-4'><div className='tooltip' data-tip={user.displayName}><img  className='w-10 h-10 rounded-full tooltip '   src={user.photoURL}  alt="" /></div> <NavLink onClick={handleLogout} className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-black font-semibold')}  to='/login'>LogOut</NavLink></span>
                        }</div> :<NavLink className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-black font-semibold')}  to='/login'>Login</NavLink>
                      }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;