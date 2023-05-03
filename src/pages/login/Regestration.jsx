import React from 'react';
import { Link } from 'react-router-dom';

const Regestration = () => {
    return (
        <div className='w-[60%]  mx-auto my-10 bg-slate-100 p-5 rounded-xl'>
        <h2 className='text-3xl font-bold '>Please Sign Up</h2>
         <form>
               <div>
                 <label htmlFor="email">Email</label> <br />
                 <input className='border w-96 p-2 mt-4' type="email" name="email" id="" placeholder='Your Email' required/>
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
               <p><small></small></p>
               <p><span>  Don't Have an Account? <Link to="/login">login</Link></span></p>
         </form>
        </div>
       
    );
};

export default Regestration;