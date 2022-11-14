//This application requires inquirer and the ability to write an HTML onto the file system.
const inquirer = require("inquirer");
const fs = require('fs');

class Generator{   
//Prepares an empty array to add new members into.
    constructor(){
        this.members = []
    }

//A series of prompts for the creation of team managers, engineers and interns.
//Accepts a series of inputs, eventually pushing the new entry into the existing array, before opening the menu once again.
//There's only one manager per team, so it's extra showy.
    makeManager(){

        openMenu()
    }

    makeEngineer(){
        
        openMenu()
    }

    makeIntern(){
        
        openMenu()
    }

//Opens a menu for the user to add new entries to their team, then starts a new series of prompts if selected.
    openMenu(){
        
    }

//Accepts the current array, and processes it into the requested HTML before quitting the application.
    finalize(){

        console.log("\nAll done! Go take a look in the 'public' folder for your newly created website!");
        process.exit(0);
      }
}

module.exports = Generator;