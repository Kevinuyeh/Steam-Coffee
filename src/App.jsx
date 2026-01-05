import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Home/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element= {<About />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
