import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark  navBg ">
          <div class="container-fluid fixedd">
          <Link class="navbar-brand text-white fw-bold brand mb-1"  to="">Top-Moviz</Link>
          
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2  mt-lg-0 ulLinks">
              <li class="nav-item text-white">
                <NavLink class="nav-link navColor" to="/">Home</NavLink>
              </li>
              <li class="nav-item ">
                <NavLink class="nav-link navColor" to="movies">Movies Today</NavLink>
              </li>
              <li class="nav-item ">
                <NavLink class="nav-link navColor" to="tvshows">Weekly Tv Shows</NavLink>
              </li>
              <li class="nav-item ">
                <NavLink class="nav-link navColor" to="people">People</NavLink>
              </li>
             
            </ul>
            <div className='fixIcons'>
            <div className='d-flex  '>
            <div className='NavIcons d-flex  mx-3'>
              <i className='fab fa-facebook ' ></i>
              <i className='fab fa-youtube  mx-3' ></i>
              <i className='fab fa-spotify ' ></i>
              <i className='fab fa-instagram  ms-3' ></i>
            </div>
            <NavLink className='mx-2 linklog' to="login">Login</NavLink>
            <NavLink className='mx-2 linklog' to="register">Register</NavLink>
            </div> 
            </div>
          </div>
          
        </div>
        
      </nav>
      
      
    </>
  );
}