import getRandomNum from '../utils.js';
import start from '../index.js';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;

  return NOD(y, x % y);
};

const showGameRules = () => console.log('Find the greatest common divisor of given numbers.');

const askQuestion = () => {
  const randomNum1 = getRandomNum(100);
  const randomNum2 = getRandomNum(100);

  console.log(`Question: ${randomNum1} ${randomNum2}`);

  return NOD(randomNum1, randomNum2).toString();
};

const startGame = () => start(showGameRules, askQuestion);

export default startGame;
