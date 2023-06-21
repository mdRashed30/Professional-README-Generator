
//Include packages needed for this application

const inquirer = require("inquirer");

const fs = require("fs");
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "Please enter the title of your project.",
    name: "title",
  },

  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },

  {
    type: "input",
    message: "Please enter your Github username.",
    name: "username",
  },

  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please give instructions for the installation of your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide instructions for usage.",
    name: "usage",
  },
  {
    type: "list",
    message: "What are the any license requirements for using your project?",
    name: "license",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },

  {
    type: "input",
    message: "Please give any instructions for contributing to your project.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please describe any tests you ran on your project.",
    name: "tests",
  },

];

//Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("Created readme.md successfully");
  });
}

//Create a function to initialize app

function init() {
  inquirer.prompt(questions).then(answers => {
    writeToFile("README.md", generateMarkdown(answers));

  });
}

//Function call to initialize app

init();

