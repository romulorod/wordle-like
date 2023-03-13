import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  return (
    <div className='guess-result'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <p key={index} className='guess'>
          <Guess guesses={[guesses[index]]} answer={answer} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
