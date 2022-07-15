import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, handleKeyUp } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <>
      <div>
        Solution: {solution} <br />
        Answer: {currentGuess}
      </div>
    </>
  );
}
