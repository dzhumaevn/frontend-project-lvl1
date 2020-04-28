import readlineSync from 'readline-sync';
import showMessage from '../check-user-answer.js';
import getRandomNum from '../get-random-num.js';

const startBrainEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isAnswerRight = true;
  for (let i = 0; i < 3 && isAnswerRight; i += 1) {
    const randomNum = getRandomNum(10);

    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    isAnswerRight = userAnswer === rightAnswer;

    showMessage(userAnswer, rightAnswer, i, userName);
  }
};

export default startBrainEvenGame;
