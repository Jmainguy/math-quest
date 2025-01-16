import React, { useState } from 'react';
import ScratchPad from './ScratchPad';
import Question from './Question';
import { generateRandomQuestion } from '../utils/mathUtils';
import '../App.css';

const App = () => {
  const [maxValue, setMaxValue] = useState(10);
  const [operation, setOperation] = useState('both');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleMaxValueChange = (event) => {
    setMaxValue(Number(event.target.value));
  };

  const handleOperationChange = (selectedOperation) => {
    setOperation(selectedOperation);
  };

  const startNewQuestion = () => {
    const { question, answer } = generateRandomQuestion(0, maxValue, operation);
    setCurrentQuestion({ question, answer });
    setFeedback('');
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      startNewQuestion();
      // Trigger positive feedback animation and sound
      triggerPositiveFeedback();
    } else {
      setFeedback('❌ Oops! Try again. You can do it!');
    }
  };

  const triggerPositiveFeedback = () => {
    setFeedback('🎉 Great job! That\'s correct! 🎉');

    // Remove the feedback message after 3 seconds
    setTimeout(() => {
      setFeedback('');
    }, 2000);
    for (let i = 0; i < 5; i++) {
      const feedbackElement = document.createElement('div');
      feedbackElement.className = 'positive-feedback';
      feedbackElement.innerHTML = '🦄🎉🦄✨🦄🌈🦄';
      feedbackElement.style.top = `${Math.random() * 100}%`;
      feedbackElement.style.left = `${Math.random() * 100}%`;
      document.body.appendChild(feedbackElement);

      setTimeout(() => {
        feedbackElement.remove();
      }, 2000);
    }

    const audio = new Audio('/celebration-sound.mp3');
    audio.play();
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <h1>Math Quest: Unicorns and Rainbows</h1>
        <div className="input-container">
          <label>
            Max Value:
            <input type="number" value={maxValue} onChange={handleMaxValueChange} />
          </label>
          <label>
            Operation:
            <select value={operation} onChange={(e) => handleOperationChange(e.target.value)}>
              <option value="addition">Addition</option>
              <option value="subtraction">Subtraction</option>
              <option value="both">Both</option>
            </select>
          </label>
        </div>
        <Question operation={operation} min={0} max={maxValue} onAnswer={handleAnswer} />
        <div className="feedback">{feedback}</div>
      </div>
      <ScratchPad />
    </div>
  );
};

export default App;
