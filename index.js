const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/pageTemplate");

const employeeArray = [];

const needNewEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addMember",
        message: "Would you like to add another employee?",
      },
    ])
    .then((response) => {
      if (response.addMember === true) {
        promptRole();
      } else {
        console.log("agja");
        const writeToFile = (employeeInfo) => {
          console.log("agja");
          fs.writeFileSync(
            "./dist/index.html",
            generatePage(employeeInfo),
            "utf-8"
          );
        };
        writeToFile(employeeArray);
        console.log("File created.");
      }
    });
};

const promptRole = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What employee would you like to add?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((response) => {
      if (response.role === "Engineer") {
        engineerInfo();
      } else if (response.role === "Intern") {
        internInfo();
      } else if (response.role === "Manager") {
        managerInfo();
      }
    });
};

const engineerInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );

      employeeArray.push(engineer);

      needNewEmployee();
    });
};

const internInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did your intern attend?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );

      employeeArray.push(intern);

      needNewEmployee();
    });
};

const managerInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );

      employeeArray.push(manager);

      needNewEmployee();
    });
};

needNewEmployee().catch((e) => {
  console.log(e);
});
