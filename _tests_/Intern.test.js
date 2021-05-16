const Intern = require("../utils/Intern");

describe("Intern", () => {
  describe("this is to test the intern input", () => {
    it("should output name, email and email with valid input", () => {
      const name = "nick";
      const id = 1234;
      const email = "nick@yahoo.com";
      const school = "DU";

      const obj = new Intern(name, id, email, school);

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getSchool()).toEqual(school);
    });

    // it("should throw error if invalid input", () => {
    //   const intern = () => new Intern();

    //   expect(intern).toThrow(error);
    // });
    // it("should throw an error if not a string", () => {});
    // it("should throw an error if is an empty string", () => {});
  });
});
