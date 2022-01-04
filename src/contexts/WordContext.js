import { createContext, useState } from "react";

export const WordContext = createContext();

function WordContextProvider(props) {
  const [word, setWord] = useState("");

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {props.children}
    </WordContext.Provider>
  );
}

export default WordContextProvider;
