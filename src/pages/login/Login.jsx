import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';


const Login = () => {

  const [error, setError] = useState('')

  const { signIn, signInwithGoogle, signInwithGithub } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

    // login and error setup

  const handleLogin = (event) => {
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError('')
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset()
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)

      })
  }

  // google login
  
  const handleGoogle = () => {
    signInwithGoogle()
      .then(() => {
        navigate(from, { replace: true })
      })
      .cacth(error => {
        console.log(error)
      })
  }

// githublogin
  const handleGithub = () => {
    signInwithGithub()
      .then(result => {
        navigate(from, { replace: true })
      })
      .cacth((error) => {
        console.log(error)
      })
  }



  return (
    <section className='container mx-auto'>
      <div className='w-96 mx-auto my-10 bg-slate-100 p-5 rounded-xl'>
        <h2 className='text-3xl font-bold my-3 text-blue-600'>Please Login</h2>
        <form onSubmit={handleLogin} >
          <div>
            <label htmlFor="">Email</label> <br />
            <input className='border w-full p-2 mt-4' type="email" name="email" id="" placeholder='Your Email' required />
          </div>
          <div>
            <label htmlFor="">passwoed</label> <br />
            <input className='border w-full p-2 mt-4' type="password" name="password" id="" placeholder='Your Password' required />
          </div>
          <input className='mt-7 border text-xl py-2 px-5 rounded-md text-white bg-blue-600' type="submit" value="Submit" />
          <p className='text-red-600 mt-4'>{error}</p>
        </form>
        <div className='mt-10 w-full'>
          <button onClick={handleGoogle} className='btn btn-primary w-full'>Login with Google</button>
          <button onClick={handleGithub} className='btn btn-primary w-full mt-5'>Login with Github</button>
        </div>
        <p className='mt-5'><span>  Don't Have an Account? <Link className='text-blue-600' to="/regestration">Register</Link></span></p>

      </div>
    </section>

  );
};

export default Login;