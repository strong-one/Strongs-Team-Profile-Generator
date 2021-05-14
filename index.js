// do not need emolpyee const, because it is the parent, all these are technically employees
const Manager = require("./utils/Manager");
const Intern = require("./utils/Intern");
const Engineer = require("./utils/Engineer");
const inquirer = require("inquirer");
// makes getting relative path eaiser
const path = require("path");
const fs = require("fs");
const { create } = require("istanbul-reports");

const team = [];

// ask a series of questions
const ManagerQuestions = [
  {
    type: "input",
    message: "What is the Manager's name",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Manager's id",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Manager's email",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Manager's officeNumber",
    name: "officeNumber",
  },
];

const InternQuestions = [
  {
    type: "input",
    message: "What is the Intern's name",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Intern's id",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Intern's email",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Intern's school",
    name: "school",
  },
];

const EngineerQuestions = [
  {
    type: "input",
    message: "What is the Engineer's name",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Engineer's id",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Engineer's email",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Engineer's github",
    name: "github",
  },
];

// prepare employee functions
const createManager = () => {
  inquirer.prompt(ManagerQuestions).then((answer) => {
    //create a instance of Manager - call on constructor
    const newManager = new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.officeNumber
    );
    //push the instacne of Manager into teams array
    team.push(newManager);
    //Add more?
    addMore();
  });
};
const createIntern = () => {
  inquirer.prompt(InternQuestions).then((answer) => {
    //create a instance of Intern - call on constructor
    const newIntern = new Intern(
      answer.name,
      answer.id,
      answer.email,
      answer.school
    );
    //push the instacne of Intern into teams array
    team.push(newIntern);
    //Add more?
    addMore();
  });
};
const createEngineer = () => {
  inquirer.prompt(EngineerQuestions).then((answer) => {
    //create a instance of Engineer - call on constructor
    const newEngineer = new Engineer(
      answer.name,
      answer.id,
      answer.email,
      answer.github
    );
    //push the instacne of Engineer into teams array
    team.push(newEngineer);
    //Add more?
    addMore();
  });
};
// when using await and async make sure to use them both.
// aysync saying, expect a promise in function
const addMore = async () => {
  // await for promise to resolve, const answer is the answers to the prompt input.
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Which type of employee would you like to add to the team?",
      choices: ["Engineer", "Manager", "Intern", "Nah, I am good"],
    },
  ]);

  //add manager

  //add enginer

  //add intern
  switch (answer.choice) {
    case "Engineer":
      createEngineer();
      break;
    case "Intern":
      createIntern();
      break;
    case "Manger":
      createManger();
      break;
    default:
      buildTeam();
      break;
  }
};
// now we have array of class objects, need to push into a new file index.html
const buildTeam = () => {
  // write file sync syncronous, saying what file to put information (index.html) using templates
  fs.writeFileSync(); // index.html

  // use templates to generate to page

  const manager = ""; // insert template here
  const intern = ""; // insert template here
  const engineer = ""; // insert template here
};

addMore();
