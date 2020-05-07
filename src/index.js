import readlineSync from 'readline-sync';

const start = (description, genRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let questionCount = 1; questionCount <= 3; questionCount += 1) {
    const { question, rightAnswer } = genRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ')
      .toLowerCase();

    const isAnswerRight = userAnswer === rightAnswer;

    if (isAnswerRight) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default start;
