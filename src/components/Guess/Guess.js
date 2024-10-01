import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Result({ attempts }) {
  const rows = NUM_OF_GUESSES_ALLOWED;
  const columns = 5;

  return (
    <div className="guess-results">
      {range(0, rows).map((rowNum, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          <p className="guess">
            {range(0, columns).map((colNum, colIndex) =>
              !!attempts[rowNum] ? (
                <span
                  key={`row-${rowIndex}-column-${colIndex}`}
                  className={`cell ${attempts[rowNum].indicators[colNum].status}`}
                >
                  {attempts[rowNum].label[colNum]}
                </span>
              ) : (
                <span
                  key={`row-${rowIndex}-column-${colIndex}`}
                  className="cell"
                ></span>
              )
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Result;

/* {attempts.map((attempt) => (
        <p className="guess" key={attempt.id}>
          {attempt.label}
        </p>
      ))} */
