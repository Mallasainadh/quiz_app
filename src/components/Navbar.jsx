export default function Navbar({ user, view, onNavigate, onLogout }) {
  const tab = (id, label) => (
    <button className={`nav-tab ${view === id ? "active" : ""}`} onClick={() => onNavigate(id)}>
      {label}
    </button>
  );
  return (
    <header className="navbar">
      <span className="nav-brand">QuizForge</span>
      <nav>
        {tab("dashboard", "Quizzes")}
        {tab("leaderboard", "Leaderboard")}
      </nav>
      <div className="nav-user">
        <span>{user}</span>
        <button className="link" onClick={onLogout}>Sign out</button>
      </div>
    </header>
  );
}
