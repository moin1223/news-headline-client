import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


    

const DetailNews = () => {
    const [newses] = useContext(UserContext);
    console.log(newses)
    const {_id} = useParams ();
    const news=newses.find(td=>td._id === _id);
  

    return (
        <> 
   
        <div className="card mb-3">
        <h1 className="text-center text-danger my-4 py-4"><b>{news?.category}</b></h1>
  <img src={news?.imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
  <small classNameName="card-title">author:{news?.author}</small>
    <h5 className="card-title">{news?.title}</h5>
    <p className="card-text">{news?.description}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
         
         </>
    );
};

export default DetailNews;