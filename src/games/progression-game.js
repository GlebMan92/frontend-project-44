import { startGame, getRandomInt } from '../index.js';

export default () => {
  const gameRules = 'What number is missing in the progression?';

  const getArrey = () => {
    const arrey = [];
    const arrLength = getRandomInt(10, 5);
    const increment = getRandomInt(10, 1);
    let firstItem = getRandomInt(15);
    while (arrey.length <= arrLength) {
      arrey.push(firstItem);
      firstItem += increment;
    }
    return arrey;
  };

  const getQuest = () => {
    const progression = getArrey();
    const hiddenItem = getRandomInt(progression.length - 1);
    progression[hiddenItem] = '..';
    return progression.join(' ');
  };

  const getTrueAnswer = (getQuest) => {
    const questInArr = getQuest.split(' ');
    const hiddenIndex = questInArr.indexOf('..');
    const lastIndex = questInArr.length - 1;
    let trueAnswer;
    let incr;
    if (hiddenIndex > questInArr.length / 2) {
      incr = questInArr[1] * 1 - questInArr[0] * 1;
      trueAnswer = questInArr[hiddenIndex - 1] * 1 + incr;
    } else {
      incr = questInArr[lastIndex] * 1 - questInArr[lastIndex - 1] * 1;
      trueAnswer = questInArr[hiddenIndex + 1] * 1 - incr;
    }
    return trueAnswer.toString();
  };

  startGame(gameRules, getQuest, getTrueAnswer);
};
