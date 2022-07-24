import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import { Modal } from "./Modal";

export default function Wordle({ solution }) {
  const [showModal, setShowModal] = useState(false);
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect || turn > 5) {
      window.removeEventListener("keyup", handleKeyUp);
      setTimeout(() => setShowModal(true), [1800]);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <>
      <div>
        <h1>Wordle</h1>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} />
        {showModal && (
          <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
        )}
      </div>
    </>
  );
}
