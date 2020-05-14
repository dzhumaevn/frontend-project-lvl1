import readlineSync from 'readline-sync';

const roundsCount = 3;

const start = (description, genRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let questionCount = 1; questionCount <= roundsCount; questionCount += 1) {
    const { question, rightAnswer } = genRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ')
      .toLowerCase();

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default start;
