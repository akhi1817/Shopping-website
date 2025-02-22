import React from 'react';
import { galleryImg } from '../../data';

const Gallery = () => {
  return (
    <div className="container-fluid mt-5 bg-light">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h1 className="fw-bold">BROWSE BY DRESS STYLE</h1>
        </div>
        {galleryImg.map((val) => (
          <div key={val.id} className=" col-md-12 w-50 h-100 d-flex flex-wrap">
            <img src={val.src} alt={val.alt}  className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
