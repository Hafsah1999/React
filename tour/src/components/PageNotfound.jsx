import React from 'react'
import {Link} from 'react-router-dom'

const PageNotfound = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="row bgimg5">
                    <div className="container">
                        <h3 className="text-center page1 text-white">LOOKS LIKE YOU ARE LOST IN SPACE</h3>
                        <h2 className="text-center text-white page">404</h2>
                        <Link to="/Home" className='nav-link'><button className="btn btn-light d-block m-auto fw-bold fs-5 w-25 mt-3">Go Back</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PageNotfound