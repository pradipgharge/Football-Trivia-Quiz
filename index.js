var readlineSync = require("readline-sync");
var emoji = require("node-emoji");
var chalk = require ("chalk");

// accept user name
var userName = readlineSync.question(" Please enter your name: ");
console.log(chalk.bgBlue("\n Welcome " + userName.toUpperCase() + ", to Football Trivia quiz "));
