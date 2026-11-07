export default function QuizCard({ quiz, best, onStart }) {
  return (
    <article className="quiz-card">
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <p className="meta">
        {quiz.questions.length} questions{best != null && `, your best: ${best}/${quiz.questions.length}`}
      </p>
      <button className="btn" onClick={() => onStart(quiz)}>Start quiz</button>
    </article>
  );
}
