import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          console.log(synonym);
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}