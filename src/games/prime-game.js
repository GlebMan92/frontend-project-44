import { startGame, getRandomInt } from '../index.js';

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuest = () => {
    const randomNumber = getRandomInt(100);
    return randomNumber;
  };

  const getTrueAnswer = (num) => {
    let trueAnswer = '';
    let count = 0;
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) count += 1;
    }
    trueAnswer = count === 2 ? 'yes' : 'no';
    return trueAnswer;
  };

  startGame(gameRules, getQuest, getTrueAnswer);
};
