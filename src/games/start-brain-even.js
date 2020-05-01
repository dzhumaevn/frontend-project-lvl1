import getRandomNum from '../utils.js';
import start from '../index.js';

const showGameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const askQuestion = () => {
  const randomNum = getRandomNum(10);
  console.log(`Question: ${randomNum}`);

  return randomNum % 2 === 0 ? 'yes' : 'no';
};

const startGame = () => start(showGameRules, askQuestion);

export default startGame;
