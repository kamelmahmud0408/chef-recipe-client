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
        <div className='bg-blue-300'>
            <div className="navbar container mx-auto p-5 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl text-black font-bold">Food Station</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl space-x-6 items-center">
                        <NavLink className={({ isActive }) => (isActive ? 'text-sky-900' : 'text-white')}  to='./'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-900 ' : 'text-white')} to='/blog'>Blog</NavLink>
                      {
                        user ? <div>{
                            user && <span className='text-white flex gap-4'><div className='tooltip' data-tip={user.displayName}><img title={user.displayName} className='w-10 h-10 rounded-full tooltip '   src={user.photoURL}  alt="" /></div> <button onClick={handleLogout}> Log out</button></span>
                        }</div> :<Link to='/login'><button className='text-white'>Login</button></Link>
                      }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;