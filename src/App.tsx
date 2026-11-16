import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigations from './components/navigations'
import Home from './pages/home'
import AboutMe from './pages/about-me'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navigations />
        <main className="site-main">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/about-me" element={<AboutMe />} />
            <Route path="/portfolio/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <span>© {new Date().getFullYear()} Shofhal Jamil</span>
            <span>Designed &amp; built with care.</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
