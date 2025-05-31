import { useState } from 'react'

const questions = [
  "Czy ostatnio wydarzyło się coś zbyt nierealnego, by mogło być przypadkiem?",
  "Czy ktoś lub coś zachowało się tak, jakby testowało Twoją reakcję?",
  "Czy zauważasz powtarzające się wzorce, które wydają się zaprogramowane?",
  "Czy masz poczucie, że Twoje myśli są podsłuchiwane przez 'system'?",
];

function App() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (a) => {
    const updated = [...answers, a];
    if (index < questions.length - 1) {
      setAnswers(updated);
      setIndex(index + 1);
    } else {
      setAnswers(updated);
      setIndex(index + 1);
    }
  };

  const score = answers.filter((a) => a === 'Tak').length;
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div style={{ padding: 20 }}>
      <h1>kot303 – Test Rzeczywistości</h1>
      {index < questions.length ? (
        <div>
          <p>{questions[index]}</p>
          <button onClick={() => handleAnswer('Tak')}>Tak</button>
          <button onClick={() => handleAnswer('Nie')}>Nie</button>
        </div>
      ) : (
        <div>
          <p>Wynik: {percentage}% podejrzenia, że coś tu nie gra...</p>
          <button onClick={() => { setIndex(0); setAnswers([]); }}>Spróbuj ponownie</button>
        </div>
      )}
    </div>
  );
}

export default App;