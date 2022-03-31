import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>Listen</a>
      <span className="text mt-2"> {props.phonetic.text} </span>
    </div>
  );
}
