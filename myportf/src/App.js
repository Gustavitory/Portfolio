import React from 'react';
import './App.css';

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
      <NavBar/>
      <Start/>
      <PresentationCard/> 
      <TechSkills/>
      <Goals/>  
    </div>
  );
}

export default App;
