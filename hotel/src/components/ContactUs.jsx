import React from 'react'

const ContactUs = () => {
    const Submit = () => {
        alert("Submitted Successfully")
    }
    return (
        <>

            <div className="container-fluid bg-contact">
                <div className="card bg-dark bg-opacity-25 contact-card">
                    <div className="card-body">
                        <div className="card bg-light bg-opacity-25 contact-card-2 d-block m-auto">
                            <h2 className="text-center text-light mt-5 mb-2 ">Contact Us</h2>



                            <>
                                <div className='form-floating w-75 ms-5 mt-4'>

                                    <input type="text" className='form-control bg-light bg-opacity-50' id="floatingInput" placeholder='name@gmail.com' />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className='form-floating w-75 ms-5 mt-4'>
                                    <input type="text" className='form-control bg-light bg-opacity-50' id="floatingPassword" placeholder='name@gmail.com' />
                                    <label htmlFor="floatingPassword ">Password</label>
                                </div>
                            </>

                            <button className="btn btn-dark d-block m-auto fs-4 mt-4 w-50" onClick={Submit}>
                                SUBMIT
                            </button>



                        </div>

                    </div>

                </div>
            </div>

           </>
    )
}

export default ContactUs