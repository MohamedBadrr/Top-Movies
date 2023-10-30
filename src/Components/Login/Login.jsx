import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { users } from '../../Data';
import { useState } from 'react';

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(''); 
  var userStatus = false ; 
   var login =(e)=>{
        e.preventDefault();

       if(email != "" && password != ""){
        for(var i = 0 ; i<users.length ; i++){
          if(users[i].email == email && users[i].password == password){
            userStatus = true;
            console.log("done");
          }
        }
       }
       else if (userStatus == false){
        console.log("email or password is not correct ");
       }
       else{
        console.log("email or password shouldn't be empty ");
       }
   }
  return (
    <>
   <div className='container form-gp login '>
      <div className='w-50'>
      <h1 className='mb-5 fw-b loginT'>Login Form</h1> 
        <form onSubmit={login}>
        <div className='input-gp my-4'>
        <label htmlFor="email" className='my-2'>Email</label>
        <input className='form-control' type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className='input-gp my-4'>
        <label htmlFor="Password" className='mb-2'>Password</label>
        <input className='form-control' type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <div class="form-check checkLogin">
            <input class="form-check-input" type="checkbox" value="" id="" />
            <label class="form-check-label" for="">
             <span class="fw-bold"> Remember Me</span>
            </label>
          </div>
          <div className='float-end'><button  className='btn btn-info  fw-bold'>Login</button></div>
        </form>
        <div className=''>
          <p className=' fw-bold mt-3'>Don't have an account ?<Link className='ms-2 registerLink' to="/register">Register Now</Link></p>
        </div>
        <div className='clearfix'></div>
      </div>
    </div>   
    </>
  );
}
