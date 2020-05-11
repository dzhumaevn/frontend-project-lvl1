import getRandomNum from '../utils.js';
import start from '../index.js';

const getGCD = (x, y) => {
  if (!y) return x;
  return getGCD(y, x % y);
};

const description = 'Find the greatest common divisor of given numbers.';

const genRoundData = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);

  return {
    question: `${num1} ${num2}`,
    rightAnswer: getGCD(num1, num2).toString(),
  };
};

const startGame = () => start(description, genRoundData);

export default startGame;
