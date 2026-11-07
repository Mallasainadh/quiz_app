export const quizzes = [
  {
    id: "html",
    title: "HTML Basics",
    description: "Tags, attributes and page structure.",
    questions: [
      { q: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
      { q: "Which tag holds the page's visible content?", options: ["<head>", "<title>", "<body>", "<meta>"], answer: 2 },
      { q: "Which attribute gives an image alternate text?", options: ["title", "src", "alt", "name"], answer: 2 },
      { q: "Which tag makes the largest heading?", options: ["<h6>", "<h1>", "<head>", "<big>"], answer: 1 },
    ],
  },
  {
    id: "css",
    title: "CSS Essentials",
    description: "Selectors, the box model and layout.",
    questions: [
      { q: "Which property changes text color?", options: ["font-color", "text-color", "color", "fg"], answer: 2 },
      { q: "Which selector targets a class named box?", options: ["#box", ".box", "box", "*box"], answer: 1 },
      { q: "Which value makes a flex container?", options: ["display: flex", "flex: on", "layout: flex", "position: flex"], answer: 0 },
      { q: "What is the outermost layer of the box model?", options: ["padding", "border", "content", "margin"], answer: 3 },
    ],
  },
  {
    id: "react",
    title: "React Fundamentals",
    description: "Components, props, state and hooks.",
    questions: [
      { q: "Which hook adds state to a component?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: 1 },
      { q: "How do parents pass data to children?", options: ["state", "props", "refs", "context only"], answer: 1 },
      { q: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"], answer: 0 },
      { q: "Which hook runs side effects?", options: ["useState", "useCallback", "useEffect", "useReducer"], answer: 2 },
    ],
  },
];
