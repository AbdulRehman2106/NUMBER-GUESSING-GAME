#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.rgb(0, 191, 255)("\n\t Welcome  TO  -  CLS  NUMBER  GUESSING  GAME\n"));
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer_1.default.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "Enter your guess number ( Number Limit from 1 to 10 ",
    },
]);
if (answer.userGuess === randomNumber) {
    console.log(chalk_1.default.rgb(255, 255, 0)("\nCongratulations ! You Guess A Correct Number\n"));
}
else {
    console.log(chalk_1.default.rgb(0, 255, 127)("\nSorry ! You Guess A Wrong Number\n"));
}
console.log(chalk_1.default.rgb(255, 140, 0)("\n PRESENTING  BY  ABDUL  REHMAN\n"));
