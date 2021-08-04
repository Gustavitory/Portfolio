import React from 'react';
import './App.css';
import {Fade} from 'react-awesome-reveal'

//Componentes:
import NavBar from './components/NavBar/Navbar';
import PresentationCard from './components/PresentationCard/PresentationCard';
import Start from './components/Start/Start'
import Goals from './components/Goals/Goals.jsx';
import TechSkills from './components/TechSkills/TechSkills';
//-------------------------------------------------------------------------------------------

function App() {
  return (
    <div>
      <section id='portada'><NavBar/></section>
      <Fade cascade={true} duration={4000}><section id='start'><Start/></section></Fade>
      <Fade cascade={true} duration={2500}><section id='presentation'><PresentationCard/></section></Fade>      
      <Fade cascade={true} duration={2500}><section id='tech'><TechSkills/></section></Fade>
      <Fade cascade={true} duration={2500}><section id='goals'><Goals/></section></Fade>
      
       
           
       
    </div>
  );
}

export default App;
