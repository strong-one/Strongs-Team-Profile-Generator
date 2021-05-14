const Employee = require("./Employee");

// extends - brings values from employee function into engineer function, still requires the parameters in the class function.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super is a refrence if the employee data
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
