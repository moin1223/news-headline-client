
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';

const  DhasboadSidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://protected-coast-24801.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    },[user.email])
    

   
    return (

        <>
        <Header/>
        {
            isAdmin &&
            <div className="m-5 p-5">
          
            <Link className="text-decoration-none text-dark m-2" to="/addAdmin"><h3>AddAdmin</h3></Link>
            <Link  className="text-decoration-none text-dark m-2" to='/addNews'><h3>AddNews</h3></Link>
        
        </div>
    
        }
        {
            !isAdmin &&

        <p className="text-center text-Success">please login as a Admin</p>

        }
       
      
        </>




    );
};

export default DhasboadSidebar;