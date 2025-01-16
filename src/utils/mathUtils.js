export function generateRandomQuestion(min, max, operation) {
  let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

  const generateAddition = () => {
    return {
      question: `${num1} + ${num2}`,
      answer: num1 + num2,
    };
  };

  const generateSubtraction = () => {
    // Ensure num1 is always greater than or equal to num2
    if (num1 < num2) {
      [num1, num2] = [num2, num1]; // Swap num1 and num2
    }
    return {
      question: `${num1} - ${num2}`,
      answer: num1 - num2,
    };
  };

  if (operation === 'addition') {
    return generateAddition();
  } else if (operation === 'subtraction') {
    return generateSubtraction();
  } else {
    // Randomly pick addition or subtraction
    return Math.random() < 0.5 ? generateAddition() : generateSubtraction();
  }
}

export function validateAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}
