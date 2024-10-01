import React from 'react';
import Form from '../Form/Form.js';
import Guess from '../Guess/Guess.js';
import Banner from '../Banner/Banner.js';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [attempts, setAttempts] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [gameStatus, setGameStatus] = React.useState(0); // 0 = playing | 1 = won | 2 = lost

  const handleInput = (event) => {
    const value = event.target.value;

    if (value.length > 5) return;
    setInput(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.length !== 5) return;

    const indicators = checkGuess(input, answer);

    const guess = {
      id: crypto.randomUUID(),
      label: input,
      indicators,
    };

    const nextAttempts = [...attempts, guess];
    setAttempts(nextAttempts);
    setInput('');

    if (input === answer) setGameStatus(1);
    else if (attempts.length >= NUM_OF_GUESSES_ALLOWED - 1)
      setGameStatus(2);
  };

  return (
    <>
      <Guess attempts={attempts} />
      <Form
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        input={input}
      />
      {gameStatus === 1 && (
        <Banner gameStatus={gameStatus}>
          {' '}
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {attempts.length} guesses</strong>.
          </p>
        </Banner>
      )}
      {gameStatus === 2 && (
        <Banner gameStatus={gameStatus}>
          {' '}
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
