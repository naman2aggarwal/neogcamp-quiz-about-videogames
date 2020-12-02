let readlineSync = require('readline-sync');

//list to store quiz highscores
let highscores = [ 0, 0, 0];

let questionList = [
  {
    question : 'What is name of super mario\'s brother?',
    answer : 'luigi'
  },
  {
    question : 'What kind of animal is Sonic?',
    answer : 'hedgehog'
  },
  {
    question : 'Which weapon is used by the characters in contra, gun or sword',
    answer : 'gun'
  },
  {
    question : 'Leo, Raph, Mike are three of the four ninja turtle. Which is the 4th one?',
    answer : 'don'
  },
  {
    question : 'What kind of animal is Kong?',
    answer : 'gorilla'
  },
  {
    question : 'Which character is associated with genie?',
    answer : 'aladdin'
  },{
    question : 'What kind of animals are chip and dale',
    answer : 'squirrel'
  }
];
//it takes user input for questions given in parameter list and match them against correct answers given in parameter list and shows up user score and highscores
function quiz(quesList) {
  console.log('Welcome to the quiz about 90s video games')
  let ans = '';
  let score = 0;
  for(let i = 0; i < quesList.length; i++) {
    ans = readlineSync.question(quesList[i].question + ": ");
    if(ans.toUpperCase() === quesList[i].answer.toUpperCase()) {
      score += 1;
      console.log('correct answer');
    } else {
      console.log('incorrect!');
    }
  }
  console.log(`Your score is: ${score}`);
  console.log('The previous highscores are: ');
  for(let i = 0; i < highscores.length; i++) {
    console.log(highscores[i]);
  }
  for( let i = 0; i < highscores.length; i++) {
    if(score >= highscores[i]) {
      console.log('Hurray!, You are a highscorer. Send a screenshort to get your score updated in list of high scores');
      break;
    }
  }

}

quiz(questionList);