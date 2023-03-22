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
        validate: emailInput=>{
            if (emailInput){
                return true;
            }else{
                console.log(`please provide your email!`);
                return false;
            }
        }
    },
    {
        type:`input`,
        name:`github`,
        message:`What is your github username? (Required)`,
        validate: githubInput=>{
            if (githubInput){
                return true;
            }else{
                console.log(`please provide your github!`);
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
    {
        type:`list`,
        name:`license`,
        message:`please choose the license, you are using for your project.`,
        choices:[`mit`, ``, ``, ``,  `no license`]
    },
    {
        type:`input`,
        name:`contributers`,
        message:`List your contributors/colaborators, if any, with their github profiles.`,
        default:``,
    },
    {
        type:`confirm`,
        name:`contribute`,
        message:`Do you allow other developers contribute?`,
        default: true
    },
    {
        type:`input`,
        name:`test`,
        message:`provide instructions to test the app. (Required)`,
        validate: testInput=>{
            if (testInput){
                return true;
            }else{
                console.log(`please enter your test instructions!`);
                return false;
            }
        }
    },
];


//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
     })
    
}

// Function call to initialize app
// init()
// .then(readmeData=>{
//     console.log(readmeData);
//     return generateMarkdown(readmeData);
// })
// .then(mdPage=>{
//     return writeFile(mdPage);
// })
// .then(writeFileRes => {
//     console.log(writeFileRes.message);
// })
// .catch(err => {
//     console.log(err);
// });
