// import PropTypes from 'prop-types'
import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter text here");

  const Convertoup = () => {
   
     let newtext = text.toUpperCase()
     setText(newtext)
    props.alert("coverted to uppercase", "success")
     
  };

  const Convertolo = () => {
    
     let newtext = text.toLowerCase()
     setText(newtext)
     props.alert("coverted to lowercase", "success")
  };

  const CopyText = () => {
   navigator.clipboard.writeText(text)
   .then(() => {
    // let copytext1 = document.getElementById("copytext1");
    // copytext1.textContent = "Copied"; // Change the text content of the button
    // alert("Text copied");
    
  })
  .catch((error) => {
    console.error("Error copying text: ", error);
    alert("Failed to copy text to clipboard.");
  });
  props.alert("text copied to clipboard", "success")
    // alert("text copied")
  };
  const pastetext = async () => {
    try {
      const pasted = await navigator.clipboard.readText();
      setText(text + " "+pasted);
    } catch (error) {
      console.error("Error pasting text: ", error);

    }
  };
  
  const onchangetext = (event) => {
   
    setText(event.target.value) 
     // helps us in wrting with help of setetxt
 

  };
  const cleartext = () =>{
    setText(" ")
    props.alert("text cleared", "success")
  }
  return (
    <>
      <div className="container">
        <div className="mb-3" style={{color: props.mode === "dark" ? "white":"black"}}>
          <h1>{props.heading}  </h1>
          <textarea className="form-control" style = {{color: props.mode === "dark" ? "white":"black",backgroundColor: props.mode==="dark"?"black":"white"}} id="exampleFormControlTextarea1" onChange = {onchangetext} value={text} rows="8"></textarea>
        </div>

        <div className="btnclass">
          <button type="button" onClick={Convertoup} className="btn btn-primary mx-4" >{props.nameOfBtn1} </button>
          <button type="button" onClick={Convertolo} className="btn btn-primary mx-4" >{props.nameOfBtn2} </button>
          <button type="button" onClick={CopyText} className="  btn btn-primary mx-4" id ="copytext1" >{props.nameOfBtn3} </button>
          <button type="button" onClick={pastetext} className="btn btn-primary mx-4" >{props.nameOfBtn4} </button>
          <button type="button" onClick={cleartext} className="btn btn-primary mx-4" >{props.nameOfBtn5} </button>
        </div>
        <div className="infotext my-5" style={{color:props.mode === "dark"?"white":"black"}}>
          <h1>Your text info</h1>
          <p>{text.split(" ").length} words , {text.length} charcters(including spaces)</p>
          <p> time to reaad :</p>
          <p>slow readers : {0.48 *(text.split(" ").length)} seconds, ( {(0.48/60) *(text.split(" ").length)} minutes)</p>
          <p>average readers : {0.2 *(text.split(" ").length)} seconds ,({(0.2/60) *(text.split(" ").length)} minutes)</p>
          <p>Fast readers : {0.13333333333 *(text.split(" ").length)} seconds, ({(0.13333333333/60) *(text.split(" ").length)}) minutes</p>
        </div>
        <div className="previewtext" style={{color: props.mode === "dark" ? "white":"black"}}>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
