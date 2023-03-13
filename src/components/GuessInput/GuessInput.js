import React from "react";

function GuessInput({ guesses, setGuesses, endOfGame }) {
  const [inputValue, setInputValue] = React.useState("");
  function submit(event) {
    event.preventDefault();
    const nextGuess = [...guesses, inputValue];
    setGuesses(nextGuess);
    setInputValue('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        disabled={!!endOfGame}
        onChange={e => setInputValue(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern={"[a-zA-Z]{5}"}
      />
    </form>
  );
}

export default GuessInput;
