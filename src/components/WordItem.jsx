import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./styles/WordItem.css";

function WordItem({ word }) {
  const meanings = word.meanings;
  const origin = word.origin;
  const phonetics = word.phonetics;
  return (
    <div className="word-item">
      <h2 className="word-item-member" style={{ color: "#6e3cbc" }}>
        {word.word}
      </h2>
      {origin && (
        <p className="word-item-member">
          <span style={{ color: "#548CFF", fontSize: "1.2rem" }}>(origin)</span>{" "}
          {origin}
        </p>
      )}
      {phonetics && phonetics.length>0 && <Phonetics phonetics={phonetics} />}
      <Meanings meanings={meanings} />
    </div>
  );
}

export default WordItem;
