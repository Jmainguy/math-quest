import React, { useState } from 'react';
import { generateRandomQuestion } from '../utils/mathUtils';

const Question = ({ operation, min, max, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [questionData, setQuestionData] = useState(generateRandomQuestion(min, max, operation));

  const handleAnswer = () => {
    if (parseInt(userAnswer) === questionData.answer) {
      onAnswer(true);
      setQuestionData(generateRandomQuestion(min, max, operation));
    } else {
      onAnswer(false);
    }
    setUserAnswer('');
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      <input
        type="number"
        placeholder="Your answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAnswer();
          }
        }}
      />
      <button onClick={handleAnswer}>Submit</button>
    </div>
  );
};

export default Question;
