function helpFn(){
    console.log(`
    List of all commands:
            node main.js tree "directory_Path"
            node main.js organize "directory_Path"
            node main.js help
    `);
}

module.exports = {
    helpKey : helpFn
}