import greeting from './cli.js';
import showMessage from './show-message.js';
import getUserAnswer from './get-user-answer.js';
import getUserName from './get-user-name';

const start = (showGameRules, askQuestion) => {
  greeting();
  const userName = getUserName();

  showGameRules();

  let isAnswerRight = true;
  for (let i = 0; i < 3 && isAnswerRight; i += 1) {
    const rightAnswer = askQuestion();

    const userAnswer = getUserAnswer();

    isAnswerRight = userAnswer === rightAnswer;

    showMessage(userAnswer, rightAnswer, i, userName);
  }
};

export default start;
