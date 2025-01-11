import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswer }) {
  const skippedAnswer = userAnswer.filter((answer) => answer === null);
  const correctAnswer = userAnswer.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswerPercent = Math.round(
    (skippedAnswer.length / QUESTIONS.length) * 100
  );
  const correctAnswerPercent = Math.round(
    (correctAnswer.length / QUESTIONS.length) * 100
  );
  const wrongAnswerPercent =
    100 - (skippedAnswerPercent + correctAnswerPercent);
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trohpy icon"></img>
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <span>
          <p className="text">Answered Skipped</p>
          <p className="number">{skippedAnswerPercent}</p>
        </span>
        <span>
          <p className="text">Correct Answers</p>
          <p className="number">{correctAnswerPercent}</p>
        </span>
        <span>
          <p className="text">Wrong Answers</p>
          <p className="number">{wrongAnswerPercent}</p>
        </span>
      </div>
      <ol>
        {QUESTIONS.map((questions, index) => {
          let answerCss = "user-answer";
          if (questions.answers[0] === userAnswer[index]) {
            answerCss += " correct";
          } else if (!userAnswer[index]) {
            answerCss += " skipped";
          } else {
            answerCss += " wrong";
          }
          return (
            <li key={questions.id}>
              <h3>{index + 1}</h3>
              <p className="question">{questions.text}</p>
              <p className={answerCss}>{userAnswer[index] ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
