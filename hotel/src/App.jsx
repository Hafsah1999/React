import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Blog from './components/Blog'
import More from './components/More'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'




function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Rooms" element={<Rooms />}></Route>
            <Route path="Blog" element={<Blog />}></Route>
            <Route path="More" element={<More />}></Route>
            <Route path="AboutUs" element={<AboutUs />}></Route>
            <Route path="ContactUs" element={<ContactUs />}></Route>

          </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;