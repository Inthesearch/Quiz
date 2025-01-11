import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [givenAnswer, setGivenAnswer] = useState([]);
  const questionIndex = givenAnswer.length;
  const ifQuizCompleted = questionIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(
    selectedAnswer
  ) {
    setGivenAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );
  if (ifQuizCompleted) {
    return <Summary userAnswer={givenAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={questionIndex}
        index={questionIndex}
        onSelect={handleAnswerClick}
        onTimeOut={handleSkipAnswer}
      />
    </div>
  );
}
