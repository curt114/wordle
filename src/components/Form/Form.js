import React from 'react';

function Guess({ handleSubmit, handleInput, input }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={handleInput}
        required
      />
    </form>
  );
}

export default Guess;
