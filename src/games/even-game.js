import { startGame, getRandomInt } from '../index.js';

export default () => {
  const getRules = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const getQuest = () => {
    const randomNumber = getRandomInt(100);
    return randomNumber;
  };

  const getTrueAnswer = (num) => {
    const trueAnswer = num % 2 === 0 ? 'yes' : 'no';
    return trueAnswer;
  };

  startGame(getRules, getQuest, getTrueAnswer);
};
