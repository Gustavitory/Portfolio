import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';

//Componentes:
import PresentationCard from './components/PresentationCard/PresentationCard';
import Start from './components/Start/Start'
//-------------------------------------------------------------------------------------------

function App() {
  return (
    <div>
      <NavBar/>
      <Start/>
      <PresentationCard/>   
    </div>
  );
}

export default App;
