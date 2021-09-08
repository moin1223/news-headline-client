
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';

const  DhasboadSidebar = () => {

   
    return (

        <>
        <Header/>

        <div className="m-5 p-5">
          
            
                <Link className="text-decoration-none text-dark m-2" to="/addAdmin"><h3>AddAdmin</h3></Link>
                <Link  className="text-decoration-none text-dark m-2" to='/addNews'><h3>AddNews</h3></Link>
                
            
            
            
            
        </div>
        </>

    );
};

export default DhasboadSidebar;