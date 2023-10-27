
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Videos from './components/videos'

import Home from './components/Home'
import Rabbit from './components/rabbit'
import Swan from './components/Swan'
import Dog from './components/Dog'
import Lion from './components/Lion'
import Login from './components/Login'
import Settings from './components/settings'
import Profile from './components/profile'

import Elephant from './components/Elephant'
import Penguin from './components/penguin'
import Deers from './components/Deers'
import Cat from './components/Cat'
import Cock from './components/Cock'
import Eagle from './components/Eagle'
import Fishes from './components/Fishes'
import Fox from './components/Fox'
import Penguins from './components/Penguins'
import Sheep from './components/Sheep'
import Shorts from './components/shorts'
import History from './components/History'
import Clear from './components/Clear'




function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/History" element={<History />} />
          <Route path="/Clear" element={<Clear />} />

          <Route path="/Rabbit" element={<Rabbit />} />
          <Route path="/Swan" element={<Swan />} />
          <Route path="/Dog" element={<Dog />} />
          <Route path="/Lion" element={<Lion />} />
          <Route path="/Fox" element={<Fox />} />
          <Route path="/Penguin" element={<Penguin />} />
          <Route path="/Deers" element={<Deers />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/Cock" element={<Cock />} />
          <Route path="/Eagle" element={<Eagle />} />
          <Route path="/Fishes" element={<Fishes />} />
          <Route path="/Penguins" element={<Penguins />} />\
          <Route path="/Sheep" element={<Sheep />} />
          <Route path="/Elephant" element={<Elephant />} />





        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
