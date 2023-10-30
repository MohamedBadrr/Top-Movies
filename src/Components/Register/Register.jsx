import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
export default function Register() {
  return (
    <>
   <div className='container form-gp  registerForm registerFormedit'>
      <div className='w-50 registerContainer'>
      <h1 className='mb-5 fw-bold'>Registration Form</h1> 
        <form>
        <div className='input-gp my-4'>
        <label htmlFor="f_name" className=' mb-2'>First Name<span className='text-danger'> *</span> </label>
        <input className='form-control' type="text" />
      </div>
      <div className='input-gp my-4'>
        <label htmlFor="l_name" className='mb-2'>Last Name<span className='text-danger'> *</span></label>
        <input className='form-control' type="text" />
      </div>
      <div className='input-gp my-4'>
        <label htmlFor="age" className='mb-2'>Age <span className='text-danger'> *</span></label>
        <input className='form-control' type="number" />
      </div>
      <div className='input-gp my-4'>
        <label htmlFor="email" className='mb-2'>Email<span className='text-danger'> *</span></label>
        <input className='form-control' type="email" />
      </div>
      <div className='input-gp mt-2 mb-3'>
        <label htmlFor="Password" className='mb-2'>Password<span className='text-danger'> *</span></label>
        <input className='form-control' type="password" />
      </div>
      <div className='float-end'><button className='btn btn-info  fw-bold'>Register</button></div>
        </form>
        <div className=''>
          <p className=' fw-bold'>Already have an account ?<Link className='ms-2 registerLink' to="/login">Login</Link></p>
        </div>
        <div className='clearfix'></div>    
      </div>
    </div>   
    </>
  );
}
