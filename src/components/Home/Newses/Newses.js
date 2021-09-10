import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../../App';
import News from '../News/News';

const Newses = () => {

    const [newses,setNewses] = useContext(UserContext);
   
    useEffect(()=>{
        fetch('https://protected-coast-24801.herokuapp.com/newses')
        .then(res=>res.json())
        .then(data=>setNewses(data))
    },[setNewses])
    return (
        <div>  
            <h1 className="text-center text-dabger my-3 py-3">Top News</h1>

         
               {
                   newses.map(news=><News news={news} key={news._id}></News>)
              
               }
          

        </div>
    );
};

export default Newses;
