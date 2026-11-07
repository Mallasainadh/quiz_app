import "../styles/auth.css";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth-page">
      <aside className="auth-side">
        <h1 className="brand">QuizForge</h1>
        <p>Build quizzes, take challenges, track your scores.</p>
      </aside>
      <main className="auth-main">
        <div className="auth-card">
          <h2>{title}</h2>
          <p className="auth-sub">{subtitle}</p>
          {children}
          <div className="auth-footer">{footer}</div>
        </div>
      </main>
    </div>
  );
}
