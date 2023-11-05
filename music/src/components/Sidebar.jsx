
import { Link } from 'react-router-dom'



const Sidebar = () => {
    return (
        <>

            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  ">
                <div className="col-md-3  ">
                    <Link to="/Logo"><img className="logo ms-3" src="https://wallpapers.com/images/hd/aesthetic-profile-picture-52t290ggbex44jma.jpg" alt="" />
                    </Link>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center  mt-1">
                    <li>
                    <Link to="/Feed"><button className="btn sidebar-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-columns-gap" viewBox="0 0 16 16">
                                <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                            </svg>
                                <small className="text-white">Feed</small>
                            </button></Link>
                    </li>
                    <li>
                    <Link to="/Trending"><button className="btn  sidebar-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-fire" viewBox="0 0 16 16">
                                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                                <small className='text-white'>Trending</small>
                            </button></Link>
                    </li>
                    <li>
                    <Link to="/Player" > <button className="btn sidebar-btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                                <small className="text-white">Player</small>
                            </button></Link>
                    </li>
                    <li>
                    <Link to="/Favorites"><button className="btn  sidebar-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                            </svg>
                                <small className="text-white">Favorites</small>
                            </button></Link>
                    </li>
                    <li>
                       
                            <Link to="/Library"><button className="btn  sidebar-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                                    <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z" />
                                </svg>
                                <small className="text-white">Library</small>
                            </button></Link>
                    </li>
                </ul>
                <div className="col-md-3 text-end">
                <Link to="/SignOut"><button className="btn mb-2 sidebar-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                <small className="text-white">SignOut</small>
                            </button></Link>
                </div>
            </header>





        </>
    )
}

export default Sidebar