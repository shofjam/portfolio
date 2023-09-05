import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigations from './components/navigations'
import Home from './pages/home'
import AboutMe from './pages/about-me'

function App() {
  return (
    <Router>
      <Navigations />
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/portfolio/about-me' element={<AboutMe />} />
      </Routes>
    </Router>
  )
}

export default App
