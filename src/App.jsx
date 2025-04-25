import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
const intialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: 480,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "getData":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "error":
      return {
        ...state,
        questions: action.payload,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextStep":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...intialState, status: "ready", questions: state.questions };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      break;
  }
};

function App() {
  const [
    { status, questions, index, answer, points, secondsRemaining },
    dispach,
  ] = useReducer(reducer, intialState);

  const numQusetions = questions.length;
  const maxNumperQuestion = questions.reduce((pre, cur) => pre + cur.points, 0);
  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch(`http://localhost:3000/questions`);
        const data = await res.json();
        // console.log(data[0]);
        dispach({ type: "getData", payload: data });
      } catch (error) {
        // console.log(error);
        dispach({ type: "error", payload: error });
      }
    }
    getQuestions();
  }, []);
  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen dispach={dispach} numQusetions={numQusetions} />
          )}
          {status === "active" && (
            <>
              <Progress
                maxNumperQuestion={maxNumperQuestion}
                points={points}
                numQusetions={numQusetions}
                index={index}
                answer={answer}
              />
              <Question
                answer={answer}
                dispach={dispach}
                question={questions[index]}
              />
              <Footer>
                <Timer dispach={dispach} secondsRemaining={secondsRemaining} />
                <NextButton
                  index={index}
                  numQusetions={numQusetions}
                  answer={answer}
                  dispach={dispach}
                />
              </Footer>
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              maxNumperQuestion={maxNumperQuestion}
              points={points}
              dispach={dispach}
            />
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
