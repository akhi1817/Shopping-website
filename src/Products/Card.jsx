import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
   <>
    <div className='card bg-white mt-3'>
                <div className='card-body text-center'>
                    <img className='img-fluid ' style={{height:'250px', marginLeft:'15px'}} src={props.image}/>
                </div>
                <div className='card-footer'>
                <h3 className='text-start'>{props.pname}</h3>
                <h2 className='text-start'>{props.price}</h2>
                <button className='btn btn-dark  rounded-pill mx-2 px-4'>{props.btn1}</button>
                <button className='btn btn-success rounded-pill mx-2 px-4'>{props.btn2}</button>
                </div>
            </div>
   </>
  )
}

export default Card
