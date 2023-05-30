import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);



  return (
    <>
      <Nav aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} projRef={projRef} contactRef={contactRef} />
      <Header />
      <div ref={aboutRef}></div>
      <About  />
      <hr ref={educationRef}/>
      <Education />
      <hr ref={workRef}/>
      <WorkExperience />
      <hr ref={projRef}/>
      <Projects />
      <hr ref={contactRef}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App
