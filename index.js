var readlineSync = require("readline-sync");
var emoji = require("node-emoji");
var chalk = require ("chalk");

// accept user name
var userName = readlineSync.question(" Please enter your name: ");
console.log(chalk.bgBlue("\n Welcome " + userName.toUpperCase() + ", to Football Trivia quiz "));


// set of instructions
console.log(chalk.bgRed("\n Following is the set of rules & regulations for this game: "));
console.log(chalk.yellowBright("\n1.There are two levels in this game.\n2.Level 1 has 10 questions and level 2 has 5 questions.\n3.Level two will start only if you score above 13 points in level 1.\n4.For every right answer you will get 2 points.\n3.For every wrong answer 1 point will be deducted.\n4.There is no time limit, however it shouldn't take you long if you are a football fan!"));


var userReplyOne = readlineSync.question(chalk.white("\nSo are you ready to play the game [y/n]?\nUserReply: "));
var choiceOne = userReplyOne;

if (choiceOne.toUpperCase() === "Y")
{
  var userFinalScore = loadGame();
  highScore();
}

 else
{
  console.log("\nThank You!! Do visit again")
}



function highScore()
{ 
//record of highscores
var highScores = [
  {
    playerName:" Pradip Gharge",
    score: 25,
    medal: emoji.get("first_place_medal"),
    position: "--HIGHEST-EVER--"
  },

  {
    playerName:" Vinit hardikar",
    score: 20,
    medal: emoji.get("second_place_medal"),
    position: "--SECOND-HIGHEST--"
  },

  {
    playerName:" Sanketh Gharge",
    score: 18,
    medal: emoji.get("third_place_medal"),
    position: "--THIRD-HIGHEST--"
  }
];

  // display highScore
  console.log(chalk.yellowBright.bgMagenta("\n\n------Checkout the High Scores------\n"));
  for(i=0; i < highScores.length; i++)
  {
  console.log("Player name:" + highScores[i].playerName + highScores[i].medal);
  console.log("Score:"+highScores[i].score);
  console.log("-----------------\n");
  }

  console.log("===================================================");



  //Check whether the user has beaten any previous highscore
  for (i = 0; i < highScores.length; i++) 
  {
    var currentHighScore = highScores[i];

    if (userFinalScore > currentHighScore.score) 
    {
      console.log(chalk.black.bgCyan("\n\n Congratulations You've beaten the " +currentHighScore.position + " score.\nPlease send me a screenshot of your score, so that I can update your name in the highscore list "));

      break;  //using break so that the above message is not displayed multiple times in case user beats all of the previous highscores.
    }
    
  }
  console.log(chalk.black.bgYellowBright("\n\n Thank You for playing this quiz, I hope you learnt something new about football. "))
  console.log("\n\n\n  *********---PLEASE SHARE YOUR VALUABLE FEEDBACK !---*********");
}