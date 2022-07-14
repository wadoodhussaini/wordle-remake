import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import { answers } from "./data/answers";

function App() {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex].word);
  }, []);

  return (
    <div className="App">
      <Wordle solution={answer} />
    </div>
  );
}

export default App;
