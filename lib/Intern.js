// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor or class for the intern that extends the employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        //call the employee constructor
        super(name, id, email);
        this.school = school;
    }
    // return school from input 
    getSchool() {
        return this.school;
    }

    // Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;