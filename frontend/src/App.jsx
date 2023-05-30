import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Nav />
      <Header />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App
