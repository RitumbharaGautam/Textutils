//import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App(props) {
  const[alert, setAlert] = useState(null);
  function showAlert(message, type){
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [checkMode, setcheckMode] = useState('light');
  const [mode, setMode] = useState({
    backgroundColor : "#e6e6e6",
    color : "black"
  });

  //blue
  function modeChange(){
   if(checkMode === 'light'){
    setMode({
    backgroundColor : "rgb(0 8 55)",
    color : "white"
    });
    setcheckMode('dark');
    document.body.style.backgroundColor = 'rgb(29 38 89)';
    showAlert("dark mode is set.", "success");
   }
   else{
    setMode({
    backgroundColor : 'rgb(136 139 161)',
    color : "black"
    });
    showAlert("light mode is set.", "success");
    setcheckMode('light');
    document.body.style.backgroundColor = 'rgb(192 197 231)';
   }
  }

  //pink
  function modeChange2(){
    if(checkMode === 'light'){
     setMode({
     backgroundColor : "rgb(63 1 36)",
     color : "white"
     });
     setcheckMode('dark');
     document.body.style.backgroundColor = 'rgb(104 20 67)';
     showAlert("dark mode is set.", "success");
    }
    else{
     setMode({
     backgroundColor : 'rgb(137 69 107)',
     color : "black"
     });
     showAlert("light mode is set.", "success");
     setcheckMode('light');
     document.body.style.backgroundColor = 'rgb(231 192 214)';
    }
   }


  
  return (<>
        <BrowserRouter>
  <Navbar text="TextUtils" modechange={modeChange} value={mode} textDisplay={checkMode}  modechange2={modeChange2}/>
  <Alert alert={alert}/>
   <Routes> 
    <Route path="/" element={<Main showAlert={showAlert} value={mode} textDisplay={checkMode} />} />
    </Routes>
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter></>
  );
}

export default App;
