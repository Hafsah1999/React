import React from 'react'
import Data from './galleryData'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Gallery = () => {
  const displayGallery = () => {
    return Data.map((obj) => (
      <>
        <div className="col-md-3">
          <div className="card shadow  m-2" style={{ height: "400px" }}>
            <img src={obj.Image} alt="loading" className='img' />
            <div className="card-body">
              <h3 className="text-center">{obj.place}</h3>
              <p className="text-muted text-center">{obj.content}</p>
            </div>
          </div>
        </div>
      </>
    ));
  };

  const displayPics = () => {
    return Data.map((obj) => (
      <>
        <div className="row">
          <div className="card shadow mb-3  bg-dark bg-opacity-25 rounded">
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="card shadow p-1 mb-5 bg-white rounded">
                  <img src={obj.Image} alt="" />
                </div>

              </div>
              <div className="col-md-6">
                <h3 className="mt-5 ms-3 fs-1">{obj.place}</h3>
                <p className="mt-2 ms-3 fs-5">{obj.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
    )
  };
  const displayCard = () => {
    return Data.map((obj) => (
      <>
        <div className="col-md-3 mt-3  ">
          <div className="card shadow  m-3 bg-light  bg-opacity-25" style={{ height: "80px" }}>
          
            <div className="card-body">
              <h3 className="text-center mt-1 fs-2">{obj.place}</h3>
             
            </div>
          </div>
        </div>

      </>
  )
 )
  };

const displaySearch = (e) => {
  const Search = e.target.value
  let filteredProduct = Data.filter((product) => {

    return product.Brand.toLowerCase().includes(Search.toLowerCase());

  });
        setProduct(filteredProduct);
}

        return (
        <div>

          <section>

            <h1 className='text-center mb-1 py-2 fs-1  bg-opacity-25 fw-bold gallery'></h1>
            <div className="card mb-1 header-card bg-danger bg-opacity-25" style={{ border: "none", height: "150px" }}>
              <div className="card-title">

                <h1 className='text-center mt-2 text-primary mb-0 py-3 fs-1 fw-bold  ' style={{ fontFamily: "serif" }}>GALLERY</h1>

                <div className="input-group  w-50 mx-auto">
                  <input type="text" placeholder='SEARCH IMAGE..' onChange={displaySearch} className="form-control bg-dark bg-opacity-25 text-white px-4" style={{ border: "none", fontFamily: "serif" }} />
                  <button className="btn btn-dark w-25 p-2 ">Search</button>
                </div>
              </div>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src="https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Jama-Masjid.jpg?VersionId=.Wf3ospXo825iWlUmnn0ibGWYriljUqf&itok=hEG8y8lY" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.avaniholidays.in/images/media/images/packageimage/1468909147nageen-lake-srinagar-india-rajiv-sinha.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://tcigroup.co.in/wp-content/uploads/2020/07/landscape-2176348_1280.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.tripsavvy.com/thmb/IEwZ_VuFKpFOlQCsEd9Xi9wDSUc=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-685980588-5b05334d1d640400377ff8bf.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/places-to-visit-in-india-1545729050-785X440.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.treebo.com/blog/wp-content/uploads/2018/02/Webp.net-compress-image-10-3-1024x674.jpg" alt="" /></SwiperSlide>

            </Swiper>

          </section>

          <section>
            <div className="conatiner bg-dark bg-opacity-25">

              <div className="row my-4 ">
                {displayGallery()}
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                {displayPics()}
              </div>
            </div>
          </section>
        
          <section>
            <div className="conatiner bg-dark bg-opacity-25">

              <div className="row my-4 ">
                {displayCard()}
              </div>
            </div>
          </section>

        </div>

        )
}

        export default Gallery

