#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.rgb(0,191,255)("\n\t Welcome  TO  -  CLS  NUMBER  GUESSING  GAME\n"));

const randomNumber = Math.floor(Math.random() * 3 + 1 );

const answer = await inquirer.prompt([
  {
    name: "userGuess",

    type: "number",

    message: "Enter your guess number ( Number Limit from 1 to 10 ",
  },
]);

if (answer.userGuess === randomNumber) {
 
    console.log(chalk.rgb(255,255,0)("\nCongratulations ! You Guess A Correct Number\n"));
} 
else {

    console.log(chalk.rgb(0,255,127)("\nSorry ! You Guess A Wrong Number\n"));
}


console.log(chalk.rgb(255,140,0)("\n PRESENTING  BY  ABDUL  REHMAN\n"));
