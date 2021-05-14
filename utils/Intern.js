const Employee = require("./Employee");

// extends - brings values from employee function into Intern function, still requires the parameters in the class function.
class Intern extends Employee {
  constructor(name, id, email, school) {
    // super is a refrence if the employee data
    super(name, id, email);
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
