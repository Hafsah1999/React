import Data from './Data.jsx'

const Home = () => {
  const Recipes = () => {
    return Data.map((obj) => (
      <>
        <div className="col-md-3 mb-3">

          <div className="card shadow" style={{ height: "400px" }}>
            <img src={obj.Image} alt="" className='img-card' />

            <div className="card-body">
              {obj.veg ? <button className="btn btn-success d-block m-auto btn-sm">veg</button> : <button className="btn btn-success  d-block m-auto btn-sm">non-veg</button>}
              <h4 className="text-center mt-3">{obj.Dish}</h4>
              <button className=" btn-card d-block m-auto mt-3">{obj.button}</button>
            </div>
          </div>
        </div>
      </>
    ))
  }
  return (
    <div>

      <div className="conatiner d-flex justify-content-center align-items-center mt-5">
        <div className="title">
          <h2 className="fw-bold recipe-head fs-1 mb-4">Find Meals For Your Ingredient</h2>
          <h6 className="quote text-center  fs-5">Real food doesn&apos;t have ingredients, real food is ingredients. </h6>
          <h6 className="text-center quote-by mb-4">~Jamie Oliver</h6>
          <div className='input-group'>
            <input type="search" placeholder='Search...' className='form-control   search form-control-lg px-4 text-dark' />
            <button className=" btn-home"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg></button>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row mb-3">
            <h2 className="recipe-subhead fw-bold text-center mb-5 mt-5">Your Search Results:</h2>
            {Recipes()}
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home