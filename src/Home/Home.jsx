import React from 'react';
import './Home.css';
import { BrandImg } from '../data';
import Newarrivals from '../Products/NewArrivals/Newarrivals';
import TopSelling from '../Products/TopSelling/TopSelling';
import Gallery from '../Products/DressStyle/Gallery';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    <div className='container-fluid m-0 p-0'>
      <div className='row ps-5'>
        <div className='col-md-6'>
          <h1 className='heading display-3 fw-bold'>FIND CLOTHES<br/>THAT MATCHES<br/>YOUR STYLE</h1>
          <p className='text-secondary ms-5'>Browse through our diverse range of meticulously crafted garments,desinged<br/>
          to bring out your individuality and cater to your sense of style. </p>
          <button className='btn btn-dark rounded-pill px-5 py-2 mx-5'>Shop Now</button>
        </div>
        <div className='col-md-6'>
          <img src='assets/hero-img.png'alt='hero' className='img-fluid' style={{height:'100%',width:'100%', marginTop:'40px'}}/>
        </div>
      </div>
      
      
      <div className="col-12 bg-dark d-flex flex-wrap justify-content-around mt-5 p-3">
        {
        BrandImg.map((val) =>{
          return(
            <img key={val.id} src={val.src} alt={val.alt}  className="img-fluid m-2" />
                )  
        })}
      </div>

      
      <div className='row mt-3'>
        <Newarrivals/>
        <TopSelling/>
        <Gallery/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Home


