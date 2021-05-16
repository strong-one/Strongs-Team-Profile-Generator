const Engineer = require("../utils/Engineer");

describe("Engineer", () => {
  describe("this is to test the engineer input", () => {
    it("should output name, email and email with valid input", () => {
      const name = "nick";
      const id = 1234;
      const email = "nick@yahoo.com";
      const gitHub = "strong-one";

      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.getName()).toBe(name);
      expect(obj.getId()).toBe(id);
      expect(obj.getEmail()).toBe(email);
      expect(obj.getGithub()).toBe(gitHub);
    });

    // it("should throw error if invalid input", () => {
    //   const engineer = () => new Engineer();

    //   expect(engineer).toThrow(error);
    // });
    // it("should throw an error if not a string", () => {});
    // it("should throw an error if is an empty string", () => {});
  });
});
