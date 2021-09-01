import './App.css';
import { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]= useState('');

  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="black";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled","sucess");
    }
  }
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/> 
      
    </>
  );
}

export default App;
