import React, { useState, useEffect } from "react";
import { keyboardLetters } from "./../data/letters";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(keyboardLetters);
  }, []);

  return (
    <div className="keypad">
      {letters?.map((l) => {
        const color = usedKeys[l.key];

        return (
          <div className={color} key={l.key}>
            {l.key}
          </div>
        );
      })}
    </div>
  );
}
