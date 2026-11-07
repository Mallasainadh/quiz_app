export default function Question({ data, picked, onPick }) {
  return (
    <div>
      <h3 className="question">{data.q}</h3>
      <div className="options">
        {data.options.map((opt, i) => (
          <button
            key={i}
            className={`option ${picked === i ? "picked" : ""}`}
            onClick={() => onPick(i)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
