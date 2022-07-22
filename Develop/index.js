const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//const GenerateHtml = require("./util/generateHtml");
const generateHtml = require("./util/generateHtml");

const team = [];
// Greets the user, then gets the manager's info
function welcome() {
  console.log(
    "Welcome to the Team Profile Builder. To get started, please enter your team manager's information:"
  );
  welcomeHelper();
}

async function welcomeHelper() {
  const employeeInfo = await getEmployeeInfo();
  await addManager(employeeInfo);
  selectWorkers();
}

let quit = false;
// while (!quit) {
async function selectWorkers() {
  let addWorker = await inquirer.prompt([
    {
      type: "list",
      name: "selectWorkersOrQuit",
      message: "Please select from one of the following options:",
      choices: ["Add new Engineer", "Add new Intern", "QUIT"],
    },
  ]);
  //console.log(`${JSON.stringify(addWorker)}`);
  switch (addWorker.selectWorkersOrQuit) {
    case "Add new Engineer":
      await addEngineer();
      await selectWorkers();
      break;
    case "Add new Intern":
      await addIntern();
      await selectWorkers();
      break;
    case "QUIT":
      //quit = true;
      console.info(team);
        createHtmlFile();
      
  }
}
// }

async function addManager(employeeInfo) {
  let mgrInfo = await inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "Office Number:",
    },
  ]);

  const manager = new Manager(
    employeeInfo.name,
    employeeInfo.id,
    employeeInfo.email,
    mgrInfo.officeNumber
  );

  team.push(manager);
}

async function addEngineer() {
  console.log("Please enter the engineer's information: ");
  const employeeInfo = await getEmployeeInfo();
  let engrInfo = await inquirer.prompt([
    {
      type: "input",
      name: "githubUsername",
      message: "Github Username:",
    },
  ]);
  const engineer = new Engineer(
    employeeInfo.name,
    employeeInfo.id,
    employeeInfo.email,
    engrInfo.githubUsername
  );

  team.push(engineer);
}

async function addIntern() {
  console.log("Please enter the intern's information: ");
  const employeeInfo = await getEmployeeInfo();

  let internInfo = await inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "School:",
    },
  ]);
  const intern = new Intern(
    employeeInfo.name,
    employeeInfo.id,
    employeeInfo.email,
    internInfo.school
  );

  team.push(intern);
}

// Prompts user for the information common to all employee types and returns: (name, id, and email)
async function getEmployeeInfo() {
  return await inquirer.prompt([
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
  ]);
}

const createHtmlFile = () => {
    const html = generateHtml(team)
    fs.writeFile('index.html', html, err => {
        if (err) {
          console.error(err);
        }
        console.log("Your team profile is ready!");
      });
  }

welcome();
