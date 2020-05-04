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

const gameRules = 'What is the result of the expression?';

const askQuestion = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);

  const numForOperations = getRandomNum(0, 2);
  const operation = operations[numForOperations];

  return {
    question: `${num1} ${operation} ${num2}`,
    rightAnswer: mathItUp[operation](num1, num2).toString(),
  };
};

const startGame = () => start(gameRules, askQuestion);

export default startGame;
