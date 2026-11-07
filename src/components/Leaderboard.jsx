import { quizzes } from "../data/quizzes";

export default function Leaderboard({ scores }) {
  const rows = [...scores].sort((a, b) => b.score - a.score || b.date - a.date).slice(0, 10);
  const title = (id) => quizzes.find((q) => q.id === id)?.title ?? id;
  return (
    <section className="page narrow">
      <h2>Leaderboard</h2>
      {rows.length === 0 ? (
        <p className="meta">No scores yet. Take a quiz to get on the board.</p>
      ) : (
        <table className="board">
          <thead>
            <tr><th>Rank</th><th>Player</th><th>Quiz</th><th>Score</th></tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.date}>
                <td>{i + 1}</td><td>{r.user}</td><td>{title(r.quizId)}</td><td>{r.score}/{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
