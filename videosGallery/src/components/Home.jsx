import React from 'react'
import { Link} from 'react-router-dom'
import video from './videos/video-1.mp4'
import video2 from './videos/video-2.mp4'
import video3 from './videos/video-3.mp4'
import video4 from './videos/video-4.mp4'
import video5 from './videos/video-5.mp4'
import video6 from './videos/video-6.mp4'
import video7 from './videos/video-7.mp4'
import video8 from './videos/video-8.mp4'
import video9 from './videos/video-9.mp4'
import video10 from './videos/video-10.mp4'
import video11 from './videos/video-11.mp4'
import video12 from './videos/video-12.mp4'
import video13 from './videos/video-13.mp4'
import video14 from './videos/video-14.mp4'
import video15 from './videos/video-15.mp4'

const Home = () => {
  return (
    <>

      <div className="container-fluid mt-5">
        <div className="row">

          {/* Sidenav */}
          <div className="col-md-1 bg-dark bg-opacity-25" style={{ height: "600px", position: "fixed" }}>
            <Link className="nav-link"to="/Home">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-house-door mt-5 ms-4" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>
            </Link>
            <p className="text-center">Home</p>


            <Link className="nav-link"to="/shorts">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-fast-forward-circle-fill ms-4 mt-2" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.79 5.093 8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .79-.407Z" />
              </svg>

            </Link>
            <p className="text-center">Shorts</p>

            <hr />


            <Link className="nav-link"to="/History">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-clock-history ms-4 mt-2" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </Link>
            <p className="text-center">History</p>

            <Link className="nav-link"to="/Library">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className=" ms-4 mt-2 bi bi-collection-play" viewBox="0 0 16 16">
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
              </svg>

            </Link>
            <p className="text-center">Library</p>

            <Link className="nav-link"to="Watch">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-stopwatch ms-4 mb-1 mt-2" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
              </svg>

            </Link>
            <p className="">Watch Later</p>

          </div>

          {/* Main-content */}
          <div className="col-md-11 " style={{ marginLeft: "110px" }}>
            <div className="row">

            <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Cock">
                    <video src={video9} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Cock</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>
         
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="Fishes">
                    <video src={video8} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Fishes</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>


              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                  <Link className="nav-link"className="nav-link"to="/Dog"><video src={video3} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Dog</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                  <Link className="nav-link"className="nav-link"to="/Lion">
                    <video src={video4} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">  Lion</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Penguin">
                    <video src={video5} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Penguin</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Elephant">
                    <video src={video6} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2"> Elephant</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Eagle">
                    <video src={video7} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Eagle</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

          
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                   <Link className="nav-link"className="nav-link"to="/Rabbit"><video src={video} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2"> Rabbit </h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link> 
                  </div>
                </div>
              </div>

              
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                  <Link className="nav-link"className="nav-link"to="/Swan"><video src={video2} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Swan</h4>
                    <p className="text-muted mb-1">Birds</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Penguins">
                    <video src={video10} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">  Penguins</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Deers">
                    <video src={video11} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">  Deers</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Sheep">
                    <video src={video12} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">   Sheep</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Cat">
                    <video src={video13} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2">  Cat</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"className="nav-link"to="/Fox">
                    <video src={video14} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2"> Fox</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mt-4">
                  <div className="card-body">
                    <Link className="nav-link"to="/Deers">
                    <video src={video15} controls style={{ width: "340px" }}></video>
                    <h4 className="mt-2"> Deers</h4>
                    <p className="text-muted mb-1">Animals</p>
                    <small className=''>9.5M views . 1 year ago</small>
                    </Link>
                  </div>
                </div>
              </div>

            </div>




          </div>

        </div>
      </div>

    </>
  )
}

export default Home

