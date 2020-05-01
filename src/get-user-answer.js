import readlineSync from 'readline-sync';

const getUserAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

export default getUserAnswer;
