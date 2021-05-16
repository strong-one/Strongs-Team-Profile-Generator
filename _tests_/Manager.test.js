const Manager = require("../utils/Manager");

describe("Manager", () => {
  describe("this is to test the manager input", () => {
    it("should output name, email and email with valid input", () => {
      const name = "nick";
      const id = 1234;
      const email = "nick@yahoo.com";
      const officeNumber = "303";

      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });

    // it("should throw error if invalid input", () => {
    //   const manager = () => new Manager();

    //   expect(manager).toThrow(error);
    // });
    // it("should throw an error if not a string", () => {});
    // it("should throw an error if is an empty string", () => {});
  });
});
