import { startGame, getRandomInt } from '../index.js';

export default () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const getGcd = (value1, value2) => {
    if (value2 > value1) return getGcd(value2, value1);
    if (!value2) return value1;
    return getGcd(value2, value1 % value2);
  };

  const getQuest = () => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    const question = `${number1} ${number2}`;
    return question;
  };

  const getTrueAnswer = (value) => {
    const [num1, num2] = value.split(' ');
    let trueAnswer;
    trueAnswer = num1 * num2 === 0 ? 0 : trueAnswer = getGcd(num1, num2);
    return trueAnswer.toString();
  };

  startGame(gameRules, getQuest, getTrueAnswer);
};
