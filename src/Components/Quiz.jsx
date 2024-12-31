import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [givenAnswer, setGivenAnswer] = useState([]);
  const questionIndex = givenAnswer.length;
  const ifQuizCompleted = questionIndex === QUESTIONS.length;
  if (ifQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trohpy icon"></img>
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[questionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleAnswerClick(selectedAnswer) {
    setGivenAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[questionIndex].text}</h2>

        <ul id="answers">
          {shuffledAnswers.map((answers) => (
            <li key={answers} className="answer">
              <button onClick={() => handleAnswerClick(answers)}>
                {answers}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
