import getUserName from './get-user-name.js';

const greeting = () => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default greeting;
