import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './Pages/Hero/Hero'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Resume from './Pages/Resume/Resume'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </Router>
    </>
  )
}

export default App
