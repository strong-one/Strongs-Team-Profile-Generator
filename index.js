// do not need emolpyee const, because it is the parent, all these are technically employees
const Manager = require("./utils/Manager");
const Intern = require("./utils/Intern");
const Engineer = require("./utils/Engineer");
const inquirer = require("inquirer");
// makes getting relative path eaiser
const path = require("path");
const fs = require("fs");

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
// when using await and async make sure to use them both. they work the same as .then
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
    case "Manager":
      createManager();
      break;
    default:
      buildTeam();
      break;
  }
};

// now we have array of class objects, need to push into a new file index.html
const buildTeam = () => {
  // write file sync syncronous, saying what file to put information (index.html) using templates
  fs.writeFile("index.html", getTeamString(team), (error) => {
    if (error) {
      console.error("Something went wrong...") ||
        console.log("Building team...");
      return;
    }
  });
};

// use templates to generate to page
const generateManager = function (member) {
  //data = JSON.parse(manager);
  const manager = `
  <div class="card" style="width: 18rem">
    <div class="card-header"> Manager </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Name: ${member.getName()}</li>
      <li class="list-group-item"> ID Number: ${member.getId()}</li>
      <li class="list-group-item"> Email: ${member.getEmail()}</li>
      <li class="list-group-item"> Office Number: ${member.getOfficeNumber()}</li>
    </ul>
  </div>
`;

  return manager;
}; // insert template here

const generateIntern = function (member) {
  const intern = `
  <div class="card" style="width: 18rem">
    <div class="card-header"> Intern </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Name: ${member.getName()}</li>
      <li class="list-group-item"> ID Number: ${member.getId()}</li>
      <li class="list-group-item"> Email: ${member.getEmail()}</li>
      <li class="list-group-item"> School: ${member.getSchool()}</li>
    </ul>
  </div>
`;
  return intern;
}; // insert template here

const generateEngineer = function (member) {
  const engineer = `
  <div class="card" style="width: 18rem">
    <div class="card-header"> Engineer </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Name: ${member.getName()}</li>
      <li class="list-group-item"> ID Number: ${member.getId()}</li>
      <li class="list-group-item"> Email: ${member.getEmail()}</li>
      <li class="list-group-item"> GitHub: ${member.getGithub()}</li>
    </ul>
  </div>
`;
  return engineer;
}; // insert template here

// need to add function to loop through card generate functions to put into one variable so they can all populate to HTML
const getTeamString = (team) => {
  let cardTemplate = "";
  team.forEach((member) => {
    switch (member.getRole()) {
      case "Engineer":
        cardTemplate += generateEngineer(member);
        break;
      case "Manager":
        cardTemplate += generateManager(member);
        break;
      case "Intern":
        cardTemplate += generateIntern(member);
        break;
      default:
        break;
    }
  });

  // creating mainHTML variable to populate user input -- passing the let cardTemplate to populate all cards withuser input and returning it to populate
  const mainHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Generator</title>
      </head>

      <body>
        
        <header class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">My Team</h1>
          </div>
        </header>
        <section class = "sect-container">
          <!-- cards go here -->
          ${cardTemplate}
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  `;

  return mainHTML;
};

// calling add more function
addMore();

//buildTeam()
