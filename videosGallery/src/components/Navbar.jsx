import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
    
 
    return (
        <>

            <div className="navbar fixed-top" style={{backgroundColor:"lightgrey"}}>


                <div className="container-fluid">
                    <div className="col-md-3">
                        <Link to="/Home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </Link>
                        <Link to="/videos" className="navbar-brand ms-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                            </svg>
                        </Link>
                    </div>

                    <div className="col-md-5">

                        <form className="input-group me-3 ">
                            <input type="text" placeholder='Search' className="form-control search p-2 px-4  " />
                            <button className="btn search-btn btn-light ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="col-md-1 ">
                        <Link to="" className='ms-3 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" fill="black" className="bi bi-mic-fill mt-2 " viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </Link>

                    </div>


                    <div className="col-md-3 d-flex justify-content-end">
                        <Link to=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" fill="black" className="me-2 bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg></Link>


                        <div className="btn-group dropstart">
                            <Link to="/" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8dZh8XF3HubtyHp0V0AN8s6q6MktQ6Ixo-UhM4u7O7g3BttGqBMDmfeAyJcDvG05Rik&usqp=CAU" className='rounded-circle me-2' height={"30px"} width={"30px"} alt="" />
                            </Link>
                            <ul className="dropdown-menu">
                            <Link to="/profile"  className='nav-link'> <li className="dropdown-item">
                                    Profile
                                </li>
                                </Link>
                            <Link to="/settings"  className='nav-link'> <li className="dropdown-item">
                                    Settings
                                </li>
                                </Link>
                                <hr />
                                <Link to="/login"  className='nav-link'> <li className="dropdown-item">
                                    Signout
                                </li>
                                </Link>
                            </ul>
                        </div>




                    </div>
                </div>
            </div>

        </ >


    )
}

export default Navbar