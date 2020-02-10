'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require(".//lib/manager");
const Engineer = require(".//lib/engineer");
const Intern = require(".//lib/intern");


let managers = [];
let engineers = [];
let interns = [];

async function promptUser() {
    try {
        const response = await inquirer.prompt([
            {
                type: 'input',
                message: 'what is your name?',
                name: 'mname'
            },
            {
                type: 'input',
                message: 'what is your id number?',
                name: 'mnumber'
            },
            {
                type: 'input',
                message: 'what is your e-mail?',
                name: 'memail'
            },
            {
                type: 'input',
                message: 'what is your office number?',
                name: 'onumber'
            },


        ]);
        const newManager = new Manager(
            response.mname,
            response.mnumber,
            response.memail,
            response.onumber

        );

        managers.push(newManager);
    } catch (err) {
        console.error(err);

        {
            addEmployee();
        }

        async function addIntern() {
            try {
                const response = await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is your name?',
                        name: 'iname'
                    },
                    {
                        type: 'input',
                        message: 'what is your id?',
                        name: 'inumber'
                    },
                    {
                        type: 'input',
                        message: 'What is your e-mail?',
                        name: 'iemail'
                    },
                    {
                        type: 'input',
                        message: 'what is your school?',
                        name: 'ischool'
                    },
                ]);
                const NewIntern = new Intern(
                    response.iname,
                    response.inumber,
                    response.iemail,
                    response.ischool
                );
                interns.push(newIntern);

            } catch (err) {
                console.error(err);
            }
        };
        {
            addEmployee();
        }
        async function addEngineer() {
            try {
                const response = await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'what is your name?',
                        name: 'ename'
                    },
                    {
                        type: 'input',
                        message: 'what is your id number?',
                        name: 'enumber'
                    },
                    {
                        type: 'input',
                        message: 'What is your email?',
                        name: 'eemail'
                    },
                    {
                        type: 'input',
                        message: 'what is your github username?',
                        name: 'github'
                    },
                ]);
                engineers.push(new Engineer(
                    response.ename,
                    response.enumber,
                    response.eemail,
                    response.github
                )
                );
            } catch (err) {
                console.error(err);
            }
        };
        {
            addEmployee();
        }

        async function createEHtml(engineers) {
            let html = '';
            for (const engineer of engineers) {
                html += `<!DOCTYPE html>
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
                                                    ${engineer.getName()}
                                                </div>
                                                <div class="card-header2">
                                                    ${engineer.getRole()}
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">${engineer.id}</li>
                                                    <li class="list-group-item">${engineer.email}</li>
                                                    <li class="list-group-item">${engineer.getGithub()}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                
                </html>
                
                
                
                
                </body>
                
                </html>`;
            }
            return html;
        }
    };
}
async function createMhtml(managers) {
    let html = '';
    for (const manager of managers) {
        html += `<!DOCTYPE html>
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
                                            ${manager.getName()}
                                        </div>
                                        <div class="card-header2">
                                            ${manager.getRole()}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">${manager.id}</li>
                                            <li class="list-group-item">${manager.email}</li>
                                            <li class="list-group-item">${manager.getOfficeNumber()}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
        </html>
        
        
        
        
        </body>
        
        </html>`
    }
    return html;
}
async function createIhtml(interns) {
    let html = '';
    for (const intern of interns) {
        html += `<!DOCTYPE html>
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
                                            ${intern.getname()}
                                        </div>
                                        <div class="card-header2">
                                            ${intern.getRole()}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">${intern.id}</li>
                                            <li class="list-group-item">${intern.email}</li>
                                            <li class="list-group-item">${intern.getSchool()}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
        </html>
        
        
        
        
        </body>
        
        </html>`
    }
    return html;
}

async function createHTML(managers, interns, engineers) {
    const ehtml = await createEhtml(engineers);
    const mhtml = await creatMhmtl(managers);
    const ihtml = await createIhtml(interns);

    fs.writeFile(
        'team.html',
        `<!DOCTYPE html>
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
                        ${manager.html}
                        ${intern.html}
                        ${engineer.html}
                    </div>
                </div>
            </div>
        </body>
        
        </html>`
    );
}
promptUser()