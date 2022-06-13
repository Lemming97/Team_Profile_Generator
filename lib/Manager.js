// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor or class for the manager that extends the employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calling employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // Overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager;