import React from 'react'

const AboutUs = () => {
  const Read = () => {
    let X = document.getElementById("Demo");
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

      <div className="container-fluid  bg-about ">
        <div className="card card-about bg-light bg-opacity-25">
          <div className="card-body">
            <h1 className='text-center text-light mt-5 mb-3'>About Us</h1>
            <p className="text-center text-light mt-5  mb-3 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi cum dolores qui perspiciatis nihil soluta eius officiis alias in? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nulla vero quisquam est voluptate incidunt doloribus dolores illo quod error?Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque possimus non eligendi, saepe veniam, quo recusandae voluptate dolores hic assumenda sequi animi voluptates dignissimos facere soluta quis eius architecto suscipit omnis molestias! Optio, laudantium at nemo odit quos exercitationem quaerat ab quis cupiditate amet commodi enim velit ducimus nam!</p>
            <p className="text-center text-light mt-2  mb-3 " id="Demo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quae, non similique optio omnis laboriosam voluptate iste amet, explicabo repudiandae tenetur? Deleniti unde, vero placeat neque quis facere, laudantium libero impedit aliquam quaerat dolores cum fugiat? Minima voluptatem quasi beatae ad, excepturi quos! Sint similique iste dicta nemo autem veritatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam quidem adipisci, voluptate amet praesentium aut magnam tempora, fugit unde laboriosam culpa neque illum velit quasi et, modi quos possimus iste debitis. Corrupti tempore praesentium reprehenderit cupiditate, recusandae veritatis fugiat nam dolore ipsa sed est incidunt quo animi quod esse sint tempora modi libero dicta possimus atque? Optio, numquam mollitia consequatur at tempora pariatur. Reprehenderit sed harum corrupti rem rerum,</p>
            <button className='btn btn-dark fs-5 d-block m-auto w-25 mt-5' onClick={Read} >READ MORE..</button>


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

export default AboutUs