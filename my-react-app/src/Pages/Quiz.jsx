import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question:
        "Which JavaScript method is used to create a new array with all elements that pass a test?",
      options: ["map()", "filter()", "reduce()", "forEach()"],
      answer: "filter()",
    },
    {
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "Which company created React?",
      options: ["Google", "Microsoft", "Facebook", "Apple"],
      answer: "Facebook",
    },
    {
      question: "Which keyword declares a constant in JavaScript?",
      options: ["let", "var", "const", "static"],
      answer: "const",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  function nextQuestion() {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <div className="quiz-result">

        <h1>🎉 Quiz Finished</h1>

        <h2>
          Your Score: {score} / {questions.length}
        </h2>

      </div>
    );
  }

  return (
    <div className="quiz-page">

      <div className="quiz-card">

        <div className="quiz-top">

          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <h3>Score: {score}</h3>

        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <h3 className="quiz-question">
          {questions[currentQuestion].question}
        </h3>

        <div className="options">

          {questions[currentQuestion].options.map((option, index) => (

            <label key={index} className="option">

              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />

              <span>{option}</span>

            </label>

          ))}

        </div>

        <button
          className="next-btn"
          onClick={nextQuestion}
          disabled={selectedAnswer === ""}
        >
          Next Question
        </button>

      </div>

    </div>
  );
}

export default Quiz;