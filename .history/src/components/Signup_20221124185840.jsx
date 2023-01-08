import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='wax-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
            <p className='py-2'>Don't have an account yet? <Link to='/' className='underline'>Sign up.</Link></p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label>Email Address</label>
                <input type='email'/>
            </div>
        
            <div className='flex flex-col py-2'>
                <label>Password</label>
                <input type='password'/>
            </div>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup