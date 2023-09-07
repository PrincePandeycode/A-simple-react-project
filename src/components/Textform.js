// import PropTypes from 'prop-types'
import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter text here");

  const Convertoup = () => {
   
     let newtext = text.toUpperCase()
     setText(newtext)
  };

  const Convertolo = () => {
    console.log("oj to uppercase");
     let newtext = text.toLowerCase()
     setText(newtext)
  };

  const onchangetext = (event) => {
   
    setText(event.target.value)  // helps us in wrting with help of setetxt

  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange = {onchangetext} value={text} rows="8"></textarea>
        </div>

        <div className="btnclass">
          <button type="button" onClick={Convertoup} className="btn btn-primary mx-4" >{props.nameOfBtn1} </button>
          <button type="button" onClick={Convertolo} className="btn btn-primary mx-4" >{props.nameOfBtn2} </button>
        </div>
        <div className="infotext my-5">
          <h1>Your text info</h1>
          <p>{text.split(" ").length} words , {text.length} charcters(including spaces)</p>
          <p> time to reaad :</p>
          <p>slow readers : {0.48 *(text.split(" ").length)} seconds, ( {(0.48/60) *(text.split(" ").length)} minutes)</p>
          <p>average readers : {0.2 *(text.split(" ").length)} seconds ,({(0.2/60) *(text.split(" ").length)} minutes)</p>
          <p>Fast readers : {0.13333333333 *(text.split(" ").length)} seconds, ({(0.13333333333/60) *(text.split(" ").length)}) minutes</p>
        </div>
        <div className="previewtext">
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
