import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import Research from './pages/Research.jsx'
import Awards from './pages/Awards.jsx'
import Education from './pages/Education.jsx'
import Experience from './pages/Experience.jsx'

function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/research" element={<Research />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
