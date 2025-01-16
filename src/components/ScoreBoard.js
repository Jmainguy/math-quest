import React from 'react';

const ScoreBoard = ({ scores }) => {
  return (
    <div className="score-board">
      <h2>Score Board</h2>
      <div className="score">
        <p>Player 1: {scores.player1}</p>
        <p>Player 2: {scores.player2}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
