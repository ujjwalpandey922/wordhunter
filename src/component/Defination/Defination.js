import React from "react";
import "./Defination.css";
function Defination({ word, category, meaning, mode }) {
  console.log(meaning);
  return (
    <div className="meaning">
      {meaning[0] && word && category === "en" && (
        <audio
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10, width: "100%" }}
          controls
        >
          Your Browser Doesn't support audio element
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start By Searching Something</span>
      ) : meaning ? (
        <span className="subTitle">{meaning.message}</span>
      ) : (
        meaning.map((ele) =>
          ele.meanings.map((e) =>
            e.definitions.map((item) => (
              <div className={`singleMeaning ${mode ? "Lit" : ""}`}>
                <b>{item.definition}</b>
                <hr className="hori" />
                {item.example && (
                  <span>
                    <b>Example : </b> {item.example}
                  </span>
                )}
                {item.synonyms.length !== 0 && (
                  <span>
                    <b>Synonyms : </b> {item.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Defination;
