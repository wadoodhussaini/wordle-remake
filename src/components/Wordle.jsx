import React, { useEffect, useState } from "react";

export default function Wordle({ solution }) {
  const [allGuesses, setAllGuesses] = useState([...Array(6)]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    function handleKeyUp(event) {
      const key = event.key;

      if (!/^[A-Za-z]$/.test(key)) return;
    }

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [currentGuess, allGuesses, turn]);

  return (
    <>
      <div>Wordle app {solution}</div>
    </>
  );
}
