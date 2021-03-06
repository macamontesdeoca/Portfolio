import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {

  const[siteHeight, setSiteHeight] = useState(0); //la altura de scrolleo

  const handleScroll = () => {
    const position = window.pageYOffset; 
    setSiteHeight(position); //actualizo el estado de react con el valor de desplazamiento en el eje Y
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll) //cada vez que hago scroll ejecuto la funcion, que va a cambiar el valor de siteheight
  }, [siteHeight]) //cada vez que cambia siteheight se dispara useEffect

  return (
    <>
      <Nav change={siteHeight}/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;
