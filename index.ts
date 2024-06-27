#! /usr/bin/env node
import inquirer from "inquirer";

const a = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: "Enter your first number",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter your second number",
  },
  {
    type: "list",
    name: "operator",
    message: "Enter your operator",
    choices: ["+", "-", "*", "/"],
  },
]);
function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log(`sum of ${num1} and ${num2} = ${result}`);
}
function subtract(num1: number, num2: number) {
  const result = num1 - num2;
  console.log(`subtraction of ${num1} and ${num2} = ${result}`);
}
function multiply(num1: number, num2: number) {
  const result = num1 * num2;
  console.log(`multiplication of ${num1} and ${num2} = ${result}`);
}
function divide(num1: number, num2: number) {
  const result = num1 / num2;
  console.log(`division of ${num1} and ${num2} = ${result}`);
}

if (a.operator == "+") {
  sum(a.num1, a.num2);
} else if (a.operator == "-") {
  subtract(a.num1, a.num2);
} else if (a.operator == "*") {
  multiply(a.num1, a.num2);
} else if (a.operator == "/") {
  divide(a.num1, a.num2);
}
