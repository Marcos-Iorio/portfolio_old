import { useState } from 'react'

import './App.scss'
import Particles  from './components/particles/Particles'
import Navbar from './components/navbar/Navbar';
import Container from './components/infoContainer/Container'


function App() {
  return (
      <div className="main">
        <Container/>
        <Particles/>
      </div>
  );
}

export default App
