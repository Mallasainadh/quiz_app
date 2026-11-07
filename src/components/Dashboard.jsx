import QuizCard from "./QuizCard";
import { quizzes } from "../data/quizzes";

export default function Dashboard({ user, scores, onStart }) {
  const best = (id) => {
    const mine = scores.filter((s) => s.user === user && s.quizId === id).map((s) => s.score);
    return mine.length ? Math.max(...mine) : null;
  };
  return (
    <section className="page">
      <h2>Choose a quiz</h2>
      <div className="quiz-grid">
        {quizzes.map((q) => (
          <QuizCard key={q.id} quiz={q} best={best(q.id)} onStart={onStart} />
        ))}
      </div>
    </section>
  );
}
