import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const endOfGame = React.useMemo(() => {
    if(guesses.length >= 6) return 'lose';
    if(guesses.includes(answer)) return 'win';
  }, [guesses]);

  return <>
    {!!endOfGame && <ResultBanner guesses={guesses} result={endOfGame} answer={answer} />}
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} endOfGame={endOfGame} />
  </>;
}

export default Game;
