let inpArr = process.argv.slice(2);

// for tree command we need to enter directory path -> node main.js tree "directory_Path"
// for organize command we have to do the same -> node main.js organize "directory_Path"
// for help command -> node main.js help

let command = inpArr[0]; //this captures which command entered by user (help, organize or tree)

switch(command){
    case "tree": treeFn(inpArr[1]);
        break;

    case "organize": organizeFn(inpArr[1]);
        break;

    case "help": helpFn();
        break;

    default:
        console.log("Wrong command entered. Please🙏 enter right command.");
}

function treeFn(dirPath){
    console.log("Tree command implemented for" , dirPath);
}

function organizeFn(dirPath){
    console.log("organize command implemented for" , dirPath);
}

function helpFn(){
    console.log("Help command working");
}