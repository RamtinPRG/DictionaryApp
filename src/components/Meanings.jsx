import React from "react";
import Definitions from "./Definitions";
import "./styles/Meanings.css";

function Meanings({ meanings }) {
  var i = 0;

  return (
    <div className="word-item-member">
      <h3>Meanings:</h3>
      <ul className="meanings-list">
        {meanings.map((item) => {
          i += 1;
          return (
            <li className="meanings-list-item" key={i}>
              <p className="meanings-list-item-partOfSpeech">
                {item.partOfSpeech}
              </p>
              <Definitions definitions={item.definitions} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Meanings;
