import React from 'react';
import { Link } from 'react-router-dom';

const Sport = (props) => {
   
    const {_id,title,author,imageURL} = props.sport
    return (
        <>
        <div className="container">
        <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageURL} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <small className="card-title">author:{author}</small>
              <h5 className="card-title">{title}</h5>
              <Link className="text-decoration-none" to={`/newsDetail/${_id}`}>
              <button type="button" class="btn btn-danger">See more</button>
              </Link>
            
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      
        </div>
         
         </>
     
    );
};

export default Sport;
