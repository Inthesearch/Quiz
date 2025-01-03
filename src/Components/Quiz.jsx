import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [givenAnswer, setGivenAnswer] = useState([]);
  const [answerValidation, setAnswerValidation] = useState("");
  const questionIndex =
    answerValidation === "" ? givenAnswer.length : givenAnswer.length - 1;
  const ifQuizCompleted = questionIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(
    function handleAnswerClick(selectedAnswer) {
      setAnswerValidation("answered");
      setGivenAnswer((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[questionIndex].answers[0]) {
          setAnswerValidation("correct");
        } else {
          setAnswerValidation("wrong");
        }
        setTimeout(() => {
          setAnswerValidation("");
        }, 5000);
      }, 2000);
    },
    [questionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );
  if (ifQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trohpy icon"></img>
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={questionIndex}
        answers={QUESTIONS[questionIndex].answers}
        answerState={answerValidation}
        selectedAnswer={givenAnswer[givenAnswer.length - 1]}
        onSelect={handleAnswerClick}
        question={QUESTIONS[questionIndex].text}
        onTimeOut={handleSkipAnswer}
      />
    </div>
  );
}
