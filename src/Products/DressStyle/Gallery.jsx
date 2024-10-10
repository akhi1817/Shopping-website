import React from 'react'

const Gallery = () => {
  return (
    <>
        <div className='container mt-5 bg-light'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h1 className='fw-bold text-center'>BROWSE BY DRESS STYLE</h1>
                </div>
            </div>
            <div className='row d-flex flex-column flex-md-row text-center'>
                <div className='col-md-12 '>
                    <img src='assets/casual.png' className='img-fluid mt-3'/>
                    <img src='assets/formal.png' className='img-fluid ms-4 mt-3'/>
                    <img src='assets/party.png' className='img-fluid mt-4'/>
                    <img src='assets/gym.png' className='img-fluid ms-4 mt-4'/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Gallery
