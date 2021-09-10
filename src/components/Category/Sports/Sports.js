import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sport from '../Sport/Sport';

const Sports = () => {


    let [newses] = useContext(UserContext);



    let SportsNews = [];
    for (let i = 0; i < newses.length; i++) {
        if (newses[i].category ===
            'Sports') {
            SportsNews.push(newses[i]);
        }
    }
    console.log(SportsNews);












    return (
        <div>

<h1 className="text-center text-danger my-4 py-4"><b>Sports</b></h1>
            {
                SportsNews.map(sport => <Sport sport={sport} key={sport._id}></Sport>)
            }


        </div>
    );
};

export default Sports;
