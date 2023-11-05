
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Player from './components/Player'
import Library from './components/Library'



const App = () => {
  return (
    <div className='main-content'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/Logo" element={<Logo />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App