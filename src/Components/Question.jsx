import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Question({
  index,
  selectedAnswer,
  onSelect,
  onTimeOut,
}) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });
      setTimeout(() => onSelect(answer), 2000);
    }, 2000);
  }

  let answerState = "";
  let timer = 10000;

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      {(answerState === "correct" || answerState === "wrong") && (
        <h2>{answerState} answer!!!</h2>
      )}
      {answer.isCorrect === null && (
        <QuestionTimer
          key={timer}
          timeOut={timer}
          onTimeOut={answer.selectedAnswer === "" ? onTimeOut : () => {}}
        />
      )}
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
