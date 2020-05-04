import getRandomNum from '../utils.js';
import start from '../index.js';

const getNOD = (x, y) => {
  if (!y) return x;
  return getNOD(y, x % y);
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const askQuestion = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);

  return {
    question: `${num1} ${num2}`,
    rightAnswer: getNOD(num1, num2).toString(),
  };
};

const startGame = () => start(gameRules, askQuestion);

export default startGame;
