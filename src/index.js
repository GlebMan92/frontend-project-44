import readLineSync from 'readline-sync';

const startGame = (gameRules, getQuest, getTrueAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${gameRules}`);
  for (let raund = 1; raund <= 3; raund += 1) {
    const quest = getQuest();
    console.log(`Question: ${quest}`);
    const correctAnswer = getTrueAnswer(quest);
    const playerAnswer = readLineSync.question('Your answer:');
    switch (playerAnswer === correctAnswer) {
      case true:
        console.log('Correct!');
        break;
      case false:
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        return;
      default:
        break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const getRandomInt = (max, min = 0) => {
  let randomInt = Math.floor(Math.random() * max);
  while (randomInt < min) {
    randomInt += 1;
  }
  return randomInt;
};

export { startGame, getRandomInt };
