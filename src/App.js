import "./App.css";
import About2 from "./components/About2";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";

import Textform from "./components/Textform";
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [text, textmode] = useState("light");
  const [navtext, setnav] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1100);
  };

  const tooglemode = () => {
    if (mode === "light") {
      setmode("dark");
      textmode("light");
      document.body.style.backgroundColor = "black";
      setnav("light");
      showAlert("dark mode is here ", "success");
    } else {
      setmode("light");
      textmode("dark");
      setnav("dark");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is here ", "success");
    }
  };



  return (
    <>
    

<Router>
        <Navbar  title="Textutils"
          Home="Home"
          mode={mode}
          tooglemode={tooglemode}
          text={text}
          setnav={navtext}/>

        <Alert alertText="this site is awesome" alert={alert}></Alert>
        <div className="container my-5">
          <Routes>
          <Route path='/About' element={<About2/>} />
          <Route path='/' element={<Textform  heading="Enter text here"
                alert={showAlert}
                mode={mode}
                nameOfBtn1="conert to uppercase"
                nameOfBtn2="conert to Lowecase"
                nameOfBtn3="copy Text"
                nameOfBtn4="Paste here"
                nameOfBtn5="clear" />} />
               
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;