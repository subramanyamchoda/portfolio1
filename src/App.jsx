import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './port/Navbar';
import Home from './port/Home';
import About from './port/About';
import Skills from './port/Skills';
import Project from './port/Project';
import Contact from './port/Contact';
import Footer from './port/Footer';
import { about, contact, home, project, skills  } from "./port/img";

function App() {
  const [homeImages, setHomeImages] = useState(home);
  const [aboutImages,setAboutImages]=useState(about);
  const [skillsImages,setSkillsImages]=useState(skills);
  const [pojectImages,setProjectImages]=useState(project);
  const [contactImages,setContactImages]=useState(contact);
  return (
    <div>
      <Navbar/>
      <Home home={homeImages} /> 
      <About about={aboutImages}/>
      <Skills skills={skillsImages}/>
      <Project project={pojectImages}/>
      <Contact contact={contactImages}/>
      <Footer/>
    </div>
  );
}

export default App;
