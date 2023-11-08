import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>

      <div className="bg-dark">
        <div className="container d-flex align-items-center justify-content-center " style={{ height: "100vh" }}>


           <Link to="/Content" className='nav-link'> <h1 className="">Expense Tracker</h1></Link>
          </div>
        </div>

    </>
  )
}

export default Home