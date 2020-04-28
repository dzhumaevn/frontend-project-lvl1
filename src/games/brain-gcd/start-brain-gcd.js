import readlineSync from 'readline-sync';
import showMessage from '../check-user-answer.js';
import getRandomNum from '../get-random-num.js';
import NOD from './NOD.js';

const startBrainGCDGame = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');

  let isAnswerRight = true;
  for (let i = 0; i < 3 && isAnswerRight; i += 1) {
    const randomNum1 = getRandomNum(100);
    const randomNum2 = getRandomNum(100);

    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const rightAnswer = NOD(randomNum1, randomNum2).toString();

    isAnswerRight = userAnswer === rightAnswer;

    showMessage(userAnswer, rightAnswer, i, userName);
  }
};

export default startBrainGCDGame;
