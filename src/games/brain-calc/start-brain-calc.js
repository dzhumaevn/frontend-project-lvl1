import readlineSync from 'readline-sync';
import showMessage from '../check-user-answer.js';
import getRandomNum from '../get-random-num.js';

// Можно было бы без этого обойтись, реализовав через eval, либо через конструктор Функции,
// но такие способы крайне нежелательны, как я понял :)
const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const operations = ['+', '-', '*'];

const startBrainCalcGame = (userName) => {
  console.log('What is the result of the expression?');

  let isAnswerRight = true;
  for (let i = 0; i < 3 && isAnswerRight; i += 1) {
    const randomNum1 = getRandomNum(10);
    const randomNum2 = getRandomNum(10);

    const randomNumForOperations = getRandomNum(2);
    const randomOperation = operations[randomNumForOperations];

    console.log(`Question: ${randomNum1} ${randomOperation} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const rightAnswer = mathItUp[randomOperation](randomNum1, randomNum2).toString();

    isAnswerRight = userAnswer === rightAnswer;

    showMessage(userAnswer, rightAnswer, i, userName);
  }
};

export default startBrainCalcGame;
