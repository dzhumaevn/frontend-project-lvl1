import getUserName from './get-user-name.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};

export default greeting;
