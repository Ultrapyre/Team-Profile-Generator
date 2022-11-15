//This application requires inquirer and the ability to write an HTML onto the file system.
const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class Generator{   
//Prepares an empty array to add new members into.
    constructor(){
        this.members = []
    }

//A series of prompts for the creation of team managers, engineers and interns.
//Accepts a series of inputs, eventually pushing the new entry into the existing array, before opening the menu once again.
//There's only one manager per team, so it's extra showy.
    makeManager(){
        console.log("Welcome to the Team Profile Generator! For organizing a new team together.\n")
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "officenumber",
                message: "What is your office number?"
            }
        ])
        .then(entries => {
            const manager = new Manager(entries.name, entries.id, entries.email, entries.officenumber);
            this.members.push(manager);
            console.log(`Thanks for the info, ${manager.name}! Now, let's get started with your team.`)
            this.openMenu()
        })
    }

    makeEngineer(){
        console.log("Adding a new engineer? Let's add some credentials.\n")
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's Github username?"
            }
        ])
        .then(entries => {
            const engineer = new Engineer(entries.name, entries.id, entries.email, entries.github);
            this.members.push(engineer);
            console.log(`Engineer ${engineer.name} added to the roster!`)
            this.openMenu()
        })
    }

    makeIntern(){
        console.log("Adding a new intern? Let's add some credentials.\n")
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?"
            },
            {
                type: "input",
                name: "school",
                message: "Where did the intern receive their education?"
            }
        ])
        .then(entries => {
            const intern = new Intern(entries.name, entries.id, entries.email, entries.school);
            this.members.push(intern);
            console.log(`Intern ${intern.name} added to the roster!`)
            this.openMenu()
        })
    }

//Opens a menu for the user to add new entries to their team, then starts a new series of prompts if selected.
    openMenu(){
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Add a new engineer or intern, or just finish up the process!",
                choices: [
                    "Add new Engineer",
                    "Add new Intern",
                    new inquirer.Separator(),
                    "Finalize team profile"
                ]
            }
        ])
        .then(val => {
            switch (val.choice) {
                case "Add new Engineer":
                    this.makeEngineer();
                    break;
                case "Add new Intern":
                    this.makeIntern();
                    break;
                case "Finalize team profile":
                    this.finalize();
                break;
                default:
                    break;
            }
        })
    }

//Accepts the current array, and processes it into the requested HTML before quitting the application.
    finalize(){
        console.log("Finished? Give me a moment to slap it all together...");
        this.members.forEach((employee) => {
            //Different employees have different-looking displays. getRole can be used to choose the right look for the right member.
            const role = employee.getRole();
            switch (role){
                case "Manager":
                    break;
                case "Engineer":
                    break;
                case "Intern":
                    break;
            }
        })
        console.log("\nAll done! Go take a look in the 'public' folder for your newly created website!");
        process.exit(0);
      }
}

module.exports = Generator;