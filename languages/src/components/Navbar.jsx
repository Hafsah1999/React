import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>



      <div className="conatainer-fluid sticky-top">

        <nav className=" bg-body-tertiary  border-bottom">
          <div className="container-fluid d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <Link
                  to="/Logo"
                  className="nav-link   "

                >
                  <img className='logo me-2' src="https://media.istockphoto.com/id/1308416574/vector/h-letter-shape-logo.jpg?s=612x612&w=0&k=20&c=9rxNaehUph6MsI19PUnzLfLonKvhGPpABAGabaYs610=" alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link-body-emphasis ">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link-body-emphasis px-2">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link-body-emphasis px-2">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link-body-emphasis px-2">
                  About
                </Link>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link link-body-emphasis px-2">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link-body-emphasis px-2">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid bg-dark  header">
          <header className="d-flex justify-content-start sticky-top  py-1">
            <ul className="nav nav-pills">

              <li className="nav-item">
                <button className='nav-btn'><Link to="/HTML" className="nav-link text-white" aria-current="page">
                  HTML
                </Link></button>
              </li>

              <li className="nav-item">
                <button className='nav-btn'><Link to="/CSS" className="nav-link text-white">
                  CSS
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/JAVASCRIPT" className="nav-link text-white">
                  JAVASCRIPT
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'><Link to="/SQL" className="nav-link text-white">
                  SQL
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'><Link to="/PYTHON" className="nav-link text-white">
                  PYTHON
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'><Link to="/JAVA" className="nav-link text-white">
                  JAVA
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'><Link to="/PHP" className="nav-link text-white">
                  PHP
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'><Link to="/C" className="nav-link text-white">
                  C
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'><Link to="/BOOTSTRAP" className="nav-link text-white">
                  BOOTSTRAP
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/REACT" className="nav-link text-white">
                  REACT
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/MYSQL" className="nav-link text-white">
                  MYSQL
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/JQUERY" className="nav-link text-white">
                  JQUERY
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/NODEJS" className="nav-link text-white">
                  NODEJS
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/ANGULAR" className="nav-link text-white">
                  ANGULAR
                </Link></button>
              </li>
              <li className="nav-item">
                <button className='nav-btn'> <Link to="/EXCEL" className="nav-link text-white">
                  EXCEL
                </Link></button>
              </li>

            </ul>
          </header>
        </div>
      </div>


    </>
  )
}

export default Navbar