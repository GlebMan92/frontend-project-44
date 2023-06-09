import { startGame, getRandomInt } from '../index.js';

export default () => {
  const gameRules = 'What is the result of the expression?';

  const getRandomSymbol = () => {
    const randomNum = getRandomInt(3);
    const symbols = ['+', '-', '*'];
    const result = symbols[randomNum];
    return result;
  };

  const getQuest = () => {
    const symb = getRandomSymbol();
    const num1 = getRandomInt(10);
    const num2 = getRandomInt(10);
    const quest = `${num1} ${symb} ${num2}`;
    return quest;
  };

  const getTrueAnswer = (expr) => {
    const expression = expr;
    const int1 = parseInt(expression, 10);
    const int2 = parseInt(expression.slice(expression.length / 2 + 1), 10);
    let trueAnswer = 0;
    const expInArr = expression.split(' ');
    switch (expInArr[1]) {
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

  startGame(gameRules, getQuest, getTrueAnswer);
};
