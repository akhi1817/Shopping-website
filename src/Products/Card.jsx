import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
   <>
    <div className='card bg-white mt-3'>
                <div className='card-body text-center'>
                    <img className='img-fluid ' style={{height:'250px', marginLeft:'15px'}} src={props.image} alt={props.alt}/>
                </div>
                <div className='card-footer'>
                <h5 className='text-start'>{props.pname}</h5>
                <h4 className='text-start'>{props.price}</h4>
                <p className='text-start'>{props.category}</p>
                <button className='btn btn-dark  rounded-pill mx-2 px-4'>{props.btn1}</button>
                <button className='btn btn-success rounded-pill mx-2 px-4'>{props.btn2}</button>
                </div>
            </div>
   </>
  )
}

export default Card
