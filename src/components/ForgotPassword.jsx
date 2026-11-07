import { useState } from "react";
import AuthLayout from "./AuthLayout";
import InputField from "./InputField";

export default function ForgotPassword({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (ev) => {
    ev.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    setError("");
    // TODO: call your backend, e.g. fetch("/api/forgot-password", ...)
    setSent(true);
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link."
      footer={<button className="link" onClick={() => onNavigate("signin")}>Back to sign in</button>}
    >
      {sent ? (
        <p className="success">If an account exists for {email}, a reset link is on its way.</p>
      ) : (
        <form onSubmit={submit} noValidate>
          <InputField id="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} error={error} />
          <button className="btn" type="submit">Send reset link</button>
        </form>
      )}
    </AuthLayout>
  );
}
