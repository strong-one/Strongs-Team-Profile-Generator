const Employee = require("./Employee");

// extends - brings values from employee function into Manager function, still requires the parameters in the class function.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // super (comes from above(parent file)) is a refrence if the employee data
    super(name, id, email);
    // this is a refrence to the constructor function
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
