import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert } from '@material-tailwind/react'
import Navigations from './components/navigations'
import Home from './pages/home'
import AboutMe from './pages/about-me'
import Portfolio from './pages/portfolio';

function App() {
  return (
    <>
      <div style={{ position: "absolute", right: 5, top: 5 }}>
        <Alert color='light-blue' className='py-2' icon={<i class="fa-solid fa-hammer"></i>}>This site is still under construction</Alert>
      </div>
      <Router>
        <Navigations />
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/about-me' element={<AboutMe />} />
          <Route path='/portfolio/portfolio' element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
