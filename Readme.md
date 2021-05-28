# Steps for creating tree, organise and help commands
## Project Topic: Create your own custom terminal commands

1. first we have to know that user can only run these commands by entering it.
2. So we have to take input from user
3. we use process.argv to take inputs.
4. we can rename the commands later when we will make them global.
5. after implemented commands we can make the command global by using following method:
    - we have to use ***shebang*** syntax of node js: 
        - `#!/usr/bin/env node` 
    - we use this syntax on the top of the main.js file.
    then we do **"npm init"** to create package.json file.
    - we add a key named "bin" in package.json file to the same object then we pass object as a value to it.
    - in that object we can define our command name: 
        - `{"bin":{
            "<command_name>": "main.js"
        }`
    - we can give any command_name as per our likes.
    - At last we enter the **"npm link"** command in order to make the command global.
- You can make your own "package.json" file, you already know how to create one. As this project doesn't require any external packages to be installed so, So I won't be uploading my package.json file as it would be unnecessary.
- Congratulations!! You just have learned to make your own custom command!