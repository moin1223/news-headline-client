import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../../App';
import News from '../News/News';

const Newses = () => {

    const [newses,setNewses] = useContext(UserContext);
   
    useEffect(()=>{
        fetch('https://shielded-hamlet-59568.herokuapp.com/newses')
        .then(res=>res.json())
        .then(data=>setNewses(data))
    },[setNewses])
    return (
        <div>

         
               {
                   newses.map(news=><News news={news} key={news._id}></News>)
              
               }
          

        </div>
    );
};

export default Newses;
