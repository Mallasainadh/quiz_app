export default function ProgressBar({ current, total }) {
  return (
    <div className="progress" role="progressbar" aria-valuenow={current} aria-valuemax={total}>
      <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
    </div>
  );
}
