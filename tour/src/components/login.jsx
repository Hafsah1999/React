import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <>


            <div className="conatiner-fluid">
                <div className="row bgimg2">
                    <div className="card  card-login bg-dark shadow bg-opacity-25">
                        <div className="card-title">
                            <h2 className="text-center mt-4 fs-1 " style={{ fontFamily: "serif" }}>Log In</h2>

                            <hr />
                            <div className="card-body">
                                <form>
                                    <input type="text" placeholder='e-mail' className='form-control p-2 mb-3 px-4 bg-transparent shadow' style={{ border: "none" }} />
                                    <input type="text" placeholder='password' className='form-control p-2 mb-3 px-4 bg-transparent shadow' style={{ border: "none" }} />

                                    <Link to="/Gallery"><button className=" btn w-100 mt-2 shadow fs-5 fw-bold btn-primary" style={{ fontFamily: "serif" }}>Log In</button>
                                    </Link>
                                </form>
                                <hr />
                                <p className="text-center mb-4 fs-5">Not a member? <Link to="/signup">Sign up</Link> now</p>




                            </div >
                        </div >
                    </div >
                </div >



            </div>
         </>
            )
}

            export default Login