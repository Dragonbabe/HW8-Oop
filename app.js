'use strict';
const path = require('path');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: "what is the employee's name?",
        name: "name"
    },
    {
        type: 'input',
        message: 'what is your employee id?',
        name: "id"
    },
    {
        type: "input",
        message: "what is your e-mail?",
        name: "email"
    },
    {
        type: "list",
        message: "what is your role?",
        choices: ["manager", 'engineer', 'intern'],
        name: "role"
    }

];

const roleQuestions = [
    {
        type: 'input',
        message: 'what is your office number?',
        name: 'response'
    },
    {
        type: 'input',
        message: ' what is your github id?',
        name: 'response'
    },
    {
        type: 'input',
        message: 'Where did you go to school?',
        name: 'response'
    }
];

async function init() {
    const userInfo = await inquirer.prompt(questions);

    if (userInfo.role === 'manager') {
        userInfo.roleInfo = await inquirer.prompt(roleQuestions[0]);
    } else if (userInfo.role === 'engineer') {
        userInfo.roleInfo = await inquirer.prompt(roleQuestions[1]);
    } else {
        userInfo.roleInfo = await inquirer.prompt(roleQuestions[2]);
    }
};








init();