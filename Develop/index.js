// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the tiltle of your project? (Required)', 
        validate: titleInput=>{
            if(titleInput){
                return true;
            }else{
                console.log(`please enter the title of your project!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`email`,
        message:`What is your email address? (Required)`,
        validate: githubInput=>{
            if (githubInput){
                return true;
            }else{
                console.log(`please provide your email!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`what`,
        message:`What is your project and what problem can it solve? (Required)`,
        validate: whatInput=>{
            if (whatInput){
                return true;
            }else{
                console.log(`please provide some information what your project is about!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`why`,
        message:`Why did you create this project? (Required)`,
        validate: whyInput=>{
            if (whyInput){
                return true;
            }else{
                console.log(`please enter why you created this project!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`how`,
        message:`how can someone benifit with this project? (Required)`,
        validate: howInput=>{
            if (howInput){
                return true;
            }else{
                console.log(`please provide some insight about the project!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`installation`,
        message:`please provide step by step installation instructions for this project. (Required)`,
        validate: installInput=>{
            if (installInput){
                return true;
            }else{
                console.log(`please provide your installation instructions!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`usage`,
        message:`please provide instructions and examples of useage? (Required)`,
        validate: usageInput=>{
            if (usageInput){
                return true;
            }else{
                console.log(`please enter some instructions about the usage!`);
                return false;
            }
        }
    },
];

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
