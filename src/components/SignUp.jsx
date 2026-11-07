import { useState } from "react";
import AuthLayout from "./AuthLayout";
import InputField from "./InputField";

export default function SignUp({ onNavigate }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.password.length < 8) e.password = "Use at least 8 characters.";
    if (form.confirm !== form.password) e.confirm = "Passwords do not match.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: call your backend, e.g. fetch("/api/signup", { method: "POST", ... })
      setDone(true);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Sign up to start taking quizzes."
      footer={<>Already registered? <button className="link" onClick={() => onNavigate("signin")}>Sign in</button></>}
    >
      {done ? (
        <p className="success">Account created. You can sign in now.</p>
      ) : (
        <form onSubmit={submit} noValidate>
          <InputField id="name" name="name" label="Full name" value={form.name} onChange={change} error={errors.name} />
          <InputField id="email" name="email" type="email" label="Email" value={form.email} onChange={change} error={errors.email} />
          <InputField id="password" name="password" type="password" label="Password" value={form.password} onChange={change} error={errors.password} />
          <InputField id="confirm" name="confirm" type="password" label="Confirm password" value={form.confirm} onChange={change} error={errors.confirm} />
          <button className="btn" type="submit">Create account</button>
        </form>
      )}
    </AuthLayout>
  );
}
