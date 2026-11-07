import { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";

const SECONDS_PER_QUESTION = 20;

export default function QuizPage({ quiz, onFinish }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answers, setAnswers] = useState([]);
  const total = quiz.questions.length;

  const next = (choice) => {
    const all = [...answers, choice];
    if (index + 1 === total) return onFinish(all);
    setAnswers(all);
    setIndex(index + 1);
    setPicked(null);
  };

  return (
    <section className="page narrow">
      <div className="quiz-head">
        <span>{quiz.title}: question {index + 1} of {total}</span>
        <Timer key={index} seconds={SECONDS_PER_QUESTION} onExpire={() => next(picked)} />
      </div>
      <ProgressBar current={index} total={total} />
      <Question data={quiz.questions[index]} picked={picked} onPick={setPicked} />
      <button className="btn" disabled={picked === null} onClick={() => next(picked)}>
        {index + 1 === total ? "Finish quiz" : "Next question"}
      </button>
    </section>
  );
}
