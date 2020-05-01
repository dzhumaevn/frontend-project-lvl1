import getRandomNum from '../utils.js';
import start from '../index.js';

// Можно было бы без этого обойтись, реализовав через eval, либо через конструктор Функции,
// но такие способы крайне нежелательны, как я понял :)
const mathItUp = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const operations = ['+', '-', '*'];

const showGameRules = () => console.log('What is the result of the expression?');

const askQuestion = () => {
  const randomNum1 = getRandomNum(10);
  const randomNum2 = getRandomNum(10);

  const randomNumForOperations = getRandomNum(2);
  const randomOperation = operations[randomNumForOperations];

  console.log(`Question: ${randomNum1} ${randomOperation} ${randomNum2}`);

  return mathItUp[randomOperation](randomNum1, randomNum2).toString();
};

const startGame = () => start(showGameRules, askQuestion);

export default startGame;
