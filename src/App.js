import './App.css';
import { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="black";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>

      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <TextForm mode={mode} heading="Enter the text to analyze below"/> 
      
    </>
  );
}

export default App;
