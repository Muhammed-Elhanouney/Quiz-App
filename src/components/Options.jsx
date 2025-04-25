import React from "react";

export default function Options({ question, answer, dispach }) {
  return (
    <div>
      <div className="options">
        {question.options.map((q, index) => (
          <button
            key={q}
            className={`btn btn-option
            ${index === answer ? "answer" : ""} 
            ${
              answer !== null
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
             `}
            disabled={answer !== null}
            onClick={() => {
              dispach({ type: "newAnswer", payload: index });
            }}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

// correctOption
// :
// 1
// id
// :
// "1af6"
// options
// :
// Array(4)
// 0
// :
// "Angular"
// 1
// :
// "React"
// 2
// :
// "Svelte"
// 3
// :
// "Vue"
// length
// :
// 4
// [[Prototype]]
// :
// Array(0)
// points
// :
// 10
// question
// :
// "Which is the most popular JavaScript framework?"
// [[Prototype]]
// :
// Object
