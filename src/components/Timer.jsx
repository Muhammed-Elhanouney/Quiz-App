import React, { useEffect } from "react";

export default function Timer({ dispach, secondsRemaining }) {
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  useEffect(
    function () {
      const id = setInterval(function () {
        dispach({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispach]
  );
  return <div className="timer">{formatTime(secondsRemaining)}</div>;
}
