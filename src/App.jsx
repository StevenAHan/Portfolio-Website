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
import NYUExpanded from './components/NYUExpanded';
import { useRef } from 'react';
import VolunteerExperience from './components/VolunteerExperience';
import Skills from './components/Skills';
import EBHSExpanded from './components/EBHSExpanded';
import "./components/css/canvas.css";

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);
  const volRef = useRef(null);
  const skillRef = useRef(null);
  const [expandNYU, setExpandNYU] = useState(false);
  const [expandEBHS, setExpandEBHS] = useState(false);
  const toggleNYU = () => {
    setExpandNYU(prev => !prev);
  }
  const toggleEBHS = () => {
    setExpandEBHS(prev => !prev);
  }

  return (
    <>
      <Nav aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} projRef={projRef} contactRef={contactRef} volRef={volRef} skillRef={skillRef}/>
      <div className="cover"></div>
      <Header />
      {/* <div ref={aboutRef}></div>
      <About  /> */}
      <hr ref={educationRef}/>
      <Education toggleNYU={toggleNYU} toggleEBHS={toggleEBHS}/>
      <hr ref={workRef}/>
      <WorkExperience />
      <hr ref={projRef}/>
      <Projects />
      <hr ref={skillRef}/>
      <Skills />
      <hr ref={volRef}/>
      <VolunteerExperience />
      <hr ref={contactRef}/>
      <Contact />
      <Footer />
      {expandNYU && <NYUExpanded toggleNYU={toggleNYU}/>}
      {expandEBHS && <EBHSExpanded toggleEd={toggleEBHS}/>}
    </>
  );
}

export default App
