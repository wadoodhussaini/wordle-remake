import React from "react";

export const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win!</h1>
          <p>
            You guessed the word <span className="solution">{solution}</span> in{" "}
            {turn} {turn === 1 ? "try" : "tries"}
          </p>
          <p>Great work :)</p>
          <button className="button" onClick={() => window.location.reload()}>
            Restart
          </button>
        </div>
      )}

      {!isCorrect && (
        <div>
          <h1>Better luck next time :)</h1>
          <p>
            The answer was <span className="solution">{solution}</span>
          </p>
          <button className="button" onClick={() => window.location.reload()}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};
