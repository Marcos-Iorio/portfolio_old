import { useState } from 'react'

import './App.scss'
import Particles  from './components/particles/Particles'
import Navbar from './components/navbar/Navbar';
import Container from './components/infoContainer/Container'

import { useMediaQuery } from 'react-responsive'


function App() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  if(!isTabletOrMobile){
    return (
      <div className="main">
        <Container/>
        <Particles/>
      </div>
    );
  }else{
    return(<Container/>);
    
  }
  
}

export default App
