import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/RowPost/Rowpost';
import { Documentaries, RomanceMovies, action, comedyMovies, orginals } from './urls';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url={orginals} title="Netflix Orginals"/>
    <Rowpost isSmall url={action} title="Action"/>
    <Rowpost isSmall url={comedyMovies} title="Comedy"/>
    <Rowpost isSmall url={RomanceMovies} title="Romance"/>
    <Rowpost isSmall url={Documentaries} title="Documentaries"/>
    </div>
  );
}

export default App;
