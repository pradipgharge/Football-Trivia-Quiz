var readlineSync = require("readline-sync");
var emoji = require("node-emoji");
var chalk = require ("chalk");

// accept user name
var userName = readlineSync.question(" Please enter your name: ");
console.log(chalk.bgBlue("\n Welcome " + userName.toUpperCase() + ", to Football Trivia quiz "));


// set of instructions
console.log(chalk.bgRed("\n Following is the set of rules & regulations for this game: "));
console.log(chalk.yellowBright("\n1.There are two levels in this game.\n2.Level 1 has 10 questions and level 2 has 5 questions.\n3.Level two will start only if you score above 13 points in level 1.\n4.For every right answer you will get 2 points.\n3.For every wrong answer 1 point will be deducted.\n4.There is no time limit, however it shouldn't take you long if you are a football fan!"));