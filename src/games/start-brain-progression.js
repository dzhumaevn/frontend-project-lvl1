import getRandomNum from '../utils.js';
import start from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = () => {
  const startPos = getRandomNum(0, 100);
  const progressionStep = getRandomNum(0, 10);
  const hideElementPos = getRandomNum(0, 9);

  const progression = [startPos];

  for (let i = 1; i < 10; i += 1) {
    const prevValue = progression[i - 1];
    progression.push(prevValue + progressionStep);
  }

  const result = [];
  result.push(progression[hideElementPos].toString());

  progression[hideElementPos] = '..';
  result.push(progression.join(' '));

  return {
    rightAnswer: result[0],
    question: result[1],
  };
};

const startGame = () => start(description, createProgression);

export default startGame;
