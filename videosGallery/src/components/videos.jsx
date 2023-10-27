import React from 'react'
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



const Videos = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                <div className="col-md-3 " style={{ marginTop: "70px" }}>
                        <video src={video} controls style={{ width: "300px" }} className=''></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "70px" }}>
                        <video src={video2} controls style={{ width: "300px" }} ></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "70px" }}>
                        <video src={video3} controls style={{ width: "300px" }}></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "70px" }}>
                        <video src={video4} controls style={{ width: "300px" }}></video>
                    </div>
                </div>

                <div className="row ">
                <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video5} controls style={{ width: "300px" }} className=''></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video6} controls style={{ width: "300px" }} ></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video7} controls style={{ width: "300px" }}></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video8} controls style={{ width: "300px" }}></video>
                    </div>
                </div>

                <div className="row ">
                <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video9} controls style={{ width: "300px" }} className=''></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video10} controls style={{ width: "300px" }} ></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video11} controls style={{ width: "300px" }}></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video12} controls style={{ width: "300px" }}></video>
                    </div>
                </div>

                <div className="row ">
                <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video13} controls style={{ width: "300px" }} className=''></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video14} controls style={{ width: "300px" }} ></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video15} controls style={{ width: "300px" }}></video>
                    </div>
                    <div className="col-md-3 " style={{ marginTop: "20px" }}>
                        <video src={video} controls style={{ width: "300px" }}></video>
                    </div>
                </div>

            </div>

        

           


        </>
    )
}

export default Videos