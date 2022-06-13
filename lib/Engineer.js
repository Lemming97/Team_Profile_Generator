// importing Employee constructor 
const Employee = require('./Employee');

// engineer constructor or class for the engineer that extends the employee constructor

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //call the employee constructor
        super(name, id, email);
        // GitHub username
        this.github = github;
    }
    // Returns the github username
    getGithub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }



}

// to be exported 
module.exports = Engineer;