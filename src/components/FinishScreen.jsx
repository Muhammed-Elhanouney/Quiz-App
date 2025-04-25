// import { useQuiz } from "../contexts/QuizContext";

function FinishScreen({ maxNumperQuestion, points ,dispach}) {
  //   const { points, maxPossiblePoints } = useQuiz();

  const percentage = (points / maxNumperQuestion) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxNumperQuestion} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {points} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
