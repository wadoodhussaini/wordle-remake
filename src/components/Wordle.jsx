import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Wordle({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect || turn > 5) {
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <>
      <div>
        Solution: {solution} <br />
        Answer: {currentGuess}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} />
      </div>
    </>
  );
}
