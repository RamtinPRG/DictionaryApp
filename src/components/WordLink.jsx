import React, { useContext } from "react";
import { WordContext } from "../contexts/WordContext";

function WordLink({ word, className }) {
  const { setWord } = useContext(WordContext);
  return (
    <a className={className} onClick={() => setWord(word)}>
      {word}
    </a>
  );
}

export default WordLink;
