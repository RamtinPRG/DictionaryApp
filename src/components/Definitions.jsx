import React from "react";
import "./styles/Definitions.css";
import WordLink from "./WordLink";

function Definitions({ definitions }) {
  return (
    <ol className="definitions-list">
      {definitions.map((item, index) => {
        console.log(item);
        return (
          <li className="definitions-list-item" key={index}>
            <p>
              {item.definition}
              {item.example && (
                <>
                  <br />(<span style={{ fontWeight: "bold" }}>example: </span>
                  {item.example})
                </>
              )}
            </p>
            <div className="synonym-antonym-container">
              <p>
                {item.synonyms.length > 0 && (
                  <>
                    <span style={{ fontWeight: "bold" }}>synonyms: </span>
                    {item.synonyms.map((synonym, index) => {
                      return (
                        <React.Fragment key={index}>
                          <WordLink className="word-link" word={synonym} /> ,
                        </React.Fragment>
                      );
                    })}
                  </>
                )}
                {item.antonyms.length > 0 && (
                  <>
                    <br />
                    <span style={{ fontWeight: "bold" }}>antonyms: </span>
                    {item.antonyms.map((antonym, index) => {
                      return (
                        <React.Fragment key={index}>
                          <WordLink className="word-link" word={antonym} /> ,
                        </React.Fragment>
                      );
                    })}
                  </>
                )}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Definitions;
