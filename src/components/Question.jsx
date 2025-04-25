import React from "react";
import Options from "./Options";

export default function Question({ question,answer,dispach }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options answer={answer} dispach={dispach} question={question}/>
    </div>
  );
}
