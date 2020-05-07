import getRandomNum from '../utils.js';
import start from '../index.js';

// Можно было бы без этого обойтись, реализовав через eval, либо через конструктор Функции,
// но такие способы крайне нежелательны, как я понял :)
const calculator = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const operations = Object.keys(calculator);

const description = 'What is the result of the expression?';

const genRoundData = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);

  const indexOfOperation = getRandomNum(0, operations.length - 1);
  const operation = operations[indexOfOperation];

  return {
    question: `${num1} ${operation} ${num2}`,
    rightAnswer: calculator[operation](num1, num2).toString(),
  };
};

const startGame = () => start(description, genRoundData);

export default startGame;
