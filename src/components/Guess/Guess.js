import React from "react";
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guesses, answer }) {
  function letterBackgroundColor(guesses, answer, index) {
    const guessesChecked = checkGuess(guesses.toString(), answer);
    const letterChecked = guessesChecked?.[index];
    if(!letterChecked) return '';
    return letterChecked?.status;
  }

  return (
    <>
      {range(0, 5).map((index) => {
        return (
          <span key={index} className={`cell ${letterBackgroundColor(guesses, answer, index)}`}>
            {guesses.toString()[index]}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
