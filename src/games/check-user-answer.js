const showMessage = (userAnswer, rightAnswer, i, userName) => {
  const isUserAnswerRight = userAnswer === rightAnswer;

  if (isUserAnswerRight && i < 3) {
    console.log(`Congratulations, ${userName}!`);
  } else if (isUserAnswerRight) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
  }
};

export default showMessage;
