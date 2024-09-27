import React from 'react'
import Card from '../Card'

const Newarrivals = () => {

    const newArrivals=[
        {
            id:1,
            image:'assets/NA1.png',
            pname:'T-shirt with tape',
            price: '$120',
            btn1:'Add to Cart',
            btn2:'Buy Now'
        },
        {
            id:2,
            image:'assets/NA2.png',
            pname:'Skinny fit Jeans',
            price: '$240',
            btn1:'Add to Cart',
            btn2:'Buy Now'
        },
        {
            id:3,
            image:'assets/NA3.png',
            pname:'Checkered Shirt',
            price: '$180',
            btn1:'Add to Cart',
            btn2:'Buy Now'
        },
        {
            id:4,
            image:'assets/NA4.png',
            pname:'Sleeve striped T-shirt',
            price: '$130',
            btn1:'Add to Cart',
            btn2:'Buy Now'
        }

    ]
  return (
    <>
    <h1>New arrivals component</h1>
    <div className='container-fluid '>
        <div className='row'>
            <div className='col-md-12 ps-1 d-flex flex-column flex-md-row'>
            
                    {
                        newArrivals.map((val,index)=>{
                            return(
                                <div className='col-md-3 ms-1 '>
                                    <Card
                                    image={val.image}
                                    pname={val.pname}
                                    price={val.price}
                                    btn1={val.btn1}
                                    btn2={val.btn2}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-md-12 text-center'>
                  <button className='btn btn-dark rounded-pill px-5 mt-3'>View All</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Newarrivals
