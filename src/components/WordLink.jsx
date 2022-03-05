import React, { useContext } from "react";
import { WordContext } from "../contexts/WordContext";

function WordLink({ word, className }) {
  const { setWord } = useContext(WordContext);
  return (
    <span className={className} onClick={() => setWord(word)}>
      {word}
    </span>
  );
}

export default WordLink;
