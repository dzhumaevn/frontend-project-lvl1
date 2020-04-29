import readlineSync from 'readline-sync';
import showMessage from '../check-user-answer.js';
import createProgression from './create-progression.js';

const startBrainProgressionGame = (userName) => {
  console.log('What number is missing in the progression?');

  let isAnswerRight = true;
  for (let i = 0; i < 3 && isAnswerRight; i += 1) {
    const progression = createProgression();

    const rightAnswer = progression[0];
    const question = progression[1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    isAnswerRight = userAnswer === rightAnswer;

    showMessage(userAnswer, rightAnswer, i, userName);
  }
};

export default startBrainProgressionGame;
