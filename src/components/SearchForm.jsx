import React, { useContext, useState, useEffect } from "react";
import { WordContext } from "../contexts/WordContext";
import "./styles/SearchForm.css";

function SearchForm() {
  const { word, setWord } = useContext(WordContext);
  const [input, setInput] = useState(word);

  useEffect(() => {
    setInput(word);
  }, [word]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(input);
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
          required
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
