const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Greets the user, then gets the manager's info
function welcome() {
  console.log(
    "Welcome to the Team Profile Builder. To get started, please enter your team manager's information:"
  );
  const employeeInfo = getEmployeeInfo();
  addManager(employeeInfo);
}

function selectWorkers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selectWorkersOrQuit",
        message: "Please select from one of the following options:",
        choices: ["Add new Engineer", "Add new Intern", "QUIT"],
      },
    ])
    .then((addWorker) => {
      switch (addWorker.choices) {
        case "Add new Engineer":
          addEngineer();
          selectWorkers();
          break;
        case "Add new Intern":
          addIntern();
          selectWorkers();
          break;
        case "QUIT":
          console.log("Your team profile is ready!");
      }
    });
}
function addManager(employeeInfo) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number:",
      },
    ])
    .then((mgrInfo) => {
      const manager = new Manager(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        mgrInfo.officeNumber
      );
      selectWorkers();
    });
}

function addEngineer() {
  console.log("Please enter the engineer's information: ");
  const employeeInfo = getEmployeeInfo;
  inquirer
    .prompt([
      {
        type: "input",
        name: "githubUsername",
        message: "Github Username:",
      },
    ])
    .then((engrInfo) => {
      const engineer = new Engineer(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        engrInfo.githubUsername
      );
      selectWorkers();
    });
}

function addIntern() {
  console.log("Please enter the intern's information: ");
  const employeeInfo = getEmployeeInfo;
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "School:",
      },
    ])
    .then((internInfo) => {
      const intern = new Intern(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        internInfo.school
      );
      selectWorkers();
    });
}

// Prompts user for the information common to all employee types and returns: (name, id, and email)
async function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
      },

      {
        type: "input",
        name: "id",
        message: "Employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Email Adress:",
      },
    ])
    .then((empInfo) => {
      return empInfo;
    });
}
welcome();
