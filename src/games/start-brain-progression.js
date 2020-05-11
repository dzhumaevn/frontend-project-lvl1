import getRandomNum from '../utils.js';
import start from '../index.js';

const genProgression = (firstElement, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const current = firstElement + i * step;
    progression.push(current);
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const createProgression = () => {
  const progressionLength = 10;

  const firstElement = getRandomNum(0, 100);
  const step = getRandomNum(0, progressionLength);
  const hideElementPos = getRandomNum(0, progressionLength - 1);

  const progression = genProgression(firstElement, step, progressionLength);

  const rightAnswer = progression[hideElementPos].toString();

  progression[hideElementPos] = '..';
  const question = progression.join(' ');

  return {
    rightAnswer,
    question,
  };
};

const startGame = () => start(description, createProgression);

export default startGame;
