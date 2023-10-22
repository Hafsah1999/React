import React from 'react'

const More = () => {
  return (
    <>

      {/* Sidebar */}
      <div className="container-fluid  bg-dark bg-opacity-25">
      <div className="row ">
        <div className="col-md-3">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav className="nav nav-pills  flex-column">
              <a className="nav-link" href="#item-1">
                <h3 className="text-dark sidebar ">Filters</h3>
                <h5 className="text-dark">Popular Locations in Lucknow</h5>
              </a>
              <nav className="nav nav-pills flex-column">
                <form className="nav-link ms-1 my-1" href="#item-1-1">
                  <label htmlFor="Search"></label>
                  <input
                    className="p-1 w-100 border rounded"
                    type="Search"
                    placeholder="  Search..."
                  />
                </form>
                <a
                  className="nav-link ms-4 text-dark border rounded mb-2 w-50 "
                  href="#item-1-2"
                >
                  Alambagh
                </a>
                <a
                  className="nav-link ms-4 text-dark border rounded mb-2 w-50 "
                  href="#item-1-2"
                >
                  Charbagh
                </a>
                <a
                  className="nav-link ms-4 text-dark border rounded mb-2 w-50 "
                  href="#item-1-2"
                >
                  Hazratganj
                </a>
                <a
                  className="nav-link ms-4 text-dark border rounded mb-2 w-50  "
                  href="#item-1-2"
                >
                  Gomti Nagar
                </a>
                <a
                  className="nav-link ms-4 text-dark border rounded w-50 mb-3"
                  href="#item-1-2"
                >
                  Hussainganj
                </a>

                <button className=" btn btn-light w-50 ms-4 text-danger">
                  +view more
                </button>
              </nav>

              {/* item2 */}
              <a className="nav-link" href="#item-2">
                <h5 className="text-dark"> Price</h5>
                <>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input
                    type="range"
                    className="form-range "
                    min={0}
                    max={100}
                    id="customRange2"
                  />
                </>
              </a>
              <></>

              {/* item3 */}

              <a className="nav-link" href="#item-3">
                <h5 className="text-dark"> Collections</h5>
              </a>
              <nav className="nav nav-pills flex-column">
                <form>
                  <a className="nav-link" href="#item-3">
                    <input type="checkbox" className="m-2 me-2 " />
                    <label htmlFor="" className="text-dark">
                      Family Hotels
                    </label>
                  </a>{" "}
                  <a className="nav-link" href="#item-3">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      For Group Travellers
                    </label>
                  </a>{" "}
                  <a className="nav-link" href="#item-3">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      Local IDs Accepted
                    </label>
                  </a>
                  <a className="nav-link" href="#item-3">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      Welcome Couples
                    </label>
                  </a>
                  <a className="nav-link" href="#item-3">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      Business Travellers
                    </label>
                  </a>
                </form>

                <button className=" btn btn-light w-50 ms-4 mt-1 text-danger">
                  +view more
                </button>
              </nav>

              {/* item4 */}

              <a  className="nav-link" href="#item-4">
                <h5 className="text-dark"> Categories</h5>
              </a>
              <nav className="nav nav-pills flex-column">
                <form>
                  <a  className="nav-link text-dark" href="#item-4">
                    <input type="checkbox" className="m-2 " />
                    <span className="fw-bold ">Rooms - </span>Super affordable
                    stays with essential amenities
                  </a>{" "}
                  <a  className="nav-link text-dark" href="#item-4">
                    <input type="checkbox" className="m-2 me-2" />
                    <span className="fw-bold ">Premium - </span>Hotels at prime
                    location with premium amenities
                  </a>{" "}
                </form>

                <button className=" btn btn-light w-50 ms-4 mt-1 text-danger">
                  +view more
                </button>
              </nav>

              {/* item5 */}

              <a  className="nav-link" href="#item-5">
                <h5 className="text-dark"> Accomodation type</h5>
              </a>
              <nav className="nav nav-pills flex-column">
                <form>
                  <a  className="nav-link text-dark" href="#item-5">
                    <input type="checkbox" className="m-2 " />
                    Home
                  </a>{" "}
                  <a className="nav-link text-dark" href="#item-5">
                    <input type="checkbox" className="m-2 me-2" />
                    Hotel
                  </a>{" "}
                </form>

                <button className=" btn btn-light w-50 ms-4 mt-1 text-danger">
                  +view more
                </button>
              </nav>

              {/* item6 */}

              <a className="nav-link" href="#item-6">
                <h5 className="text-dark"> Collections</h5>
              </a>
              <nav className="nav nav-pills flex-column">
                <form>
                  <a  className="nav-link" href="#item-6">
                    <input type="checkbox" className="m-2 me-2 " />
                    <label htmlFor="" className="text-dark">
                      Seating Area
                    </label>
                  </a>{" "}
                  <a className="nav-link" href="#item-6">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      Balcony
                    </label>
                  </a>{" "}
                  <a className="nav-link" href="#item-6">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      Full sized bed
                    </label>
                  </a>
                  <a className="nav-link" href="#item-6">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      King sized bed
                    </label>
                  </a>
                  <a className="nav-link" href="#item-6">
                    <input type="checkbox" className="m-2 me-2" />
                    <label htmlFor="" className="text-dark">
                      Queen sized bed
                    </label>
                  </a>
                </form>

                <button className=" btn btn-light w-50 ms-4 mt-1 text-danger">
                  +view more
                </button>
              </nav>

              {/* item7 */}
              <a  className="nav-link " href="#item-7">
                <h5 className="text-dark "> Chech-in-features</h5>
              </a>
              <nav className="nav nav-pills flex-column">
                <form>
                  <a className="nav-link" href="#item-7">
                    <input type="checkbox" className="m-2 me-2 " />
                    <label htmlFor="" className="text-dark mb-5">
                      Pay at Hotel
                    </label>
                  </a>{" "}
                </form>
              </nav>
            </nav>
          </nav >
        </div >

        {/* main-content */}

        < div className="col-md-9" >
          <div className="container-fluid">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabIndex={0}
            >
              <div id="item-1">
                <div className="row featurette mt-5">
                  <div className="col-md-7  order-md-2">
                    <h2 className="featurette-heading ms-3 fw-bold fs-3 sidebar">
                      Dream Heaven Production House{" "}
                    </h2>
                    <p className="lead fs-5 ms-3">
                      Plot No.1 IIM chauraha Opposite Eldeco City Lucknow,{" "}
                      <br /> Lucknow.
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                          <li className="list-group">
                            <p>
                              <span className="text-danger fs-3 fw-bold me-2 ms-3">
                                ₹399
                              </span>
                              <del className="text-muted fs-5 me-1">₹2557</del>{" "}
                              <span className="text-warning fw-bold">
                                84% off
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-12 text-start ms-3">
                        <button
                          type="button"
                          className=" btn-outline-dark p-2 me-2"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          className="btn-2 p-2  text-light  "
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <img
                      className="room-img sidebar"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/55/d9/26/room.jpg?w=700&h=-1&s=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr className="featurette-divider " />

              <div id="item-2">
                <div className="row featurette mt-5">
                  <div className="col-md-7  order-md-2">
                    <h2 className="featurette-heading ms-3 fw-bold fs-3">
                      Dream Heaven Production House{" "}
                    </h2>
                    <p className="lead fs-5 ms-3">
                      Plot No.1 IIM chauraha Opposite Eldeco City Lucknow,{" "}
                      <br /> Lucknow.
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                          <li className="list-group">
                            <p>
                              <span className="text-danger fs-3 fw-bold me-2 ms-3">
                                ₹399
                              </span>
                              <del className="text-muted fs-5 me-1">₹2557</del>{" "}
                              <span className="text-warning fw-bold">
                                84% off
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-12 text-start ms-3">
                        <button
                          type="button"
                          className=" btn-outline-dark p-2 me-2"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          className="btn-2 p-2  text-light  "
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <img
                      className="room-img"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/55/d9/26/room.jpg?w=700&h=-1&s=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr className="featurette-divider " />

              <div id="item-3">
                <div className="row featurette mt-5">
                  <div className="col-md-7  order-md-2">
                    <h2 className="featurette-heading ms-3 fw-bold fs-3">
                      Dream Heaven Production House{" "}
                    </h2>
                    <p className="lead fs-5 ms-3">
                      Plot No.1 IIM chauraha Opposite Eldeco City Lucknow,{" "}
                      <br /> Lucknow.
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                          <li className="list-group">
                            <p>
                              <span className="text-danger fs-3 fw-bold me-2 ms-3">
                                ₹399
                              </span>
                              <del className="text-muted fs-5 me-1">₹2557</del>{" "}
                              <span className="text-warning fw-bold">
                                84% off
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-12 text-start ms-3">
                        <button
                          type="button"
                          className=" btn-outline-dark p-2 me-2"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          className="btn-2 p-2  text-light  "
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <img
                      className="room-img"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/55/d9/26/room.jpg?w=700&h=-1&s=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr className="featurette-divider " />

              <div id="item-4">
                <div className="row featurette mt-5">
                  <div className="col-md-7  order-md-2">
                    <h2 className="featurette-heading ms-3 fw-bold fs-3">
                      Dream Heaven Production House{" "}
                    </h2>
                    <p className="lead fs-5 ms-3">
                      Plot No.1 IIM chauraha Opposite Eldeco City Lucknow,{" "}
                      <br /> Lucknow.
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                          <li className="list-group">
                            <p>
                              <span className="text-danger fs-3 fw-bold me-2 ms-3">
                                ₹399
                              </span>
                              <del className="text-muted fs-5 me-1">₹2557</del>{" "}
                              <span className="text-warning fw-bold">
                                84% off
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-12 text-start ms-3">
                        <button
                          type="button"
                          className=" btn-outline-dark p-2 me-2"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          className="btn-2 p-2  text-light  "
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <img
                      className="room-img"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/55/d9/26/room.jpg?w=700&h=-1&s=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr className="featurette-divider " />

              <div id="item-5">
                <div className="row featurette mt-5">
                  <div className="col-md-7  order-md-2">
                    <h2 className="featurette-heading ms-3 fw-bold fs-3">
                      Dream Heaven Production House{" "}
                    </h2>
                    <p className="lead fs-5 ms-3">
                      Plot No.1 IIM chauraha Opposite Eldeco City Lucknow,{" "}
                      <br /> Lucknow.
                    </p>

                    <div className="row">
                      <div className="col-md-12">
                        <ul className="list-group list-group-flush">
                          <li className="list-group">
                            <p>
                              <span className="text-danger fs-3 fw-bold me-2 ms-3">
                                ₹399
                              </span>
                              <del className="text-muted fs-5 me-1">₹2557</del>{" "}
                              <span className="text-warning fw-bold">
                                84% off
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-12 text-start ms-3">
                        <button
                          type="button"
                          className=" btn-outline-dark p-2 me-2"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          className="btn-2 p-2  text-light  "
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <img
                      className="room-img"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/55/d9/26/room.jpg?w=700&h=-1&s=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>



            </div>
          </div>
    
      </div >

      <hr className="featurette-divider " />
      <footer className="container-fluid">
        <div className="card w-100 p-3 mt-4 mb-0">

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

                  <input type="text" className=" p-2 w-100 me-0 border" placeholder="e.g.,john@gmail.com" />
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card-body">
                <button className=" btn btn-danger w-50  ms-0">Notify Me</button>
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
      </div>
      </div>
    </>
  )
}

export default More