
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Content from './MainContent/Content'




const App = () => {
  return (
    <>
       <BrowserRouter>

       <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Content" element={<Content />}/>
       </Routes>
       </BrowserRouter>
    
    </>
  )
}

export default App