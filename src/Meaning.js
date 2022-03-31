import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech} </h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index === 0) {
          return (
            <div key={index}>
              <p>
                <div className="defintion">{definition.definition}</div>
                <br />
                <div className="example">{definition.example}</div>
              </p>
            </div>
          );
        }
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
