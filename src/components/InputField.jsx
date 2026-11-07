export default function InputField({ label, id, error, ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-invalid={!!error} {...props} />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
