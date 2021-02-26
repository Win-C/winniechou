"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const open = require("open");


const prompt = inquirer.createPromptModule();

// Questions after the card
const questions = [
  {
    type: "list",
    name: "action",
    message: "How do you want to connect?",
    choices: [
      {
        name: `Send Winnie an ${chalk.green.bold("email")}`,
        value: () => {
          open("mailto:winnie@winniechou.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Good Bye!\n");
        }
      }
    ]
  }
];

// Data for the card
// Can use hex and other font formatting ${chalk.hex("#2b82b2").bold("BYU-I")}`
const data = {
  name: chalk.bold.green("     Winnie Chou"),
  work: `${chalk.white("Softare Developer")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("chou_winnie"),
  github: chalk.gray("https://github.com/") + chalk.green("win-c"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("winniechou"),
  medium: chalk.gray("https://medium.com/") + chalk.whiteBright("@winnie.chou.mb"),
  web: chalk.gray("https://winniechou.com/") + chalk.cyan("about"),
  npx: chalk.red("npx") + chalk.white(" winniechou"),

  labelWork: chalk.white.bold("     Work:"),
  labelTwitter: chalk.white.bold("     Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("     LinkedIn:"),
  labelMedium: chalk.white.bold("     Medium:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("     Card:"),
}

// Build the card
const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork} ${data.work}`,
    `${data.labelTwitter} ${data.twitter}`,
    `${data.labelGitHub} ${data.github}`,
    `${data.labelLinkedIn} ${data.linkedin}`,
    `${data.labelMedium} ${data.medium}`,
    `${data.labelWeb} ${data.web}`,
    ``,
    `${data.labelCard} ${data.npx}`,
    ``,
    `${chalk.italic("I'm curious and passionate about code.")}`,
    `${chalk.italic("I like building products that help others and")}`,
    `${chalk.italic("applying what I learn to change the world.")}`,
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
)

// Print the card
console.log(me);

// Tip to help users use the links
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");

// Show the tip
console.log(tip);

// Ask the Inquirer questions.
prompt(questions).then(answer => answer.action());