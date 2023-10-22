import React from 'react'
import {Link } from 'react-router-dom'

const Home = () => {
   
    return (
        <div>

            <div className="container-fluid">
                <div className="row bgimg">
                    <div className="card home-card bg-transparent bg-opacity-25" >
                        <h4 className='text mb-0  fw-bold'>There is no hand to catch time.</h4>
                        <h1 className=" text-2 mb-0 display-2 ms-5 fw-bold ">Welcome To <span className="text-warning fw-bold " style={{ fontFamily: "serif" }}>INDIA</span></h1>
                        <h3 className=" mb-3 text-3">India once is not enough.</h3>
                        <Link to="/signup"><button className="btn w-25 text-center btn-home fs-5  btn-success" style={{ fontFamily: "serif" }}>SIGNUP HERE</button>
                        </Link>
                    </div>

                </div>
            </div>


        </div >


    )
}

export default Home