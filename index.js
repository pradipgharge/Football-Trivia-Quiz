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

function loadGame(){
  
    var userScore=0;
    console.log("-----------------------------------------------------------------------------\n\n")
    console.log(chalk.yellowBright.bgMagenta(" <<<---HERE COME THE QUESTIONS--->>> \n"));
  
    //array-of-questions-levelOne
    var questionSetOne =
      [
        {
          question: "In which year was the first football world cup organised ?\na)1950 \nb)1930 \nc)1942 ",
          answer: "1930"
        },
  
        {
          question: "How many players does each team have in a football match ?\na)12 \nb)10 \nc)11 ",
          answer: "11"
        },
  
       {
         question:"Which player is the leading goal scorer of all time? ",
         answer:"Cristiano Ronaldo"
       },
  
       {
         question:"Lionel Messi plays for which team currently ? ",
         answer:"psg"
       },
  
       {
         question:"Who is the captain of Indian Football team ? ",
         answer:"Sunil Chhetri"
       },
  
       {
         question:"Manchester United is club belonging to which country ? ",
         answer:"England"
       },
  
       {
         question:"which country has won the most number of Fifa World cups ? ",
         answer:"Brazil"
       },
  
       {
         question:"What is the spanish football league called ? ",
         answer:"La Liga"
       },
  
       {
         question:"How many substitutions can a team make during a football match ? ",
         answer:"Five"
       },
  
       {
         question:"Which country won the gold medal in football at Tokyo Olympics ? ",
         answer:"Brazil"
       },
    ]
  
    
    // array-of-questions-levelTwo
    var questionSetTwo =[
        {
          question: "Which country the Fifa World Cup in 2010?\na)Spain \nb)Netherlands \nc)Germany",
          answer: "Spain"
        },
  
        {
          question: "Which player has won the most number of Ballon d'ORs ?\na)Johann Cryuff \nb)Lionel Messi \nc)Cristiano Ronaldo",
          answer: "Lionel Messi"
        },
        
        {
          question: "Which country won the Fifa World Cup in 2018 ?\na)Belgium \nb)France \nc)Croatia",
          answer: "France"
        },
        
        {
          question: "Which country won the Uefa Euro 2020 ?\na)France \nb)England \nc)Italy",
          answer: "Italy"
        },
  
        {
          question: "Which team has won the most number of Champions League Trophies ?\na)Liverpool \nb)Real Madrid \nc)Barcelona",
          answer: "Real Madrid"
        },
  
      ]
  
    // play fuction
    function playGame(questionNo, question, answer) 
    {
  
      var userAnswer = readlineSync.question(+questionNo + ". " + question + chalk.bgBlue("\n You entered:")+" ");
  
  
      if (userAnswer.toUpperCase() === answer.toUpperCase()) 
      {
        console.log(chalk.cyanBright("\nGooooooooal!!!") + emoji.get("soccer") + chalk.green.bold(" You are right! "));
        userScore = userScore + 2;
      }
      else 
      {
       console.log(chalk.cyanBright("\nPenaaalty!!!") + emoji.get("worried") + chalk.redBright(" You are wrong.") + chalk.green.bold("\n\nThe correct answer is: " + answer));
       userScore = userScore - 1;
      }
  
      console.log(chalk.bgYellow("Your current score is: " + userScore + " "));
      console.log("-----------------------------\n")
  
    }
  
    //play function call
    for (var i = 0; i < questionSetOne.length; i++) 
    {
      var currentQuestion = questionSetOne[i];
      playGame(i + 1, currentQuestion.question, currentQuestion.answer);
    }
     
      console.log("\n|------------------------------------------|");
      console.log("      Your score after level 1 is: " + userScore);
      console.log("|------------------------------------------|");
  
    if (userScore >= 10) 
    {
      console.log(chalk.bgMagenta.inverse("\n GREAT JOB !!, You have advanced to level 2 "));
      var playLevelTwo = readlineSync.question("\nType 'OK' to enter level 2: ")
      
      if(playLevelTwo.toUpperCase() ==="OK")
      {
       console.log("-----------------------------------------------------------------------------\n\n")
       console.log(chalk.yellowBright.bgMagenta(" <<<---LEVEL-2 QUESTIONS--->>> \n"));
      
       for (i = 0; i < questionSetTwo.length; i++) 
       {
        var currentQuestion = questionSetTwo[i];
        playGame(i+ 1, currentQuestion.question, currentQuestion.answer);
       } 
       
       console.log("\n|------------------------------------------|");
       console.log("  Your FINAL SCORE after level 2 is: " +userScore);
       console.log("|------------------------------------------|");
       
      }
      else
      {
        console.clear();
      }
     
    }
    else 
    {
      console.log(chalk.bgRed("\nUh oh! it seems you have failed to qualify for level 2"));
      
      var playAgain = readlineSync.question("\nYou need to score above 10 points to reach level 2, would you like to have another try  [y/n] ? ")
  
      if(playAgain.toUpperCase() === "Y")
      {
       console.clear();
       loadGame();
      }
    }
  
    return userScore ;
  
}
  