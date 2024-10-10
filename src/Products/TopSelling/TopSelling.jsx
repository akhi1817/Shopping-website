import React from 'react'
import Card from '../Card'

const TopSelling = () => {
  const topSelling=[
    {
        id:1,
        image:'assets/TS1.png',
        pname:'Vertical striped shirt',
        price: '$212',
        btn1:'Add to Cart',
        btn2:'Buy Now'
    },
    {
        id:2,
        image:'assets/TS-2.png',
        pname:'Courage T-shirt',
        price: '$145',
        btn1:'Add to Cart',
        btn2:'Buy Now'
    },
    {
        id:3,
        image:'assets/TS-3.png',
        pname:'Loose fit Bermuda ',
        price: '$80',
        btn1:'Add to Cart',
        btn2:'Buy Now'
    },
    {
        id:4,
        image:'assets/TS-4.png',
        pname:'Faded Skinny Jeans',
        price: '$210',
        btn1:'Add to Cart',
        btn2:'Buy Now'
    }

]
  return (
    <>
    <h1>Top selling component</h1>
    <div className='container-fluid '>
        <div className='row'>
            <div className='col-md-12 ps-1 d-flex flex-column flex-md-row'>
            
                    {
                        topSelling.map((val,index)=>{
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
                  <button className='btn btn-dark rounded-pill px-5 mt-5'>View All</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default TopSelling
