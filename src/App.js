import "./App.css";
// import About from "./components/About";
import About2 from "./components/About2";
import Navbar from "./components/Navbar";

import Textform from "./components/Textform";
import React, { useState } from 'react'




function App() {
  const [mode,setmode] = useState("light")
  const [text,textmode] = useState("light")

  const tooglemode = () =>{
    if(mode === 'light'){
      setmode('dark')
      textmode('light')
      document.body.style.backgroundColor = "black"
    }
    else{
      setmode('light')
      textmode('dark')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar title = "Textutils" Home = "Home" mode={mode} tooglemode ={tooglemode} text = {text}/ >
      {/* <Navbar/>   */}
      
      <Textform heading = "Enter text here" mode={mode} nameOfBtn1 ="conert to uppercase" nameOfBtn2 ="conert to Lowecase" nameOfBtn3 = "copy Text" nameOfBtn4 = "Paste here" nameOfBtn5 = "clear"/>

    {/* <About/> */}
    <About2 mode = {mode}/>
    </>
  );
}

export default App;

