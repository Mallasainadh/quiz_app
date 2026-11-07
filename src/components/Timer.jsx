import { useEffect, useRef, useState } from "react";

export default function Timer({ seconds, onExpire }) {
  const [left, setLeft] = useState(seconds);
  const expire = useRef(onExpire);
  expire.current = onExpire;

  useEffect(() => {
    const id = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (left === 0) expire.current();
  }, [left]);

  return <span className={`timer ${left <= 5 ? "low" : ""}`}>{left}s</span>;
}
