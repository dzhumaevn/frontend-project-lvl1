import readlineSync from 'readline-sync';

const showGameRules = (gameRules) => console.log(gameRules);

const start = (gameRules, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  showGameRules(gameRules);

  let questionCount = 1;
  let isAnswerRight = true;

  while (questionCount <= 3 && isAnswerRight) {
    const { question, rightAnswer } = askQuestion();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ')
      .toLowerCase();

    isAnswerRight = userAnswer === rightAnswer;

    if (isAnswerRight && questionCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else if (isAnswerRight) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
    }

    questionCount += 1;
  }
};

export default start;
