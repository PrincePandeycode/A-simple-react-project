import "./App.css";
// import About from "./components/About";
import About2 from "./components/About2";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";

import Textform from "./components/Textform";
import React, { useState } from 'react'




function App() {
  const [mode,setmode] = useState("light")
  const [text,textmode] = useState("light")
  const [navtext,setnav] = useState("dark")
  const [alert,setAlert] = useState(null)

  
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1100);
  }

  const tooglemode = () =>{
    if(mode === 'light'){
      setmode('dark')
      textmode('light')
      document.body.style.backgroundColor = "black"
      setnav("light")
      showAlert("dark mode is here ","success")
     
    }
    else{
      setmode('light')
      textmode('dark')
      setnav("dark")
    
      document.body.style.backgroundColor = "white"
      showAlert("light mode is here ","success")
     
    }
  }
  return (
    <>
      <Navbar title = "Textutils" Home = "Home" mode={mode} tooglemode ={tooglemode} text = {text} setnav = {navtext} / >
        <Alert alertText = "this site is awesome" alert = {alert}/>
      {/* <Navbar/>   */}
      
      <Textform heading = "Enter text here" alert = {showAlert} mode={mode} nameOfBtn1 ="conert to uppercase" nameOfBtn2 ="conert to Lowecase" nameOfBtn3 = "copy Text" nameOfBtn4 = "Paste here" nameOfBtn5 = "clear"/>

    {/* <About/> */}
    <About2 mode = {mode}/>
    </>
  );
}

export default App;

