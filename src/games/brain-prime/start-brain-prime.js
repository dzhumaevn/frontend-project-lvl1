import readlineSync from 'readline-sync';
import showMessage from '../check-user-answer.js';
import getRandomNum from '../get-random-num.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const startBrainPrimeGame = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let isAnswerRight = true;
  for (let i = 0; i < 3 && isAnswerRight; i += 1) {
    const randomNum = getRandomNum(50);

    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';

    isAnswerRight = userAnswer === rightAnswer;

    showMessage(userAnswer, rightAnswer, i, userName);
  }
};

export default startBrainPrimeGame;
