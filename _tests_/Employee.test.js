const { it, expect } = require("@jest/globals");
const { nextTick } = require("process");
const Employee = require("./utils/Employee");

describe("Employee", () => {
  describe("this is the base constructor class", () => {
    it("should output name, email and email with valid input", () => {
      const name = "nick";
      const id = 1234;
      const email = "nick@yahoo.com";

      const obj = new Employee(name, id, email);

      expect("name" in obj).toEqual(name);
      expect("id" in obj).toEqual(id);
      expect("email" in obj).toEqual(email);
    });

    it("should throw error if invalid input", () => {
      const employee = () => new Employee();

      expect(employee).toThrow(error);
    });
    it("should throw an error if not a string", () => {});
    it("should throw an error if is an empty string", () => {});
  });
});
