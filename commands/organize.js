const fs = require('fs');
const path = require('path');
const {types} = require('../utility');

function organizeFn(dirPath){

    //1. Input directory path given
    let destPath;
    if(dirPath == undefined){
        dirPath = process.cwd();
    }
    
        
    let doesExist = fs.existsSync(dirPath);
    
    if(doesExist){
        //2. Create -> organized_Files -> directory path
        destPath = path.join(dirPath,"Organized_Files");
        if(!fs.existsSync(destPath)){
            fs.mkdirSync(destPath);
        }
    }
    else{
        console.log("Kindly enter the correct path.");
        return;
    }

    organizeHelper(dirPath, destPath);

}


function organizeHelper(src, dest){
    //3. Identify categories of all the files present in the given input directory

    let filesList = fs.readdirSync(src);
    // console.log(filesList);

    for(let i = 0; i < filesList.length; i++){
        let fileAddress = path.join(src, filesList[i]);

        let isFile = fs.lstatSync(fileAddress).isFile();

        if(isFile == true){
            let categoryDir = getCategory(filesList[i]);
            let catDirPath = path.join(dest, categoryDir);
            copyFiles(catDirPath, fileAddress);
            console.log(filesList[i] , " is copied to ", categoryDir);
        }
    }
}

function getCategory(fileName){
    let extension = path.extname(fileName)
    // console.log(extension);
    extension = extension.slice(1);
    for (key in types){
        for(let i = 0; i < types[key].length; i++){
            if(extension == types[key][i]){
                return key;
            }
        }
    }
    return "Others";
}

function copyFiles(catDirPath, fileAddress){
    //4. Copy/Cut files to that organized directory inside their respective category folder.

    if(fs.existsSync(catDirPath) == false){
        fs.mkdirSync(catDirPath);
    }

    let fileName = path.basename(fileAddress); // give the name of the file of which have to copy for give the same name to a copy file

    // first empty file will be created of same name in the destinationFile path then the content will be copied.
    let destFilePath = path.join(catDirPath, fileName); //It will give the destination of a copy file where it will be created.

    fs.copyFileSync(fileAddress, destFilePath);
    fs.unlinkSync(fileAddress); // For doing cut operation it will remove the original files after copy them.
}

module.exports = {
    organizeKey: organizeFn
}