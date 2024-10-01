import React from 'react';

function Banner({ gameStatus, children }) {
  return (
    <>
      <div className={`${gameStatus === 1 ? 'happy' : 'sad'} banner`}>
        {children}
      </div>
    </>
  );
}

export default Banner;
