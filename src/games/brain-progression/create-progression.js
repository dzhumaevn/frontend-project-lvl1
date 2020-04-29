import getRandomNum from '../get-random-num.js';

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

export default createProgression;
