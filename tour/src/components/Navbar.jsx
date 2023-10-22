import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
  

      <header className="py-2">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="dropdown">
            <a
              to="/"
              className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img style={{ height: "50px", width: '50px' }} src="https://img.freepik.com/premium-vector/logo-design-english-capital-letter-logo-design_135595-1100.jpg" alt="" />
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <Link className="dropdown-item " to="/Home" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/About">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Contact">
                  Contact Us
                </Link>
              </li>
        

            </ul>
          </div>
          <div className="d-flex align-items-center justify-content-end">
        
            <div className="flex-shrink-0 dropdown">
              <a
                to="/"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small shadow">

                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>




  )
}

export default Navbar