import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({
  answers,
  answerState,
  selectedAnswer,
  onSelect,
  question,
  onTimeOut,
}) {
  return (
    <div id="question">
      {(answerState === "correct" || answerState === "wrong") && (
        <h2>{answerState} answer!!!</h2>
      )}
      <QuestionTimer timeOut={10000} onTimeOut={onTimeOut} />
      <h2>{question}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onSelect}
      />
    </div>
  );
}
