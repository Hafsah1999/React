import React from 'react'

const Contact = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="row bgimg2">

                    <div className="card about shadow bg-dark bg-opacity-25">
                        <div className="row">
                            <div className="col-md-6">

                                <div className="card-body">
                                    <img style={{ height: "425px", width: "380px" }} src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-title">
                                    <h1 className='about-head mt-4 mb-0'>Talk to us</h1>
                                </div>
                                <div className="card-body ms-5 w-75">
                                    <form>
                                        <label htmlFor="fname">First name</label>
                                        <input type="text" className='form-control   bg-transparent bg-opacity-25 about-form  p-2 mb-2' />
                                        <label htmlFor="lname">Last name</label>
                                        <input type="text" className='form-control p-2  mb-2 bg-transparent bg-opacity-25 about-form' />
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className='form-control p-2 mb-2 bg-transparent bg-opacity-25 about-form' />
                                        <label className="form-label">Comments/Questions</label>
                                        <input className="form-control  mb-2 bg-transparent bg-opacity-25 about-form" ></input>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact