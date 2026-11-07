export default function ResultPage({ quiz, answers, onRetry, onHome }) {
  const score = quiz.questions.filter((q, i) => answers[i] === q.answer).length;
  const total = quiz.questions.length;
  return (
    <section className="page narrow">
      <h2>You scored {score} out of {total}</h2>
      <p className="meta">{Math.round((score / total) * 100)}% correct</p>
      <ol className="review">
        {quiz.questions.map((q, i) => {
          const ok = answers[i] === q.answer;
          return (
            <li key={i} className={ok ? "right" : "wrong"}>
              <strong>{q.q}</strong>
              <div>Your answer: {answers[i] == null ? "No answer" : q.options[answers[i]]}</div>
              {!ok && <div>Correct answer: {q.options[q.answer]}</div>}
            </li>
          );
        })}
      </ol>
      <div className="row">
        <button className="btn" onClick={onRetry}>Try again</button>
        <button className="btn ghost" onClick={onHome}>All quizzes</button>
      </div>
    </section>
  );
}
