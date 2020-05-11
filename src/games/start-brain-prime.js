import getRandomNum from '../utils.js';
import start from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genRoundData = () => {
  const num = getRandomNum(0, 50);

  return {
    question: num.toString(),
    rightAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

const startGame = () => start(description, genRoundData);

export default startGame;
