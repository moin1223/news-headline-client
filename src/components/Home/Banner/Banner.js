import React from 'react';
import Banner1 from '../../../images/Banner1.jpg'
import Banner2 from '../../../images/Banner2.jpg'
import Banner3 from '../../../images/Banner3.jpg'

const Banner = () => {
    return (
        <>
<div id="carouselExampleControls" className="carousel slide container mb-2" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner1}  width='80px' height='450px' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Banner2}  width='80px' height='450px' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Banner3}   width='80px' height='450x'className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </>
    );
};

export default Banner;