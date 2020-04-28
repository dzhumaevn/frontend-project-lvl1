import greeting from './cli.js';

const start = (game) => {
  const userName = greeting();

  game(userName);
};

export default start;
