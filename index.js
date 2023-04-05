const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Chose a shape you would like:",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter the color (OR a hexadecimal number) you want for shape:",
    },
];