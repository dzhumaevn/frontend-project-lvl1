import getRandomNum from '../utils.js';
import start from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const askQuestion = () => {
  const randomNum = getRandomNum(0, 10);
  return {
    question: `${randomNum}`,
    rightAnswer: randomNum % 2 === 0 ? 'yes' : 'no',
  };
};

const startGame = () => start(gameRules, askQuestion);

export default startGame;
