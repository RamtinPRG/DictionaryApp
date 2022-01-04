import React from "react";
import WordItem from "./WordItem";
import "./styles/WordsList.css";

function WordsList({ data }) {
  var i = 0;
  return (
    <div className="list">
      {data.map((word) => {
        i += 1;
        return <WordItem word={word} key={i} />;
      })}
    </div>
  );
}

export default WordsList;
