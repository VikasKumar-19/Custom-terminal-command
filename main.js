#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const helpObj = require('./commands/help');
const treeObj = require('./commands/tree');
const organizeObj = require('./commands/organize');

let inpArr = process.argv.slice(2);

// for tree command we need to enter directory path -> node main.js tree "directory_Path"
// for organize command we have to do the same -> node main.js organize "directory_Path"
// for help command -> node main.js help

let command = inpArr[0]; //this captures which command entered by user (help, organize or tree)

switch(command){
    case "tree": treeObj.treeKey(inpArr[1]);
        break;

    case "organize": organizeObj.organizeKey(inpArr[1]);
        break;

    case "help": helpObj.helpKey();
        break;

    default:
        console.log("Wrong command entered. Please🙏 enter right command.");
}