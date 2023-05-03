import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
       return <div className='container mx-auto w-96'><progress className="progress w-56"></progress></div>
    }

   if(user){
       return children;
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};



export default PrivetRoute;