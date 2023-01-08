import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='wax-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1>Sign in to your account</h1>
            <p>Don't have an account yet? <Link to='/' className='underline'>Sign up.</Link></p>
        </div>
    </div>
  )
}

export default Signup