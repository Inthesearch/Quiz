import logoApp from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoApp} alt="Quiz logo"></img>
      <h1>React Quiz</h1>
    </header>
  );
}
