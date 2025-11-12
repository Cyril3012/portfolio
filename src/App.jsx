import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";


const App = () => {
return (
<div className="app">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/experience" element={<Experience />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<Footer />
</div>
)
}
export default App