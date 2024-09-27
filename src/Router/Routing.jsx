import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Category from '../Category/Category';
import Navbar from '../Navbar/Navbar';

const Routing = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/category' element={<Category/>}/>
        </Routes>
    </Router>
    
    </>
  )
}

export default Routing
