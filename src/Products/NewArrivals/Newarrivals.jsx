import React from 'react'
import Card from '../Card';
import { newArrivals } from '../../data';

const Newarrivals = () => {

    
  return (
    <>
    <h1>New arrivals component</h1>
    <div className='container-fluid '>
        <div className='row'>
            <div className='col-md-12 ps-1 d-flex flex-column flex-md-row'>
            
                    {
                        newArrivals.map((val,index)=>{
                            return(
                                <div className='col-md-3'>
                                    <Card
                                    image={val.image}
                                    pname={val.pname}
                                    price={val.price}
                                    category={val.category}
                                    btn1={val.btn1}
                                    btn2={val.btn2}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-md-12 text-center'>
                  <button className='btn btn-dark rounded-pill px-5 mt-5'>View All</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Newarrivals
