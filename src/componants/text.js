/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = (event) => {
    event.preventDefault();

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoclick = (event) => {
    event.preventDefault();

    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearlick = (event) => {
    event.preventDefault();

    let newText = "";
    setText(newText);
  };
  const handleOnchange = (event) => {
    // console.log('handle On change');
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="form-group">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpclick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearlick}>
        Clear All
      </button>

      <div className="container my-2">
        <h1>Your text summery</h1>
        <p>
          {text.length} words and {text.split(" ").length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      
    </>
  );
}
