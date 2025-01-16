import React, { useState } from 'react';

const CompetitionMode = ({ contestants, questionCount, onScoreUpdate }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentContestantIndex, setCurrentContestantIndex] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [isStealMode, setIsStealMode] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      const newScores = [...scores];
      newScores[currentContestantIndex] += 1;
      setScores(newScores);
      onScoreUpdate(newScores);
      nextTurn();
    } else {
      setIsStealMode(true);
    }
  };

  const handleStealAnswer = (isCorrect) => {
    if (isCorrect) {
      const newScores = [...scores];
      newScores[1 - currentContestantIndex] += 1; // Steal point from the other contestant
      setScores(newScores);
      onScoreUpdate(newScores);
    }
    setIsStealMode(false);
    nextTurn();
  };

  const nextTurn = () => {
    setCurrentContestantIndex((prev) => (prev + 1) % contestants.length);
    setCurrentQuestionIndex((prev) => (prev + 1) % questionCount);
  };

  return (
    <div>
      <h2>Competition Mode</h2>
      <div>
        <h3>Current Contestant: {contestants[currentContestantIndex]}</h3>
        <h4>Scores: {scores[0]} - {scores[1]}</h4>
      </div>
      <div>
        {isStealMode ? (
          <div>
            <h4>Steal Mode! Answer the question:</h4>
            {/* Render question and answer options here */}
            <button onClick={() => handleStealAnswer(true)}>Correct</button>
            <button onClick={() => handleStealAnswer(false)}>Incorrect</button>
          </div>
        ) : (
          <div>
            <h4>Answer the question:</h4>
            {/* Render question and answer options here */}
            <button onClick={() => handleAnswer(true)}>Correct</button>
            <button onClick={() => handleAnswer(false)}>Incorrect</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitionMode;
