const db = require("./index");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
        name: "menu",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
          ]
        }
    ]).then(async ({menu}) => {
      switch (menu) {
          case "View all departments":
             const bos = await viewDepartments()
             console.table(department)
            break;
        case "View all Roles":

          default:
              break;
      }
    }).catch(err => console.log(err))