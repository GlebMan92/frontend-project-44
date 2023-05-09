import { startGame, getRandomInt } from '../index.js';

export default () => {
  const getGcd = (value1, value2) => {
    let gcd = '0';
    let int1 = value1;
    let int2 = value2;
    if (int1 * int2 === 0) return gcd;
    while (int1 !== int2) {
      if (int1 > int2) {
        int1 -= int2;
      } else {
        int2 -= int1;
      }
    }
    gcd = String(int1);
    return gcd;
  };
  const getRules = () => {
    console.log('Find the greatest common divisor of given numbers.');
  };

  const getQuest = () => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    const question = `${number1} ${number2}`;
    return question;
  };
  const getTrueAnswer = (value) => {
    const [num1, num2] = value.split(' ');
    const trueAnswer = getGcd(num1, num2);
    return trueAnswer;
  };

  startGame(getRules, getQuest, getTrueAnswer);
};
