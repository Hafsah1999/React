import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="conatiner-fluid bg-head bg-opacity-25">
      <header className=" border-bottom border-dark">
        <div className="container ">
          <ul className="nav me-auto d-flex  justify-content-start">
            <li className="nav-item">
              <Link
                to="/More"
                className="nav-link  fs-4 text-white me-2 link-body-emphasis px-2"
              >
                HOTELS
              </Link>
            </li>

            <li className="nav-item ">
              <Link to="/" className="nav-link me-2  link-body-emphasis px-2 text-white fs-5">
                +91 6307292495
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link me-2 link-body-emphasis text-white fs-5 px-2 ">
                hotel786@gmail.com
              </Link>
            </li>



          </ul>
        </div>
      </header>

      <nav className="py-2  bg-body-tertiary border-bottom-dark bg-dark bg-opacity-25">
        <div className="container ">

          <ul className="nav me-auto d-flex  justify-content-end">

            <li className="nav-item">
              <Link

                to="/Home"
                className="nav-link me-2 link-body-emphasis text-white fs-4 px-2 active "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Rooms"
                className="nav-link me-2 fs-4 text-white link-body-emphasis px-2"
              >
                Rooms
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Blog"
                className="nav-link  fs-4 text-white me-2 link-body-emphasis px-2"
              >
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-link me-2  fs-4 text-white link-body-emphasis px-2"
              >
                AboutUs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-link me-2  fs-4 text-white link-body-emphasis px-2"
              >
                ContactUs
              </Link>
            </li>



              <button className="btn btn-warning fs-5" >BOOK NOW</button>
        

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
