import { useState } from "react";
import AuthLayout from "./AuthLayout";
import InputField from "./InputField";

export default function SignIn({ onNavigate, onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.password) e.password = "Enter your password.";
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: call your backend, then store the token
      onLogin?.(form.email);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your quizzes."
      footer={<>New here? <button className="link" onClick={() => onNavigate("signup")}>Create an account</button></>}
    >
      <form onSubmit={submit} noValidate>
        <InputField id="email" name="email" type="email" label="Email" value={form.email} onChange={change} error={errors.email} />
        <InputField id="password" name="password" type="password" label="Password" value={form.password} onChange={change} error={errors.password} />
        <button type="button" className="link forgot" onClick={() => onNavigate("forgot")}>Forgot password?</button>
        <button className="btn" type="submit">Sign in</button>
      </form>
    </AuthLayout>
  );
}
