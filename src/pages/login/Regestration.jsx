import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import {  updateProfile } from 'firebase/auth';

const Regestration = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname || '/login'

  const [error, setError] = useState('')
  const { createUser,logOut} = useContext(AuthContext)
  const handleSignUp = (event) => {
    event.preventDefault()

    const form = event.target;
    const name= form.displayName.value;
    const photo=form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(name,photo,email, password, confirm)
    setError('')
    if (password !== confirm) {
      setError('Your password did not match')
      return
    }
    else if (password.length < 6) {
      setError('password must be 6 characters or longer')
      return
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        updateUser(loggedUser,name,photo)
        logOut(navigate(from,{replace :true}))
        
        console.log(loggedUser)

      })
      .catch(error => {
        console.log(error)
        setError(error)
      })

      const updateUser=(loggedUser,name,photo)=>{
        updateProfile(loggedUser,{
          displayName:name,
          photoURL:photo,
        })
        .then(()=>{})
        .catch((error)=>{
          console.log(error)
        })
      }

     

  }


  return (
    <div className='w-[60%]  mx-auto my-10 bg-slate-100 p-5 rounded-xl'>
      <h2 className='text-3xl font-bold '>Please Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="name">Name</label> <br />
          <input className='border w-96 p-2 mt-4' type="text" name="displayName" id="" placeholder='Your Name' required />
        </div>
        <div>
          <label htmlFor="photo">Photo URL</label> <br />
          <input className='border w-96 p-2 mt-4' type="text" name="photo" id="" placeholder='Your Photo URL' required />
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input className='border w-96 p-2 mt-4' type="email" name="email" id="" placeholder='Your Email' required />
        </div>
        <div>
          <label htmlFor="password">passwoed</label> <br />
          <input className='border w-96 p-2 mt-4' type="password" name="password" id="" placeholder='Your Password' required />
        </div>
        <div>
          <label htmlFor="confirm">Confirm passwoed</label> <br />
          <input className='border w-96 p-2 mt-4' type="password" name="confirm" id="" placeholder='Your Confirm Password' required />
        </div>
        <input className='mt-7 border text-xl py-2 px-5 rounded-md text-white bg-blue-600' type="submit" value="Submit" />
        <p><small>{error}</small></p>
        <p><span>  Don't Have an Account? <Link to="/login">login</Link></span></p>
      </form>
    </div>

  );
};

export default Regestration;