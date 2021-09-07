import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import BusinessNews from '../BusinessNews/BusinessNews';


const AllBusinessNews = () => {


    let [newses] = useContext(UserContext);



    let BusinessNewses = [];
    for (let i = 0; i < newses.length; i++) {
        if (newses[i].category ===
            'Business') {
            BusinessNewses.push(newses[i]);
        }
    }


    return (
        <div>


            {
                BusinessNewses.map(Business => <BusinessNews Business={Business} key={Business._id}></BusinessNews>)
            }


        </div>
    );
};

export default AllBusinessNews;



