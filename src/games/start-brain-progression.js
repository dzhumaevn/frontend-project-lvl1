import getRandomNum from '../utils.js';
import start from '../index.js';

const createProgression = () => {
  const startPos = getRandomNum(100);
  const progressionStep = getRandomNum(10);
  const hideElementPos = getRandomNum(9);

  const progression = [startPos];

  for (let i = 1; i < 10; i += 1) {
    const prevValue = progression[i - 1];
    progression.push(prevValue + progressionStep);
  }

  const result = [];
  result.push(progression[hideElementPos].toString());

  progression[hideElementPos] = '..';
  result.push(progression.join(' '));

  return result;
};

const showGameRules = () => console.log('What number is missing in the progression?');

const askQuestion = () => {
  const progression = createProgression();

  const rightAnswer = progression[0];
  const question = progression[1];

  console.log(`Question: ${question}`);

  return rightAnswer;
};

const startGame = () => start(showGameRules, askQuestion);

export default startGame;
