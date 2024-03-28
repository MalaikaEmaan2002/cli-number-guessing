#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const numberGuess = await inquirer.prompt([
    {
        name: "userGuessNUmber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);
if (numberGuess.userGuessNUmber === randomNumber) {
    console.log("congtratulation! you guessd right number");
}
else {
    console.log("oops! you guessed wrong number");
}
