import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import HTML from './components//HTML/HTML'
import Definition from './components/HTML/HTMLDefinition'
import History from './components/HTML/HTML'
import Tags from './components/HTML/Tags'
import Editors from './components/HTML/Editors'
import Attributes from './components/HTML/Attributes'
import Video from './components/HTML/video'
import Css from './components/CSS/Css'
import CssDefinition from './components/CSS/CSSDefinition'
import Selectors from './components/CSS/selectors'
function App() {
 

  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes >
    <Route path="/" element={<Logo/>} />
      <Route path="/Logo" element={<Logo/>} />
      <Route path="/HTML" element={<HTML/>}></Route>
      <Route path="/Definition" element={<Definition/>}></Route>
      <Route path="/History" element={<History/>}></Route>
      <Route path="/Tags" element={<Tags/>}></Route>
      <Route path="/Editors" element={<Editors/>}></Route>
      <Route path="/Attributes" element={<Attributes/>}></Route>
      <Route path="/Video" element={<Video/>}></Route>
      <Route path="/Css" element={<Css/>}></Route>
      <Route path="/CSSDefinition" element={<CssDefinition/>}></Route>
      <Route path="/selectors" element={<Selectors/>}></Route>
      
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
