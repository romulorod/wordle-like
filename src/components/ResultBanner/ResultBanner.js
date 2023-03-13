import React from "react";

function ResultBanner({ guesses, result, answer }) {
  function restartGame() {
    window.location.reload();
  }
  return (
    <>
      {result === 'win' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      {result === 'lose' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </>);
}

export default ResultBanner;
