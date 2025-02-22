import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <div className='container-fluid m-0 p-0'>
      <div className='row'>
        <div className='col-md-12'>
          <p className='bg-dark text-light py-2 text-center'>Sign up and get 20% off to your first order. <Link to='/' className='text-light'>Sign Up Now</Link> </p>
       
    <nav className='navbar navbar-expand-lg bg-light text-dark'>
        <NavLink to='/' className='navbar-brand text-dark'><h3>Shop.co</h3></NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='navbar-nav m-auto'>
            <li className='nav-item mx-3'><NavLink to='/' className='nav-link text-dark'>Home</NavLink></li>
            <li className='nav-item mx-3'><NavLink to='/category' className='nav-link text-dark'>Category</NavLink></li>
            <li className='nav-item mx-3'><NavLink to='/products' className='nav-link text-dark'>Products</NavLink></li>
            <li className='nav-item mx-3'><FaShoppingCart className='fs-4 mt-2' /></li>
            <li className='nav-item mx-3'><FaRegUserCircle className='fs-4 mt-2' /></li>
            <li className='nav-item mx-5 d-flex'><input type='search' placeholder='search for products...' className='form-control' /><button className='btn ms-3'><IoSearchOutline className='fs-4' /></button></li>
        </ul>
      </div>
    </nav>
    </div>
    </div>
      </div>
    
    </>
  )
}

export default Navbar
