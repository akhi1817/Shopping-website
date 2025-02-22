import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='container-fluid mt-5 bg-light'>
        <div className='row'>
            <div className='col-md-4'>
                <h1 className='display-6 fw-bold'>Shop.co</h1>
                <p className='text-secondary mt-4'>We have clothes that suits your style and<br/> which you're proud to wear.From<br/> women to men.</p>
                <p><i class="bi bi-twitter-x fs-4 ms-3 "></i><i class="bi bi-instagram fs-4 ms-3"></i><i class="bi bi-facebook fs-4 ms-3"></i><i class="bi bi-github fs-4 ms-3"></i></p>
            </div>
            <div className='col-md-4 d-flex flex-column flex-md-row'>
                <div className='col-md-6'>
                    <h5 className='fw-bold'>COMPANY</h5>
                    <p className='text-secondary mt-3'>About</p>
                    <p className='text-secondary'>Features</p>
                    <p className='text-secondary'>Work</p>
                    <p className='text-secondary'>Career</p>
                </div>
                <div className='col-md-6'>
                    <h5 className='fw-bold'>HELP</h5>
                    <p className='text-secondary mt-3'>Customer Support</p>
                    <p className='text-secondary'>Delivery Details</p>
                    <p className='text-secondary'>Terms and Conditions</p>
                    <p className='text-secondary'>policy</p>
                </div>
            </div>
            <div className='col-md-4 d-flex flex-column flex-md-row'>
                <div className='col-md-6'>
                    <h5 className='fw-bold'>FAQ</h5>
                    <p className='text-secondary mt-3'>Account</p>
                    <p className='text-secondary'>Manage Deliveries</p>
                    <p className='text-secondary'>Orders</p>
                    <p className='text-secondary'>Payments</p>
                </div>
                <div className='col-md-6'>
                    <h5 className='fw-bold'>RESOURCES</h5>
                    <p className='text-secondary mt-3'>Free eBooks</p>
                    <p className='text-secondary'>Development Tutorial</p>
                    <p className='text-secondary'>How to-Blog</p>
                    <p className='text-secondary'>Youtube Playlist</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer
