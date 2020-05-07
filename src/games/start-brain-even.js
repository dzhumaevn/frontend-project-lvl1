import getRandomNum from '../utils.js';
import start from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genRoundData = () => {
  const num = getRandomNum(0, 10);
  return {
    question: num.toString(),
    rightAnswer: isEven(num) ? 'yes' : 'no',
  };
};

const startGame = () => start(description, genRoundData);

export default startGame;
