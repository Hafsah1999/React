import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Signup from './components/signup'
import Login from './components/login'
import Contact from './components/contact'
import Profile from './components/profile'
import PageNotfound from './components/PageNotfound'
import About from './components/About'
import Settings from './components/settings'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotfound />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
