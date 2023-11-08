import React from 'react'
import Data from './Data'


const Library = () => {

  const [product, setProduct] = React.useState(Data)

  const searchProduct = (e) => {
    const search = e.target.value
    let filteredProduct = Data.filter((product) => {
      return product.brand.toLowerCase().includes(search.toLowerCase());
    });
    setProduct(filteredProduct)


  }

  const musicLibrary = () => {
    return product.map((obj) => (
      <>
        <div className="col-md-2">
          <div className="card mb-3 bg-light bg-opacity-25 shadow-lg">
            <img src={obj.image} alt="" className='img-card-top img' />
            <div className="card-body">

              <marquee className="text-light">{obj.album}</marquee>
              <p className="text-muted">{obj.artist}</p>
            </div>
          </div>
        </div>
      </>
    ))
  }
  return (
    <>
      <section>
        <div className="container ">
          <div className="row">

            <input type="search" placeholder='Search' onChange={searchProduct} className='form-control w-50 d-block m-auto' />



            <h1 className="fs-1 text-center fw-bold text-light mb-4 mt-3">Browse Music</h1>
            {musicLibrary()}
          </div>
        </div>
      </section>
    </>
  )
}

export default Library