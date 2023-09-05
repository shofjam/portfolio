import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Alert } from '@material-tailwind/react'
import Navigations from './components/navigations'
import Home from './pages/home'
import AboutMe from './pages/about-me'

function App() {
  return (
    <>
      <div style={{ position: "absolute", right: 40, top: 40 }}>
        <Alert color='light-blue' icon={<i class="fa-solid fa-hammer"></i>}>This site is still under construction</Alert>
      </div>
      <Router>
        <Navigations />
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/about-me' element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
