
import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";



const Header = () => {
  return (
    <>

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <p className="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <BiMenu />
            </p>
            <p className="navbar-brand text-center"><b>News Headline</b></p>

            <div className="navbar-nav ms-auto">


              <Link className="nav-link  active  me-3" to="/login">Login</Link>
              <Link className="nav-link  active  me-3" to="/dashboard">Dashboard</Link>
              {/* <Link className="nav-link  active  me-3" to="/login">Login</Link> */}

            </div>

          </div>
        </nav>

      </div>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Category
</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
              <Link className="nav-link  active  me-3" to="/sportsNews">Sports</Link>
              <Link className="nav-link  active  me-3" to="businessNews">Business</Link>

         
        </div>
      </div>

    </>
  );
};

export default Header;