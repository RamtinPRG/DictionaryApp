import React from "react";
import "./styles/Phonetics.css";

function Phonetics({ phonetics }) {
  const playAudio = (source) => {
    let audio = new Audio(source);
    audio.play();
  };

  var i = 0;
  return (
    <div className="word-item-member">
      <h3>Phonetics:</h3>
      <ul className="phonetics-list">
        {phonetics.map((item) => {
          i += 1;
          return (
            <li className="phonetics-list-item" key={i}>
              <p>{item.text}</p>
              {item.audio && (
                <button
                  onClick={() => {
                    playAudio(`https:${item.audio}`);
                  }}
                >
                  <i className="fas fa-volume-up"></i>
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Phonetics;
