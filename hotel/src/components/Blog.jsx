import React from 'react'

const Blog = () => {
  const Read  = () => {
    let X = document.getElementById("Demo");
    if
      (X.style.display === "none") {
      X.style.display = "block";
    }
    else {
      X.style.display = "none";
    }
  }
  const More = () => {
    let X = document.getElementById("Dem");
    if
      (X.style.display === "none") {
      X.style.display = "block";
    }
    else {
      X.style.display = "none";
    }
  }
  return (
    <>

      <div className="conatiner-fluid  bg-blog ">
        {/* <div className="container">
        <h6 className="text-center text-muted  mb-0 ">Say Hello To Our Visitors</h6>
        <h2 className=' text-center mt-0 display-4 mb-4 fw-bold'>Our Blog</h2>
        </div> */}
        <div className="conatiner ">
          <div className="row">
            <div className="col-md-6  img-blog">
              <div className="card bg-light  card-1 ">
                <div className="card-body">
                  <h3 className="">RELAX ZONE</h3>
                  <p className='text-muted'>BY ADMIN 7 OCTOBER , 2023</p>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, error.</p>
                  <p id="Demo">Lorem ipsum dolor sit amet consectetur adipisicing elit.  quidem nisi expedita praesentium sint error quaerat.</p>
                  <button className="btn-card p-2 w-50 mb-2" onClick={Read}>Read More</button>
                </div>


              </div>
            </div>

            <div className="col-md-6 img-blog">
              <div className="card bg-light card-1 ">
                <div className="card-body">
                  <h3 className="">RELAX ZONE</h3>
                  <p className='text-muted'>BY ADMIN 7 OCTOBER , 2023</p>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, error.</p>
                  <p id="Dem">Lorem ipsum dolor sit amet consectetur adipisicing elit.  quidem nisi expedita praesentium sint error quaerat.</p>
                  <button className="btn-card p-2 w-50 mb-2 " onClick={More}>Read More</button>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="">
        <div className="card footer-card w-100 p-3 mt-4 mb-0">

          <div className="row">
            <div className="col-md-5">
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group"><h4><span className="fw-bold fs-3">Get access to exclusive deals</span> <br /><span className="text-muted">Only the best deals reach your inbox</span></h4></li>
                  <li className="list-group text-align-center"></li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-body">
                <form>

                  <input type="text" className=" p-2  me-0 border" placeholder="e.g.,john@gmail.com" />
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-body">
                <button className=" btn btn-danger  ms-0">Notify Me</button>
              </div>
            </div>


          </div>
        </div >

        <div className="container-fluid">

          <footer className="p-3 bg-dark bg-opacity-50">
            <ul className="nav justify-content-center  pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
          </footer>
        </div>


      </footer >



    </>
  )
}

export default Blog