import React from "react";
import "./styles/Phonetics.css";

function Phonetics({ phonetics }) {
  const playAudio = (source) => {
    let audio = new Audio(source);
    audio.play();
  };
  console.log(phonetics);
  return (
    <div className="word-item-member">
      <h3>Phonetics:</h3>
      <ul className="phonetics-list">
        {phonetics.map((item, index) => {
          return (
            <li className="phonetics-list-item" key={index}>
              <p>{item.text}</p>
              {item.audio && (
                <button
                  onClick={() => {
                    playAudio(item.audio);
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
