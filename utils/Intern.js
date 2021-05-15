const Employee = require("./Employee");

// extends - brings values from employee function into Intern function, still requires the parameters in the class function.
class Intern extends Employee {
  constructor(name, id, email, school) {
    // super (comes from above(parent file)) is a refrence of the employee data
    super(name, id, email);
    // this is a refrence to the constructor function
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
