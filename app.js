'use strict';
const path = require('path');
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const writeFileAsync = util.promisify(fs.writeFile);


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
    try {
        const userInfo = await inquirer.prompt(questions);

        if (userInfo.role === 'manager') {
            userInfo.roleInfo = await inquirer.prompt(roleQuestions[0]);
        } else if (userInfo.role === 'engineer') {
            userInfo.roleInfo = await inquirer.prompt(roleQuestions[1]);
        } else {
            userInfo.roleInfo = await inquirer.prompt(roleQuestions[2]);
        }
        await writeFileAsync('team.html', generateHTML(userInfo), 'utf8');

    } catch (err) {
        console.error(err);
    };

};

async function generateHTML() {
    const page = await browser.newPage();
    await page.goto(`file://${path.resolve(__dirname, 'team.html')}`, {
        waitUntil: "networkidle0"
    });
};

function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>People that work!</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            .container {
                display: flex;
                justify-content: center;
                flex-direction: row;
            }
        </style>
    </head>
    <body>
        <div class="parent-container">
            <div class="box">
                <h2 class="header"></h2>
                <div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card text-center">
                                <div class="card-header">
                                    Welcome To.....
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">People That Work!</h5>
                                    <p class="card-text">The Dream Team</p>
                                </div>
    
                                <div class="card-footer">
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="parent-container2">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        ${questions.name.role}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">${questions.id}</li>
                                        <li class="list-group-item">${questions.email}</li>
                                        <li class="list-group-item">${questionsresponse}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        ${questions.name.role}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">${questions.id}</li>
                                        <li class="list-group-item">${questions.email}</li>
                                        <li class="list-group-item">${questions.response}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="parent-container3">
            <div class="container">
                <div class="row">
    
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        ${questions.name.role}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">${questions.id}</li>
                                        <li class="list-group-item">${questions.email}</li>
                                        <li class="list-group-item">${questions.response}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </body>
    </html>`
}

init();