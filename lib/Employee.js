class Employee {
    //A constructor that takes in the name, id and email for a new employee.
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //A whole bunch of functions that returns the name, id or email.
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
    //Returns the string "Employee".
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;