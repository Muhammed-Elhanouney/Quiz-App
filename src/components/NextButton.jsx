import React from "react";

export default function NextButton({ answer, dispach, index , numQusetions}) {
  if (answer === null) return null;

  if(index < numQusetions - 1 )
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispach({ type: "nextStep" });
      }}
    >
      Next
    </button>
  );

  if(index === numQusetions - 1 )
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispach({ type: "finish" });
      }}
    >
      Finish
    </button>
  );
}
