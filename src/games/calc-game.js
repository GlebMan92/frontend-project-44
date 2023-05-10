import { startGame, getRandomInt } from '../index.js';

export default () => {
  const getRandomSymbol = () => {
    const randomNum = getRandomInt(3);
    const symbols = ['+', '-', '*'];
    const result = symbols[randomNum];
    return result;
  };

  const getRules = () => {
    const gameRules = 'What is the result of the expression?';
    return gameRules;
  };

  const getQuest = () => {
    const symb = getRandomSymbol();
    const num1 = getRandomInt(10);
    const num2 = getRandomInt(10);
    const quest = `${num1} ${symb} ${num2}`;
    return quest;
  };

  const getTrueAnswer = (getQuest) => {
    const int1 = parseInt(getQuest, 10);
    const int2 = parseInt(getQuest.slice(getQuest.length / 2 + 1), 10);
    let trueAnswer = 0;
    const questInArr = getQuest.split(' ');
    switch (questInArr[1]) {
      case '+':
        trueAnswer = String(int1 + int2);
        break;
      case '-':
        trueAnswer = String(int1 - int2);
        break;
      case '*':
        trueAnswer = String(int1 * int2);
        break;
      default:
        break;
    }
    return trueAnswer;
  };

  startGame(getRules, getQuest, getTrueAnswer);
};
