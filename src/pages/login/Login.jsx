import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const Login = () => {

    const{signIn}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()

  const from=location.state?.from?.pathname || '/'

  const handleLogin=(event)=>{
    event.preventDefault()

    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    signIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      form.reset()
      navigate(from,{replace :true})
    })
    .catch(error=>{
      console.log(error)
    })
  

  
  }
    return (
        <div className='w-[50%]  mx-auto my-10 bg-slate-100 p-5 rounded-xl'>
           <h2 className='text-3xl font-bold '>Please Login</h2>
            <form onSubmit={handleLogin} >
                  <div>
                    <label htmlFor="">Email</label> <br />
                    <input className='border w-96 p-2 mt-4' type="email" name="email" id="" placeholder='Your Email' required/>
                  </div>
                  <div>
                    <label htmlFor="">passwoed</label> <br />
                    <input className='border w-96 p-2 mt-4' type="password" name="password" id="" placeholder='Your Password' required />
                  </div>
                  <input className='mt-7 border text-xl py-2 px-5 rounded-md text-white bg-blue-600' type="submit" value="Submit" />
            </form>
            <div className='mt-10 w-full'>
                  <button  className='btn btn-primary w-96'>Login with Google</button>
            </div>
            <p><span>  Don't Have an Account? <Link to="/regestration">Register</Link></span></p>
           </div>
        
    );
};

export default Login;