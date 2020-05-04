import getRandomNum from '../utils.js';
import start from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askQuestion = () => {
  const randomNum = getRandomNum(0, 50);

  return {
    question: `${randomNum}`,
    rightAnswer: isPrime(randomNum) ? 'yes' : 'no',
  };
};

const startGame = () => start(gameRules, askQuestion);

export default startGame;
