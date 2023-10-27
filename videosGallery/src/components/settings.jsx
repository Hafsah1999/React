import React from 'react'

const Settings = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-6  settings ">
                        <div className="card card1 mb-3">
                            <h4 className="mb-4 text-center mt-3">Personal Information</h4>
                            <img className=' d-block m-auto mb-2' src="https://cdn-icons-png.flaticon.com/512/17/17004.png" style={{ height: "60px", width: "60px" }} alt="loading.." /> <span className=" text-center mb-4">Upload Your Image</span>
                            <form>
                                <input type="text" className='form-control mb-2 bg-dark bg-opacity-25 w ms-5' placeholder='Full Name' />
                                <input type="email" className='form-control mb-2 bg-dark bg-opacity-25 w ms-5' placeholder='Email Address' />
                                <input type="text" className='form-control mb-5 bg-dark bg-opacity-25 w ms-5' placeholder='Phone Number' />
                            </form>
                        </div>

                        <div className="card card1">
                            <h4 className="mb-4 text-center mt-3">Security Settings</h4>
                            <h6 className="mb-3 ms-5 mt-3">Two Factor Authentication</h6>

                            <div className="row">
                                <div className="col-md-6 ms-5">
                                    <form>
                                        <label htmlFor="password">Change Password</label>
                                        <input type="text" className='form-control mt-1 mb-0  bg-dark bg-opacity-25' placeholder='Enter Your Password' />
                                    </form>

                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-danger mt-2 ms-5">Send</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="col-md-6  settings ">
                        <div className="card card2">


                            <h4 className="mb-4 text-center mt-3">Feedback Channels</h4>
                            <h6 className="mb-2 ms-5">Choose where customers can give feedback</h6>
                            <div className="conatiner">
                                <button className="btn ms-5  text-muted" style={{ border: "none" }}>Website</button> <br />
                                <button className="btn ms-5 text-muted" style={{ border: "none" }}>Forms</button> <br />
                                <button className="btn ms-5 mb-4 text-muted" style={{ border: "none" }}>Email</button>
                            </div>
                            <h4 className="mb-4 text-center">Notifications</h4>
                            <h6 className="mb-2 ms-5 text-muted mb-3">Get emails when new feedback comes in</h6>
                            <h6 className="mb-2  ms-5 text-muted mb-4">Security alerts</h6>
                            <h5 className="mb-3 text-center">How feedback Appears</h5>

                            <form>
                                <h6 className="mb-2 ms-5  text-muted mb-3">Choose if feedback is public or private</h6>
                                <input type="radio" id="html" name="fav_language" className='ms-5' value="HTML" />
                                <label htmlFor="html">Public</label><br />
                                <input type="radio" id="css" name="fav_language" value="CSS" className='ms-5' />
                                <label htmlFor="css">Private</label><br />
                            </form>

                        </div>

                    </div>

                    <div className="row">
                        <div className="card ms-2 mt-4">
                        <h4 className="mb-4 mt-3 ms-5">Need Any Help?</h4>
                        <p className="text-dark opacity-75 mb-3 ms-5">Access documentation,FAQs,and support resources</p>
                        <label htmlFor="password" className='ms-5'>Write Your Thoughts?</label>
                        <textarea type="text" className='form-control mt-2 mb-5 bg-dark bg-opacity-25 ms-5 w-75' placeholder='' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings