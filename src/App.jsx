import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import Leaderboard from "./components/Leaderboard";
import "./styles/app.css";

const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};

export default function App() {
  const [user, setUser] = useState(() => load("quiz-user", null));
  const [authPage, setAuthPage] = useState("signin");
  const [view, setView] = useState("dashboard");
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState(() => load("quiz-scores", []));

  const login = (email) => { localStorage.setItem("quiz-user", JSON.stringify(email)); setUser(email); };
  const logout = () => { localStorage.removeItem("quiz-user"); setUser(null); setView("dashboard"); setAuthPage("signin"); };

  const start = (q) => { setQuiz(q); setView("quiz"); };
  const finish = (all) => {
    const score = quiz.questions.filter((q, i) => all[i] === q.answer).length;
    const updated = [...scores, { user, quizId: quiz.id, score, total: quiz.questions.length, date: Date.now() }];
    localStorage.setItem("quiz-scores", JSON.stringify(updated));
    setScores(updated);
    setAnswers(all);
    setView("result");
  };

  if (!user) {
    if (authPage === "signup") return <SignUp onNavigate={setAuthPage} />;
    if (authPage === "forgot") return <ForgotPassword onNavigate={setAuthPage} />;
    return <SignIn onNavigate={setAuthPage} onLogin={login} />;
  }

  return (
    <>
      <Navbar user={user} view={view} onNavigate={setView} onLogout={logout} />
      {view === "dashboard" && <Dashboard user={user} scores={scores} onStart={start} />}
      {view === "quiz" && <QuizPage key={quiz.id + scores.length} quiz={quiz} onFinish={finish} />}
      {view === "result" && (
        <ResultPage quiz={quiz} answers={answers} onRetry={() => start(quiz)} onHome={() => setView("dashboard")} />
      )}
      {view === "leaderboard" && <Leaderboard scores={scores} />}
    </>
  );
}
