import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const getRandomNum = () => Math.floor(Math.random() * 20);

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isAnswerRight = true;
  let questionCounter = 1;

  while (isAnswerRight && questionCounter <= 3) {
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === rightAnswer && questionCounter === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      isAnswerRight = false;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
    }

    questionCounter += 1;
  }
};

export default startGame;
