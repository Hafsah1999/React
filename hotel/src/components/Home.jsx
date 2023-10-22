import React from 'react'

const Home = () => {
  const Register = () => {
         let Person =  prompt("Please enter your name");
         if(Person != null)
         prompt("Enter Email");
         alert("Registered Successfully");
  }
  return (
    <>
    
    <div className="container-fluid bg-img">
      <div className="conatiner p-5 ms-5  ">
        <h1 className=' display-3 ms-3 mt-5 p-4 fw-bold text-light site-title'>Spend Quality <br />Holidays With Us</h1>
        <h4 className=" text-light fs-5 mt-0 ms-5 sub-title " >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Itaque voluptas eveniet inventore praesentium laudantium quae?</h4>
    <button className="btn btn-outline-light ms-5 mt-4 p-2 w-25 fs-4 fw-bold "  onClick={Register}>REGISTER</button>
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

export default Home