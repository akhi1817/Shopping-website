import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Category from '../Category/Category';
import Navbar from '../Navbar/Navbar';
import AllProducts from '../Products/AllProducts/AllProducts';

const Routing = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/allproducts' element={<AllProducts/>}/>
        </Routes>
    </Router>
    
    </>
  )
}

export default Routing
